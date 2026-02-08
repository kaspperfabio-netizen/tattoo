import React from 'react';
import { motion } from 'framer-motion';
import { Feather, Contrast, Gamepad2, Info } from 'lucide-react';
import '../styles/Specialties.css';

const specialtiesData = [
    {
        id: 'fineline',
        title: 'Fineline',
        icon: <Feather size={28} />,
        description: [
            'Estilo de tatuagem feito com linhas muito finas e delicadas.',
            'Geralmente usado para desenhos minimalistas, florais, escritos ou detalhes sutis.',
            'Dá um aspecto elegante e discreto.'
        ]
    },
    {
        id: 'blackwork',
        title: 'Blackwork',
        icon: <Contrast size={28} />,
        description: [
            'Tatuagens feitas apenas com tinta preta, sem cores.',
            'Pode variar de grandes áreas preenchidas a padrões geométricos, tribais ou sombreados intensos.',
            'É um estilo forte e marcante, muitas vezes com contraste pesado.'
        ]
    },
    {
        id: 'geek',
        title: 'Geek',
        icon: <Gamepad2 size={28} />,
        description: [
            'Inspiradas na cultura geek/nerd: filmes, séries, quadrinhos, games e tecnologia.',
            'Exemplos: personagens de Star Wars, símbolos de games, referências a animes ou HQs.',
            'É uma forma de expressar paixão por universos fictícios e cultura pop.'
        ]
    }
];

const Specialties = () => {
    return (
        <section id="especialidades" className="specialties-section">
            <div className="specialties-deco specialties-deco-1" />
            <div className="specialties-deco specialties-deco-2" />

            <div className="specialties-container">
                <motion.div
                    className="specialties-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="specialties-subtitle">Expertise Técnica</span>
                    <h2 className="specialties-title">Significados e Estilos</h2>
                </motion.div>

                <div className="specialties-grid">
                    {specialtiesData.map((item, index) => (
                        <motion.div
                            key={item.id}
                            id={`style-${item.id}`}
                            className="specialty-card"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <div className="specialty-icon-wrapper">
                                {item.icon}
                            </div>
                            <h3>{item.title}</h3>
                            <div className="specialty-content">
                                {item.description.map((p, i) => (
                                    <p key={i}>{p}</p>
                                ))}
                            </div>

                            <motion.div
                                className="mt-auto pt-6 flex items-center gap-2 text-accent/60 text-[10px] uppercase tracking-widest font-bold"
                                whileHover={{ x: 5 }}
                            >
                                <Info size={12} />
                                <span>Especialidade vtori.ink</span>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="mt-20 p-8 rounded-3xl bg-accent/5 border border-accent/10 text-center max-w-3xl mx-auto"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <p className="text-text-muted text-sm md:text-base leading-relaxed">
                        👉 Então, quando uma tatuadora se apresenta como <strong>Fineline Blackwork Geek</strong>, ela está dizendo que trabalha com linhas finas e delicadas, com tatuagens em preto sólido, e também com temas ligados ao universo geek/nerd.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Specialties;
