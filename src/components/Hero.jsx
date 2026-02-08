import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';

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
        <section id="home" ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Enhanced Parallax */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
                <div className="absolute inset-0 bg-primary-bg/85 z-10" /> {/* Dark overlay */}
                <div className="absolute inset-0 bg-accent/5 z-10 mix-blend-overlay" />
                <motion.div
                    style={{ y: yBackground, scale: scaleBackground }}
                    className="absolute inset-[-15%] w-[130%] h-[130%] blur-[12px] opacity-60"
                >
                    <img
                        src="/assets/home.png"
                        alt="Studio Background"
                        className="w-full h-full object-cover"
                    />
                </motion.div>
            </div>

            {/* Grain Texture Overlay */}
            <div className="absolute inset-0 z-[1] opacity-[0.25] pointer-events-none mix-blend-overlay"
                style={{ backgroundImage: 'url("/assets/noise.png")' }}
            />

            {/* Main Content - Adjusted for single screen fit */}
            <div className="container relative z-10 text-center px-4 h-full flex flex-col justify-center pt-10">
                <motion.div
                    style={{ y: yText, opacity: opacityText }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                    <motion.div
                        className="inline-flex items-center gap-3 border border-white/10 bg-white/5 backdrop-blur-md px-5 py-1.5 rounded-full mb-6"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Sparkles size={12} className="text-accent" />
                        <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-accent/90">Estúdio Boutique</span>
                    </motion.div>

                    {/* Adjusted Heading Size for better fit */}
                    <h1 className="font-display font-medium mb-4 leading-[0.85]"
                        style={{ fontSize: 'clamp(3.5rem, 12vw, 8.5rem)' }}
                    >
                        <span className="block text-white">Vitória</span>
                        <span className="font-cursive text-accent block mt-[-0.25em] transform -rotate-1 origin-center opacity-90">Lima</span>
                    </h1>

                    <motion.p
                        className="text-text-muted text-base md:text-lg max-w-lg mx-auto mb-8 leading-relaxed font-light tracking-wide"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        Fineline | Blackwork | Geek autoral.<br />
                        <span className="opacity-70 text-sm mt-1 block">Arte narrada na pele em Juiz de Fora.</span>
                    </motion.p>

                    <motion.div
                        className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-5"
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
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
            >
                <motion.a
                    href="#sobre"
                    className="flex flex-col items-center gap-2 text-text-muted/50 hover:text-accent transition-colors group"
                >
                    <span className="text-[8px] uppercase tracking-[0.3em] font-bold opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">Explore</span>
                    <div className="w-[1px] h-10 bg-gradient-to-b from-transparent via-white/20 to-transparent relative overflow-hidden">
                        <motion.div
                            className="absolute top-0 left-0 w-full h-1/2 bg-accent blur-[1px]"
                            animate={{ top: ['-100%', '100%'] }}
                            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                        />
                    </div>
                </motion.a>
            </motion.div>

            {/* Decorative vertical text */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6 opacity-20 pointer-events-none">
                <div className="w-[1px] h-24 bg-white/20 mx-auto"></div>
                <p className="text-[9px] uppercase tracking-[0.4em] font-bold text-white [writing-mode:vertical-lr] rotate-180">
                    Est. 2024 • MG
                </p>
                <div className="w-[1px] h-24 bg-white/20 mx-auto"></div>
            </div>
        </section>
    );
};

export default Hero;
