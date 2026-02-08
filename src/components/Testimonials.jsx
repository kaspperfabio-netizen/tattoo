import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        { id: 1, name: 'Ana Souza', city: 'JF', text: 'Experiência incrível. O traço da Vitória é impecável, super delicado!', stars: 5 },
        { id: 2, name: 'Lucas Rocha', city: 'MG', text: 'Minha primeira tatuagem e não poderia ter escolhido melhor. Atendimento nota 10.', stars: 5 },
        { id: 3, name: 'Marina L.', city: 'JF', text: 'O estúdio é lindo e o trabalho dela no Fineline é de outro nível. Recomendo!', stars: 5 },
    ];

    return (
        <section id="depoimentos">
            <div className="container">
                <div className="section-header">
                    <span className="section-subtitle">Feedback</span>
                    <h2 className="section-title">O que dizem os clientes</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t) => (
                        <motion.div
                            key={t.id}
                            whileHover={{ y: -5 }}
                            className="bg-card-bg p-8 border border-neutral-800 rounded-sm relative"
                        >
                            <Quote className="absolute top-6 right-8 text-accent/10" size={48} />

                            <div className="flex gap-1 mb-4">
                                {[...Array(t.stars)].map((_, i) => (
                                    <Star key={i} size={14} fill="var(--cta)" className="text-cta" />
                                ))}
                            </div>

                            <p className="text-text-muted italic mb-6">"{t.text}"</p>

                            <div>
                                <h4 className="font-display font-bold">{t.name}</h4>
                                <span className="text-[10px] uppercase tracking-widest text-accent">{t.city}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
