import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { ZoomIn } from 'lucide-react';
import Lightbox from './common/Lightbox';
import '../styles/Portfolio.css';
import '../styles/PortfolioGloss.css';

const TiltCard = ({ item, idx, onClick }) => {
    const cardRef = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);

        cardRef.current.style.setProperty("--mouse-x", `${mouseX}px`);
        cardRef.current.style.setProperty("--mouse-y", `${mouseY}px`);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={() => onClick(idx)}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className="portfolio-card interactive glass"
        >
            <div style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }} className="h-full w-full">
                <img
                    src={item.src}
                    alt={item.title}
                    className="portfolio-image"
                />

                <div className="portfolio-overlay">
                    <div className="overlay-content">
                        <motion.div
                            className="zoom-icon-wrapper"
                            style={{ transform: "translateZ(75px)" }}
                        >
                            <ZoomIn size={22} />
                        </motion.div>
                        <h3 className="overlay-title">{item.title}</h3>
                        <div className="overlay-category-wrapper">
                            <span className="category-dot" />
                            <span className="category-label">{item.category}</span>
                        </div>
                    </div>
                </div>

                <div className="portfolio-badge" style={{ transform: "translateZ(40px)" }}>
                    {item.category}
                </div>
            </div>
        </motion.div>
    );
};

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
            category: 'Fineline',
            title: 'Butterfly Delicada',
            description: 'Trabalho focado em fluidez e simetria absoluta.',
            src: '/assets/instagram/reel2_butterfly.jpg',
            cta: { text: 'Orçar esta arte', link: '#agendamento' }
        },
        {
            id: 2,
            category: 'Blackwork',
            title: 'Cobertura Floral',
            description: 'Contraste agressivo e texturas sólidas.',
            src: '/assets/instagram/post2_cobertura.webp',
            cta: { text: 'Orçar esta arte', link: '#agendamento' }
        },
        {
            id: 3,
            category: 'Geek',
            title: 'Ravena Persona',
            description: 'Uma homenagem poética à personagem clássica.',
            src: '/assets/instagram/post3_ravena.webp',
            cta: { text: 'Orçar esta arte', link: '#agendamento' }
        },
        {
            id: 4,
            category: 'Fineline',
            title: 'Cicatrizada Perfeita',
            description: 'Detalhes microscópicos após cicatrização.',
            src: '/assets/instagram/post4_cicatrizada.webp',
            cta: { text: 'Orçar esta arte', link: '#agendamento' }
        },
        {
            id: 5,
            category: 'Blackwork',
            title: 'Girassóis Intensos',
            description: 'O encontro entre a beleza botânica e o sombrio.',
            src: '/assets/instagram/reel1_girassol.jpg',
            cta: { text: 'Orçar esta arte', link: '#agendamento' }
        },
        {
            id: 6,
            category: 'Geek',
            title: 'Kakashi Hatake',
            description: 'Estética ninja com traços autorais.',
            src: '/assets/instagram/post8_kakashi.webp',
            cta: { text: 'Orçar esta arte', link: '#agendamento' }
        },
        {
            id: 7,
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
        <section id="portfolio" ref={sectionRef} className="portfolio-section">
            <motion.div style={{ y: yBackground }} className="portfolio-deco portfolio-deco-1" />
            <motion.div style={{ y: yBackground }} className="portfolio-deco portfolio-deco-2" />

            <div className="container portfolio-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-header"
                >
                    <span className="section-subtitle">Galeria Curada</span>
                    <h2 className="section-title">Portfólio</h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="portfolio-filters"
                >
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`filter-btn ${filter === cat ? 'active' : ''}`}
                        >
                            {cat}
                        </button>
                    ))}
                </motion.div>

                <motion.div
                    layout
                    style={{ y: yItems }}
                    className="portfolio-grid"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredItems.map((item, idx) => (
                            <TiltCard
                                key={item.id}
                                item={item}
                                idx={idx}
                                onClick={setSelectedIdx}
                            />
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

