import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, MessageCircle } from 'lucide-react';

const About = () => {
    return (
        <section id="sobre" className="bg-secondary-bg">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        {/* Main Editorial Photo Placeholder */}
                        <div className="aspect-[3/4] bg-neutral-800 rounded-sm overflow-hidden relative group">
                            <div className="absolute inset-0 bg-accent/10 group-hover:bg-transparent transition-colors duration-500" />
                            <div className="flex items-center justify-center h-full text-text-muted italic">
                                Foto Editorial - Vitória Lima
                            </div>
                        </div>
                        {/* Decorative frame */}
                        <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-accent -z-10 rounded-sm" />
                        <div className="absolute -top-10 -left-10 text-8xl font-display opacity-5 select-none">VT</div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="section-subtitle">A Artista</span>
                        <h2 className="section-title text-left mt-4 mb-8">Vitória Lima</h2>

                        <div className="space-y-6 text-text-muted leading-relaxed">
                            <p>
                                Especialista em <span className="text-text-main font-medium">Fineline, Blackwork e temática Geek</span>,
                                Vitória Lima busca transcender o conceito tradicional de tatuagem, unindo delicadeza e
                                expresividade em cada traço.
                            </p>
                            <p>
                                Baseada em <span className="text-accent font-medium">Juiz de Fora, MG</span>, seu estúdio é um espaço
                                de criação individualizada, onde cada projeto é desenvolvido ouvindo as vivências do cliente,
                                resultando em artes autorais e exclusivas.
                            </p>
                            <p>
                                A técnica apurada do fineline encontra a profundidade do blackwork para criar contrastes
                                únicos, enquanto sua paixão pelo universo geek traz referências icônicas para a pele.
                            </p>

                            <div className="flex flex-wrap gap-4 pt-6">
                                <a
                                    href="https://wa.me/5532XXXXXXXXX"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary gap-2"
                                >
                                    <MessageCircle size={18} />
                                    WhatsApp
                                </a>
                                <a
                                    href="https://instagram.com/vtori.ink"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline gap-2"
                                >
                                    <Instagram size={18} />
                                    @vtori.ink
                                </a>
                            </div>
                        </div>

                        {/* Localization badge */}
                        <div className="mt-12 inline-flex items-center gap-3 py-2 px-4 bg-primary-bg rounded-full border border-neutral-800">
                            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                            <span className="text-xs tracking-widest uppercase font-medium">Juiz de Fora • MG</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
