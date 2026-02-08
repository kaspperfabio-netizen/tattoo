import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Play, ExternalLink } from 'lucide-react';

const InstagramFeed = () => {
    // Mock data for the feed
    const posts = [
        { id: 1, type: 'video', url: '#' },
        { id: 2, type: 'image', url: '#' },
        { id: 3, type: 'image', url: '#' },
        { id: 4, type: 'video', url: '#' },
        { id: 5, type: 'image', url: '#' },
        { id: 6, type: 'image', url: '#' },
    ];

    return (
        <section className="bg-secondary-bg overflow-hidden">
            <div className="container">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="text-left">
                        <span className="section-subtitle">No Instagram</span>
                        <h2 className="section-title text-left mb-0 mt-2">@vtori.ink</h2>
                    </div>
                    <a
                        href="https://instagram.com/vtori.ink"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline gap-2"
                    >
                        Seguir Perfil <Instagram size={18} />
                    </a>
                </div>
            </div>

            {/* Marquee/Slider effect using Framer Motion */}
            <div className="flex gap-4 px-4 overflow-x-auto pb-8 scrollbar-hide no-scrollbar">
                {posts.concat(posts).map((post, idx) => (
                    <motion.div
                        key={`${post.id}-${idx}`}
                        whileHover={{ scale: 1.05 }}
                        className="flex-shrink-0 w-64 md:w-80 aspect-square bg-neutral-800 relative group overflow-hidden cursor-none interactive"
                    >
                        <div className="absolute inset-0 flex items-center justify-center text-xs opacity-30 select-none">
                            Instagram Post
                        </div>

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                            {post.type === 'video' ? <Play fill="white" size={24} /> : <div />}
                            <ExternalLink size={24} />
                        </div>

                        {post.type === 'video' && (
                            <div className="absolute top-4 right-4 text-white">
                                <Play size={16} fill="white" />
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>

            <div className="container mt-8 text-center md:text-right">
                <p className="text-xs text-text-muted italic">
                    * Fallback: Feed estático carregado.
                </p>
            </div>
        </section>
    );
};

export default InstagramFeed;
