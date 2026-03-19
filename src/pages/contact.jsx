function Contact() {
  return (
    <section className="contact-page">
      <h1 className="contact-title">Contact</h1>
      <p className="contact-subtitle">
        Pour me contacter en vue d’un entretien ou d’une future collaboration,
        merci de remplir le formulaire de contact.
      </p>
      <div className="contact-line" />

      <div className="contact-card">
        <div className="contact-grid">
          {/* Colonne gauche */}

          <div className="contact-col">
            <h3 className="contact-col-title">Formulaire de contact</h3>
            <div className="contact-col-line" />

            <form className="contact-form">
              <input type="text" placeholder="Votre nom" />
              <input type="email" placeholder="Votre adresse email" />
              <input type="text" placeholder="Votre numéro de téléphone" />
              <input type="text" placeholder="Sujet" />
              <textarea rows="5" placeholder="Votre message" />
              <button type="submit" className="contact-btn">
                Envoyer
              </button>
            </form>
          </div>

          {/* Colonne droite */}

          <div className="contact-col">
            <h3 className="contact-col-title">Mes coordonnées</h3>
            <div className="contact-col-line" />

            <div className="contact-info">
              <p>
                <strong>John Doe</strong>
              </p>
              <p>
                <i class="bi bi-map"></i>40 rue Laure Diebold
              </p>
              <p>
                <i class="bi bi-geo-alt"></i>69009 Lyon, France
              </p>
              <p>
                <i class="bi bi-phone"></i>10 20 30 40 50
              </p>
              <p>
                <i class="bi bi-envelope"></i>john.doe@gmail.com
              </p>
            </div>

            <div className="contact-map">
              <iframe
                title="map"
                src="https://www.google.com/maps?q=Lyon&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;