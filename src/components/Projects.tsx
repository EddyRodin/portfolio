"use client";

export default function Projects() {
    const projects = [
        {
            title: "CRG-Three (Générateur à Contre-Rotation)",
            description: "Moderne vitrine technologique pour une solution de récupération d'énergie éolienne et hydrolienne. Met en exergue l'expertise maritime de 43 ans du fondateur via une interface immersive.",
            techStack: ["Next.js", "React", "Tailwind CSS", "Vercel"],
            link: "https://crg-three.vercel.app/",
            github: "#"
        },
        {
            title: "Plateforme E-Commerce B2B/B2C",
            description: "Solution e-commerce complète intégrant un frontend Next.js optimisé SEO, une API Node.js robuste, des paiements sécurisés via Stripe et une gestion des flux logistiques en temps réel.",
            techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
            link: "#",
            github: "#"
        },
        {
            title: "ATIMO Exchange",
            description: "Plateforme d'échange d'actifs financiers sécurisée et optimisée pour le marché malgache. Intègre un système KYC strict, des flux de marché en temps réel et des paiements par Mobile Money (Mvola, Airtel, Orange).",
            techStack: ["Next.js", "TypeScript", "Node.js", "API Paiements"],
            link: "#",
            github: "#"
        }
    ];

    return (
        <section id="projects" className="container section-padding">
            <h2 className="section-title">Réalisations <span className="text-gradient">Majeures</span></h2>

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
                                        background: 'var(--bg-secondary)',
                                        border: '1px solid var(--border-color)',
                                        borderRadius: '9999px',
                                        color: 'var(--accent-primary)',
                                        fontWeight: 500
                                    }}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        
                        <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                            {project.github !== "#" && (
                                <a href={project.github} className="btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
                                    Code Source
                                </a>
                            )}

                            {project.link !== "#" ? (
                                <a href={project.link} className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
                                    Voir en production
                                </a>
                            ) : (
                                <div style={{ 
                                    padding: '0.5rem 1rem', 
                                    fontSize: '0.825rem', 
                                    background: 'var(--bg-secondary)', 
                                    color: 'var(--text-secondary)', 
                                    borderRadius: '8px',
                                    border: '1px solid var(--border-color)',
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