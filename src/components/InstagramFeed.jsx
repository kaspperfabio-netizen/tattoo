import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Play, ExternalLink } from 'lucide-react';

const InstagramFeed = () => {
    // Mock data with Unsplash images for a premium look
    const posts = [
        { id: 1, type: 'image', src: '/assets/instagram/post1_pinned.webp' },
        { id: 2, type: 'image', src: '/assets/instagram/post2_cobertura.webp' },
        { id: 3, type: 'video', src: '/assets/instagram/reel1_girassol.jpg' },
        { id: 4, type: 'image', src: '/assets/instagram/post3_ravena.webp' },
        { id: 5, type: 'image', src: '/assets/instagram/post4_cicatrizada.webp' },
        { id: 6, type: 'video', src: '/assets/instagram/reel2_butterfly.jpg' },
        { id: 7, type: 'image', src: '/assets/instagram/post5_cat.webp' },
        { id: 8, type: 'image', src: '/assets/instagram/post6_mewtwo.webp' },
        { id: 9, type: 'image', src: '/assets/instagram/post8_kakashi.webp' },
    ];

    return (
        <section id="instagramfeed" className="bg-primary-bg overflow-hidden border-t border-accent/10">
            <div className="container">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
                    <div className="text-left">
                        <span className="section-subtitle">No Instagram</span>
                        <h2 className="section-title text-left mb-0 leading-[0.8] mt-4">@vtori.ink</h2>
                    </div>
                    <a
                        href="https://instagram.com/vtori.ink"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary gap-3 shadow-[0_0_20px_rgba(188,119,188,0.3)]"
                    >
                        Seguir Perfil <Instagram size={20} />
                    </a>
                </div>
            </div>

            {/* Scrolling Feed */}
            <div className="flex gap-6 px-10 overflow-x-auto pb-12 no-scrollbar">
                {posts.concat(posts).map((post, idx) => (
                    <motion.div
                        key={`${post.id}-${idx}`}
                        whileHover={{ y: -8, scale: 1.02 }}
                        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                        className="flex-shrink-0 w-72 md:w-96 aspect-square rounded-2xl relative group overflow-hidden cursor-none interactive glass"
                    >
                        <img
                            src={post.src}
                            alt="Instagram Post"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-6 backdrop-blur-[2px]">
                            {post.type === 'video' ? (
                                <div className="w-14 h-14 rounded-full glass flex items-center justify-center text-white">
                                    <Play fill="white" size={24} />
                                </div>
                            ) : null}
                            <div className="w-14 h-14 rounded-full glass flex items-center justify-center text-white">
                                <ExternalLink size={24} />
                            </div>
                        </div>

                        {post.type === 'video' && (
                            <div className="absolute top-6 right-6 text-white glass p-2 rounded-lg">
                                <Play size={14} fill="white" />
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>

            <div className="container mt-12 text-center md:text-right">
                <p className="text-[10px] uppercase tracking-[0.3em] text-text-muted italic opacity-50">
                    * Fallback: Galeria estática curada do Instagram.
                </p>
            </div>
        </section>
    );
};

export default InstagramFeed;
