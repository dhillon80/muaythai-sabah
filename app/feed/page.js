"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { supabase } from '../lib/supabase';

// --- 🔒 GOD MODE EMAILS ---
const ADMIN_EMAILS = [
  "revolutioncombatgym@gmail.com",
  "rcmuaythaiclub@gmail.com", 
  "planetbubbles@gmail.com"
];

// --- 😍 REACTION ICONS MAP ---
const REACTION_TYPES = [
  { id: 'like', label: 'Like', icon: '👍', color: 'text-blue-500' },
  { id: 'love', label: 'Love', icon: '❤️', color: 'text-red-500' },
  { id: 'haha', label: 'Haha', icon: '😆', color: 'text-yellow-400' },
  { id: 'wow',  label: 'Wow',  icon: '😮', color: 'text-yellow-400' },
  { id: 'sad',  label: 'Sad',  icon: '😢', color: 'text-yellow-400' },
  { id: 'angry',label: 'Angry',icon: '😡', color: 'text-orange-500' }
];

export default function FeedPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  
  // Post Creator State
  const [content, setContent] = useState('');
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef(null);

  // UI State
  const [lightboxSrc, setLightboxSrc] = useState(null);
  const [expandedComments, setExpandedComments] = useState({}); 
  const [activeMenuPostId, setActiveMenuPostId] = useState(null);
  
  // Editing State
  const [editingPostId, setEditingPostId] = useState(null);
  const [editPostContent, setEditPostContent] = useState("");

  useEffect(() => {
    fetchUserAndPosts();
    const handleGlobalClick = (e) => {
      if (!e.target.closest('.post-menu-btn')) setActiveMenuPostId(null);
    };
    window.addEventListener("click", handleGlobalClick);
    const handleEsc = (e) => e.key === "Escape" && setLightboxSrc(null);
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("click", handleGlobalClick);
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const fetchUserAndPosts = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    setUser(user);

    if (user) {
      const { data: profile } = await supabase.from('profiles').select('*').eq('id', user.id).single();
      setProfile(profile);
    }
    fetchPosts();
  };

  const fetchPosts = async () => {
    setLoading(true);
    // Fetch EVERYTHING: Post, Profile, Comments, Reactions
    const { data } = await supabase
      .from('feed_posts')
      .select(`
        *,
        profiles (full_name, gym_name, profile_image),
        feed_comments (
          id, content, created_at, parent_id, user_id,
          profiles (id, full_name, profile_image)
        ),
        feed_reactions (user_id, type)
      `)
      .order('created_at', { ascending: false });

    if (data) setPosts(data);
    setLoading(false);
  };

  // --- 📸 COMPRESSION ---
  const compressImage = async (file) => {
    if (file.type.startsWith('video')) return file;
    return new Promise((resolve) => {
      const img = document.createElement('img');
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        img.src = e.target.result;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const MAX_WIDTH = 1200;
          const scaleSize = MAX_WIDTH / img.width;
          if (scaleSize < 1) {
             canvas.width = MAX_WIDTH;
             canvas.height = img.height * scaleSize;
          } else {
             canvas.width = img.width;
             canvas.height = img.height;
          }
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          canvas.toBlob((blob) => {
            resolve(new File([blob], file.name, { type: 'image/jpeg', lastModified: Date.now() }));
          }, 'image/jpeg', 0.85);
        };
      };
    });
  };

  // --- POST ACTIONS ---
  const handleCreatePost = async (e) => {
    e.preventDefault();
    if (!content && selectedFiles.length === 0) return;
    setUploading(true);
    const uploadedUrls = [];

    try {
      for (const file of selectedFiles) {
        const processedFile = await compressImage(file);
        const fileExt = processedFile.name.split('.').pop();
        const fileName = `feed/${Date.now()}-${Math.floor(Math.random()*1000)}.${fileExt}`;
        const { error } = await supabase.storage.from('posts').upload(fileName, processedFile);
        if (error) throw error;
        const { data } = supabase.storage.from('posts').getPublicUrl(fileName);
        uploadedUrls.push(data.publicUrl);
      }

      const { error } = await supabase.from('feed_posts').insert({
        user_id: user.id,
        content: content,
        media_urls: uploadedUrls
      });
      if (error) throw error;

      setContent('');
      setSelectedFiles([]);
      fetchPosts(); 
    } catch (err) {
      alert("Error: " + err.message);
    } finally {
      setUploading(false);
    }
  };

  const handleDeletePost = async (postId) => {
    if (!confirm("Delete post?")) return;
    const { error } = await supabase.from('feed_posts').delete().eq('id', postId);
    if (!error) setPosts(prev => prev.filter(p => p.id !== postId));
  };

  const saveEditedPost = async () => {
    const { error } = await supabase.from('feed_posts').update({ content: editPostContent }).eq('id', editingPostId);
    if (!error) {
      setPosts(prev => prev.map(p => p.id === editingPostId ? { ...p, content: editPostContent } : p));
      setEditingPostId(null);
    }
  };

  // --- 😍 REACTION LOGIC ---
  const handleReaction = async (postId, type) => {
    if (!user) return alert("Please login to react!");

    const post = posts.find(p => p.id === postId);
    const existingReaction = post.feed_reactions.find(r => r.user_id === user.id);

    if (existingReaction) {
      if (existingReaction.type === type) {
        await supabase.from('feed_reactions').delete().match({ post_id: postId, user_id: user.id });
      } else {
        await supabase.from('feed_reactions').update({ type }).match({ post_id: postId, user_id: user.id });
      }
    } else {
      await supabase.from('feed_reactions').insert({ post_id: postId, user_id: user.id, type });
    }
    fetchPosts();
  };

  // --- COMMENT LOGIC ---
  const toggleComments = (postId) => {
    setExpandedComments(prev => ({ ...prev, [postId]: !prev[postId] }));
  };

  const handlePostComment = async (postId, text, parentId = null) => {
    if (!text.trim()) return;
    const { error } = await supabase.from('feed_comments').insert({
      post_id: postId,
      user_id: user.id,
      content: text,
      parent_id: parentId
    });
    if (!error) fetchPosts(); 
  };

  const refreshFeed = () => fetchPosts();

  // Helper
  const isVideo = (url) => url?.match(/\.(mp4|webm|ogg|mov|qt)$/i);
  const timeAgo = (d) => {
    if(!d) return "";
    const s = Math.floor((new Date()-new Date(d))/1000);
    if(s<60) return "Just now";
    const m = Math.floor(s/60); if(m<60) return `${m}m`;
    const h = Math.floor(m/60); if(h<24) return `${h}h`;
    return `${Math.floor(h/24)}d`;
  };

  return (
    <div className="min-h-screen bg-[#18191a] text-gray-100 font-sans pb-32">
      
      <div className="pt-28 pb-6 px-4 max-w-xl mx-auto text-center">
        <h1 className="text-3xl font-black uppercase tracking-tighter text-white">
          Sabah <span className="text-blue-500">Feed</span>
        </h1>
      </div>

      <div className="max-w-xl mx-auto px-4">
        
        {/* CREATE POST */}
        {user ? (
          <div className="bg-[#242526] rounded-xl p-4 mb-6 shadow-md border border-[#3a3b3c]">
            <div className="flex gap-3 mb-4">
               <img src={profile?.profile_image || `https://ui-avatars.com/api/?name=${user.email}`} className="w-10 h-10 rounded-full object-cover" />
               <div className="flex-grow bg-[#3a3b3c] rounded-full px-4 py-2 hover:bg-[#4e4f50] transition-colors cursor-text" onClick={() => document.getElementById('main-input').focus()}>
                 <input 
                   id="main-input"
                   value={content}
                   onChange={(e) => setContent(e.target.value)}
                   placeholder={`What's on your mind?`}
                   className="w-full bg-transparent border-none text-white outline-none placeholder-gray-400"
                 />
               </div>
            </div>
            {selectedFiles.length > 0 && (
              <div className="flex gap-2 overflow-x-auto pb-4 px-1">
                {selectedFiles.map((file, idx) => (
                  <div key={idx} className="relative w-20 h-20 shrink-0 rounded-lg overflow-hidden bg-black border border-[#3e4042]">
                     {file.type.startsWith('video') ? <video src={URL.createObjectURL(file)} className="w-full h-full object-cover"/> : <img src={URL.createObjectURL(file)} className="w-full h-full object-cover"/>}
                     <button onClick={() => setSelectedFiles(p => p.filter((_,i)=>i!==idx))} className="absolute top-0 right-0 bg-black/70 text-white w-5 h-5 flex items-center justify-center text-xs">×</button>
                  </div>
                ))}
              </div>
            )}
            <div className="border-t border-[#3e4042] pt-3 flex justify-between items-center">
               <button onClick={() => fileInputRef.current?.click()} className="flex items-center gap-2 text-green-500 font-bold text-sm hover:bg-[#3a3b3c] px-4 py-2 rounded-lg transition-colors"><span>📷</span> Photo/Video</button>
               <input type="file" ref={fileInputRef} onChange={e => e.target.files && setSelectedFiles(p => [...p, ...Array.from(e.target.files)])} multiple accept="image/*,video/*" className="hidden" />
               <button onClick={handleCreatePost} disabled={uploading || (!content && selectedFiles.length === 0)} className={`px-8 py-2 rounded-lg font-bold text-sm transition-all ${!content && !selectedFiles.length ? 'bg-[#3a3b3c] text-gray-500' : 'bg-blue-600 text-white hover:bg-blue-500'}`}>{uploading ? 'Posting...' : 'Post'}</button>
            </div>
          </div>
        ) : (
          <div className="bg-[#242526] p-6 rounded-xl text-center mb-6 border border-[#3a3b3c]"><Link href="/login" className="text-blue-500 font-bold hover:underline">Log in to post updates</Link></div>
        )}

        {/* POSTS */}
        <div className="space-y-6">
          {posts.map((post) => {
              const author = post.profiles || {};
              const authorName = author.full_name || "Unknown";
              const authorImg = author.profile_image || `https://ui-avatars.com/api/?name=${authorName}`;
              const isOwner = user && (user.id === post.user_id || ADMIN_EMAILS.includes(user.email));
              const comments = post.feed_comments || [];
              const reactions = post.feed_reactions || [];
              const myReaction = user ? reactions.find(r => r.user_id === user.id) : null;
              
              const rootComments = comments.filter(c => !c.parent_id).sort((a,b) => new Date(a.created_at) - new Date(b.created_at));
              let media = [];
              if (post.media_urls?.length) media = post.media_urls;
              else if (post.image_url) media = [post.image_url];

              return (
                <div key={post.id} className="bg-[#242526] rounded-xl shadow-sm border border-[#3a3b3c] overflow-visible relative">
                  
                  {/* Header */}
                  <div className="p-4 flex justify-between items-start">
                    <div className="flex gap-3">
                      <img src={authorImg} className="w-10 h-10 rounded-full object-cover border border-[#3a3b3c]" />
                      <div>
                        <h4 className="font-bold text-white text-[15px] leading-tight">{authorName}</h4>
                        <p className="text-xs text-gray-400 mt-0.5">{author.gym_name && `${author.gym_name} •`} {timeAgo(post.created_at)}</p>
                      </div>
                    </div>
                    {isOwner && (
                      <div className="relative">
                        <button onClick={() => setActiveMenuPostId(activeMenuPostId === post.id ? null : post.id)} className="post-menu-btn text-gray-500 hover:text-white px-2 text-xl font-bold">•••</button>
                        {activeMenuPostId === post.id && (
                          <div className="absolute right-0 top-8 bg-[#3a3b3c] rounded-lg shadow-xl overflow-hidden z-20 w-32 border border-gray-600">
                             <button onClick={() => { setEditingPostId(post.id); setEditPostContent(post.content); setActiveMenuPostId(null); }} className="w-full text-left px-4 py-3 hover:bg-[#4e4f50] text-sm text-white">✏️ Edit</button>
                             <button onClick={() => handleDeletePost(post.id)} className="w-full text-left px-4 py-3 hover:bg-[#4e4f50] text-sm text-red-400">🗑️ Delete</button>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="px-4 pb-3">
                    {editingPostId === post.id ? (
                      <div className="bg-[#3a3b3c] p-2 rounded-lg">
                        <textarea value={editPostContent} onChange={e => setEditPostContent(e.target.value)} className="w-full bg-transparent text-white outline-none text-[15px] resize-none h-20" />
                        <div className="flex justify-end gap-2 mt-2">
                          <button onClick={() => setEditingPostId(null)} className="text-xs text-gray-400 hover:text-white">Cancel</button>
                          <button onClick={saveEditedPost} className="text-xs bg-blue-600 text-white px-3 py-1 rounded">Save</button>
                        </div>
                      </div>
                    ) : (
                      <div className="text-[15px] text-white whitespace-pre-wrap leading-normal">{post.content}</div>
                    )}
                  </div>

                  {/* Media */}
                  {media.length > 0 && (
                    <div className={`grid gap-[1px] bg-[#3e4042] ${media.length===1 ? 'grid-cols-1' : 'grid-cols-2'}`}>
                      {media.map((url, i) => (
                        <div key={i} className={`relative bg-black cursor-pointer ${media.length===1 ? 'aspect-auto max-h-[500px]' : 'aspect-square'} ${media.length===3 && i===0 ? 'col-span-2' : ''}`} onClick={() => setLightboxSrc(url)}>
                          {isVideo(url) ? <video src={url} className="w-full h-full object-cover" /> : <img src={url} className="w-full h-full object-cover" />}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Reaction Count Display */}
                  {reactions.length > 0 && (
                    <div className="px-4 py-2 flex items-center gap-1 text-[13px] text-gray-400">
                      <span>{REACTION_TYPES.find(t => t.id === reactions[0].type)?.icon}</span>
                      {reactions.length > 1 && <span>{REACTION_TYPES.find(t => t.id === reactions[1].type)?.icon}</span>}
                      <span className="ml-1 hover:underline cursor-pointer">{reactions.length}</span>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="px-4 py-1 relative z-10">
                     <div className="flex justify-between items-center border-t border-[#3e4042] pt-1 mt-1">
                        
                        {/* 😍 REACTION BUTTON (FIXED) */}
                        <div className="flex-1 group relative">
                          
                          {/* The Popup Menu - FIXED WITH INVISIBLE BRIDGE */}
                          <div className="absolute bottom-full left-0 pb-3 hidden group-hover:flex w-full items-end justify-center z-50">
                             <div className="bg-[#3a3b3c] rounded-full p-1 shadow-2xl border border-gray-600 flex gap-1 animate-in fade-in zoom-in duration-200">
                               {REACTION_TYPES.map((type) => (
                                 <button 
                                   key={type.id} 
                                   onClick={() => handleReaction(post.id, type.id)}
                                   className="w-9 h-9 hover:scale-125 transition-transform text-xl flex items-center justify-center"
                                   title={type.label}
                                 >
                                   {type.icon}
                                 </button>
                               ))}
                             </div>
                          </div>

                          {/* The Main Button */}
                          <button 
                            onClick={() => handleReaction(post.id, 'like')}
                            className={`w-full py-2 hover:bg-[#3a3b3c] rounded-lg flex items-center justify-center gap-2 font-semibold text-sm transition-colors ${myReaction ? REACTION_TYPES.find(t=>t.id===myReaction.type)?.color : 'text-gray-400'}`}
                          >
                            <span>{myReaction ? REACTION_TYPES.find(t=>t.id===myReaction.type)?.icon : '👍'}</span>
                            <span>{myReaction ? REACTION_TYPES.find(t=>t.id===myReaction.type)?.label : 'Like'}</span>
                          </button>
                        </div>

                        <button onClick={() => toggleComments(post.id)} className="flex-1 py-2 hover:bg-[#3a3b3c] rounded-lg flex items-center justify-center gap-2 text-gray-400 font-semibold text-sm"><span>💬</span> Comment</button>
                     </div>
                  </div>

                  {/* COMMENTS AREA */}
                  {expandedComments[post.id] && (
                    <div className="border-t border-[#3e4042] bg-[#242526] p-4">
                      <div className="space-y-4 mb-4">
                        {rootComments.map(comment => (
                          <CommentItem key={comment.id} comment={comment} allComments={comments} user={user} onReply={(text, parentId) => handlePostComment(post.id, text, parentId)} refreshFeed={refreshFeed} adminEmails={ADMIN_EMAILS} />
                        ))}
                      </div>
                      {user && (
                        <div className="flex gap-2">
                          <img src={profile?.profile_image || `https://ui-avatars.com/api/?name=${user.email}`} className="w-8 h-8 rounded-full object-cover" />
                          <CommentInput onSubmit={(text) => handlePostComment(post.id, text)} />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
          })}
        </div>
      </div>

      {/* LIGHTBOX */}
      {lightboxSrc && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4" onClick={() => setLightboxSrc(null)}>
          <button className="absolute top-4 right-4 text-white text-4xl font-light">×</button>
          {isVideo(lightboxSrc) ? <video src={lightboxSrc} controls autoPlay className="max-h-[90vh] max-w-full rounded-lg" /> : <img src={lightboxSrc} className="max-h-[90vh] max-w-full rounded-lg object-contain" />}
        </div>
      )}
    </div>
  );
}

// --- SUB-COMPONENTS ---

function CommentItem({ comment, allComments, user, onReply, refreshFeed, adminEmails }) {
  const [showReply, setShowReply] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(comment.content);

  const replies = allComments.filter(c => c.parent_id === comment.id).sort((a,b) => new Date(a.created_at) - new Date(b.created_at));
  const author = comment.profiles || {};
  const isOwner = user && (user.id === comment.user_id || adminEmails.includes(user.email));

  const handleDelete = async () => {
    if(!confirm("Delete comment?")) return;
    const { error } = await supabase.from('feed_comments').delete().eq('id', comment.id);
    if (!error) refreshFeed();
  };

  const handleUpdate = async () => {
    const { error } = await supabase.from('feed_comments').update({ content: editText }).eq('id', comment.id);
    if (!error) {
      setIsEditing(false);
      refreshFeed();
    }
  };

  return (
    <div>
      <div className="flex gap-2 group">
        <img src={author.profile_image || `https://ui-avatars.com/api/?name=${author.full_name}`} className="w-8 h-8 rounded-full object-cover mt-1" />
        <div className="flex-grow">
          <div className="bg-[#3a3b3c] px-3 py-2 rounded-2xl inline-block min-w-[150px]">
            <h5 className="text-white text-xs font-bold">{author.full_name || 'User'}</h5>
            {isEditing ? (
              <div className="mt-1">
                <input value={editText} onChange={e => setEditText(e.target.value)} className="w-full bg-black/20 text-white text-[13px] px-1 rounded outline-none" autoFocus />
                <div className="text-[10px] mt-1 space-x-2">
                  <span onClick={handleUpdate} className="text-blue-400 cursor-pointer font-bold">Save</span>
                  <span onClick={() => setIsEditing(false)} className="text-gray-400 cursor-pointer">Cancel</span>
                </div>
              </div>
            ) : <p className="text-gray-200 text-[13px]">{comment.content}</p>}
          </div>
          <div className="flex gap-3 mt-1 ml-1 items-center">
             <span className="text-[10px] text-gray-500 font-bold cursor-pointer hover:underline" onClick={() => setShowReply(!showReply)}>Reply</span>
             <span className="text-[10px] text-gray-500">{new Date(comment.created_at).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
             {isOwner && !isEditing && (
               <div className="flex gap-2 ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                 <span onClick={() => setIsEditing(true)} className="text-[10px] text-gray-400 cursor-pointer hover:text-white">Edit</span>
                 <span onClick={handleDelete} className="text-[10px] text-gray-400 cursor-pointer hover:text-red-400">Delete</span>
               </div>
             )}
          </div>
        </div>
      </div>
      {replies.length > 0 && <div className="ml-10 mt-2 space-y-2 border-l-2 border-[#3e4042] pl-2">{replies.map(reply => <CommentItem key={reply.id} comment={reply} allComments={allComments} user={user} onReply={onReply} refreshFeed={refreshFeed} adminEmails={adminEmails} />)}</div>}
      {showReply && user && <div className="ml-10 mt-2 flex gap-2"><div className="w-6 h-6 rounded-full bg-slate-700 shrink-0 overflow-hidden"><img src={`https://ui-avatars.com/api/?name=Me`} className="w-full h-full" /></div><CommentInput onSubmit={(text) => { onReply(text, comment.id); setShowReply(false); }} isReply /></div>}
    </div>
  );
}

function CommentInput({ onSubmit, isReply = false }) {
  const [text, setText] = useState("");
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSubmit(text);
      setText("");
    }
  };
  return <div className="flex-grow bg-[#3a3b3c] rounded-2xl px-3 py-1"><textarea value={text} onChange={e => setText(e.target.value)} onKeyDown={handleKeyDown} placeholder={isReply ? "Write a reply..." : "Write a comment..."} className="w-full bg-transparent border-none text-white text-[13px] outline-none h-8 resize-none pt-1.5" /></div>;
}