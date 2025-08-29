import React, { useState, useEffect, useRef } from 'react';
import {
    Mail,
    Phone,
    MapPin,
    Send,
    MessageCircle,
    Linkedin,
    Github,
    Twitter,
    User,
    AtSign,
    FileText,
    CheckCircle,
    Zap,
    Heart,
    Coffee,
    Clock,
    Globe,
    ArrowRight,
    Sparkles
} from 'lucide-react';

export default function Contact() {
    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [focusedField, setFocusedField] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const sectionRef = useRef(null);

    const contactMethods = [
        {
            icon: Mail,
            title: "Email",
            value: "jerohaber@gmail.com",
            description: "Respondo en menos de 48 horas",
            color: "from-blue-500 to-cyan-500",
            action: "mailto:jerohaber@gmail.com"
        },
        {
            icon: MapPin,
            title: "Ubicación",
            value: "Buenos Aires, Argentina",
            description: "Abierto a trabajo remoto",
            color: "from-purple-500 to-pink-500",
            action: "https://maps.google.com/?q=Provincia+de+Buenos+Aires,+Argentina"
        }
    ];

    const socialLinks = [
        { icon: Github, href: "https://github.com/JeroHaber", label: "GitHub", color: "hover:text-gray-300" },
        { icon: Linkedin, href: "https://www.linkedin.com/in/jeronimo-haberkorn/", label: "LinkedIn", color: "hover:text-blue-400" },
        { icon: Mail, href: "mailto:jerohaber@gmail.com", label: "Email", color: "hover:text-purple-400" }
    ];

    const stats = [
        { icon: Clock, value: "< 48h", label: "Tiempo de respuesta" },
        { icon: Coffee, value: "100%", label: "Disponibilidad" },
        { icon: Heart, value: "∞", label: "Pasión por el código" },
        { icon: Globe, value: "Global", label: "Colaboración remota" }
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

        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 100,
                y: (e.clientY / window.innerHeight) * 100
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulación de envío
        await new Promise(resolve => setTimeout(resolve, 2000));

        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });

        // Reset después de 3 segundos
        setTimeout(() => setIsSubmitted(false), 3000);
    };

    const getFieldIcon = (fieldName) => {
        switch (fieldName) {
            case 'name': return User;
            case 'email': return AtSign;
            case 'message': return FileText;
            default: return null;
        }
    };

    return (
        <section
            id="contact"
            ref={sectionRef}
            className="relative min-h-screen py-20 overflow-hidden"
        >
            {/* Fondo dinámico con gradientes - igual que Hero */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>

            {/* Elementos decorativos que siguen el mouse - igual que Hero */}
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

            {/* Partículas flotantes - igual que Hero */}
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

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}>
                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 shadow-lg">
                        <MessageCircle className="w-6 h-6 text-purple-400" />
                        <span className="text-white/80 font-medium">¡Hablemos!</span>
                    </div>

                    <h2 className="text-5xl md:text-6xl font-black text-white/90 mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
                            Contacto
                        </span>
                    </h2>

                    <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                        ¿Tienes un proyecto en mente? ¿Quieres colaborar? ¡Me encantaría escuchar de ti!
                        Estoy siempre abierto a nuevas oportunidades y desafíos.
                    </p>
                </div>

                {/* Stats rápidas */}
                <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}>
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="group text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 hover:bg-white/20"
                        >
                            <stat.icon className="w-8 h-8 text-purple-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-200" />
                            <div className="text-2xl font-black text-white/90 mb-1">{stat.value}</div>
                            <div className="text-sm text-white/60 font-medium">{stat.label}</div>
                        </div>
                    ))}
                </div>

                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Métodos de contacto */}
                    <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                        }`}>
                        <div className="mb-8">
                            <h3 className="text-3xl font-bold text-white/90 mb-4">¿Cómo prefieres contactarme?</h3>
                            <p className="text-white/60">Elige el método que más te convenga. ¡Estoy disponible en todos!</p>
                        </div>

                        <div className="space-y-6">
                            {contactMethods.map((method, index) => (
                                <a
                                    key={index}
                                    href={method.action}
                                    className="group block p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 hover:bg-white/20"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className={`p-3 rounded-xl bg-gradient-to-r ${method.color} shadow-lg group-hover:scale-110 transition-transform duration-200`}>
                                            <method.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-xl font-bold text-white/90 mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
                                                {method.title}
                                            </h4>
                                            <p className="text-lg font-semibold text-white/80 mb-1">{method.value}</p>
                                            <p className="text-white/60 text-sm">{method.description}</p>
                                        </div>
                                        <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-purple-400 group-hover:translate-x-1 transition-all duration-200" />
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Redes sociales */}
                        <div className="mt-8 p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg">
                            <h4 className="text-lg font-bold text-white/90 mb-4">También me encuentras aquí:</h4>
                            <div className="flex gap-4">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        className={`group p-3 rounded-xl bg-white/5 hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color}`}
                                        title={social.label}
                                    >
                                        <social.icon className="w-5 h-5 text-white/70 transition-colors duration-200" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Formulario */}
                    <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                        }`}>
                        <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-xl">
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-white/90 mb-2">¡Envíame un mensaje!</h3>
                                <p className="text-white/60">Cuéntame sobre tu proyecto o simplemente di hola 👋</p>
                            </div>

                            {isSubmitted ? (
                                <div className="text-center py-8">
                                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/30">
                                        <CheckCircle className="w-8 h-8 text-green-400" />
                                    </div>
                                    <h4 className="text-xl font-bold text-white/90 mb-2">¡Mensaje enviado!</h4>
                                    <p className="text-white/60">Te responderé lo antes posible. ¡Gracias por contactarme!</p>
                                </div>
                            ) : (
                                <div className="space-y-6">
                                    {/* Nombre */}
                                    <div className="relative">
                                        <div className={`absolute left-4 top-4 transition-all duration-200 ${focusedField === 'name' || formData.name
                                            ? 'text-purple-400'
                                            : 'text-white/40'
                                            }`}>
                                            <User className="w-5 h-5" />
                                        </div>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Tu nombre completo"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            onFocus={() => setFocusedField('name')}
                                            onBlur={() => setFocusedField(null)}
                                            required
                                            className={`w-full pl-12 pr-4 py-4 rounded-xl border-2 transition-all duration-200 bg-white/5 backdrop-blur-sm text-white placeholder-white/50 ${focusedField === 'name'
                                                ? 'border-purple-400 shadow-lg shadow-purple-500/25'
                                                : 'border-white/20 hover:border-white/30'
                                                } focus:outline-none`}
                                        />
                                    </div>

                                    {/* Email */}
                                    <div className="relative">
                                        <div className={`absolute left-4 top-4 transition-all duration-200 ${focusedField === 'email' || formData.email
                                            ? 'text-purple-400'
                                            : 'text-white/40'
                                            }`}>
                                            <AtSign className="w-5 h-5" />
                                        </div>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="tu.email@ejemplo.com"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            onFocus={() => setFocusedField('email')}
                                            onBlur={() => setFocusedField(null)}
                                            required
                                            className={`w-full pl-12 pr-4 py-4 rounded-xl border-2 transition-all duration-200 bg-white/5 backdrop-blur-sm text-white placeholder-white/50 ${focusedField === 'email'
                                                ? 'border-purple-400 shadow-lg shadow-purple-500/25'
                                                : 'border-white/20 hover:border-white/30'
                                                } focus:outline-none`}
                                        />
                                    </div>

                                    {/* Mensaje */}
                                    <div className="relative">
                                        <div className={`absolute left-4 top-4 transition-all duration-200 ${focusedField === 'message' || formData.message
                                            ? 'text-purple-400'
                                            : 'text-white/40'
                                            }`}>
                                            <FileText className="w-5 h-5" />
                                        </div>
                                        <textarea
                                            name="message"
                                            placeholder="Cuéntame sobre tu proyecto, idea o simplemente di hola..."
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            onFocus={() => setFocusedField('message')}
                                            onBlur={() => setFocusedField(null)}
                                            rows="6"
                                            required
                                            className={`w-full pl-12 pr-4 py-4 rounded-xl border-2 transition-all duration-200 bg-white/5 backdrop-blur-sm resize-none text-white placeholder-white/50 ${focusedField === 'message'
                                                ? 'border-purple-400 shadow-lg shadow-purple-500/25'
                                                : 'border-white/20 hover:border-white/30'
                                                } focus:outline-none`}
                                        />
                                    </div>

                                    {/* Botón de envío */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        onClick={handleSubmit}
                                        className="group relative w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold rounded-xl shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                                <span>Enviando mensaje...</span>
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                                                <span>Enviar mensaje</span>
                                                <Sparkles className="w-5 h-5 group-hover:animate-spin transition-all duration-300" />
                                            </>
                                        )}
                                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Footer message */}
                <div className={`text-center mt-16 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}>
                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-400/30 backdrop-blur-sm">
                        <Heart className="w-5 h-5 text-red-400 animate-pulse" />
                        <span className="text-white/80 font-medium">
                            ¡Gracias por visitar mi portfolio! Espero que podamos trabajar juntos pronto
                        </span>
                        <Coffee className="w-5 h-5 text-yellow-400" />
                    </div>
                </div>
            </div>

            {/* Efectos adicionales */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
        </section>
    );
}