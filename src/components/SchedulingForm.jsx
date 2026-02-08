import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Upload, CheckCircle2 } from 'lucide-react';

const SchedulingForm = () => {
    const [formState, setFormState] = useState('idle'); // idle, loading, success, error
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        whatsapp: '',
        estilo: 'Fineline',
        descricao: '',
        referencia: null
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormState('loading');

        // Simulate API call
        setTimeout(() => {
            setFormState('success');
            // Reset after success
            setTimeout(() => setFormState('idle'), 5000);
        }, 2000);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    if (formState === 'success') {
        return (
            <div className="flex flex-col items-center justify-center p-12 text-center h-full">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', damping: 10 }}
                >
                    <CheckCircle2 size={80} className="text-green-500 mb-6" />
                </motion.div>
                <h3 className="text-3xl font-display mb-4">Pedido Enviado!</h3>
                <p className="text-text-muted mb-8">
                    Vitória recebeu suas informações e entrará em contato via WhatsApp em breve para conversar sobre seu projeto.
                </p>
                <button onClick={() => setFormState('idle')} className="btn btn-primary">
                    Fazer outro pedido
                </button>
            </div>
        );
    }

    return (
        <section id="agendamento" className="bg-secondary-bg relative">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12 translate-x-1/2 pointer-events-none" />

            <div className="container relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-subtitle">Orçamento</span>
                        <h2 className="section-title text-left mt-2">Agende sua Tattoo</h2>
                        <p className="text-text-muted mb-10 max-w-lg">
                            Conte-me sua ideia! Preencha o formulário abaixo com o máximo de detalhes.
                            Anexe referências se tiver, isso ajuda muito a entender seu estilo.
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-4 items-start">
                                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                                    <span className="font-bold">01</span>
                                </div>
                                <div>
                                    <h4 className="font-medium text-lg">Briefing</h4>
                                    <p className="text-sm text-text-muted">Explique o que deseja tatuar, o local do corpo e o tamanho aproximado.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                                    <span className="font-bold">02</span>
                                </div>
                                <div>
                                    <h4 className="font-medium text-lg">Orçamento</h4>
                                    <p className="text-sm text-text-muted">Vou analisar seu pedido e enviar o valor estimado e as datas disponíveis.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                                    <span className="font-bold">03</span>
                                </div>
                                <div>
                                    <h4 className="font-medium text-lg">Sinal e Agenda</h4>
                                    <p className="text-sm text-text-muted">Para garantir o horário, solicitamos um sinal que é descontado do valor final.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-card-bg p-8 md:p-10 border border-neutral-800 rounded-sm shadow-2xl"
                    >
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest font-semibold ml-1">Nome Completo</label>
                                <input
                                    required
                                    type="text"
                                    name="nome"
                                    value={formData.nome}
                                    onChange={handleChange}
                                    placeholder="Seu nome"
                                    className="w-full bg-primary-bg border border-neutral-800 p-4 rounded-sm outline-none focus:border-accent transition-colors"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest font-semibold ml-1">WhatsApp</label>
                                <input
                                    required
                                    type="tel"
                                    name="whatsapp"
                                    value={formData.whatsapp}
                                    onChange={handleChange}
                                    placeholder="(00) 00000-0000"
                                    className="w-full bg-primary-bg border border-neutral-800 p-4 rounded-sm outline-none focus:border-accent transition-colors"
                                />
                            </div>
                        </div>

                        <div className="space-y-2 mb-6">
                            <label className="text-xs uppercase tracking-widest font-semibold ml-1">E-mail</label>
                            <input
                                required
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="seu@email.com"
                                className="w-full bg-primary-bg border border-neutral-800 p-4 rounded-sm outline-none focus:border-accent transition-colors"
                            />
                        </div>

                        <div className="space-y-2 mb-6">
                            <label className="text-xs uppercase tracking-widest font-semibold ml-1">Estilo Desejado</label>
                            <select
                                name="estilo"
                                value={formData.estilo}
                                onChange={handleChange}
                                className="w-full bg-primary-bg border border-neutral-800 p-4 rounded-sm outline-none focus:border-accent transition-colors appearance-none"
                            >
                                <option>Fineline</option>
                                <option>Blackwork</option>
                                <option>Geek</option>
                                <option>Outro</option>
                            </select>
                        </div>

                        <div className="space-y-2 mb-6">
                            <label className="text-xs uppercase tracking-widest font-semibold ml-1">Descrição do Projeto</label>
                            <textarea
                                required
                                name="descricao"
                                value={formData.descricao}
                                onChange={handleChange}
                                rows="4"
                                placeholder="Conte sobre a ideia, local do corpo e tamanho aproximado em cm."
                                className="w-full bg-primary-bg border border-neutral-800 p-4 rounded-sm outline-none focus:border-accent transition-colors resize-none"
                            ></textarea>
                        </div>

                        <div className="space-y-2 mb-8">
                            <label className="text-xs uppercase tracking-widest font-semibold ml-1">Anexar Referência (Opcional)</label>
                            <div className="relative">
                                <input
                                    type="file"
                                    id="referencia"
                                    className="hidden"
                                    onChange={(e) => setFormData(prev => ({ ...prev, referencia: e.target.files[0] }))}
                                />
                                <label
                                    htmlFor="referencia"
                                    className="w-full flex items-center justify-center gap-3 bg-primary-bg border-2 border-dashed border-neutral-800 p-8 rounded-sm hover:border-accent hover:bg-accent/5 transition-all cursor-none interactive"
                                >
                                    <Upload size={24} className="text-accent" />
                                    <span className="text-sm text-text-muted">
                                        {formData.referencia ? formData.referencia.name : 'Clique para selecionar arquivos'}
                                    </span>
                                </label>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={formState === 'loading'}
                            className="w-full btn btn-cta gap-3 py-5 text-lg"
                        >
                            {formState === 'loading' ? (
                                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                <>
                                    Enviar Solicitação <Send size={20} />
                                </>
                            )}
                        </button>

                        <p className="mt-6 text-[10px] text-center text-text-muted uppercase tracking-[2px]">
                            Resposta em até 48h via WhatsApp
                        </p>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default SchedulingForm;
