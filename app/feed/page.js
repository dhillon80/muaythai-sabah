"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { supabase } from '../lib/supabase';

// --- 🔒 ADMINS ---
const ADMIN_EMAILS = [
  "revolutioncombatgym@gmail.com",
  "rcmuaythaiclub@gmail.com", 
  "planetbubbles@gmail.com"
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

  // UI State
  const [lightboxSrc, setLightboxSrc] = useState(null);
  const [expandedComments, setExpandedComments] = useState({}); 
  const [activeMenuPostId, setActiveMenuPostId] = useState(null);

  useEffect(() => {
    fetchUserAndPosts();
    const handleGlobalClick = (e) => {
      if (!e.target.closest('.post-menu-btn')) setActiveMenuPostId(null);
    };
    window.addEventListener("click", handleGlobalClick);
    return () => window.removeEventListener("click", handleGlobalClick);
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

  // --- 📩 MARKETING DATABASE REGISTRATION ---
  const handleMarketingRegister = async (e) => {
    e.preventDefault();
    setRegStatus('loading');
    
    const { error } = await supabase
      .from('marketing_leads')
      .insert([{ email, source: 'community_feed' }]);

    if (error) {
      if (error.code === '23505') {
        setRegStatus('already_exists');
      } else {
        setRegStatus('error');
      }
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

  return (
    <div className="min-h-screen bg-[#18191a] text-gray-100 font-sans pb-32 selection:bg-blue-500/30">
      
      {/* HEADER */}
      <div className="pt-28 pb-6 px-4 max-w-xl mx-auto text-center">
        <h1 className="text-3xl font-black uppercase tracking-tighter text-white italic">
          Sabah <span className="text-blue-500">Community Feed</span>
        </h1>
        <p className="text-[10px] text-gray-500 uppercase tracking-[0.3em] mt-2 font-bold">The Official SMA Digital Hub</p>
      </div>

      <div className="max-w-xl mx-auto px-4">
        
        {/* 🔥 MARKETING LEAD MAGNET */}
        <section className="bg-gradient-to-br from-blue-900/40 to-black border border-blue-500/30 rounded-2xl p-6 mb-8 shadow-[0_0_25px_rgba(59,130,246,0.15)] text-center">
            <h3 className="text-xl font-black text-white uppercase italic tracking-tighter mb-1">Join the VIP Roster</h3>
            <p className="text-[11px] text-gray-400 uppercase tracking-widest mb-4 leading-relaxed font-bold">
              Get early access to Tournament updates, New Muaythai merchandise & Gym promos
            </p>
            
            <form onSubmit={handleMarketingRegister} className="flex flex-col sm:flex-row gap-2">
                <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ENTER YOUR EMAIL" 
                    className="flex-grow bg-black/50 border border-white/10 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-blue-500 transition-colors uppercase font-bold placeholder:text-gray-600"
                    required
                />
                <button 
                    disabled={regStatus === 'loading'}
                    className="bg-blue-600 hover:bg-blue-500 text-white font-black px-6 py-2.5 rounded-xl text-sm uppercase italic tracking-tighter transition-all shadow-lg active:scale-95"
                >
                    {regStatus === 'loading' ? 'Processing...' : 'Join Now'}
                </button>
            </form>

            {regStatus === 'success' && <p className="text-green-500 text-[10px] mt-3 font-bold uppercase tracking-widest animate-pulse">Success! Welcome to the SMA Community.</p>}
            {regStatus === 'already_exists' && <p className="text-yellow-500 text-[10px] mt-3 font-bold uppercase tracking-widest">You are already on the VIP list!</p>}
            {regStatus === 'error' && <p className="text-red-500 text-[10px] mt-3 font-bold uppercase tracking-widest">Error. Please check your connection.</p>}
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
              <p className="text-gray-400 text-[10px] uppercase tracking-[0.3em] mb-4 font-bold">Official SMA Member Access Required</p>
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
                const isOwner = user && (user.id === post.user_id || ADMIN_EMAILS.includes(user.email));
                const reactions = post.feed_reactions || [];
                const myReaction = user ? reactions.find(r => r.user_id === user.id) : null;
                const media = post.media_urls || [];
  
                return (
                  <div key={post.id} className="bg-[#242526] rounded-xl shadow-sm border border-[#3a3b3c] overflow-hidden transition-all hover:border-[#4e4f50]">
                    {/* Header */}
                    <div className="p-4 flex justify-between items-start">
                      <div className="flex gap-3">
                        <img src={author.profile_image || `https://ui-avatars.com/api/?name=${authorName}`} className="w-10 h-10 rounded-full object-cover border border-white/10" />
                        <div>
                          <h4 className="font-bold text-white text-[15px] leading-tight">{authorName}</h4>
                          <p className="text-[11px] text-gray-500 mt-1 font-bold uppercase tracking-wider">{author.gym_name && `${author.gym_name} •`} {timeAgo(post.created_at)}</p>
                        </div>
                      </div>
                    </div>
  
                    {/* Text Content */}
                    <div className="px-4 pb-4 text-[15px] text-gray-100 whitespace-pre-wrap leading-relaxed">{post.content}</div>
  
                    {/* Media Display */}
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
  
                    {/* Reaction Bar */}
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
                      </div>
                    )}
  
                    {/* Action Buttons */}
                    <div className="flex px-2 py-1 relative">
                          <div className="flex-1 group relative">
                            {/* Hover Reactions Popup */}
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
                    </div>

                    {/* Simple Comment Indicator */}
                    {expandedComments[post.id] && (
                        <div className="p-6 bg-black/20 border-t border-[#3a3b3c] text-center">
                            <p className="text-gray-500 text-[10px] uppercase font-black tracking-[0.4em] italic mb-3">Syncing Comment Database...</p>
                            <div className="h-1 w-20 bg-blue-600/30 mx-auto rounded-full overflow-hidden">
                                <div className="h-full bg-blue-500 w-1/2 animate-ping"></div>
                            </div>
                        </div>
                    )}
                  </div>
                );
            })}
          </div>
        )}
      </div>

      {/* LIGHTBOX / FULLSCREEN MEDIA */}
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