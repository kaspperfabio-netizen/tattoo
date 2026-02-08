import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
    const faqs = [
        {
            id: 'item-1',
            question: 'Como funciona o agendamento?',
            answer: 'O agendamento começa pelo formulário no final desta página. Após receber seu briefing, entro em contato via WhatsApp para alinhar detalhes, enviar o orçamento e agendar o horário mediante sinal.'
        },
        {
            id: 'item-2',
            question: 'Dói muito fazer uma tatuagem Fineline?',
            answer: 'A dor é subjetiva, mas como o Fineline utiliza agulhas mais finas e menos profundas que o tradicional, a sensação tende a ser mais amena. O conforto do cliente é minha prioridade durante todo o processo.'
        },
        {
            id: 'item-3',
            question: 'Você faz artes exclusivas?',
            answer: 'Sim! Todos os projetos que não são "Flashs" são desenvolvidos do zero para cada cliente, garantindo que sua tatuagem seja única e tenha um significado pessoal.'
        },
        {
            id: 'item-4',
            question: 'Quais os cuidados pós-tatuagem?',
            answer: 'Você receberá um guia completo de cuidados. Em resumo: higienização neutra, hidratação específica e evitar sol, piscina e alimentos gordurosos nos primeiros 15 dias.'
        }
    ];

    return (
        <section className="bg-primary-bg py-24">
            <div className="container max-w-4xl">
                <div className="section-header">
                    <span className="section-subtitle">Dúvidas</span>
                    <h2 className="section-title">Perguntas Frequentes</h2>
                </div>

                <Accordion.Root type="single" collapsible className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <motion.div
                            key={faq.id}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <Accordion.Item value={faq.id} className="glass rounded-3xl overflow-hidden border-white/5 hover:border-accent/20 transition-all">
                                <Accordion.Header>
                                    <Accordion.Trigger className="flex w-full items-center justify-between p-6 md:p-8 text-left group">
                                        <span className="text-base md:text-lg font-display font-medium">{faq.question}</span>
                                        <ChevronDown className="text-accent transition-transform duration-300 group-data-[state=open]:rotate-180" size={20} />
                                    </Accordion.Trigger>
                                </Accordion.Header>
                                <Accordion.Content className="p-8 pt-0 text-text-muted leading-relaxed font-light border-t border-white/5 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                                    <div className="pt-4">{faq.answer}</div>
                                </Accordion.Content>
                            </Accordion.Item>
                        </motion.div>
                    ))}
                </Accordion.Root>
            </div>
        </section>
    );
};

export default FAQ;
