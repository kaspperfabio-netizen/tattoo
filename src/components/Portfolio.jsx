import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ZoomIn } from 'lucide-react';
import Lightbox from './common/Lightbox';

const Portfolio = () => {
    const [filter, setFilter] = useState('Todos');
    const [selectedIdx, setSelectedIdx] = useState(-1);

    const categories = ['Todos', 'Fineline', 'Blackwork', 'Geek'];

    const items = [
        {
            id: 1,
            type: 'image',
            category: 'Fineline',
            title: 'Minimalist Lotus',
            description: 'Trabalho focado em fluidez e simetria absoluta.',
            src: 'https://images.unsplash.com/photo-1590247813693-5541d1c609fd?auto=format&fit=crop&q=80&w=800',
            cta: { text: 'Orçar esta arte', link: '#agendamento' }
        },
        {
            id: 2,
            type: 'image',
            category: 'Blackwork',
            title: 'Serpente Sombria',
            description: 'Contraste agressivo e texturas sólidas.',
            src: 'https://images.unsplash.com/photo-1560707303-4e980ce876ad?auto=format&fit=crop&q=80&w=800',
            cta: { text: 'Orçar esta arte', link: '#agendamento' }
        },
        {
            id: 3,
            type: 'image',
            category: 'Geek',
            title: 'Universo Ghibli',
            description: 'Uma homenagem poética à animação clássica.',
            src: 'https://images.unsplash.com/photo-1611501655038-c29a3d0d7498?auto=format&fit=crop&q=80&w=800',
            cta: { text: 'Orçar esta arte', link: '#agendamento' }
        },
        {
            id: 4,
            type: 'image',
            category: 'Fineline',
            title: 'Astronomia Sagrada',
            description: 'Detalhes microscópicos inspirados no cosmos.',
            src: 'https://images.unsplash.com/photo-1598133893813-21c6999201f8?auto=format&fit=crop&q=80&w=800',
            cta: { text: 'Orçar esta arte', link: '#agendamento' }
        },
        {
            id: 5,
            type: 'image',
            category: 'Blackwork',
            title: 'Floral Macabro',
            description: 'O encontro entre a beleza botânica e o sombrio.',
            src: 'https://images.unsplash.com/photo-1605647540924-852290f6b0d5?auto=format&fit=crop&q=80&w=800',
            cta: { text: 'Orçar esta arte', link: '#agendamento' }
        },
        {
            id: 6,
            type: 'image',
            category: 'Geek',
            title: 'Cyberpunk Soul',
            description: 'Estética futurista com traços autorais.',
            src: 'https://images.unsplash.com/photo-1582234372722-50d7ccc30ebd?auto=format&fit=crop&q=80&w=800',
            cta: { text: 'Orçar esta arte', link: '#agendamento' }
        },
    ];

    const filteredItems = filter === 'Todos' ? items : items.filter(i => i.category === filter);

    const handleNavigate = (direction) => {
        let newIndex = selectedIdx + direction;
        if (newIndex < 0) newIndex = filteredItems.length - 1;
        if (newIndex >= filteredItems.length) newIndex = 0;
        setSelectedIdx(newIndex);
    };

    return (
        <section id="portfolio" className="bg-primary-bg">
            <div className="container">
                <div className="section-header">
                    <span className="section-subtitle">Galeria Curada</span>
                    <h2 className="section-title">Portfólio</h2>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-6 mb-16">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-10 py-3 rounded-full border transition-all text-xs tracking-[0.2em] uppercase font-bold interactive ${filter === cat ? 'bg-accent border-accent text-white shadow-[0_0_20px_rgba(188,119,188,0.4)]' : 'border-neutral-800 hover:border-accent/40 text-text-muted hover:text-text-main'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode='popLayout'>
                        {filteredItems.map((item, idx) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                                onClick={() => setSelectedIdx(idx)}
                                className="relative aspect-[4/5] rounded-2xl overflow-hidden group cursor-none interactive glass"
                            >
                                <img src={item.src} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-end p-10 text-center">
                                    <div className="mb-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <h3 className="text-2xl font-display mb-2 text-white">{item.title}</h3>
                                        <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold">{item.category}</span>
                                    </div>
                                    <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-white mb-4">
                                        <ZoomIn size={20} />
                                    </div>
                                </div>

                                <div className="absolute top-6 right-6">
                                    <span className="glass text-[9px] px-3 py-1 rounded-full border border-white/10 uppercase tracking-widest font-bold">
                                        {item.category}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            <Lightbox
                isOpen={selectedIdx !== -1}
                onClose={() => setSelectedIdx(-1)}
                items={filteredItems}
                currentIndex={selectedIdx}
                onNavigate={handleNavigate}
            />
        </section>
    );
};

export default Portfolio;

