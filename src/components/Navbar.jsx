import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, User, Briefcase, Mail, Home, Sparkles, Code2 } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const navItems = [
        { id: 'home', label: 'Inicio', icon: Home },
        { id: 'about', label: 'Sobre mí', icon: User },
        { id: 'education', label: 'Educación', icon: Code2 },
        { id: 'projects', label: 'Proyectos', icon: Briefcase },
        { id: 'contact', label: 'Contacto', icon: Mail }
    ];

    // Función para detectar la sección activa basada en scroll
    const handleSectionChange = useCallback(() => {
        const sections = navItems.map(item => item.id);
        const scrollPosition = window.scrollY + 100; // Offset para navbar
        let current = 'home'; // Default

        // Buscar la sección que está actualmente visible
        for (let i = sections.length - 1; i >= 0; i--) {
            const sectionId = sections[i];
            const element = document.getElementById(sectionId);

            if (element) {
                const elementTop = element.offsetTop;

                if (scrollPosition >= elementTop) {
                    current = sectionId;
                    break;
                }
            }
        }

        // Si estamos cerca del final de la página, activar la última sección
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
            current = sections[sections.length - 1];
        }

        setActiveSection(current);
    }, [navItems]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            handleSectionChange();
        };

        // Throttle para mejor performance
        let ticking = false;
        const throttledHandleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', throttledHandleScroll, { passive: true });

        // Ejecutar una vez al cargar
        handleScroll();

        return () => {
            window.removeEventListener('scroll', throttledHandleScroll);
        };
    }, [handleSectionChange]);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        setIsOpen(false);
    };

    // Cerrar menú móvil con Escape
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            // Prevenir scroll del body cuando el menú está abierto
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    return (
        <>
            {/* Navbar principal */}
            <nav className={`fixed w-full top-0 z-50 transition-all duration-500 ${scrolled
                ? 'bg-slate-900/95 backdrop-blur-xl border-b border-white/10 py-3'
                : 'bg-slate-900/80 backdrop-blur-md py-4'
                }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <div
                            className="group cursor-pointer"
                            onClick={() => scrollToSection('home')}
                        >
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300">
                                        <Sparkles className="w-5 h-5 text-white group-hover:animate-spin" />
                                    </div>
                                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
                                </div>
                                <div className="hidden sm:block">
                                    <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
                                        Jerónimo Haberkorn
                                    </h1>
                                    <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                        Desarrollador Full Stack
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Navegación desktop */}
                        <div className="hidden lg:flex items-center">
                            <div className="flex items-center gap-1 bg-white/5 backdrop-blur-sm rounded-2xl p-1.5 border border-white/10">
                                {navItems.map((item) => {
                                    const Icon = item.icon;
                                    const isActive = activeSection === item.id;
                                    return (
                                        <button
                                            key={item.id}
                                            onClick={() => scrollToSection(item.id)}
                                            className={`group relative flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all duration-300 text-sm font-medium ${isActive
                                                ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg shadow-purple-500/25'
                                                : 'text-gray-300 hover:text-white hover:bg-white/10'
                                                }`}
                                        >
                                            <Icon className={`w-4 h-4 transition-all duration-300 ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'
                                                }`} />
                                            <span>
                                                {item.label}
                                            </span>
                                            {isActive && (
                                                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 opacity-20 animate-pulse"></div>
                                            )}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="hidden lg:block">
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="group relative px-6 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-xl font-medium transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    <Mail className="w-4 h-4" />
                                    Trabajemos Juntos
                                </span>
                                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
                            </button>
                        </div>

                        {/* Botón móvil */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden p-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
                            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Menú móvil */}
            {isOpen && (
                <div className="lg:hidden fixed inset-0 z-40">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={() => setIsOpen(false)}
                        aria-hidden="true"
                    />

                    {/* Menú */}
                    <div className={`absolute top-0 right-0 h-full w-80 max-w-[90vw] bg-slate-900/95 backdrop-blur-xl border-l border-white/10 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}>
                        <div className="p-6 pt-20">
                            {/* Logo móvil */}
                            <div className="flex items-center gap-3 mb-8 p-4 rounded-xl bg-white/5 border border-white/10">
                                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                                    <Sparkles className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h2 className="text-lg font-bold text-white">MiPortfolio</h2>
                                    <p className="text-xs text-gray-400">Desarrollador Full Stack</p>
                                </div>
                            </div>

                            {/* Navegación móvil */}
                            <div className="space-y-2">
                                {navItems.map((item, index) => {
                                    const Icon = item.icon;
                                    const isActive = activeSection === item.id;
                                    return (
                                        <button
                                            key={item.id}
                                            onClick={() => scrollToSection(item.id)}
                                            className={`w-full flex items-center gap-4 px-4 py-4 rounded-xl transition-all duration-300 ${isActive
                                                ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg'
                                                : 'text-gray-300 hover:text-white hover:bg-white/10'
                                                }`}
                                        >
                                            <Icon className="w-5 h-5" />
                                            <span className="font-medium">{item.label}</span>
                                            {isActive && (
                                                <div className="ml-auto w-2 h-2 rounded-full bg-white animate-pulse"></div>
                                            )}
                                        </button>
                                    );
                                })}
                            </div>

                            {/* CTA móvil */}
                            <div className="mt-8 pt-6 border-t border-white/10">
                                <button
                                    onClick={() => scrollToSection('contact')}
                                    className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-purple-500/40 flex items-center justify-center gap-2"
                                >
                                    <Mail className="w-5 h-5" />
                                    Trabajemos Juntos
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Espaciador para el navbar fijo */}
            <div className="h-20"></div>
        </>
    );
}