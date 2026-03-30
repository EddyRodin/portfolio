import Link from 'next/link';

export default function Navbar() {
    return (
        <header style={{
            position: 'fixed',
            top: 0,
            width: '100%',
            zIndex: 100,
            padding: '1rem 0',
            transition: 'all 0.3s ease'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link href="/" style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    fontFamily: 'var(--font-heading)',
                    letterSpacing: '-0.5px'
                }}>
                    Rodin<span className="text-gradient">.dev</span>
                </Link>
                <nav className="glass-panel" style={{
                    padding: '0.75rem 2rem',
                    display: 'flex',
                    gap: '2rem',
                    borderRadius: '9999px' // Pill shape
                }}>
                    <Link href="#about" style={{ fontWeight: 500 }}>Expertise</Link>
                    <Link href="#skills" style={{ fontWeight: 500 }}>Technologies</Link>
                    <Link href="#projects" style={{ fontWeight: 500 }}>Réalisations</Link>
                    <Link href="#contact" style={{ fontWeight: 500 }}>Contact</Link>
                </nav>
                <div style={{ paddingRight: '1rem' }}>
                    <Link href="#contact" className="btn-primary" style={{ padding: '0.5rem 1.25rem' }}>
                        Collaborer
                    </Link>
                </div>
            </div>
        </header>
    );
}