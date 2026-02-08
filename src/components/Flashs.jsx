import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ShoppingBag } from 'lucide-react';
import { cn } from '../lib/utils';

const Flashs = () => {
    const flashs = [
        {
            id: 1,
            title: 'Lua Crescente',
            price: 'Orçar',
            size: '5x8cm',
            available: true,
            src: '/assets/instagram/post1_pinned.webp'
        },
        {
            id: 2,
            title: 'Serpente Minimalista',
            price: 'Orçar',
            size: '6x10cm',
            available: true,
            src: '/assets/instagram/post2_cobertura.webp'
        },
        {
            id: 3,
            title: 'Flor Geométrica',
            price: 'Orçar',
            size: '7x7cm',
            available: false,
            src: '/assets/instagram/reel1_girassol.jpg'
        },
        {
            id: 4,
            title: 'Borboleta Delicada',
            price: 'Orçar',
            size: '5x6cm',
            available: true,
            src: '/assets/instagram/reel2_butterfly.jpg'
        },
        {
            id: 5,
            title: 'Dragão Minimalista',
            price: 'Orçar',
            size: '8x10cm',
            available: true,
            src: '/assets/instagram/post8_kakashi.webp'
        },
        {
            id: 6,
            title: 'Black Cat Mini',
            price: 'Orçar',
            size: '6x6cm',
            available: false,
            src: '/assets/instagram/post5_cat.webp'
        }
    ];

    return (
        <section id="flashs" className="bg-secondary-bg overflow-hidden">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-header"
                >
                    <span className="section-subtitle">Exclusivos</span>
                    <h2 className="section-title">Flashs Disponíveis</h2>
                    <p className="max-w-xl mx-auto text-text-muted text-lg font-light leading-relaxed">
                        Designs autorais prontos para serem tatuados. Projetos únicos que não se repetem.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {flashs.map((flash, idx) => (
                        <motion.div
                            key={flash.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-card-bg rounded-[2.5rem] overflow-hidden flex flex-col group glass border-white/[0.05] hover:border-accent/30 transition-all duration-500"
                        >
                            <div className="aspect-[4/5] bg-neutral-900 relative overflow-hidden">
                                <img
                                    src={flash.src}
                                    alt={flash.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                                />

                                <div className={cn(
                                    "absolute top-6 left-6 text-[9px] px-4 py-1.5 rounded-full uppercase tracking-widest font-bold backdrop-blur-xl border border-white/10 shadow-xl z-20",
                                    flash.available ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'
                                )}>
                                    {flash.available ? 'Disponível' : 'Indisponível'}
                                </div>

                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            <div className="p-8">
                                <h3 className="text-xl md:text-2xl font-display mb-3 group-hover:text-accent transition-colors">{flash.title}</h3>
                                <div className="flex justify-between items-center text-sm mb-8">
                                    <span className="text-text-muted font-light">Tamanho: {flash.size}</span>
                                    <span className="text-accent-deep font-bold tracking-[0.2em] uppercase text-[10px] bg-accent/10 px-3 py-1 rounded-full">{flash.price}</span>
                                </div>
                                <a
                                    href={flash.available ? "#agendamento" : undefined}
                                    className={cn(
                                        "w-full btn text-[10px] tracking-widest font-bold h-12",
                                        flash.available
                                            ? 'btn-outline border-accent/20 hover:border-accent hover:bg-accent/10'
                                            : 'bg-white/5 text-white/20 cursor-not-allowed border-transparent'
                                    )}
                                >
                                    {flash.available ? 'RESERVAR AGORA' : 'INDISPONÍVEL'}
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-20 text-center"
                >
                    <div className="inline-flex flex-col md:flex-row items-center gap-6 glass p-8 md:p-10 rounded-[2.5rem] border-accent/10">
                        <div className="text-left">
                            <h4 className="text-xl font-display mb-2">Quer uma arte personalizada?</h4>
                            <p className="text-sm text-text-muted font-light">Desenvolvo projetos exclusivos baseados na sua história.</p>
                        </div>
                        <a href="#agendamento" className="btn btn-primary px-8 flex items-center gap-3">
                            Criar meu projeto <Sparkles size={18} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section >
    );
};

export default Flashs;
