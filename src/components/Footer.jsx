import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, MessageCircle, MapPin, Mail, ArrowUp, ArrowRight } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary-bg pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-accent/5 to-transparent pointer-events-none" />

            <div className="container relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-24 mb-20">
                    {/* Brand Section */}
                    <div className="lg:col-span-5">
                        <motion.h2
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-4xl md:text-5xl font-display font-bold mb-8"
                        >
                            vtori<span className="text-accent">.ink</span>
                        </motion.h2>
                        <p className="text-text-muted text-lg leading-relaxed mb-10 max-w-md font-light">
                            Transformando narrativas pessoais em arte eterna na pele.
                            Experiência de tatuagem boutique com foco em delicadeza e precisão.
                        </p>
                        <div className="flex gap-5">
                            <motion.a
                                whileHover={{ y: -5, scale: 1.05 }}
                                href="https://instagram.com/vtori.ink"
                                target="_blank"
                                className="w-12 h-12 rounded-2xl glass flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300"
                            >
                                <Instagram size={22} />
                            </motion.a>
                            <motion.a
                                whileHover={{ y: -5, scale: 1.05 }}
                                href="https://wa.me/5532998079515"
                                target="_blank"
                                className="w-12 h-12 rounded-2xl glass flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300"
                            >
                                <MessageCircle size={22} />
                            </motion.a>
                        </div>
                    </div>

                    {/* Links Section */}
                    <div className="lg:col-span-3">
                        <h4 className="text-xs uppercase tracking-[0.4em] font-bold text-accent mb-8">Navegação</h4>
                        <ul className="space-y-4">
                            {['Sobre', 'Portfólio', 'Flashs', 'Agendamento'].map((item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        className="text-text-muted hover:text-text-main flex items-center gap-2 group transition-colors font-light"
                                    >
                                        <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-accent" />
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div className="lg:col-span-4">
                        <h4 className="text-xs uppercase tracking-[0.4em] font-bold text-accent mb-8">Contato & Local</h4>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl glass flex items-center justify-center shrink-0">
                                    <MessageCircle size={18} className="text-accent" />
                                </div>
                                <div>
                                    <p className="text-text-main text-sm font-medium mb-1">WhatsApp</p>
                                    <p className="text-text-muted text-sm font-light">(32) 99807-9515</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl glass flex items-center justify-center shrink-0">
                                    <MapPin size={18} className="text-accent" />
                                </div>
                                <div>
                                    <p className="text-text-main text-sm font-medium mb-1">Localização</p>
                                    <p className="text-text-muted text-sm font-light">Juiz de Fora, Minas Gerais</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl glass flex items-center justify-center shrink-0">
                                    <Mail size={18} className="text-accent" />
                                </div>
                                <div>
                                    <p className="text-text-main text-sm font-medium mb-1">E-mail</p>
                                    <p className="text-text-muted text-sm font-light">contato@vtori.ink</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-[10px] text-text-muted uppercase tracking-[0.3em] font-bold">
                        &copy; {currentYear} VTORI.INK • TODOS OS DIREITOS RESERVADOS.
                    </p>

                    <motion.button
                        onClick={scrollToTop}
                        whileHover={{ y: -5 }}
                        className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] font-bold text-text-muted hover:text-accent transition-colors"
                    >
                        Voltar ao topo
                        <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all">
                            <ArrowUp size={14} />
                        </div>
                    </motion.button>
                </div>
            </div>

            {/* Subtle Gradient Spot */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[100px] rounded-full pointer-events-none" />
        </footer>
    );
};

export default Footer;
