import React, { useState, useEffect, useRef } from 'react';
import { User, Code, Lightbulb, Target, Rocket, Heart, Brain, Zap, ArrowRight, Download, Coffee } from 'lucide-react';

export default function About() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeCard, setActiveCard] = useState(null);
    const sectionRef = useRef(null);

    const highlights = [
        {
            icon: Code,
            title: "Full Stack Development",
            description: "Desarrollo tanto frontend como backend con tecnologías modernas",
            color: "from-purple-500 to-pink-500"
        },
        {
            icon: Brain,
            title: "Aprendizaje Continuo",
            description: "Siempre estudiando nuevas tecnologías y mejores prácticas",
            color: "from-blue-500 to-cyan-500"
        },
        {
            icon: Target,
            title: "Enfoque en Resultados",
            description: "Me concentro en crear soluciones que generen valor real",
            color: "from-green-500 to-teal-500"
        },
        {
            icon: Heart,
            title: "Pasión por la Tecnología",
            description: "Disfruto cada desafío y proyecto en el mundo IT",
            color: "from-orange-500 to-red-500"
        }
    ];

    const stats = [
        { number: "2+", label: "Años estudiando", icon: Coffee },
        { number: "10+", label: "Tecnologías", icon: Code },
        { number: "100%", label: "Dedicación", icon: Zap },
        { number: "∞", label: "Ganas de aprender", icon: Brain }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
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
            id="about"
            ref={sectionRef}
            className="relative min-h-screen py-20 overflow-hidden"
        >
            {/* Fondo con gradiente */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50"></div>

            {/* Elementos decorativos */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-200/30 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}>
                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/60 backdrop-blur-sm border border-white/40 mb-6 shadow-lg">
                        <User className="w-6 h-6 text-purple-600" />
                        <span className="text-gray-700 font-medium">Conoce mi historia</span>
                    </div>

                    <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                            Sobre mí
                        </span>
                        <span className="ml-4">🚀</span>
                    </h2>

                    <div className="max-w-4xl mx-auto">
                        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                            Soy <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">desarrollador junior</span> y
                            graduado en <span className="font-bold text-gray-900">Tecnicatura Universitaria en Programación de Computadores</span>.
                            Me apasiona crear soluciones tecnológicas, con experiencia en
                            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600"> backend y frontend</span>.
                        </p>
                        <p className="text-lg text-gray-600 mt-4">
                            Busco siempre <span className="font-semibold text-gray-800">aprender</span>,
                            aportar valor en proyectos reales y crecer en el mundo IT.
                        </p>
                    </div>
                </div>

                {/* Stats */}
                <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}>
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="group text-center p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/50 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                        >
                            <stat.icon className="w-8 h-8 text-purple-600 mx-auto mb-3 group-hover:scale-110 transition-transform duration-200" />
                            <div className="text-3xl font-black text-gray-900 mb-1">{stat.number}</div>
                            <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Highlights */}
                <div className={`grid md:grid-cols-2 gap-8 mb-16 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}>
                    {highlights.map((item, index) => (
                        <div
                            key={index}
                            className="group relative p-8 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
                            onMouseEnter={() => setActiveCard(index)}
                            onMouseLeave={() => setActiveCard(null)}
                        >
                            {/* Background gradient effect */}
                            <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                            <div className="relative z-10">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className={`p-3 rounded-xl bg-gradient-to-r ${item.color} shadow-lg group-hover:scale-110 transition-transform duration-200`}>
                                        <item.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Actions */}
                <div className={`text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold rounded-2xl shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105 flex items-center gap-3"
                        >
                            <Rocket className="w-5 h-5 group-hover:animate-bounce transition-all duration-300" />
                            <span>¡Trabajemos juntos!</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
                        </button>

                        <button
                            onClick={() => scrollToSection('education')}
                            className="group px-8 py-4 bg-white/70 backdrop-blur-sm border border-white/50 text-gray-700 font-bold rounded-2xl hover:bg-white/90 hover:scale-105 transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl"
                        >
                            <Download className="w-5 h-5 group-hover:animate-bounce transition-all duration-300" />
                            <span>Ver mi educación</span>
                        </button>
                    </div>

                    <p className="text-gray-500 text-sm mt-6 max-w-md mx-auto">
                        💡 <em>Siempre abierto a nuevos desafíos y oportunidades de crecimiento</em>
                    </p>
                </div>
            </div>

            {/* Separador inferior con gradiente */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-slate-50"></div>
        </section>
    );
}