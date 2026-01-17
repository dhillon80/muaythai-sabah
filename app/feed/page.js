"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { supabase } from '../lib/supabase';

// --- 🔒 ADMINS ---
const ADMIN_EMAILS = [
  "revolutioncombatgym@gmail.com",
  "rcmuaythaiclub@gmail.com", 
  "planetbubbles@gmail.com",
  "dhillon80@gmail.com"
];

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
  
  // Lead Generation State
  const [email, setEmail] = useState('');
  const [regStatus, setRegStatus] = useState(null);

  // Post Creator State
  const [content, setContent] = useState('');
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef(null);

  // --- 🛠️ EDIT & MENU STATES ---
  const [activeMenuPostId, setActiveMenuPostId] = useState(null); 
  const [editingPostId, setEditingPostId] = useState(null);
  const [editContent, setEditContent] = useState("");

  // Comment Edit States
  const [activeMenuCommentId, setActiveMenuCommentId] = useState(null); 
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editCommentContent, setEditCommentContent] = useState("");

  // UI State
  const [lightboxSrc, setLightboxSrc] = useState(null);
  const [expandedComments, setExpandedComments] = useState({}); 
  const [commentText, setCommentText] = useState({}); 
  const [activeSharePost, setActiveSharePost] = useState(null);

  // ✅ THE FIX: AUTH LISTENER ADDED HERE
  useEffect(() => {
    // 1. Initial Load
    fetchPosts();
    
    // 2. Check Session & Listen for Changes
    const checkSession = async () => {
        const { data: { session } } = await supabase.auth.getSession();
        if (session?.user) {
            setUser(session.user);
            fetchProfile(session.user.id);
        }
    };
    checkSession();

    // 3. Real-time Listener (Fixes the "Guest" bug)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
        setUser(session?.user ?? null);
        if (session?.user) {
            fetchProfile(session.user.id);
        } else {
            setProfile(null);
        }
    });

    // 4. Click Outside Listener
    const handleClickOutside = () => {
        setActiveMenuPostId(null);
        setActiveMenuCommentId(null);
    };
    window.addEventListener('click', handleClickOutside);

    return () => {
        subscription.unsubscribe();
        window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const fetchProfile = async (userId) => {
    const { data } = await supabase.from('profiles').select('*').eq('id', userId).single();
    if (data) setProfile(data);
  };

  const fetchPosts = async () => {
    setLoading(true);
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

  // --- 🗑️ POST ACTIONS ---

  const handleDeletePost = async (postId) => {
    if (!window.confirm("Delete this post permanently?")) return;
    const { error } = await supabase.from('feed_posts').delete().eq('id', postId);
    if (error) alert("Error deleting: " + error.message);
    else fetchPosts();
  };

  const startEditingPost = (post, e) => {
    e.stopPropagation(); 
    setEditingPostId(post.id);
    setEditContent(post.content);
    setActiveMenuPostId(null);
  };

  const handleSavePostEdit = async (postId) => {
    const { error } = await supabase.from('feed_posts').update({ content: editContent }).eq('id', postId);
    if (error) {
        alert("Error updating: " + error.message);
    } else {
        setEditingPostId(null);
        fetchPosts();
    }
  };

  // --- 💬 COMMENT ACTIONS ---

  const handlePostComment = async (postId) => {
    const text = commentText[postId];
    if (!text || !user) return;

    const { error } = await supabase.from('feed_comments').insert({
        post_id: postId,
        user_id: user.id,
        content: text
    });

    if (!error) {
        setCommentText(prev => ({ ...prev, [postId]: '' })); 
        fetchPosts(); 
    }
  };

  const startEditingComment = (comment, e) => {
    e.stopPropagation();
    setEditingCommentId(comment.id);
    setEditCommentContent(comment.content);
    setActiveMenuCommentId(null);
  };

  const handleSaveCommentEdit = async (commentId) => {
    const { error } = await supabase.from('feed_comments').update({ content: editCommentContent }).eq('id', commentId);
    if (!error) {
        setEditingCommentId(null);
        fetchPosts();
    }
  };

  const handleDeleteComment = async (commentId) => {
    if (!confirm("Delete this comment?")) return;
    const { error } = await supabase.from('feed_comments').delete().eq('id', commentId);
    if (!error) fetchPosts();
  };

  // --- 🚀 SHARE LOGIC ---
  const handlePlatformShare = (platform, post) => {
    const shareUrl = `https://www.muaythaisbh.my/feed`;
    const shareText = encodeURIComponent(`Check out this post on Muaythai Sabah by ${post.profiles?.full_name || 'a warrior'}: "${post.content.substring(0, 60)}..."`);
    
    const links = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
      messenger: `fb-messenger://share/?link=${shareUrl}`,
      whatsapp: `https://api.whatsapp.com/send?text=${shareText}%20${shareUrl}`,
      gmail: `mailto:?subject=Muaythai Sabah Feed&body=${shareText}%20${shareUrl}`,
    };

    if (platform === 'native' || platform === 'instagram' || platform === 'tiktok') {
      if (navigator.share) {
        navigator.share({ title: 'Muaythai Sabah', text: post.content, url: shareUrl });
      } else {
        navigator.clipboard.writeText(shareUrl);
        alert("Link copied! Paste it in " + platform);
      }
    } else if (links[platform]) {
      window.open(links[platform], '_blank');
    }
    setActiveSharePost(null);
  };

  const handleMarketingRegister = async (e) => {
    e.preventDefault();
    setRegStatus('loading');
    const { error } = await supabase
      .from('marketing_leads')
      .insert([{ email: email.toLowerCase(), source: 'community_feed' }], { count: 'minimal' });

    if (error) {
      setRegStatus(error.code === '23505' ? 'already_exists' : 'error');
    } else {
      setRegStatus('success');
      setEmail('');
    }
  };

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
          canvas.width = scaleSize < 1 ? MAX_WIDTH : img.width;
          canvas.height = scaleSize < 1 ? img.height * scaleSize : img.height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          canvas.toBlob((blob) => {
            resolve(new File([blob], file.name, { type: 'image/jpeg' }));
          }, 'image/jpeg', 0.85);
        };
      };
    });
  };

  const handleCreatePost = async (e) => {
    e.preventDefault();
    if (!content && selectedFiles.length === 0) return;
    setUploading(true);
    const uploadedUrls = [];

    try {
      for (const file of selectedFiles) {
        const processedFile = await compressImage(file);
        const fileName = `feed/${Date.now()}-${file.name}`;
        const { error } = await supabase.storage.from('posts').upload(fileName, processedFile);
        if (error) throw error;
        const { data } = supabase.storage.from('posts').getPublicUrl(fileName);
        uploadedUrls.push(data.publicUrl);
      }

      await supabase.from('feed_posts').insert({
        user_id: user.id,
        content: content,
        media_urls: uploadedUrls
      });

      setContent('');
      setSelectedFiles([]);
      fetchPosts(); 
    } catch (err) {
      alert("Error: " + err.message);
    } finally {
      setUploading(false);
    }
  };

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

  const isVideo = (url) => url?.match(/\.(mp4|webm|ogg|mov|qt)$/i);
  const timeAgo = (d) => {
    if(!d) return "";
    const s = Math.floor((new Date()-new Date(d))/1000);
    if(s<60) return "Just now";
    const m = Math.floor(s/60); if(m<60) return `${m}m`;
    const h = Math.floor(m/60); if(h<24) return `${h}h`;
    return `${Math.floor(h/24)}d`;
  };

  const isAdmin = user && ADMIN_EMAILS.includes(user.email);

  return (
    <div className="min-h-screen bg-[#18191a] text-gray-100 font-sans pb-32">
      
      {isAdmin && (
        <div className="fixed top-20 right-4 z-[60] animate-bounce">
          <Link href="/admin/marketing" className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-tighter italic flex items-center gap-2 shadow-2xl border border-white/20">
            <span>📊</span> View VIP Leads
          </Link>
        </div>
      )}

      {/* HEADER */}
      <div className="pt-28 pb-6 px-4 max-w-xl mx-auto text-center">
        <h1 className="text-3xl font-black uppercase tracking-tighter text-white italic">
          Sabah <span className="text-blue-500">Community Feed</span>
        </h1>
        <p className="text-[10px] text-gray-500 uppercase tracking-[0.3em] mt-2 font-bold font-sans">The Official SMA Digital Hub</p>
      </div>

      <div className="max-w-xl mx-auto px-4">
        
        {/* LEAD MAGNET */}
        <section className="bg-gradient-to-br from-blue-900/40 to-black border border-blue-500/30 rounded-2xl p-6 mb-8 shadow-2xl text-center">
            <h3 className="text-xl font-black text-white uppercase italic tracking-tighter mb-1 font-sans">Join the VIP Roster</h3>
            <p className="text-[11px] text-gray-400 uppercase tracking-widest mb-4 leading-relaxed font-bold font-sans">
              Get early access to Tournament updates, New Muaythai merchandise & Gym promos
            </p>
            
            <form onSubmit={handleMarketingRegister} className="flex flex-col sm:flex-row gap-2">
                <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email" 
                    className="flex-grow bg-black/50 border border-white/10 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-blue-500 transition-colors text-white placeholder:text-gray-600"
                    required
                />
                <button 
                    disabled={regStatus === 'loading'}
                    className="bg-blue-600 hover:bg-blue-500 text-white font-black px-6 py-2.5 rounded-xl text-sm uppercase italic tracking-tighter transition-all shadow-lg active:scale-95"
                >
                    {regStatus === 'loading' ? 'Processing...' : 'Join Now'}
                </button>
            </form>
            {regStatus === 'success' && <p className="text-green-500 text-[10px] mt-3 font-bold uppercase tracking-widest font-sans">Success! Welcome to the SMA Community.</p>}
            {regStatus === 'already_exists' && <p className="text-yellow-500 text-[10px] mt-3 font-bold uppercase tracking-widest font-sans">You are already on the VIP list!</p>}
        </section>

        {/* CREATE POST */}
        {user ? (
          <div className="bg-[#242526] rounded-xl p-4 mb-6 shadow-md border border-[#3a3b3c]">
            <div className="flex gap-3 mb-4">
                <img src={profile?.profile_image || `https://ui-avatars.com/api/?name=${user.email}`} className="w-10 h-10 rounded-full object-cover border border-white/5" />
                <div className="flex-grow bg-[#3a3b3c] rounded-full px-4 py-2 hover:bg-[#4e4f50] transition-colors cursor-text" onClick={() => document.getElementById('main-input').focus()}>
                  <input 
                    id="main-input"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder={`Update the community...`}
                    className="w-full bg-transparent border-none text-white outline-none placeholder-gray-400 font-medium"
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
            <div className="border-t border-[#3e4042] pt-3 flex justify-between items-center px-1">
                <button onClick={() => fileInputRef.current?.click()} className="flex items-center gap-2 text-green-500 font-bold text-sm hover:bg-[#3a3b3c] px-4 py-2 rounded-lg transition-colors"><span>📷</span> Media</button>
                <input type="file" ref={fileInputRef} onChange={e => e.target.files && setSelectedFiles(p => [...p, ...Array.from(e.target.files)])} multiple accept="image/*,video/*" className="hidden" />
                <button onClick={handleCreatePost} disabled={uploading || (!content && selectedFiles.length === 0)} className={`px-8 py-2 rounded-lg font-black uppercase italic text-sm transition-all ${!content && !selectedFiles.length ? 'bg-[#3a3b3c] text-gray-500' : 'bg-blue-600 text-white hover:bg-blue-500 shadow-lg'}`}>{uploading ? 'Posting...' : 'Post'}</button>
            </div>
          </div>
        ) : (
          <div className="bg-[#242526] p-8 rounded-xl text-center mb-6 border border-[#3a3b3c] shadow-xl">
              <p className="text-gray-400 text-[10px] uppercase tracking-[0.3em] mb-4 font-bold font-sans">Official SMA Member Access Required</p>
              <Link href="/login" className="inline-block bg-white text-black px-12 py-3 rounded-xl font-black uppercase italic text-sm hover:bg-blue-600 hover:text-white transition-all shadow-lg active:scale-95">
                Sign In to Post
              </Link>
          </div>
        )}

        {/* FEED CONTENT */}
        {loading ? (
            <div className="text-center py-20">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        ) : (
            <div className="space-y-6">
            {posts.map((post) => {
                const author = post.profiles || {};
                const authorName = author.full_name || "Unknown Warrior";
                const reactions = post.feed_reactions || [];
                const comments = post.feed_comments || [];
                const myReaction = user ? reactions.find(r => r.user_id === user.id) : null;
                const media = post.media_urls || [];
                
                // 🔑 CHECK PERMISSIONS
                const isMyPost = user && user.id === post.user_id;
                const canEdit = isMyPost;
                const canDelete = isAdmin || isMyPost;
                const isEditing = editingPostId === post.id;
                const isMenuOpen = activeMenuPostId === post.id;

                return (
                  <div key={post.id} className="bg-[#242526] rounded-xl shadow-sm border border-[#3a3b3c] overflow-hidden transition-all hover:border-[#4e4f50]">
                    <div className="p-4 flex justify-between items-start relative">
                      <div className="flex gap-3">
                        <img src={author.profile_image || `https://ui-avatars.com/api/?name=${authorName}`} className="w-10 h-10 rounded-full object-cover border border-white/10" />
                        <div>
                          <h4 className="font-bold text-white text-[15px] leading-tight">{authorName}</h4>
                          <p className="text-[11px] text-gray-500 mt-1 font-bold uppercase tracking-wider">{author.gym_name && `${author.gym_name} •`} {timeAgo(post.created_at)}</p>
                        </div>
                      </div>

                      {/* 🛠️ 3-DOTS MENU (POST) */}
                      {(canDelete || canEdit) && (
                        <div className="relative">
                            <button 
                                onClick={(e) => { e.stopPropagation(); setActiveMenuPostId(isMenuOpen ? null : post.id); }} 
                                className="text-gray-400 hover:bg-[#3a3b3c] p-2 rounded-full transition-colors"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" /></svg>
                            </button>

                            {isMenuOpen && (
                                <div className="absolute right-0 top-full mt-2 w-32 bg-[#242526] border border-[#3a3b3c] rounded-xl shadow-2xl z-20 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                                    {canEdit && (
                                        <button onClick={(e) => startEditingPost(post, e)} className="w-full text-left px-4 py-3 text-xs font-bold uppercase tracking-wider hover:bg-[#3a3b3c] text-white">
                                            Edit Post
                                        </button>
                                    )}
                                    {canDelete && (
                                        <button onClick={() => handleDeletePost(post.id)} className="w-full text-left px-4 py-3 text-xs font-bold uppercase tracking-wider hover:bg-red-500/20 text-red-500">
                                            Delete
                                        </button>
                                    )}
                                </div>
                            )}
                        </div>
                      )}
                    </div>
  
                    {/* POST CONTENT (With Edit Mode) */}
                    <div className="px-4 pb-4 text-[15px] text-gray-100 whitespace-pre-wrap leading-relaxed">
                        {isEditing ? (
                            <div className="space-y-3">
                                <textarea 
                                    value={editContent} 
                                    onChange={(e) => setEditContent(e.target.value)}
                                    className="w-full bg-black/30 text-white p-3 rounded-lg border border-white/10 outline-none focus:border-blue-500"
                                    rows={3}
                                />
                                <div className="flex gap-2 justify-end">
                                    <button onClick={() => setEditingPostId(null)} className="text-xs font-bold uppercase text-gray-400 hover:text-white px-3 py-1">Cancel</button>
                                    <button onClick={() => handleSavePostEdit(post.id)} className="bg-blue-600 text-white text-xs font-black uppercase px-4 py-1.5 rounded-lg">Save</button>
                                </div>
                            </div>
                        ) : (
                            post.content
                        )}
                    </div>
  
                    {media.length > 0 && (
                      <div className={`grid gap-[2px] bg-[#3a3b3c] ${media.length===1 ? 'grid-cols-1' : 'grid-cols-2'}`}>
                        {media.map((url, i) => (
                          <div key={i} className={`relative bg-black cursor-pointer overflow-hidden group ${media.length===1 ? 'aspect-auto' : 'aspect-square'}`} onClick={() => setLightboxSrc(url)}>
                            {isVideo(url) ? (
                                <video src={url} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                            ) : (
                                <img src={url} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                            )}
                          </div>
                        ))}
                      </div>
                    )}
  
                    {reactions.length > 0 && (
                      <div className="px-4 py-2 text-[12px] text-gray-400 border-b border-[#3e4042] flex items-center gap-2 font-bold">
                        <div className="flex -space-x-1">
                            {Array.from(new Set(reactions.map(r => r.type))).slice(0, 3).map(type => (
                                <span key={type} className="w-5 h-5 bg-[#3a3b3c] rounded-full flex items-center justify-center border border-[#242526] text-[10px]">
                                    {REACTION_TYPES.find(t => t.id === type)?.icon}
                                </span>
                            ))}
                        </div>
                        <span className="hover:underline cursor-pointer">{reactions.length} reactions</span>
                        {comments.length > 0 && <span className="ml-auto hover:underline cursor-pointer" onClick={() => setExpandedComments(p => ({...p, [post.id]: !p[post.id]}))}>{comments.length} comments</span>}
                      </div>
                    )}
  
                    {/* ACTION BUTTONS (LIKE, COMMENT, SHARE) */}
                    <div className="flex px-2 py-1 border-t border-[#3e4042] relative">
                          <div className="flex-1 group relative">
                            <div className="absolute bottom-full left-0 pb-3 hidden group-hover:flex w-full items-end justify-center z-50">
                                <div className="bg-[#3a3b3c] rounded-full p-1.5 shadow-2xl border border-[#4e4f50] flex gap-1.5 animate-in fade-in slide-in-from-bottom-2 duration-200">
                                  {REACTION_TYPES.map((type) => (
                                    <button 
                                            key={type.id} 
                                            onClick={() => handleReaction(post.id, type.id)} 
                                            className="w-9 h-9 hover:scale-125 transition-transform text-xl flex items-center justify-center bg-[#242526] rounded-full border border-white/5"
                                            title={type.label}
                                    >
                                            {type.icon}
                                    </button>
                                  ))}
                                </div>
                            </div>

                            <button onClick={() => handleReaction(post.id, 'like')} className={`w-full py-2.5 hover:bg-[#3a3b3c] rounded-lg flex items-center justify-center gap-2 font-bold text-sm transition-colors ${myReaction ? REACTION_TYPES.find(t=>t.id===myReaction.type)?.color : 'text-gray-400'}`}>
                                <span className="text-lg">{myReaction ? REACTION_TYPES.find(t=>t.id===myReaction.type)?.icon : '👍'}</span>
                                <span className="uppercase tracking-tighter italic">{myReaction ? REACTION_TYPES.find(t=>t.id===myReaction.type)?.label : 'Like'}</span>
                            </button>
                          </div>

                          <button onClick={() => setExpandedComments(p => ({...p, [post.id]: !p[post.id]}))} className="flex-1 py-2.5 hover:bg-[#3a3b3c] rounded-lg flex items-center justify-center gap-2 text-gray-400 font-bold text-sm uppercase tracking-tighter italic">
                            <span>💬</span> Comment
                          </button>

                          <button onClick={() => setActiveSharePost(post)} className="flex-1 py-2.5 hover:bg-[#3a3b3c] rounded-lg flex items-center justify-center gap-2 text-gray-400 font-bold text-sm uppercase tracking-tighter italic group transition-all">
                             <svg className="w-5 h-5 group-hover:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 15l6-6m0 0l-6-6m6 6H9a6 6 0 000 12h3" />
                             </svg>
                             <span>Share</span>
                          </button>
                    </div>

                    {/* 💬 COMMENT SECTION (Real Data) */}
                    {expandedComments[post.id] && (
                        <div className="bg-[#1c1d1e] border-t border-[#3a3b3c] p-4 animate-in fade-in duration-200">
                            {/* Comment List */}
                            <div className="space-y-4 mb-4 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                                {comments.length === 0 ? (
                                    <p className="text-gray-500 text-xs italic text-center py-2">No comments yet. Be the first!</p>
                                ) : (
                                    comments.sort((a,b) => new Date(a.created_at) - new Date(b.created_at)).map(comment => {
                                        const cAuthor = comment.profiles || {};
                                        const canModify = isAdmin || (user && user.id === comment.user_id);
                                        const isCommentMenuOpen = activeMenuCommentId === comment.id;
                                        const isEditingComment = editingCommentId === comment.id;
                                        
                                        return (
                                            <div key={comment.id} className="flex gap-3 group">
                                                <img src={cAuthor.profile_image || `https://ui-avatars.com/api/?name=${cAuthor.full_name}`} className="w-8 h-8 rounded-full object-cover mt-1" />
                                                <div className="flex-1 relative">
                                                    {isEditingComment ? (
                                                        // ✏️ EDIT COMMENT MODE
                                                        <div className="bg-[#3a3b3c] rounded-2xl p-2">
                                                            <input 
                                                                value={editCommentContent}
                                                                onChange={(e) => setEditCommentContent(e.target.value)}
                                                                className="w-full bg-transparent text-white text-sm outline-none mb-2"
                                                                autoFocus
                                                            />
                                                            <div className="flex justify-end gap-2">
                                                                <button onClick={() => setEditingCommentId(null)} className="text-[10px] text-gray-400 uppercase font-bold hover:text-white">Cancel</button>
                                                                <button onClick={() => handleSaveCommentEdit(comment.id)} className="text-[10px] text-blue-400 uppercase font-bold hover:text-blue-300">Save</button>
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        // 👀 VIEW COMMENT MODE
                                                        <div className="flex items-start gap-2">
                                                            <div className="bg-[#3a3b3c] rounded-2xl px-3 py-2 inline-block max-w-[85%]">
                                                                <p className="text-white text-xs font-bold">{cAuthor.full_name}</p>
                                                                <p className="text-gray-200 text-sm">{comment.content}</p>
                                                            </div>
                                                            
                                                            {/* 🛠️ 3-DOTS MENU (COMMENT) */}
                                                            {canModify && (
                                                                <div className="relative mt-2">
                                                                    <button 
                                                                        onClick={(e) => { e.stopPropagation(); setActiveMenuCommentId(isCommentMenuOpen ? null : comment.id); }}
                                                                        className="text-gray-500 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity"
                                                                    >
                                                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" /></svg>
                                                                    </button>
                                                                    {isCommentMenuOpen && (
                                                                        <div className="absolute left-0 top-full mt-1 w-24 bg-[#242526] border border-[#3a3b3c] rounded-lg shadow-xl z-30 overflow-hidden">
                                                                            <button onClick={(e) => startEditingComment(comment, e)} className="w-full text-left px-3 py-2 text-[10px] font-bold uppercase tracking-wider hover:bg-[#3a3b3c] text-white">Edit</button>
                                                                            <button onClick={() => handleDeleteComment(comment.id)} className="w-full text-left px-3 py-2 text-[10px] font-bold uppercase tracking-wider hover:bg-red-500/20 text-red-500">Delete</button>
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            )}
                                                        </div>
                                                    )}
                                                    
                                                    {!isEditingComment && (
                                                        <div className="flex items-center gap-3 mt-1 ml-2">
                                                            <span className="text-[10px] text-gray-500">{timeAgo(comment.created_at)}</span>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        )
                                    })
                                )}
                            </div>

                            {/* Comment Input */}
                            <div className="flex gap-2">
                                <img src={profile?.profile_image || `https://ui-avatars.com/api/?name=${user?.email}`} className="w-8 h-8 rounded-full object-cover" />
                                <div className="flex-1 relative">
                                    <input 
                                        value={commentText[post.id] || ''}
                                        onChange={(e) => setCommentText(prev => ({...prev, [post.id]: e.target.value}))}
                                        onKeyDown={(e) => e.key === 'Enter' && handlePostComment(post.id)}
                                        placeholder="Write a comment..."
                                        className="w-full bg-[#3a3b3c] rounded-full px-4 py-2 text-sm text-white outline-none focus:bg-[#4e4f50] transition-colors"
                                    />
                                    <button onClick={() => handlePostComment(post.id)} className="absolute right-2 top-1.5 text-blue-500 hover:text-blue-400 p-1">
                                        <svg className="w-4 h-4 transform rotate-90" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                  </div>
                );
            })}
            </div>
        )}
      </div>

      {/* 📱 FB-STYLE SHARE SHEET OVERLAY */}
      {activeSharePost && (
        <div className="fixed inset-0 z-[110] flex items-end justify-center sm:items-center animate-in fade-in duration-200 px-0 sm:px-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setActiveSharePost(null)} />
          <div className="relative w-full max-w-sm bg-[#242526] rounded-t-3xl sm:rounded-3xl border-t border-white/10 overflow-hidden animate-in slide-in-from-bottom duration-300 pb-12 sm:pb-8">
            <div className="p-4 border-b border-white/5 flex justify-between items-center">
              <span className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Share to Community</span>
              <button onClick={() => setActiveSharePost(null)} className="text-white text-2xl px-2">&times;</button>
            </div>
            <div className="grid grid-cols-4 gap-y-6 p-6">
              {[
                { id: 'facebook', label: 'Feed', color: 'bg-blue-600', icon: 'f' },
                { id: 'messenger', label: 'Chats', color: 'bg-gradient-to-tr from-blue-400 to-purple-500', icon: '⚡' },
                { id: 'whatsapp', label: 'WhatsApp', color: 'bg-green-500', icon: '📞' },
                { id: 'instagram', label: 'Stories', color: 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600', icon: '📸' },
                { id: 'tiktok', label: 'TikTok', color: 'bg-black border border-white/20', icon: '🎵' },
                { id: 'gmail', label: 'Gmail', color: 'bg-red-600', icon: 'M' },
                { id: 'native', label: 'More', color: 'bg-gray-700', icon: '•••' }
              ].map((item) => (
                <button key={item.id} onClick={() => handlePlatformShare(item.id, activeSharePost)} className="flex flex-col items-center gap-2 active:scale-90 transition-transform">
                  <div className={`${item.color} w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                    {item.id === 'facebook' ? <span className="text-2xl lowercase -mt-1">f</span> : item.icon}
                  </div>
                  <span className="text-[9px] font-bold text-gray-400 uppercase tracking-tighter">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* LIGHTBOX */}
      {lightboxSrc && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm" onClick={() => setLightboxSrc(null)}>
          <button className="absolute top-6 right-6 text-white text-5xl font-thin hover:rotate-90 transition-transform">&times;</button>
          {isVideo(lightboxSrc) ? (
             <video src={lightboxSrc} controls autoPlay className="max-h-[90vh] max-w-full rounded-2xl shadow-2xl border border-white/10" />
          ) : (
             <img src={lightboxSrc} className="max-h-[90vh] max-w-full rounded-2xl object-contain shadow-2xl border border-white/10" alt="Full screen preview" />
          )}
        </div>
      )}
    </div>
  );
}