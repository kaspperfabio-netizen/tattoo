import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';

const Portfolio = () => {
    const [filter, setFilter] = useState('Todos');
    const [selectedItem, setSelectedItem] = useState(null);

    const categories = ['Todos', 'Fineline', 'Blackwork', 'Geek'];

    const items = [
        { id: 1, type: 'image', category: 'Fineline', title: 'Minimalist Lotus', description: 'Traço fino e delicado.' },
        { id: 2, type: 'image', category: 'Blackwork', title: 'Serpente Sombria', description: 'Contraste e texturas.' },
        { id: 3, type: 'video', category: 'Geek', title: 'Cena Ghibli', description: 'Animação fluida.' },
        { id: 4, type: 'image', category: 'Fineline', title: 'Signo Astral', description: 'Detalhes microscópicos.' },
        { id: 5, type: 'image', category: 'Blackwork', title: 'Gótica Floral', description: 'Mix de estilos.' },
        { id: 6, type: 'image', category: 'Geek', title: 'Cyberpunk Symbol', description: 'Neon vibes.' },
    ];

    const filteredItems = filter === 'Todos' ? items : items.filter(i => i.category === filter);

    const openModal = (item, index) => {
        setSelectedItem({ ...item, index });
    };

    const closeModal = () => setSelectedItem(null);

    const navigate = (direction) => {
        let newIndex = selectedItem.index + direction;
        if (newIndex < 0) newIndex = filteredItems.length - 1;
        if (newIndex >= filteredItems.length) newIndex = 0;
        setSelectedItem({ ...filteredItems[newIndex], index: newIndex });
    };

    return (
        <section id="portfolio">
            <div className="container">
                <div className="section-header">
                    <span className="section-subtitle">Galeria</span>
                    <h2 className="section-title">Portfólio</h2>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-8 py-2 rounded-full border transition-all text-sm tracking-widest uppercase ${filter === cat ? 'bg-accent border-accent text-white' : 'border-neutral-800 hover:border-accent/40'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredItems.map((item, idx) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                onClick={() => openModal(item, idx)}
                                className="relative aspect-square bg-neutral-900 overflow-hidden group cursor-none interactive"
                            >
                                <div className="absolute inset-0 flex items-center justify-center text-text-muted">
                                    {item.title}
                                </div>

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-accent/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 text-center">
                                    <h3 className="text-xl font-display mb-2">{item.title}</h3>
                                    <span className="text-xs uppercase tracking-tighter mb-4">{item.category}</span>
                                    {item.type === 'video' && <Play fill="white" size={32} />}
                                </div>

                                <div className="absolute top-4 right-4">
                                    <span className="bg-primary-bg/80 text-[10px] px-2 py-1 rounded-sm border border-neutral-800">
                                        {item.category}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Lightbox / Modal */}
            <AnimatePresence>
                {selectedItem && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10"
                    >
                        <button
                            onClick={closeModal}
                            className="absolute top-10 right-10 text-white hover:text-accent transition-colors z-50 p-2"
                        >
                            <X size={40} />
                        </button>

                        <button
                            onClick={() => navigate(-1)}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors"
                        >
                            <ChevronLeft size={60} />
                        </button>

                        <div className="max-w-4xl w-full h-full flex flex-col items-center justify-center gap-6">
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="relative bg-neutral-900 w-full aspect-[4/5] flex items-center justify-center shadow-2xl"
                            >
                                <span className="text-white italic">Visualização: {selectedItem.title}</span>
                                {selectedItem.type === 'video' && (
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                                        <Play size={48} fill="white" />
                                    </div>
                                )}
                            </motion.div>

                            <div className="text-center w-full">
                                <h3 className="text-3xl font-display mb-2">{selectedItem.title}</h3>
                                <p className="text-text-muted mb-6">{selectedItem.description}</p>
                                <a href="#agendamento" onClick={closeModal} className="btn btn-primary">
                                    Orçar esta arte
                                </a>
                            </div>
                        </div>

                        <button
                            onClick={() => navigate(1)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors"
                        >
                            <ChevronRight size={60} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Portfolio;
