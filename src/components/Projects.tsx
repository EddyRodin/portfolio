"use client";

export default function Projects() {
    const projects = [
        {
            title: "CRG-Three (Générateur à Contre-Rotation)",
            description: "Site vitrine pour une technologie de récupération d'énergie éolienne et hydrolienne. Met en avant l'expertise maritime de 43 ans du fondateur et l'historique des tests pilotes.",
            techStack: ["Next.js", "React", "Tailwind CSS", "Vercel"],
            link: "https://crg-three.vercel.app/",
            github: "#"
        },
        {
            title: "Plateforme E-Commerce",
            description: "Une plateforme e-commerce complète avec un frontend Next.js, un backend Node.js, l'intégration Stripe pour les paiements et une gestion des stocks en temps réel.",
            techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
            link: "#",
            github: "#"
        },
        {
            title: "SaaS de Gestion de Tâches",
            description: "Outil collaboratif de gestion de projet proposant des mises à jour en temps réel, des tableaux de bord interactifs (drag-and-drop) et un contrôle d'accès basé sur les rôles.",
            techStack: ["React", "Express", "MongoDB", "Socket.io"],
            link: "#",
            github: "#"
        }
    ];

    return (
        <section id="projects" className="container section-padding">
            <h2 className="section-title">Projets <span className="text-gradient">Sélectionnés</span></h2>

            <div className="grid-3">
                {projects.map((project, index) => (
                    <div key={index} className="glass-panel" style={{
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '2rem',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-10px)';
                            e.currentTarget.style.boxShadow = 'var(--shadow-glow)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        <div style={{ flexGrow: 1 }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                                {project.title}
                            </h3>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                                {project.description}
                            </p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                                {project.techStack.map((tech, i) => (
                                    <span key={i} style={{
                                        fontSize: '0.875rem',
                                        padding: '0.25rem 0.75rem',
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        borderRadius: '9999px',
                                        color: 'var(--accent-primary)'
                                    }}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        
                        <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                            {/* Bouton GitHub affiché seulement si le lien n'est pas "#" */}
                            {project.github !== "#" && (
                                <a href={project.github} className="btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
                                    GitHub
                                </a>
                            )}

                            {/* Logique pour Démo Live vs En cours de développement */}
                            {project.link !== "#" ? (
                                <a href={project.link} className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
                                    Voir la démo
                                </a>
                            ) : (
                                <div style={{ 
                                    padding: '0.5rem 1rem', 
                                    fontSize: '0.825rem', 
                                    background: 'rgba(255, 255, 255, 0.05)', 
                                    color: 'rgba(255, 255, 255, 0.5)', 
                                    borderRadius: '8px',
                                    border: '1px dashed rgba(255, 255, 255, 0.2)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    cursor: 'default'
                                }}>
                                    <span style={{ 
                                        width: '6px', 
                                        height: '6px', 
                                        background: '#fbbf24', 
                                        borderRadius: '50%',
                                        display: 'inline-block' 
                                    }}></span>
                                    En développement
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}