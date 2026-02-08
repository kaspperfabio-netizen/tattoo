import React from 'react';
import { Instagram, MessageCircle, MapPin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-primary-bg pt-20 pb-10 border-t border-neutral-800">
            <div className="container">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="md:col-span-2">
                        <h2 className="text-3xl font-display mb-6">vtori<span className="text-accent">.</span>ink</h2>
                        <p className="text-text-muted max-w-sm mb-8">
                            Transformando vivências em arte na pele. Especialista em técnicas de fineline e blackwork em Juiz de Fora, MG.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center hover:bg-accent border-accent transition-all">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center hover:bg-accent border-accent transition-all">
                                <MessageCircle size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 uppercase tracking-widest text-xs">Navegação</h4>
                        <ul className="space-y-4 text-text-muted text-sm">
                            <li><a href="#sobre" className="hover:text-accent transition-colors">Sobre</a></li>
                            <li><a href="#portfolio" className="hover:text-accent transition-colors">Portfólio</a></li>
                            <li><a href="#flashs" className="hover:text-accent transition-colors">Flashs</a></li>
                            <li><a href="#agendamento" className="hover:text-accent transition-colors">Agendamento</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 uppercase tracking-widest text-xs">Contato</h4>
                        <ul className="space-y-4 text-text-muted text-sm">
                            <li className="flex items-center gap-3">
                                <MapPin size={16} className="text-accent" /> Juiz de Fora, MG
                            </li>
                            <li className="flex items-center gap-3">
                                <MessageCircle size={16} className="text-accent" /> (32) 9XXXX-XXXX
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={16} className="text-accent" /> contato@vtori.ink
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[10px] text-text-muted uppercase tracking-[2px]">
                        &copy; {new Date().getFullYear()} vtori.ink. TODOS OS DIREITOS RESERVADOS.
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="group flex items-center gap-2 text-[10px] uppercase tracking-[2px] text-text-muted hover:text-accent transition-colors"
                    >
                        Voltar ao topo <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
