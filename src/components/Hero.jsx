import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Dynamic Background with multiple gradients */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute top-[-20%] left-[-15%] w-[50%] h-[50%] rounded-full opacity-15 blur-[150px]"
                    style={{ background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)' }}
                />
                <div
                    className="absolute bottom-[-15%] right-[-15%] w-[60%] h-[60%] rounded-full opacity-10 blur-[180px]"
                    style={{ background: 'radial-gradient(circle, var(--cta) 0%, transparent 70%)' }}
                />
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] rounded-full opacity-5 blur-[120px]"
                    style={{ background: 'radial-gradient(circle, var(--gold) 0%, transparent 70%)' }}
                />
            </div>

            {/* Animated grid pattern */}
            <div className="absolute inset-0 z-0 opacity-[0.02]"
                style={{
                    backgroundImage: 'linear-gradient(var(--glass-border) 1px, transparent 1px), linear-gradient(90deg, var(--glass-border) 1px, transparent 1px)',
                    backgroundSize: '50px 50px'
                }}
            />

            {/* Main Content */}
            <div className="container relative z-10 text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                >
                    <motion.div
                        className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full mb-8"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Sparkles size={16} className="text-accent" />
                        <span className="text-xs uppercase tracking-[0.3em] font-bold text-accent">Estúdio Boutique</span>
                    </motion.div>

                    <h1 className="font-display font-bold mb-6 leading-[0.95]"
                        style={{ fontSize: 'clamp(3.5rem, 15vw, 10rem)' }}
                    >
                        Vitória <span className="text-gradient italic">Lima</span>
                    </h1>

                    <motion.p
                        className="text-text-muted text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        Fineline | Blackwork | Geek autoral em Juiz de Fora.<br />
                        Bem-vindos ao meu cantinho. Cada traço conta uma história única.
                    </motion.p>

                    <motion.div
                        className="flex flex-wrap items-center justify-center gap-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        <a href="#agendamento" className="btn btn-cta gap-3 shadow-[0_0_40px_rgba(255,107,107,0.3)]">
                            Agendar Orçamento
                        </a>
                        <a href="#portfolio" className="btn btn-outline gap-3">
                            Ver Portfólio
                        </a>
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.a
                    href="#sobre"
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted hover:text-accent transition-colors"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Explore</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    >
                        <ArrowDown size={20} />
                    </motion.div>
                </motion.a>
            </div>

            {/* Decorative vertical text */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block">
                <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-text-muted/30 [writing-mode:vertical-lr] rotate-180">
                    Juiz de Fora • Minas Gerais
                </p>
            </div>
        </section>
    );
};

export default Hero;
