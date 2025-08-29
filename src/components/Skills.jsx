import { FaReact, FaPython, FaJava, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { SiDotnet, SiTailwindcss } from "react-icons/si";

export default function Skills() {
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

    return (
        <section id="skills" className="py-24 bg-gray-50 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-12">
                Mis Habilidades
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
                {skills.map((skill, index) => (
                    <div
                        key={skill.name}
                        className={`flex flex-col items-center bg-gradient-to-br from-white to-gray-100 p-6 rounded-2xl shadow-md 
                                    hover:shadow-xl hover:scale-105 hover:rotate-1 transform transition-all duration-500`}
                        style={{ animation: `fadeInUp 0.5s ease forwards`, animationDelay: `${index * 0.1}s`, opacity: 0 }}
                    >
                        {skill.icon}
                        <span className="mt-3 font-semibold text-gray-800 text-lg">{skill.name}</span>
                    </div>
                ))}
            </div>

            <style jsx>{`
                @keyframes fadeInUp {
                    0% {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </section>
    );
}
