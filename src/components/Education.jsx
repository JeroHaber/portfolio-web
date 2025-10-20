import React, { useState, useEffect } from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen, Sparkles, ArrowRight } from 'lucide-react';

export default function Education() {
    const [visibleItems, setVisibleItems] = useState([]);
    const [hoveredItem, setHoveredItem] = useState(null);

    const education = [
        {
            id: 1,
            title: "Oracle Next Education (ONE)",
            institution: "Alura Latam",
            year: "2022",
            description: "Programa intensivo de formación en desarrollo web y programación con proyectos prácticos.",
            type: "course",
            skills: ["HTML", "CSS", "JavaScript", "React", "Git/GitHub", "Java"],
            color: "from-purple-600 to-pink-600"
        },
        {
            id: 2,
            title: "Tecnicatura Universitaria en Programación de Computadores",
            institution: "UNLZ (dictada en CREUS)",
            year: "2023 - 2025",
            description: "Aprendí a desarrollar soluciones de software eficientes, trabajando con distintos lenguajes y tecnologías, y aplicando metodologías de programación profesional.",
            type: "university",
            skills: ["C++", "Algoritmos y Estructuras de Datos", "Java", "PHP", "C#", "Bases de Datos", "SQL", "Python", "React"],
            color: "from-blue-600 to-cyan-600"
        },
        {
            id: 3,
            title: "Diplomatura en Vinculación en Inteligencia Artificial",
            institution: "Universidad Nacional Arturo Jauretche",
            year: "2025 - En curso",
            description: "Formación avanzada en conceptos y aplicaciones de inteligencia artificial, incluyendo aprendizaje automático, procesamiento de lenguaje natural y visión por computadora.",
            type: "university",
            skills: ["Python", "Machine Learning", "IA (Inteligencia Artificial)"],
            color: "from-green-600 to-teal-600"
        }
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisibleItems(education.map((_, index) => index));
        }, 300);
        return () => clearTimeout(timer);
    }, []);

    const getIcon = (type) => {
        switch (type) {
            case 'university':
                return <GraduationCap className="w-5 h-5" />;
            case 'course':
                return <BookOpen className="w-5 h-5" />;
            default:
                return <Sparkles className="w-5 h-5" />;
        }
    };

    return (
        <section id="education" className="min-h-screen py-20 relative overflow-hidden">
            {/* Fondo con gradiente animado */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>

            {/* Elementos decorativos de fondo */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                {/* Título principal */}
                <div className="text-center mb-12 md:mb-20">
                    <div className="inline-flex items-center gap-3 px-4 md:px-6 py-2 md:py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4 md:mb-6">
                        <GraduationCap className="w-5 h-5 md:w-6 md:h-6 text-purple-400" />
                        <span className="text-sm md:text-base text-purple-300 font-medium">Mi Trayectoria Académica</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-blue-200 mb-4 md:mb-6">
                        Educación
                    </h2>
                    <p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed px-4">
                        Un viaje continuo de aprendizaje y crecimiento profesional
                    </p>
                </div>

                {/* Línea de tiempo */}
                <div className="relative">
                    {/* Línea vertical para desktop, oculta en mobile */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500 rounded-full shadow-lg shadow-purple-500/25"></div>

                    {/* Línea vertical para mobile - a la izquierda */}
                    <div className="md:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500 rounded-full"></div>

                    <div className="space-y-12 md:space-y-24">
                        {education.map((edu, index) => (
                            <div
                                key={edu.id}
                                className={`relative transition-all duration-1000 transform ${visibleItems.includes(index)
                                    ? 'translate-y-0 opacity-100'
                                    : 'translate-y-20 opacity-0'
                                    }`}
                                style={{ transitionDelay: `${index * 200}ms` }}
                            >
                                {/* Layout Desktop (zigzag) */}
                                <div className={`hidden md:flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                                    }`}>
                                    {/* Contenedor del contenido Desktop */}
                                    <div className="w-5/12 relative">
                                        <div
                                            className={`group relative p-8 rounded-2xl backdrop-blur-sm border transition-all duration-500 hover:scale-105 cursor-pointer ${hoveredItem === index
                                                ? 'bg-white/15 border-white/30 shadow-2xl shadow-purple-500/25'
                                                : 'bg-white/10 border-white/20 hover:bg-white/15 hover:border-white/30'
                                                }`}
                                            onMouseEnter={() => setHoveredItem(index)}
                                            onMouseLeave={() => setHoveredItem(null)}
                                        >
                                            {/* Indicador de gradiente */}
                                            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${edu.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                                            {/* Contenido principal */}
                                            <div className="relative z-10">
                                                <div className="flex items-start gap-4 mb-4">
                                                    <div className={`p-3 rounded-xl bg-gradient-to-r ${edu.color} shadow-lg flex-shrink-0`}>
                                                        {getIcon(edu.type)}
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-200 group-hover:to-blue-200 transition-all duration-300">
                                                            {edu.title}
                                                        </h3>
                                                        <div className="flex items-center gap-4 text-gray-300 mb-1 flex-wrap">
                                                            <div className="flex items-center gap-2">
                                                                <MapPin className="w-4 h-4 flex-shrink-0" />
                                                                <span className="font-medium text-sm">{edu.institution}</span>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center gap-2 text-gray-400">
                                                            <Calendar className="w-4 h-4 flex-shrink-0" />
                                                            <span className="text-sm">{edu.year}</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                                                    {edu.description}
                                                </p>

                                                {/* Skills badges */}
                                                <div className="flex flex-wrap gap-2 mb-4">
                                                    {edu.skills.map((skill, skillIndex) => (
                                                        <span
                                                            key={skillIndex}
                                                            className="px-3 py-1 text-xs font-medium bg-white/20 backdrop-blur-sm rounded-full border border-white/30 text-white hover:bg-white/30 transition-colors duration-200"
                                                        >
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Espacio central Desktop */}
                                    <div className="w-2/12 flex justify-center">
                                        {/* Nodo central animado */}
                                        <div className="relative">
                                            <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${edu.color} shadow-lg shadow-purple-500/50 animate-pulse`}></div>
                                            <div className={`absolute inset-0 w-6 h-6 rounded-full bg-gradient-to-r ${edu.color} animate-ping opacity-20`}></div>
                                            <div className="absolute -inset-2 w-10 h-10 rounded-full border-2 border-white/30 animate-spin-slow"></div>
                                        </div>
                                    </div>

                                    {/* Espacio derecho/izquierdo Desktop */}
                                    <div className="w-5/12"></div>
                                </div>

                                {/* Layout Mobile (lista vertical) */}
                                <div className="md:hidden flex items-start gap-4 pl-12">
                                    {/* Nodo de la línea de tiempo Mobile */}
                                    <div className="absolute left-6 transform -translate-x-1/2">
                                        <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${edu.color} shadow-lg`}></div>
                                        <div className={`absolute inset-0 w-4 h-4 rounded-full bg-gradient-to-r ${edu.color} animate-ping opacity-20`}></div>
                                    </div>

                                    {/* Contenido Mobile */}
                                    <div className="flex-1">
                                        <div
                                            className={`group relative p-6 rounded-2xl backdrop-blur-sm border transition-all duration-500 ${hoveredItem === index
                                                ? 'bg-white/15 border-white/30 shadow-2xl shadow-purple-500/25'
                                                : 'bg-white/10 border-white/20'
                                                }`}
                                            onTouchStart={() => setHoveredItem(index)}
                                            onTouchEnd={() => setHoveredItem(null)}
                                        >
                                            {/* Indicador de gradiente */}
                                            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${edu.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                                            {/* Contenido Mobile */}
                                            <div className="relative z-10">
                                                <div className="flex items-start gap-3 mb-4">
                                                    <div className={`p-2.5 rounded-xl bg-gradient-to-r ${edu.color} shadow-lg flex-shrink-0`}>
                                                        {getIcon(edu.type)}
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                                                            {edu.title}
                                                        </h3>
                                                        <div className="space-y-1">
                                                            <div className="flex items-center gap-2 text-gray-300">
                                                                <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                                                                <span className="font-medium text-xs">{edu.institution}</span>
                                                            </div>
                                                            <div className="flex items-center gap-2 text-gray-400">
                                                                <Calendar className="w-3.5 h-3.5 flex-shrink-0" />
                                                                <span className="text-xs">{edu.year}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <p className="text-gray-300 leading-relaxed mb-4 text-sm">
                                                    {edu.description}
                                                </p>

                                                {/* Skills badges Mobile */}
                                                <div className="flex flex-wrap gap-2">
                                                    {edu.skills.map((skill, skillIndex) => (
                                                        <span
                                                            key={skillIndex}
                                                            className="px-2.5 py-1 text-xs font-medium bg-white/20 backdrop-blur-sm rounded-full border border-white/30 text-white"
                                                        >
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to action */}
                <div className="text-center mt-12 md:mt-20">
                    <div className="inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105 cursor-pointer group">
                        <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-white group-hover:animate-spin" />
                        <span className="text-white font-semibold text-sm md:text-base">Continúo Aprendiendo</span>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 8s linear infinite;
                }
            `}</style>
        </section>
    );
}