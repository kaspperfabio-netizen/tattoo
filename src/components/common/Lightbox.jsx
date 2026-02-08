import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Share2, Calendar } from 'lucide-react';

const Lightbox = ({ isOpen, onClose, items, currentIndex, onNavigate }) => {
    const item = items[currentIndex];

    if (!item) return null;

    return (
        <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
            <AnimatePresence>
                {isOpen && (
                    <Dialog.Portal forceMount>
                        <Dialog.Overlay asChild>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 bg-black/95 backdrop-blur-sm z-[200]"
                            />
                        </Dialog.Overlay>

                        <Dialog.Content asChild>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                                className="fixed inset-0 z-[201] flex items-center justify-center p-4 md:p-10 pointer-events-none"
                            >
                                <div className="relative w-full h-full flex flex-col md:flex-row items-center justify-center gap-10 pointer-events-auto">
                                    {/* Image Container */}
                                    <div className="relative flex-none h-[60%] md:h-full aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl overflow-hidden">
                                        <img
                                            src={item.src}
                                            alt={item.title}
                                            className="w-full h-full object-cover"
                                        />

                                        {/* Navigation Overlays */}
                                        <button
                                            onClick={() => onNavigate(-1)}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-white/20 transition-all opacity-0 md:group-hover:opacity-100"
                                        >
                                            <ChevronLeft size={24} />
                                        </button>
                                        <button
                                            onClick={() => onNavigate(1)}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-white/20 transition-all opacity-0 md:group-hover:opacity-100"
                                        >
                                            <ChevronRight size={24} />
                                        </button>
                                    </div>

                                    {/* Info Side */}
                                    <div className="flex flex-col justify-center max-w-md text-left">
                                        <Dialog.Title className="text-4xl md:text-6xl font-display mb-4 text-white">
                                            {item.title}
                                        </Dialog.Title>

                                        <div className="flex items-center gap-3 mb-8">
                                            <span className="glass text-[10px] px-4 py-1 rounded-full uppercase tracking-widest text-accent font-bold">
                                                {item.category}
                                            </span>
                                            <span className="text-[10px] text-zinc-500 uppercase tracking-widest">
                                                ID: #{String(item.id).padStart(3, '0')}
                                            </span>
                                        </div>

                                        <Dialog.Description className="text-lg text-zinc-400 mb-10 leading-relaxed font-light">
                                            {item.description}
                                        </Dialog.Description>

                                        <div className="flex flex-wrap gap-4">
                                            {item.cta && (
                                                <a
                                                    href={item.cta.link}
                                                    onClick={onClose}
                                                    className="btn btn-primary px-8 py-3 flex items-center gap-2"
                                                >
                                                    {item.cta.text} <Calendar size={18} />
                                                </a>
                                            )}
                                            <button className="glass p-4 rounded-full hover:bg-white/10 transition-colors">
                                                <Share2 size={20} />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Top Controls */}
                                    <div className="absolute top-0 right-0 p-4 flex gap-4">
                                        <Dialog.Close asChild>
                                            <button className="w-12 h-12 glass rounded-full flex items-center justify-center hover:rotate-90 transition-all duration-500">
                                                <X size={24} />
                                            </button>
                                        </Dialog.Close>
                                    </div>

                                    {/* Mobile Navigation */}
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-6 md:hidden">
                                        <button onClick={() => onNavigate(-1)} className="p-4 glass rounded-full"><ChevronLeft /></button>
                                        <span className="text-xs font-bold tracking-widest">{currentIndex + 1} / {items.length}</span>
                                        <button onClick={() => onNavigate(1)} className="p-4 glass rounded-full"><ChevronRight /></button>
                                    </div>
                                </div>
                            </motion.div>
                        </Dialog.Content>
                    </Dialog.Portal>
                )}
            </AnimatePresence>
        </Dialog.Root>
    );
};

export default Lightbox;
