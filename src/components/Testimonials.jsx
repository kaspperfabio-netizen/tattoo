import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    const testimonials = [
        {
            id: 1,
            name: 'Ana Souza',
            city: 'Juiz de Fora',
            text: 'Experiência incrível de verdade. O traço da Vitória é impecável, super delicado e ela me deixou muito à vontade. Já estou planejando a próxima!',
            stars: 5,
            photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100'
        },
        {
            id: 2,
            name: 'Lucas Rocha',
            city: 'Muriaé',
            text: 'Minha primeira tatuagem e não poderia ter escolhido melhor artista. O estúdio é impecável e a arte ficou melhor do que eu imaginei.',
            stars: 5,
            photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100'
        },
        {
            id: 3,
            name: 'Marina L.',
            city: 'Juiz de Fora',
            text: 'O estúdio é um santuário! O trabalho dela no Fineline é de outro nível, parece uma pintura de tão detalhado. Recomendo de olhos fechados.',
            stars: 5,
            photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100'
        },
        {
            id: 4,
            name: 'Pedro M.',
            city: 'Belo Horizonte',
            text: 'Traço firme e cicatrização perfeita. A Vitória é extremamente profissional e o atendimento é impecável.',
            stars: 5,
            photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100'
        }
    ];

    return (
        <section id="depoimentos" className="bg-secondary-bg overflow-hidden">
            <div className="container">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="text-left">
                        <span className="section-subtitle">Feedback</span>
                        <h2 className="section-title text-left mb-0 mt-2">O que dizem os clientes</h2>
                    </div>

                    <div className="flex gap-4">
                        <button onClick={scrollPrev} className="p-4 glass rounded-full hover:bg-accent/20 transition-all"><ChevronLeft /></button>
                        <button onClick={scrollNext} className="p-4 glass rounded-full hover:bg-accent/20 transition-all"><ChevronRight /></button>
                    </div>
                </div>

                <div className="embla" ref={emblaRef}>
                    <div className="embla__container flex gap-10">
                        {testimonials.map((t) => (
                            <div key={t.id} className="embla__slide flex-none w-full md:w-[450px]">
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="bg-card-bg p-10 rounded-[2.5rem] relative glass border-accent/10 hover:border-accent/30 transition-all duration-500 h-full"
                                >
                                    <Quote className="absolute top-10 right-10 text-accent/5" size={60} />

                                    <div className="flex gap-1 mb-6">
                                        {[...Array(t.stars)].map((_, i) => (
                                            <Star key={i} size={16} fill="var(--accent)" className="text-accent" />
                                        ))}
                                    </div>

                                    <p className="text-text-muted italic text-lg mb-10 leading-relaxed font-light">"{t.text}"</p>

                                    <div className="flex items-center gap-4">
                                        <img src={t.photo} alt={t.name} className="w-12 h-12 rounded-full object-cover grayscale" />
                                        <div>
                                            <h4 className="font-display font-bold text-lg">{t.name}</h4>
                                            <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold">{t.city}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
