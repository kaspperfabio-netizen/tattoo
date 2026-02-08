import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const SuccessView = ({ onReset }) => {
    return (
        <div className="success-container">
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', damping: 10 }}
            >
                <CheckCircle2 size={80} className="success-icon" />
            </motion.div>
            <h3 className="success-title font-display">Pedido Enviado!</h3>
            <p className="success-text">
                Vitória recebeu suas informações e entrará em contato via WhatsApp em breve para conversar sobre seu projeto.
            </p>
            <button onClick={onReset} className="btn btn-primary">
                Fazer outro pedido
            </button>
        </div>
    );
};

export default SuccessView;
