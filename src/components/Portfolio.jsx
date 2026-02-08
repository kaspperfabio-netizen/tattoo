import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Play, ZoomIn } from 'lucide-react';
import Lightbox from './common/Lightbox';

const Portfolio = () => {
    const [filter, setFilter] = useState('Todos');
    const [selectedIdx, setSelectedIdx] = useState(-1);
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const yBackground = useTransform(scrollYProgress, [0, 1], [-100, 100]);
    const yItems = useTransform(scrollYProgress, [0, 1], [0, -50]);

    const categories = ['Todos', 'Fineline', 'Blackwork', 'Geek'];

    const items = [
        {
            id: 1,
            type: 'image',
            category: 'Fineline',
            title: 'Butterfly Delicada',
            description: 'Trabalho focado em fluidez e simetria absoluta.',
            src: '/assets/instagram/reel2_butterfly.jpg',
            cta: { text: 'Orçar esta arte', link: '#agendamento' }
        },
        {
            id: 2,
            type: 'image',
            category: 'Blackwork',
            title: 'Cobertura Floral',
            description: 'Contraste agressivo e texturas sólidas.',
            src: '/assets/instagram/post2_cobertura.webp',
            cta: { text: 'Orçar esta arte', link: '#agendamento' }
        },
        {
            id: 3,
            type: 'image',
            category: 'Geek',
            title: 'Ravena Persona',
            description: 'Uma homenagem poética à personagem clássica.',
            src: '/assets/instagram/post3_ravena.webp',
            cta: { text: 'Orçar esta arte', link: '#agendamento' }
        },
        {
            id: 4,
            type: 'image',
            category: 'Fineline',
            title: 'Cicatrizada Perfeita',
            description: 'Detalhes microscópicos após cicatrização.',
            src: '/assets/instagram/post4_cicatrizada.webp',
            cta: { text: 'Orçar esta arte', link: '#agendamento' }
        },
        {
            id: 5,
            type: 'image',
            category: 'Blackwork',
            title: 'Girassóis Intensos',
            description: 'O encontro entre a beleza botânica e o sombrio.',
            src: '/assets/instagram/reel1_girassol.jpg',
            cta: { text: 'Orçar esta arte', link: '#agendamento' }
        },
        {
            id: 6,
            type: 'image',
            category: 'Geek',
            title: 'Kakashi Hatake',
            description: 'Estética ninja com traços autorais.',
            src: '/assets/instagram/post8_kakashi.webp',
            cta: { text: 'Orçar esta arte', link: '#agendamento' }
        },
        {
            id: 7,
            type: 'image',
            category: 'Geek',
            title: 'Mewtwo Pokémon',
            description: 'Primeiro Pokémon com toques de cor.',
            src: '/assets/instagram/post6_mewtwo.webp',
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
        <section id="portfolio" ref={sectionRef} className="bg-primary-bg relative overflow-hidden">
            {/* Background Decorative Parallax */}
            <motion.div
                style={{ y: yBackground }}
                className="absolute right-[-10%] top-1/4 w-[40%] h-[40%] rounded-full bg-accent/5 blur-[120px] pointer-events-none"
            />
            <motion.div
                style={{ y: yBackground }}
                className="absolute left-[-10%] bottom-1/4 w-[30%] h-[30%] rounded-full bg-cta/5 blur-[100px] pointer-events-none"
            />

            <div className="container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-header"
                >
                    <span className="section-subtitle">Galeria Curada</span>
                    <h2 className="section-title">Portfólio</h2>
                </motion.div>

                {/* Filters */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-4 md:gap-6 mb-16"
                >
                    {categories.map((cat, idx) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-8 md:px-10 py-3 rounded-full border transition-all text-[10px] md:text-xs tracking-[0.2em] uppercase font-bold interactive ${filter === cat
                                ? 'bg-accent border-accent text-white shadow-[0_10px_20px_rgba(188,119,188,0.3)]'
                                : 'border-white/5 hover:border-accent/40 text-text-muted hover:text-text-main bg-white/5'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </motion.div>

                {/* Grid */}
                <motion.div
                    layout
                    style={{ y: yItems }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredItems.map((item, idx) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                                onClick={() => setSelectedIdx(idx)}
                                className="relative aspect-[4/5] rounded-[2rem] overflow-hidden group cursor-none interactive glass group"
                            >
                                <img
                                    src={item.src}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />

                                {/* Subtle Overlay Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-end p-8 md:p-10 text-center">
                                    <div className="mb-6 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                        <h3 className="text-2xl md:text-3xl font-display mb-2 text-white">{item.title}</h3>
                                        <div className="flex items-center justify-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                                            <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold">{item.category}</span>
                                        </div>
                                    </div>

                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        className="w-14 h-14 rounded-full glass flex items-center justify-center text-white mb-4 border-white/20 backdrop-blur-md"
                                    >
                                        <ZoomIn size={22} />
                                    </motion.div>
                                </div>

                                <div className="absolute top-6 right-6 z-10">
                                    <span className="glass text-[9px] px-4 py-1.5 rounded-full border border-white/10 uppercase tracking-widest font-bold backdrop-blur-md">
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

