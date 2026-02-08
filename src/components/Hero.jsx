import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import '../styles/Hero.css';

const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const yBackground = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
    const scaleBackground = useTransform(scrollYProgress, [0, 1], [1.1, 1.3]);
    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section id="home" ref={ref} className="hero-section">
            {/* Background Image with Enhanced Parallax */}
            <div className="hero-bg">
                <div className="hero-overlay" />
                <div className="hero-accent-overlay" />
                <motion.div
                    style={{ y: yBackground, scale: scaleBackground }}
                    className="hero-bg-media"
                >
                    <img
                        src="/assets/home.png"
                        alt="Studio Background"
                        className="w-full h-full object-cover"
                    />
                </motion.div>
            </div>

            {/* Grain Texture Overlay */}
            <div className="hero-noise"
                style={{ backgroundImage: 'url("/assets/noise.png")' }}
            />

            {/* Main Content */}
            <div className="hero-container">
                <motion.div
                    style={{ y: yText, opacity: opacityText }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                    <motion.div
                        className="hero-badge"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Sparkles size={12} className="text-accent" />
                        <span className="hero-badge-text">Estúdio Boutique</span>
                    </motion.div>

                    <h1 className="hero-title">
                        <span className="block text-white">Vitória</span>
                        <span className="cursive">Lima</span>
                    </h1>

                    <motion.p
                        className="hero-description"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <a href="#style-fineline" className="hero-specialty-link">Fineline</a> | <a href="#style-blackwork" className="hero-specialty-link">Blackwork</a> | <a href="#style-geek" className="hero-specialty-link">Geek autoral</a><br />
                        <span className="opacity-70 text-sm mt-1 block">Arte narrada na pele em Juiz de Fora.</span>
                    </motion.p>

                    <motion.div
                        className="hero-actions"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        <a href="#agendamento" className="btn btn-cta px-8 py-3 text-[10px] tracking-[0.25em] shadow-[0_0_30px_rgba(255,107,107,0.2)] hover:shadow-[0_0_60px_rgba(255,107,107,0.4)] transition-shadow">
                            AGENDAR AGORA
                        </a>
                        <a href="#portfolio" className="btn btn-outline border-white/10 px-8 py-3 text-[10px] tracking-[0.25em] hover:bg-white/5">
                            VER PORTFÓLIO
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="hero-scroll-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
            >
                <motion.a
                    href="#sobre"
                    className="flex flex-col items-center gap-2 text-text-muted/50 hover:text-accent transition-colors group"
                >
                    <span className="text-[8px] uppercase tracking-[0.3em] font-bold opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">Explore</span>
                    <div className="hero-scroll-line">
                        <motion.div
                            className="hero-scroll-animation"
                            animate={{ top: ['-100%', '100%'] }}
                            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                        />
                    </div>
                </motion.a>
            </motion.div>

            {/* Decorative vertical text */}
            <div className="hero-side-text">
                <div className="hero-side-line"></div>
                <p className="hero-side-label">
                    Est. 2024 • MG
                </p>
                <div className="hero-side-line"></div>
            </div>
        </section>
    );
};

export default Hero;
