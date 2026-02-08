import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const FixedCTA = () => {
    return (
        <motion.a
            href="#agendamento"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            className="fixed bottom-10 right-10 z-[40] w-16 h-16 bg-cta rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(255,107,107,0.4)] md:flex hidden"
            aria-label="Agendar Orçamento"
        >
            <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute inset-0 bg-cta/30 rounded-full"
            />
            <Calendar size={28} className="text-white relative z-10" />
        </motion.a>
    );
};

export default FixedCTA;
