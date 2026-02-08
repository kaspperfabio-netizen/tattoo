import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Sobre', href: '#sobre' },
        { name: 'Portfólio', href: '#portfolio' },
        { name: 'Flashs', href: '#flashs' },
        { name: 'Depoimentos', href: '#depoimentos' },
        { name: 'Agendamento', href: '#agendamento' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-secondary-bg/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
                }`}
        >
            <div className="container flex justify-between items-center">
                <motion.a
                    href="#"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-2xl font-bold font-display"
                >
                    vtori<span className="text-accent">.</span>ink
                </motion.a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium hover:text-accent transition-colors tracking-widest uppercase"
                        >
                            {link.name}
                        </a>
                    ))}
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-accent/10 transition-colors"
                        aria-label="Alternar tema"
                    >
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <a href="#agendamento" className="btn btn-primary py-2 px-6 text-xs">
                        Orçamento
                    </a>
                </div>

                {/* Mobile Controls */}
                <div className="flex md:hidden items-center gap-4">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full"
                        aria-label="Alternar tema"
                    >
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 text-main"
                        aria-label="Abrir menu"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-0 bg-primary-bg z-40 flex flex-col items-center justify-center gap-8 md:hidden"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-3xl font-display hover:text-accent transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#agendamento"
                            onClick={() => setIsOpen(false)}
                            className="btn btn-cta mt-4"
                        >
                            Pedir Orçamento
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
