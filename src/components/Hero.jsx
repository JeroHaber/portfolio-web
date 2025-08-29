import React, { useState, useEffect } from 'react';
import { ChevronDown, Sparkles, Code, Database, Globe, Zap, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { FaReact, FaPython, FaJava, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { SiDotnet, SiTailwindcss } from "react-icons/si";

export default function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [currentRole, setCurrentRole] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    const roles = [
        "Desarrollador Full Stack Jr.",
        "Frontend Developer",
        "Backend Developer",
        "Estudiante de IA"
    ];

    const skills = [
        { name: "React", icon: <FaReact className="text-blue-500 w-10 h-10" /> },
        { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500 w-10 h-10" /> },
        { name: "HTML", icon: <FaHtml5 className="text-orange-500 w-10 h-10" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-600 w-10 h-10" /> },
        { name: "Python", icon: <FaPython className="text-blue-400 w-10 h-10" /> },
        { name: "C#", icon: <SiDotnet className="text-purple-700 w-10 h-10" /> },
        { name: "Java", icon: <FaJava className="text-red-600 w-10 h-10" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400 w-10 h-10" /> },
    ];

    useEffect(() => {
        setIsVisible(true);
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 100,
                y: (e.clientY / window.innerHeight) * 100
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        const interval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 3000);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            clearInterval(interval);
        };
    }, []);

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
    };

    return (
        <section
            id="home"
            className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-10"
        >
            {/* Fondo dinámico con gradientes */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>

            {/* Elementos decorativos que siguen el mouse */}
            <div
                className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl transition-all duration-1000 ease-out"
                style={{
                    left: `${mousePosition.x * 0.5}%`,
                    top: `${mousePosition.y * 0.5}%`,
                    transform: 'translate(-50%, -50%)'
                }}
            ></div>
            <div
                className="absolute w-64 h-64 bg-blue-500/20 rounded-full blur-3xl transition-all duration-1500 ease-out"
                style={{
                    right: `${(100 - mousePosition.x) * 0.3}%`,
                    bottom: `${(100 - mousePosition.y) * 0.3}%`,
                    transform: 'translate(50%, 50%)'
                }}
            ></div>

            {/* Partículas flotantes */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${2 + Math.random() * 3}s`
                        }}
                    ></div>
                ))}
            </div>

            {/* Contenido principal */}
            <div className={`relative z-10 text-center px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                {/* Saludo con efecto typing */}
                <div className="mb-8">
                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-white/80 font-medium">Disponible para trabajar</span>
                    </div>
                </div>

                {/* Título principal */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6">
                    <span className="block text-white/90 mb-4">
                        ¡Hola! Soy
                    </span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-pulse">
                        Jerónimo
                    </span>
                </h1>

                {/* Rol dinámico */}
                <div className="mb-8 h-20 flex items-center justify-center">
                    <p className="text-2xl md:text-4xl font-bold text-white/90 transition-all duration-500">
                        <span className="inline-block mr-3">
                            <Code className="w-8 h-8 md:w-12 md:h-12 text-purple-400" />
                        </span>
                        {roles[currentRole]}
                        <span className="animate-pulse ml-2 text-purple-400">|</span>
                    </p>
                </div>

                {/* Skills badges flotantes */}
                <div className="mb-12 flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                    {skills.map((skill, index) => (
                        <div
                            key={skill.name}
                            className={`group px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:scale-110 transition-all duration-300 cursor-pointer hover:shadow-lg`}
                            style={{
                                animationDelay: `${index * 100}ms`,
                                animation: 'slideUp 0.6s ease-out forwards'
                            }}
                        >
                            <div className="flex items-center gap-2">
                                <span className="text-lg">{skill.icon}</span>
                                <span className="text-white font-medium text-sm md:text-base">
                                    {skill.name}
                                </span>
                            </div>
                            <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                        </div>
                    ))}
                </div>

                {/* Call to actions */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                    <button
                        onClick={() => scrollToSection('projects')}
                        className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold rounded-2xl shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105 flex items-center gap-3"
                    >
                        <Sparkles className="w-5 h-5 group-hover:animate-spin transition-all duration-300" />
                        <span>Ver mis proyectos</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
                    </button>

                    <button
                        onClick={() => scrollToSection('contact')}
                        className="group px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-bold rounded-2xl hover:bg-white/20 hover:scale-105 transition-all duration-300 flex items-center gap-3"
                    >
                        <Mail className="w-5 h-5" />
                        <span>Contactarme</span>
                    </button>
                </div>

                {/* Redes sociales */}
                <div className="flex justify-center gap-6 mb-16">
                    {[
                        { icon: Github, href: "https://github.com/JeroHaber", label: "GitHub" },
                        { icon: Linkedin, href: "https://www.linkedin.com/in/jeronimo-haberkorn/", label: "LinkedIn" },
                        { icon: Mail, href: "mailto:jerohaber@gmail.com", label: "Email" }
                    ].map((social, index) => (
                        <a
                            key={social.label}
                            href={social.href}
                            className="group p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/20 hover:bg-white/10 hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
                            aria-label={social.label}
                        >
                            <social.icon className="w-6 h-6 text-white/70 group-hover:text-white transition-colors duration-200" />
                        </a>
                    ))}
                </div>

                {/* Scroll indicator */}
                <div className="animate-bounce">
                    <button
                        onClick={() => scrollToSection('about')}
                        className="group p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
                    >
                        <ChevronDown className="w-8 h-8 text-white/70 group-hover:text-white transition-colors duration-200" />
                    </button>
                </div>
            </div>

            {/* Efectos adicionales */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>

            <style jsx>{`
                @keyframes slideUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </section>
    );
}