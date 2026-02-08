import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Send, Upload, CheckCircle2 } from 'lucide-react';
import * as Label from '@radix-ui/react-label';
import { toast } from 'sonner';
import { schedulingSchema } from '../lib/schemas';
import { cn } from '../lib/utils';
import '../styles/SchedulingForm.css';

const SchedulingForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        watch
    } = useForm({
        resolver: zodResolver(schedulingSchema),
        defaultValues: {
            estilo: 'Fineline'
        }
    });

    const file = watch('referencia');

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        console.log("Form Data:", data);

        try {
            // Simulando API
            await new Promise(resolve => setTimeout(resolve, 2000));
            setIsSuccess(true);
            toast.success('Solicitação enviada com sucesso! Responderei em breve.');
            reset();
        } catch (error) {
            toast.error('Ocorreu um erro ao enviar. Tente novamente.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <section className="scheduling-section flex items-center justify-center py-20">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="success-container glass p-16 rounded-[3rem] text-center max-w-2xl mx-auto"
                >
                    <CheckCircle2 size={80} className="text-accent mx-auto mb-8" />
                    <h2 className="success-title mb-4">Solicitação Recebida!</h2>
                    <p className="success-text mb-8">
                        Obrigada pelo contato! Vou analisar sua ideia com muito carinho e te respondo no WhatsApp em até 48 horas.
                    </p>
                    <button
                        onClick={() => setIsSuccess(false)}
                        className="btn btn-primary px-10"
                    >
                        Novo Agendamento
                    </button>
                </motion.div>
            </section>
        );
    }

    return (
        <section id="agendamento" className="scheduling-section">
            <div className="scheduling-bg-decoration" />

            <div className="container relative z-10">
                <div className="scheduling-grid">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-subtitle">Orçamento</span>
                        <h2 className="section-title scheduling-info-title">Agende sua Tattoo</h2>
                        <p className="scheduling-info-text">
                            Conte-me sua ideia! Preencha o formulário abaixo com o máximo de detalhes.
                        </p>

                        <div className="scheduling-steps">
                            <Step number="01" title="Briefing" text="Explique o que deseja tatuar e o local do corpo." />
                            <Step number="02" title="Análise" text="Vou analisar seu pedido e enviar o valor estimado." />
                            <Step number="03" title="Reserva" text="Escolhemos a data e garantimos seu horário." />
                        </div>
                    </motion.div>

                    <motion.form
                        onSubmit={handleSubmit(onSubmit)}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="scheduling-form"
                    >
                        <div className="form-row">
                            <div className="form-group">
                                <Label.Root className="form-label">Nome Completo</Label.Root>
                                <input
                                    {...register('nome')}
                                    placeholder="Seu nome"
                                    className={cn("form-input", errors.nome && "border-red-500/50")}
                                />
                                {errors.nome && <span className="text-[10px] text-red-400 mt-1 uppercase tracking-widest">{errors.nome.message}</span>}
                            </div>

                            <div className="form-group">
                                <Label.Root className="form-label">WhatsApp</Label.Root>
                                <input
                                    {...register('whatsapp')}
                                    placeholder="(00) 00000-0000"
                                    className={cn("form-input", errors.whatsapp && "border-red-500/50")}
                                />
                                {errors.whatsapp && <span className="text-[10px] text-red-400 mt-1 uppercase tracking-widest">{errors.whatsapp.message}</span>}
                            </div>
                        </div>

                        <div className="form-group">
                            <Label.Root className="form-label">E-mail</Label.Root>
                            <input
                                {...register('email')}
                                placeholder="seu@email.com"
                                className={cn("form-input", errors.email && "border-red-500/50")}
                            />
                            {errors.email && <span className="text-[10px] text-red-400 mt-1 uppercase tracking-widest">{errors.email.message}</span>}
                        </div>

                        <div className="form-group">
                            <Label.Root className="form-label">Estilo Desejado</Label.Root>
                            <select {...register('estilo')} className="form-select">
                                <option value="Fineline">Fineline</option>
                                <option value="Blackwork">Blackwork</option>
                                <option value="Geek">Geek</option>
                                <option value="Outro">Outro</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <Label.Root className="form-label">Descrição do Projeto</Label.Root>
                            <textarea
                                {...register('descricao')}
                                rows="4"
                                placeholder="Conte sobre a ideia, local e tamanho (cm)."
                                className={cn("form-textarea", errors.descricao && "border-red-500/50")}
                            />
                            {errors.descricao && <span className="text-[10px] text-red-400 mt-1 uppercase tracking-widest">{errors.descricao.message}</span>}
                        </div>

                        <div className="file-upload-container">
                            <Label.Root className="form-label">Anexar Referência</Label.Root>
                            <input
                                type="file"
                                id="referencia"
                                className="hidden"
                                {...register('referencia')}
                            />
                            <Label.Root
                                htmlFor="referencia"
                                className="file-upload-label interactive group"
                            >
                                <Upload size={24} className="text-accent group-hover:scale-110 transition-transform" />
                                <span className="file-upload-text">
                                    {file?.[0] ? file[0].name : 'Clique para selecionar arquivos'}
                                </span>
                            </Label.Root>
                        </div>

                        <div className="flex flex-col gap-4 mt-8">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="btn btn-primary w-full flex items-center justify-center gap-2 h-14"
                            >
                                {isSubmitting ? (
                                    <div className="spinner" />
                                ) : (
                                    <>
                                        Enviar via WhatsApp <Send size={20} />
                                    </>
                                )}
                            </button>

                            <a
                                href="https://calendly.com/vtori-ink"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline border-white/10 w-full flex items-center justify-center gap-2 h-14"
                            >
                                Agendar via Calendly
                            </a>
                        </div>

                        <p className="form-footer-note">
                            Resposta em até 48h via WhatsApp
                        </p>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

const Step = ({ number, title, text }) => (
    <div className="step-item">
        <div className="step-number">
            <span>{number}</span>
        </div>
        <div className="step-content">
            <h4>{title}</h4>
            <p>{text}</p>
        </div>
    </div>
);

export default SchedulingForm;
