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
                className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? 'glass backdrop-blur-xl shadow-lg' : 'bg-transparent'
                    }`}
            >
                <div className="container">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <motion.a
                            href="#"
                            className="font-display text-2xl md:text-3xl font-bold tracking-tight"
                            whileHover={{ scale: 1.05 }}
                        >
                            vtori<span className="text-accent">.ink</span>
                        </motion.a>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-12">
                            {navLinks.map((link, idx) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm uppercase tracking-[0.2em] font-bold text-text-muted hover:text-accent transition-colors relative group"
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                >
                                    {link.name}
                                    <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-accent group-hover:w-full transition-all duration-300" />
                                </motion.a>
                            ))}
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-4">
                            <motion.a
                                href="https://instagram.com/vtori.ink"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hidden md:flex items-center justify-center w-10 h-10 rounded-full glass hover:bg-accent/20 transition-all"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Instagram size={18} />
                            </motion.a>

                            <motion.button
                                onClick={toggleTheme}
                                className="hidden md:flex items-center justify-center w-10 h-10 rounded-full glass hover:bg-accent/20 transition-all"
                                whileHover={{ scale: 1.1, rotate: 180 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                            </motion.button>

                            <a
                                href="#agendamento"
                                className="hidden lg:inline-flex btn btn-primary text-xs px-6 py-3"
                            >
                                Agendar
                            </a>

                            {/* Mobile Menu Button */}
                            <motion.button
                                onClick={() => setIsOpen(!isOpen)}
                                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full glass"
                                whileTap={{ scale: 0.95 }}
                            >
                                {isOpen ? <X size={20} /> : <Menu size={20} />}
                            </motion.button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[90] lg:hidden glass backdrop-blur-2xl"
                    >
                        <div className="flex flex-col items-center justify-center h-full gap-8 p-8">
                            {navLinks.map((link, idx) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    onClick={handleLinkClick}
                                    className="text-3xl font-display font-bold hover:text-accent transition-colors"
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                >
                                    {link.name}
                                </motion.a>
                            ))}

                            <motion.a
                                href="#agendamento"
                                onClick={handleLinkClick}
                                className="btn btn-cta mt-8 px-12 py-4"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                Agendar Orçamento
                            </motion.a>

                            <div className="flex items-center gap-6 mt-8">
                                <motion.a
                                    href="https://instagram.com/vtori.ink"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-12 h-12 rounded-full glass"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Instagram size={20} />
                                </motion.a>

                                <motion.button
                                    onClick={toggleTheme}
                                    className="flex items-center justify-center w-12 h-12 rounded-full glass"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
