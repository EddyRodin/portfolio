export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer style={{
            borderTop: '1px solid var(--border-color)',
            padding: '4rem 0 2rem',
            marginTop: '4rem',
            backgroundColor: 'var(--bg-secondary)'
        }}>
            <div className="container">
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    gap: '2rem',
                    marginBottom: '3rem'
                }}>
                    <div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
                            Rodin<span className="text-gradient">.dev</span>
                        </h3>
                        <p style={{ color: 'var(--text-secondary)', maxWidth: '300px' }}>
                            Développeur Full-Stack créant des applications web modernes, évolutives et performantes.
                        </p>
                    </div>
                    <div style={{ display: 'flex', gap: '4rem' }}>
                        <div>
                            <h4 style={{ marginBottom: '1rem' }}>Liens</h4>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <li><a href="#about" style={{ color: 'var(--text-secondary)' }}>À propos</a></li>
                                <li><a href="#projects" style={{ color: 'var(--text-secondary)' }}>Projets</a></li>
                                <li><a href="#contact" style={{ color: 'var(--text-secondary)' }}>Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 style={{ marginBottom: '1rem' }}>Réseaux</h4>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <li><a href="#" style={{ color: 'var(--text-secondary)' }}>GitHub</a></li>
                                <li><a href="#" style={{ color: 'var(--text-secondary)' }}>LinkedIn</a></li>
                                <li><a href="#" style={{ color: 'var(--text-secondary)' }}>Twitter</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div style={{
                    textAlign: 'center',
                    color: 'var(--text-secondary)',
                    borderTop: '1px solid var(--border-color)',
                    paddingTop: '2rem',
                    fontSize: '0.875rem'
                }}>
                    &copy; {currentYear} RANAIVOSON Jean de Dieu dit Rodin. Tous droits réservés.
                </div>
            </div>
        </footer>
    );
}