import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar } from 'lucide-react';

const FixedCTA = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.a
            href="#agendamento"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8, type: 'spring' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="fixed bottom-8 right-8 z-[150] flex items-center gap-3 group"
            aria-label="Agendar Orçamento"
        >
            <AnimatePresence>
                {isHovered && (
                    <motion.span
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="bg-white text-black text-[10px] font-bold tracking-widest px-4 py-2 rounded-full shadow-2xl uppercase hidden md:block"
                    >
                        Solicitar Orçamento
                    </motion.span>
                )}
            </AnimatePresence>

            <div className="relative">
                <motion.div
                    animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.1, 0.3] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    className="absolute inset-[-10px] bg-accent rounded-full -z-10"
                />
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-tr from-accent-deep to-accent rounded-full flex items-center justify-center shadow-[0_15px_30px_rgba(188,119,188,0.4)] border border-white/20 relative z-10 transition-transform duration-500 group-hover:scale-110">
                    <Calendar size={24} className="text-white" />
                </div>
            </div>
        </motion.a>
    );
};

export default FixedCTA;
