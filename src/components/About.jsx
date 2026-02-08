import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Instagram, MessageCircle } from 'lucide-react';

const About = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const yImg = useTransform(scrollYProgress, [0, 1], [-50, 50]);
    const yText = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const rotateDeco = useTransform(scrollYProgress, [0, 1], [-12, -20]);

    return (
        <section id="sobre" ref={sectionRef} className="relative py-32 overflow-hidden">
            {/* Blurred Background Image */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-primary-bg/95 z-10" />
                <motion.img
                    style={{ y: yImg }}
                    src="/assets/instagram/post1_pinned.webp"
                    alt="Background Texture"
                    className="w-full h-full object-cover opacity-20 blur-[80px] scale-125"
                />
            </div>

            <div className="container relative z-10">
                <div className="grid lg:grid-cols-12 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
                        className="lg:col-span-5 relative"
                    >
                        {/* Main Editorial Photo with Parallax effect on the frame */}
                        <motion.div
                            style={{ y: yImg }}
                            className="aspect-[3/4] relative z-10 group cursor-none"
                        >
                            <div className="absolute inset-0 border border-white/10 translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6" />
                            <div className="absolute inset-0 bg-neutral-900 overflow-hidden grayscale transition-all duration-700 group-hover:grayscale-0">
                                <img
                                    src="/assets/instagram/post1_pinned.webp"
                                    alt="Vitória Lima"
                                    className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-1000"
                                />
                            </div>
                        </motion.div>

                        {/* Decorative lettering with Parallax */}
                        <motion.div
                            style={{ rotate: rotateDeco, y: yImg }}
                            className="absolute -top-24 -left-12 text-[10rem] font-cursive text-accent/5 select-none pointer-events-none z-0 mix-blend-overlay"
                        >
                            Vitória
                        </motion.div>
                    </motion.div>

                    <motion.div
                        style={{ y: yText }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-7"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <span className="h-[1px] w-12 bg-accent/50"></span>
                            <span className="text-xs uppercase tracking-[0.2em] text-accent font-bold">A Artista</span>
                        </div>

                        <h2 className="font-display text-5xl md:text-7xl mb-8 md:mb-10 leading-[0.9]">
                            A alma por trás <br /> <span className="font-cursive text-white/40 block mt-2 text-6xl md:text-8xl">do traço.</span>
                        </h2>

                        <div className="space-y-6 text-text-muted text-lg md:text-xl font-light leading-loose max-w-2xl">
                            <p>
                                <span className="text-white font-normal">Especialista em Fineline e Blackwork</span>, Vitória Lima busca transcender o conceito tradicional de tatuagem, unindo delicadeza e expressividade em cada projeto autoral.
                            </p>
                            <p>
                                Seu estúdio em <span className="text-white italic">Juiz de Fora</span> é um santuário de criação. Cada arte é o resultado de uma escuta profunda, onde a técnica apurada encontra a emoção de quem a carrega.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-6 pt-10">
                            <a
                                href="https://wa.me/5532998079515"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline border-white/10 hover:bg-neutral-800 gap-3 px-8"
                            >
                                <MessageCircle size={18} />
                                Iniciar Conversa
                            </a>
                            <a
                                href="https://instagram.com/vtori.ink"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn text-text-muted hover:text-white gap-2 px-4"
                            >
                                <Instagram size={18} />
                                @vtori.ink
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;

