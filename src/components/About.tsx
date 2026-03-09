"use client";

import {
    SiJavascript, SiTypescript, SiReact, SiNextdotjs,
    SiNodedotjs, SiExpress, SiNestjs, SiPython,
    SiPostgresql, SiMongodb, SiPrisma, SiDocker,
    SiGit, SiTailwindcss, SiGraphql
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

export default function About() {
    const skills = [
        { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
        { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
        { name: "React", icon: <SiReact color="#61DAFB" /> },
        { name: "Next.js", icon: <SiNextdotjs color="#ffffff" /> },
        { name: "Node.js", icon: <SiNodedotjs color="#339933" /> },
        { name: "Express", icon: <SiExpress color="#ffffff" /> },
        { name: "NestJS", icon: <SiNestjs color="#E0234E" /> },
        { name: "Python", icon: <SiPython color="#3776AB" /> },
        { name: "PostgreSQL", icon: <SiPostgresql color="#4169E1" /> },
        { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
        { name: "Prisma", icon: <SiPrisma color="#2D3748" /> },
        { name: "Docker", icon: <SiDocker color="#2496ED" /> },
        { name: "Git", icon: <SiGit color="#F05032" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" /> },
        { name: "GraphQL", icon: <SiGraphql color="#E10098" /> },
        { name: "AWS", icon: <FaAws color="#FF9900" /> }
    ];

    return (
        <section id="about" className="container section-padding">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                <div style={{ textAlign: 'center' }}>
                    <h2 className="section-title">À Propos de <span className="text-gradient">Moi</span></h2>
                    <p style={{
                        fontSize: '1.25rem',
                        color: 'var(--text-secondary)',
                        maxWidth: '800px',
                        margin: '0 auto'
                    }}>
                        Bonjour ! Je suis Rodin, un Développeur Full-Stack passionné par la création 
                        d'expériences numériques innovantes. Mon parcours dans le développement web 
                        a commencé par une profonde curiosité sur le fonctionnement des systèmes, 
                        ce qui m'a naturellement amené à maîtriser les technologies frontend et backend.
                    </p>
                    <br />
                    <p style={{
                        fontSize: '1.25rem',
                        color: 'var(--text-secondary)',
                        maxWidth: '800px',
                        margin: '0 auto'
                    }}>
                        Aujourd'hui, je me spécialise dans la construction d'applications robustes et 
                        évolutives en utilisant des architectures modernes. Qu'il s'agisse de concevoir 
                        une interface utilisateur pixel-perfect ou de bâtir une API REST/GraphQL 
                        haute performance, j'apporte dévouement et excellence technique à chaque projet.
                    </p>
                </div>

                <div id="skills" style={{ marginTop: '2rem' }}>
                    <h3 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '2rem' }}>
                        Mes <span className="text-gradient">Compétences</span>
                    </h3>
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '1rem',
                        justifyContent: 'center',
                        maxWidth: '900px',
                        margin: '0 auto'
                    }}>
                        {skills.map((skill, index) => (
                            <div key={index} className="glass-panel" style={{
                                padding: '0.75rem 1.5rem',
                                borderRadius: '9999px',
                                fontWeight: 600,
                                color: 'var(--text-primary)',
                                transition: 'all 0.3s ease',
                                cursor: 'default',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-3px)';
                                    e.currentTarget.style.borderColor = 'var(--accent-primary)';
                                    e.currentTarget.style.boxShadow = 'var(--shadow-glow)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.borderColor = 'var(--border-color)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                <span style={{ fontSize: '1.25rem' }}>{skill.icon}</span>
                                <span>{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}