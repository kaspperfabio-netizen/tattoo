import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    const lineVariants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: { duration: 2, ease: "easeInOut" }
        }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background with texture/parallax effect */}
            <div
                className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(circle at center, var(--accent) 0%, transparent 70%)',
                    filter: 'blur(100px)'
                }}
            />

            <div className="container relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="section-subtitle mb-4 block">Vitória Lima</span>
                    <h1 className="text-6xl md:text-8xl lg:text-9xl mb-6">
                        Fineline <span className="text-accent">&</span> Blackwork
                    </h1>
                    <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto mb-10 tracking-wide font-light">
                        Transformando histórias em arte na pele com precisão e alma. Juiz de Fora, MG.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="#portfolio" className="btn btn-primary px-10 py-4 w-full sm:w-auto">
                            Ver Portfólio
                        </a>
                        <a href="#agendamento" className="btn btn-outline px-10 py-4 w-full sm:w-auto">
                            Pedir Orçamento
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Needle Drawing Animation */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-px h-32 hidden md:block">
                <svg width="40" height="200" viewBox="0 0 40 200" className="overflow-visible">
                    <motion.path
                        d="M20 0 V150"
                        stroke="var(--accent)"
                        strokeWidth="1"
                        variants={lineVariants}
                        initial="hidden"
                        animate="visible"
                    />
                    <motion.g
                        initial={{ y: 0 }}
                        animate={{ y: 150 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    >
                        {/* Needle Icon */}
                        <path
                            d="M15 10 L25 10 L20 40 Z"
                            fill="var(--accent)"
                        />
                        <rect x="19.5" y="0" width="1" height="10" fill="var(--accent)" />
                    </motion.g>
                </svg>
            </div>

            {/* Decorative vertical text */}
            <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block opacity-20 transform rotate-90 origin-right">
                <span className="text-sm tracking-[1rem] uppercase">Estética Alternativa</span>
            </div>
        </section>
    );
};

export default Hero;
