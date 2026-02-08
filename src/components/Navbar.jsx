import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Instagram } from 'lucide-react';
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
        { name: 'Início', href: '#' },
        { name: 'Sobre', href: '#sobre' },
        { name: 'Portfólio', href: '#portfolio' },
        { name: 'Instagram', href: '#instagramfeed' },
        { name: 'Flashs', href: '#flashs' },
        { name: 'Depoimentos', href: '#depoimentos' },
    ];

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out border-b border-transparent ${isScrolled ? 'glass backdrop-blur-md shadow-2xl py-2 border-white/5' : 'bg-transparent py-4'
                    }`}
            >
                <div className="container px-6 md:px-12">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        {/* Logo */}
                        <motion.a
                            href="#"
                            className="flex items-center group relative z-50"
                            whileHover={{ scale: 1.02 }}
                            aria-label="Vtori Link Home"
                        >
                            <span className="font-display font-medium text-xl md:text-2xl tracking-tight text-white group-hover:text-accent transition-colors duration-300">vtori</span>
                            <span className="font-cursive text-accent text-3xl md:text-4xl ml-1 relative top-1 group-hover:text-white transition-colors duration-300">.ink</span>
                        </motion.a>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-10">
                            {navLinks.map((link, idx) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    className="text-[10px] uppercase tracking-[0.25em] font-bold text-white/60 hover:text-accent transition-colors relative group py-2"
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + idx * 0.05 }}
                                >
                                    {link.name}
                                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent group-hover:w-full transition-all duration-500 ease-out" />
                                </motion.a>
                            ))}
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-4">
                            <motion.a
                                href="https://instagram.com/vtori.ink"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hidden md:flex items-center justify-center w-8 h-8 rounded-full border border-white/10 hover:border-accent/40 bg-white/5 hover:bg-accent/10 transition-all text-white/70 hover:text-accent"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Instagram size={14} />
                            </motion.a>

                            <motion.button
                                onClick={toggleTheme}
                                className="hidden md:flex items-center justify-center w-8 h-8 rounded-full border border-white/10 hover:border-accent/40 bg-white/5 hover:bg-accent/10 transition-all text-white/70 hover:text-accent"
                                whileHover={{ scale: 1.05, rotate: 180 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
                            </motion.button>

                            <a
                                href="#agendamento"
                                className="hidden lg:inline-flex btn btn-cta text-[10px] tracking-[0.2em] font-bold px-6 py-2 shadow-[0_0_20px_rgba(255,107,107,0.2)] hover:shadow-[0_0_30px_rgba(255,107,107,0.4)]"
                            >
                                AGENDAR
                            </a>

                            {/* Mobile Menu Button */}
                            <motion.button
                                onClick={() => setIsOpen(!isOpen)}
                                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full glass border border-white/10 relative z-50 text-white"
                                whileTap={{ scale: 0.9 }}
                            >
                                <AnimatePresence mode="wait">
                                    {isOpen ? (
                                        <motion.div
                                            key="close"
                                            initial={{ rotate: -90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: 90, opacity: 0 }}
                                        >
                                            <X size={20} />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="menu"
                                            initial={{ rotate: 90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: -90, opacity: 0 }}
                                        >
                                            <Menu size={20} />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[80] bg-black/60 backdrop-blur-sm lg:hidden"
                        onClick={() => setIsOpen(false)}
                    />
                )}
            </AnimatePresence>

            {/* Mobile Menu Sidebar */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                        className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm z-[90] lg:hidden bg-[#0a0a0a] border-l border-white/10 shadow-2xl flex flex-col pt-24 pb-8 px-8"
                    >
                        {/* Mobile Links */}
                        <div className="flex flex-col gap-6 flex-1">
                            {navLinks.map((link, idx) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    onClick={handleLinkClick}
                                    className="text-2xl font-display font-medium text-white/80 hover:text-accent transition-colors flex items-center gap-4 group"
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 + idx * 0.1 }}
                                >
                                    <span className="text-[10px] w-6 h-[1px] bg-white/20 group-hover:bg-accent transition-colors" />
                                    {link.name}
                                </motion.a>
                            ))}
                        </div>

                        {/* Mobile Footer Actions */}
                        <div className="flex flex-col gap-6 mt-auto">
                            <motion.a
                                href="#agendamento"
                                onClick={handleLinkClick}
                                className="btn btn-cta w-full py-4 text-xs tracking-[0.2em] font-bold text-center"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                AGENDAR ORÇAMENTO
                            </motion.a>

                            <div className="flex justify-between items-center border-t border-white/10 pt-6">
                                <span className="text-[10px] uppercase tracking-widest text-text-muted">Social & Theme</span>
                                <div className="flex gap-4">
                                    <a
                                        href="https://instagram.com/vtori.ink"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-white/60 hover:text-accent hover:border-accent/40 bg-white/5 transition-all"
                                    >
                                        <Instagram size={18} />
                                    </a>
                                    <button
                                        onClick={toggleTheme}
                                        className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-white/60 hover:text-accent hover:border-accent/40 bg-white/5 transition-all"
                                    >
                                        {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
