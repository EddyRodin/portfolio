export default function Contact() {
    return (
        <section id="contact" className="container section-padding">
            <div className="glass-panel" style={{
                maxWidth: '800px',
                margin: '0 auto',
                padding: '3rem',
                textAlign: 'center'
            }}>
                <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>
                    Prenons <span className="text-gradient">Contact</span>
                </h2>

                <p style={{
                    fontSize: '1.125rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '3rem',
                    maxWidth: '600px',
                    margin: '0 auto 3rem'
                }}>
                    Je suis à l'écoute de nouvelles opportunités de collaboration. Qu'il s'agisse d'un projet d'envergure, 
                    d'un besoin de conseil technique ou d'une simple prise de contact, vos messages sont les bienvenus.
                </p>

                <form 
                    action="https://formspree.io/f/ditrodin1702@gmail.com" 
                    method="POST"
                    style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '500px', margin: '0 auto' }}
                >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', textAlign: 'left' }}>
                        <label htmlFor="name" style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Nom / Entreprise</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            placeholder="Votre nom ou société"
                            style={{
                                width: '100%',
                                padding: '0.75rem 1rem',
                                borderRadius: '0.5rem',
                                background: 'var(--bg-primary)',
                                border: '1px solid var(--border-color)',
                                color: 'var(--text-primary)',
                                fontFamily: 'var(--font-body)'
                            }}
                        />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', textAlign: 'left' }}>
                        <label htmlFor="email" style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Adresse Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            placeholder="contact@entreprise.com"
                            style={{
                                width: '100%',
                                padding: '0.75rem 1rem',
                                borderRadius: '0.5rem',
                                background: 'var(--bg-primary)',
                                border: '1px solid var(--border-color)',
                                color: 'var(--text-primary)',
                                fontFamily: 'var(--font-body)'
                            }}
                        />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', textAlign: 'left' }}>
                        <label htmlFor="message" style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Message</label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            rows={5}
                            placeholder="Veuillez décrire votre projet ou objet de contact..."
                            style={{
                                width: '100%',
                                padding: '0.75rem 1rem',
                                borderRadius: '0.5rem',
                                background: 'var(--bg-primary)',
                                border: '1px solid var(--border-color)',
                                color: 'var(--text-primary)',
                                fontFamily: 'var(--font-body)',
                                resize: 'vertical'
                            }}
                        ></textarea>
                    </div>

                    <button type="submit" className="btn-primary" style={{ marginTop: '1rem', width: '100%' }}>
                        Envoyer le message
                    </button>
                </form>
            </div>
        </section>
    );
}