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
                    Travaillons <span className="text-gradient">Ensemble</span>
                </h2>

                <p style={{
                    fontSize: '1.125rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '3rem',
                    maxWidth: '600px',
                    margin: '0 auto 3rem'
                }}>
                    Je suis actuellement à la recherche de nouvelles opportunités. Que vous ayez une question, 
                    une proposition de projet ou que vous souhaitiez simplement dire bonjour, ma boîte de réception est toujours ouverte.
                </p>

                {/* Formulaire configuré pour Formspree */}
                <form 
                    action="https://formspree.io/f/ditrodin1702@gmail.com" 
                    method="POST"
                    style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '500px', margin: '0 auto' }}
                >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', textAlign: 'left' }}>
                        <label htmlFor="name" style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Nom</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            placeholder="Votre nom"
                            style={{
                                width: '100%',
                                padding: '0.75rem 1rem',
                                borderRadius: '0.5rem',
                                background: 'rgba(17, 24, 39, 0.5)',
                                border: '1px solid var(--border-color)',
                                color: 'white',
                                fontFamily: 'var(--font-body)'
                            }}
                        />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', textAlign: 'left' }}>
                        <label htmlFor="email" style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            placeholder="votre@exemple.com"
                            style={{
                                width: '100%',
                                padding: '0.75rem 1rem',
                                borderRadius: '0.5rem',
                                background: 'rgba(17, 24, 39, 0.5)',
                                border: '1px solid var(--border-color)',
                                color: 'white',
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
                            placeholder="Bonjour Rodin, j'aimerais vous parler de..."
                            style={{
                                width: '100%',
                                padding: '0.75rem 1rem',
                                borderRadius: '0.5rem',
                                background: 'rgba(17, 24, 39, 0.5)',
                                border: '1px solid var(--border-color)',
                                color: 'white',
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