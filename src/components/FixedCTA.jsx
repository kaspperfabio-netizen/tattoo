import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MessageCircle } from 'lucide-react';

const FixedCTA = () => {
    const [hoveredBtn, setHoveredBtn] = useState(null);

    const buttons = [
        {
            id: 'whatsapp',
            icon: <MessageCircle size={22} />,
            href: 'https://wa.me/5532998079515',
            label: 'WhatsApp',
            color: 'from-[#25D366] to-[#128C7E]',
            shadow: 'rgba(37, 211, 102, 0.4)'
        },
        {
            id: 'agendamento',
            icon: <Calendar size={22} />,
            href: '#agendamento',
            label: 'Orçamento',
            color: 'from-accent-deep to-accent',
            shadow: 'rgba(188, 119, 188, 0.4)'
        }
    ];

    return (
        <div className="fixed bottom-8 right-8 z-[150] flex flex-row-reverse gap-5 items-center">
            {buttons.map((btn, idx) => (
                <motion.a
                    key={btn.id}
                    href={btn.href}
                    target={btn.id === 'whatsapp' ? "_blank" : undefined}
                    rel={btn.id === 'whatsapp' ? "noopener noreferrer" : undefined}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        delay: 1.5 + (idx * 0.1),
                        duration: 0.6,
                        type: 'spring',
                        stiffness: 100
                    }}
                    onMouseEnter={() => setHoveredBtn(btn.id)}
                    onMouseLeave={() => setHoveredBtn(null)}
                    className="flex flex-col items-center group relative cursor-none interactive"
                    aria-label={btn.label}
                >
                    <AnimatePresence>
                        {hoveredBtn === btn.id && (
                            <motion.span
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: -20 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="absolute bottom-full mb-2 bg-white text-black text-[8px] font-bold tracking-[0.2em] px-3 py-1.5 rounded-full shadow-2xl uppercase whitespace-nowrap z-50 pointer-events-none"
                            >
                                {btn.label}
                            </motion.span>
                        )}
                    </AnimatePresence>

                    <div className="relative">
                        <motion.div
                            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.1, 0.3] }}
                            transition={{ repeat: Infinity, duration: 3 }}
                            className={`absolute inset-[-6px] bg-gradient-to-tr ${btn.color} rounded-full -z-10 blur-[4px]`}
                        />
                        <div className={`w-12 h-12 bg-gradient-to-tr ${btn.color} rounded-full flex items-center justify-center shadow-[0_10px_20px_${btn.shadow}] border border-white/20 relative z-10 transition-transform duration-500 group-hover:scale-110`}>
                            <div className="text-white">
                                {btn.icon}
                            </div>
                        </div>
                    </div>
                </motion.a>
            ))}
        </div>
    );
};

export default FixedCTA;
