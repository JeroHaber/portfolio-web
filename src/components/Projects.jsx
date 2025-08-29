import React, { useState, useEffect, useRef } from 'react';
import imgcreus from '../assets/img/webcreus.png';
import {
    ExternalLink,
    Github,
    Code2,
    Palette,
    Database,
    Smartphone,
    Globe,
    Zap,
    Star,
    ArrowRight,
    Play,
    Eye,
    Filter,
    Sparkles
} from 'lucide-react';

export default function Projects() {
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredProject, setHoveredProject] = useState(null);
    const [activeFilter, setActiveFilter] = useState('all');
    const [filteredProjects, setFilteredProjects] = useState([]);
    const sectionRef = useRef(null);

    const projects = [
        {
            id: 1,
            title: "Página Web Universitaria",
            description: "Desarrollo de una plataforma completa para una universidad, incluyendo gestión de usuario, preinscripciones y propuestas educativas.",
            image: imgcreus,
            category: "fullstack",
            technologies: ["React", "Python", "Flask", "SQL", "Docker", "Tailwind"],
            status: "completed",
            features: ["Autenticación JWT", "Preinscripciones integradas", "Panel admin", "Responsive"],
            demoUrl: "https://web.creus.gniglio.com.ar/",
            githubUrl: "#",
            color: "from-blue-500 to-purple-600",
            stats: { views: "1k", stars: 47, commits: +200 }
        },
        {
            id: 2,
            title: "Más proyectos en camino...",
            description: "Estoy trabajando en nuevos desarrollos que estarán disponibles aquí.",
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop",
            category: "frontend",
            technologies: ["..."],
            status: "planned",
            features: ["..."],
            demoUrl: "#",
            githubUrl: "#",
            color: "from-green-500 to-teal-600",
            stats: { views: "...", stars: 0, commits: 0 }
        },
        {
            id: 3,
            title: "Más proyectos en camino...",
            description: "Estoy trabajando en nuevos desarrollos que estarán disponibles aquí.",
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop",
            category: "backend",
            technologies: ["..."],
            status: "planned",
            features: ["..."],
            demoUrl: "#",
            githubUrl: "#",
            color: "from-green-500 to-teal-600",
            stats: { views: "...", stars: 0, commits: 0 }
        },

    ];

    const filters = [
        { id: 'all', label: 'Todos los proyectos', icon: Globe },
        { id: 'fullstack', label: 'Full Stack', icon: Code2 },
        { id: 'frontend', label: 'Frontend', icon: Palette },
        { id: 'backend', label: 'Backend', icon: Database }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
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

    // Inicializar proyectos filtrados al cargar el componente
    useEffect(() => {
        setFilteredProjects(projects);
    }, []);

    // Efecto para filtrar proyectos cuando cambia el filtro activo
    useEffect(() => {
        console.log('Filtro activo:', activeFilter); // Debug
        if (activeFilter === 'all') {
            console.log('Mostrando todos los proyectos:', projects.length); // Debug
            setFilteredProjects(projects);
        } else {
            const filtered = projects.filter(project => project.category === activeFilter);
            console.log(`Proyectos filtrados para ${activeFilter}:`, filtered.length); // Debug
            setFilteredProjects(filtered);
        }
    }, [activeFilter]);

    const getStatusBadge = (status) => {
        switch (status) {
            case 'completed':
                return <span className="px-3 py-1 text-xs font-semibold bg-green-100 text-green-700 rounded-full border border-green-200">Completado</span>;
            case 'in-progress':
                return <span className="px-3 py-1 text-xs font-semibold bg-amber-100 text-amber-700 rounded-full border border-amber-200">En progreso</span>;
            case 'planned':
                return <span className="px-3 py-1 text-xs font-semibold bg-gray-200 text-gray-600 rounded-full border border-gray-300">Próximamente</span>;
            default:
                return null;
        }
    };

    return (
        <section
            id="projects"
            ref={sectionRef}
            className="relative min-h-screen py-20 overflow-hidden"
        >
            {/* Fondo con degradado de transición */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-50 via-white via-white to-slate-50"></div>

            {/* Elementos decorativos ajustados para la transición */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/8 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/8 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            {/* Degradado superior de transición desde About */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-purple-50 to-transparent"></div>

            {/* Degradado inferior de transición hacia Education */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-slate-100 to-slate-200"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}>
                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gray-50 border border-gray-200 mb-6 shadow-sm">
                        <Code2 className="w-6 h-6 text-purple-600" />
                        <span className="text-gray-700 font-medium">Mi trabajo y creaciones</span>
                    </div>

                    <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                            Proyectos
                        </span>
                    </h2>

                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Explora una selección de mis trabajos más destacados. Cada proyecto representa un desafío superado y nuevas habilidades adquiridas.
                    </p>
                </div>

                {/* Filtros mejorados para fondo blanco */}
                <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}>
                    {filters.map((filter) => {
                        const Icon = filter.icon;
                        const isActive = activeFilter === filter.id;
                        return (
                            <button
                                key={filter.id}
                                onClick={() => {
                                    console.log('Botón clickeado:', filter.id);
                                    setActiveFilter(filter.id);
                                }}
                                className={`relative flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 z-10 ${isActive
                                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg shadow-purple-500/25'
                                    : 'bg-gray-50 border border-gray-200 text-gray-600 hover:bg-gray-100 hover:border-gray-300 hover:text-gray-700'
                                    }`}
                            >
                                <Icon className="w-4 h-4 relative z-10" />
                                <span className="font-medium text-sm relative z-10">{filter.label}</span>
                                {isActive && (
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-10 animate-pulse -z-10"></div>
                                )}
                            </button>
                        );
                    })}
                </div>

                {/* Mostrar número de proyectos filtrados */}
                <div className="text-center mb-8">
                    <p className="text-gray-500 text-sm">
                        {activeFilter === 'all' ? 'Mostrando todos los proyectos' : `Mostrando ${filteredProjects.length} proyecto${filteredProjects.length !== 1 ? 's' : ''}`}
                    </p>
                </div>

                {/* Grid de Proyectos */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`group relative rounded-2xl bg-white border border-gray-200 shadow-lg overflow-hidden transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:border-purple-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                                }`}
                            style={{ transitionDelay: `${index * 100 + 400}ms` }}
                            onMouseEnter={() => setHoveredProject(project.id)}
                            onMouseLeave={() => setHoveredProject(null)}
                        >
                            {/* Imagen del proyecto */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>

                                {/* Overlay con botones */}
                                <div className={`absolute inset-0 flex items-center justify-center gap-4 transition-all duration-300 ${hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                                    }`}>
                                    <a
                                        href={project.demoUrl}
                                        className="p-3 bg-white/90 backdrop-blur-sm rounded-full border border-gray-200 text-gray-700 hover:bg-white hover:text-purple-600 transition-all duration-200 hover:scale-110 shadow-lg"
                                        title="Ver demo"
                                    >
                                        <Eye className="w-5 h-5" />
                                    </a>
                                    <a
                                        href={project.githubUrl}
                                        className="p-3 bg-white/90 backdrop-blur-sm rounded-full border border-gray-200 text-gray-700 hover:bg-white hover:text-purple-600 transition-all duration-200 hover:scale-110 shadow-lg"
                                        title="Ver código"
                                    >
                                        <Github className="w-5 h-5" />
                                    </a>
                                </div>

                                {/* Badge de estado */}
                                <div className="absolute top-4 right-4">
                                    {getStatusBadge(project.status)}
                                </div>
                            </div>

                            {/* Contenido */}
                            <div className="p-6">
                                <div className="flex items-start justify-between mb-3">
                                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300">
                                        {project.title}
                                    </h3>
                                    <div className="flex items-center gap-1 text-amber-500">
                                        <Star className="w-4 h-4 fill-current" />
                                        <span className="text-sm font-medium text-gray-600">{project.stats.stars}</span>
                                    </div>
                                </div>

                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                    {project.description}
                                </p>

                                {/* Tecnologías */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full border border-gray-200"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Features */}
                                <div className="space-y-2 mb-4">
                                    {project.features.slice(0, 2).map((feature, featureIndex) => (
                                        <div key={featureIndex} className="flex items-center gap-2 text-gray-500 text-xs">
                                            <Zap className="w-3 h-3 text-purple-500" />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Stats */}
                                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                    <div className="flex items-center gap-4 text-xs text-gray-500">
                                        <div className="flex items-center gap-1">
                                            <Eye className="w-3 h-3" />
                                            <span>{project.stats.views}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Code2 className="w-3 h-3" />
                                            <span>{project.stats.commits}</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <a
                                            href={project.demoUrl}
                                            className="group/btn flex items-center gap-1 text-purple-500 hover:text-purple-600 transition-colors duration-200 text-sm font-medium"
                                        >
                                            <span>Ver más</span>
                                            <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform duration-200" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mensaje cuando no hay proyectos */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-20">
                        <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                            <Filter className="w-8 h-8 text-gray-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">No se encontraron proyectos</h3>
                        <p className="text-gray-500">Intenta con otro filtro para ver más proyectos.</p>
                    </div>
                )}

                {/* Call to action */}
                <div className={`text-center mt-16 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}>
                    <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105 cursor-pointer group">
                        <Github className="w-5 h-5 text-white" />
                        <span className="text-white font-semibold">Ver todos en GitHub</span>
                        <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                </div>
            </div>
        </section>
    );
}