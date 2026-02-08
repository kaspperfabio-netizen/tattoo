import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, MessageCircle } from 'lucide-react';

const About = () => {
    return (
        <section id="sobre" className="bg-secondary-bg">
            <div className="container">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
                        className="lg:col-span-5 relative"
                    >
                        {/* Main Editorial Photo */}
                        <div className="aspect-[3/4] rounded-3xl overflow-hidden relative z-10 glass shadow-2xl">
                            <img
                                src="/assets/instagram/post1_pinned.webp"
                                alt="Vitória Lima"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute -bottom-6 -right-6 lg:-bottom-10 lg:-right-10 w-full h-full border-2 border-accent/30 rounded-3xl -z-0" />
                        <div className="absolute -top-12 -left-12 text-[12rem] font-display opacity-[0.03] select-none pointer-events-none">VT</div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-7"
                    >
                        <span className="section-subtitle">A Artista</span>
                        <h2 className="section-title text-left leading-[0.95] mb-8 md:mb-10">
                            A alma por trás <br /> <span className="text-accent">do traço.</span>
                        </h2>

                        <div className="space-y-5 md:space-y-6 text-text-muted text-base md:text-lg leading-relaxed max-w-2xl">
                            <p>
                                Especialista em <span className="text-text-main font-semibold">Fineline, Blackwork e temática Geek</span>,
                                Vitória Lima busca transcender o conceito tradicional de tatuagem, unindo delicadeza e
                                expressividade em cada projeto.
                            </p>
                            <p>
                                Baseada em <span className="text-text-main font-semibold italic">Juiz de Fora, MG</span>, seu estúdio é um santuário
                                de criação individualizada. Cada arte é o resultado de uma escuta profunda das vivências do cliente,
                                garantindo exclusividade absoluta.
                            </p>
                            <p>
                                A técnica apurada do fineline encontra a profundidade do blackwork para criar contrastes
                                únicos, enquanto sua paixão pelo universo geek traz referências icônicas para a pele de forma sofisticada.
                            </p>

                            <div className="flex flex-wrap gap-4 md:gap-6 pt-6 md:pt-8">
                                <a
                                    href="https://wa.me/5532998079515"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary gap-3"
                                >
                                    <MessageCircle size={20} />
                                    WhatsApp
                                </a>
                                <a
                                    href="https://instagram.com/vtori.ink"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline gap-3"
                                >
                                    <Instagram size={20} />
                                    Explore o Feed
                                </a>
                            </div>
                        </div>

                        {/* Location badge */}
                        <div className="mt-10 md:mt-16 inline-flex items-center gap-3 md:gap-4 py-2 md:py-3 px-4 md:px-6 glass rounded-full">
                            <span className="w-2.5 h-2.5 bg-accent rounded-full animate-pulse shadow-[0_0_10px_rgba(188,119,188,0.8)]" />
                            <span className="text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] uppercase font-bold">Juiz de Fora • MG</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;

