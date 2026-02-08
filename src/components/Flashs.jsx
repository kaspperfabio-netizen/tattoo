import React from 'react';
import { motion } from 'framer-motion';

const Flashs = () => {
    const flashs = [
        {
            id: 1,
            title: 'Blackwork Spider',
            price: 'Orçar',
            size: '15cm',
            available: true,
            src: 'https://images.unsplash.com/photo-1550537687-c91072c4792d?auto=format&fit=crop&q=80&w=800'
        },
        {
            id: 2,
            title: 'Botanical Dagger',
            price: 'Orçar',
            size: '12cm',
            available: false,
            src: 'https://images.unsplash.com/photo-1542151122-832f22b70f0f?auto=format&fit=crop&q=80&w=800'
        },
        {
            id: 3,
            title: 'Cyber Sigil',
            price: 'Orçar',
            size: '20cm',
            available: true,
            src: 'https://images.unsplash.com/photo-1605647540924-852290f6b0d5?auto=format&fit=crop&q=80&w=800'
        },
        {
            id: 4,
            title: 'Mini Ghibli Spirit',
            price: 'Orçar',
            size: '5cm',
            available: true,
            src: 'https://images.unsplash.com/photo-1611501655038-c29a3d0d7498?auto=format&fit=crop&q=80&w=800'
        },
    ];

    return (
        <section id="flashs" className="bg-secondary-bg">
            <div className="container">
                <div className="section-header">
                    <span className="section-subtitle">Exclusivos</span>
                    <h2 className="section-title">Flashs Disponíveis</h2>
                    <p className="max-w-xl mx-auto text-text-muted text-lg">
                        Designs autorais prontos para serem tatuados. Projetos únicos que não se repetem.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {flashs.map((flash) => (
                        <motion.div
                            key={flash.id}
                            whileHover={{ y: -12 }}
                            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                            className="bg-card-bg border border-neutral-800 rounded-2xl overflow-hidden flex flex-col group glass"
                        >
                            <div className="aspect-square bg-neutral-900 relative overflow-hidden">
                                <img
                                    src={flash.src}
                                    alt={flash.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Available Badge */}
                                <div className={`absolute top-4 left-4 text-[9px] px-3 py-1 rounded-full uppercase tracking-widest font-bold glass ${flash.available ? 'text-green-400 border-green-400/30' : 'text-red-400 border-red-400/30'}`}>
                                    {flash.available ? 'Disponível' : 'Reservado'}
                                </div>
                            </div>

                            <div className="p-8">
                                <h3 className="text-xl font-display mb-2">{flash.title}</h3>
                                <div className="flex justify-between items-center text-sm mb-6">
                                    <span className="text-text-muted">Tam: {flash.size}</span>
                                    <span className="text-accent font-bold tracking-widest uppercase text-xs">{flash.price}</span>
                                </div>
                                <button
                                    disabled={!flash.available}
                                    className={`w-full btn text-[10px] ${flash.available ? 'btn-primary' : 'bg-neutral-800 text-neutral-600 cursor-not-allowed border-neutral-700'}`}
                                >
                                    {flash.available ? 'Eu quero este' : 'Indisponível'}
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Flashs;

