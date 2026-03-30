import Image from 'next/image';

export default function Hero() {
    return (
        <section id="hero" className="container section-padding animate-fade-in" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            paddingTop: '8rem',
            position: 'relative'
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '4rem',
                width: '100%',
                flexWrap: 'wrap-reverse'
            }}>
                <div style={{ flex: '1 1 500px' }}>
                    <div style={{
                        display: 'inline-block',
                        padding: '0.5rem 1rem',
                        borderRadius: '9999px',
                        background: 'rgba(37, 99, 235, 0.1)',
                        color: 'var(--accent-primary)',
                        fontWeight: 600,
                        marginBottom: '2rem',
                        border: '1px solid rgba(37, 99, 235, 0.2)'
                    }}>
                        Ouvert aux opportunités professionnelles
                    </div>

                    <h1 style={{
                        fontSize: 'clamp(3rem, 8vw, 5rem)',
                        lineHeight: 1.1,
                        marginBottom: '1.5rem',
                        letterSpacing: '-1px'
                    }}>
                        Bonjour, je suis <span className="text-gradient">Rodin</span><br />
                        Ingénieur Logiciel
                    </h1>

                    <p style={{
                        fontSize: 'clamp(1.125rem, 2vw, 1.25rem)',
                        color: 'var(--text-secondary)',
                        maxWidth: '600px',
                        marginBottom: '3rem'
                    }}>
                        J'accompagne les entreprises ambitieuses dans leur transformation digitale. 
                        Je conçois et développe des applications web sur mesure, alliant performance, sécurité et design immersif pour répondre aux standards internationaux les plus exigeants.
                    </p>

                    <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                        <a href="#projects" className="btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
                            Découvrir mes réalisations
                        </a>
                        <a href="#contact" className="btn-secondary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
                            Me contacter
                        </a>
                    </div>
                </div>

                <div style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center' }}>
                    <div style={{
                        position: 'relative',
                        width: 'min(100%, 450px)',
                        aspectRatio: '1 / 1.15',
                        borderRadius: '2rem',
                        overflow: 'hidden',
                        border: '1px solid var(--border-color)',
                        boxShadow: 'var(--shadow-glow)',
                        background: 'var(--bg-secondary)'
                    }}>
                        <Image
                            src="/profile.png"
                            alt="Rodin - Ingénieur Logiciel & Développeur Full-Stack"
                            fill
                            style={{ objectFit: 'cover', objectPosition: 'center top' }}
                            priority
                        />
                    </div>
                </div>
            </div>

            <div style={{
                position: 'absolute',
                bottom: '2rem',
                left: '50%',
                transform: 'translateX(-50%)',
                animation: 'bounce 2s infinite',
            }}>
                <a href="#about" style={{ color: 'var(--text-secondary)' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 5v14M19 12l-7 7-7-7" />
                    </svg>
                </a>
            </div>
            <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(-25%) translateX(-50%); animation-timing-function: cubic-bezier(0.8,0,1,1); }
          50% { transform: translateX(-50%); animation-timing-function: cubic-bezier(0,0,0.2,1); }
        }
      `}</style>
        </section>
    );
}