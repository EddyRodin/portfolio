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
                            Ingénieur Logiciel accompagnant la transformation digitale par des applications web d'excellence.
                        </p>
                    </div>
                    <div style={{ display: 'flex', gap: '4rem' }}>
                        <div>
                            <h4 style={{ marginBottom: '1rem' }}>Liens</h4>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <li><a href="#about" style={{ color: 'var(--text-secondary)' }}>Expertise</a></li>
                                <li><a href="#projects" style={{ color: 'var(--text-secondary)' }}>Réalisations</a></li>
                                <li><a href="#contact" style={{ color: 'var(--text-secondary)' }}>Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 style={{ marginBottom: '1rem' }}>Réseaux</h4>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <li><a href="https://github.com/EddyRodin" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>GitHub</a></li>
                                <li><a href="https://www.linkedin.com/in/jean-de-dieu-dit-rodin-ranaivoson-5691993b6" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>LinkedIn</a></li>
                                <li><a href="https://x.com/RJR1702" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>Twitter / X</a></li>
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