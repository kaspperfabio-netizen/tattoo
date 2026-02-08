import React from 'react';
import { motion } from 'framer-motion';

const Flashs = () => {
    const flashs = [
        { id: 1, title: 'Blackwork Spider', price: 'Orçar', size: '15cm', available: true },
        { id: 2, title: 'Botanical Dagger', price: 'Orçar', size: '12cm', available: false },
        { id: 3, title: 'Cyber Sigil', price: 'Orçar', size: '20cm', available: true },
        { id: 4, title: 'Mini Ghibli Spirit', price: 'Orçar', size: '5cm', available: true },
    ];

    return (
        <section id="flashs">
            <div className="container">
                <div className="section-header">
                    <span className="section-subtitle">Exclusivos</span>
                    <h2 className="section-title">Flashs Disponíveis</h2>
                    <p className="max-w-xl mx-auto text-text-muted">
                        Designs autorais prontos para serem tatuados. Projetos únicos que não se repetem.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {flashs.map((flash) => (
                        <motion.div
                            key={flash.id}
                            whileHover={{ y: -10 }}
                            className="bg-card-bg border border-neutral-800 rounded-sm overflow-hidden flex flex-col group"
                        >
                            <div className="aspect-square bg-neutral-900 relative overflow-hidden flex items-center justify-center">
                                <div className="italic text-text-muted/30">Flash Design #{flash.id}</div>

                                {/* Available Badge */}
                                <div className={`absolute top-4 left-4 text-[10px] px-2 py-1 rounded-full uppercase tracking-widest font-bold ${flash.available ? 'bg-green-600/20 text-green-400 border border-green-600/40' : 'bg-red-600/20 text-red-400 border border-red-600/40'
                                    }`}>
                                    {flash.available ? 'Disponível' : 'Indisponível'}
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl mb-1">{flash.title}</h3>
                                <div className="flex justify-between items-center text-sm text-text-muted mb-4">
                                    <span>Tam: {flash.size}</span>
                                    <span className="text-gold font-bold">{flash.price}</span>
                                </div>
                                <button
                                    disabled={!flash.available}
                                    className={`w-full btn text-xs ${flash.available ? 'btn-primary' : 'bg-neutral-800 text-neutral-600 cursor-not-allowed'
                                        }`}
                                >
                                    {flash.available ? 'Eu quero este' : 'Reservado'}
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
