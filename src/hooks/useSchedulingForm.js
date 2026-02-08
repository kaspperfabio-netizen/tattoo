import { useState } from 'react';

/**
 * Hook customizado para gerenciar o estado e lógica do formulário de agendamento.
 */
export const useSchedulingForm = () => {
    const [formState, setFormState] = useState('idle'); // idle, loading, success, error
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        whatsapp: '',
        estilo: 'Fineline',
        descricao: '',
        referencia: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setFormData(prev => ({ ...prev, referencia: e.target.files[0] }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormState('loading');

        try {
            // Simulação de chamada de API
            await new Promise(resolve => setTimeout(resolve, 2000));
            setFormState('success');

            // Resetar formulário após 5 segundos
            setTimeout(() => {
                setFormState('idle');
                setFormData({
                    nome: '',
                    email: '',
                    whatsapp: '',
                    estilo: 'Fineline',
                    descricao: '',
                    referencia: null
                });
            }, 5000);
        } catch {
            setFormState('error');
        }
    };

    const resetForm = () => setFormState('idle');

    return {
        formData,
        formState,
        handleChange,
        handleFileChange,
        handleSubmit,
        resetForm
    };
};
