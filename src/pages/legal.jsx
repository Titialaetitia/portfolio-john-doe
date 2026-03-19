import { useEffect } from "react";

function MentionsLegales() {
  useEffect(() => {
    document
      .querySelector('meta[name="robots"]')
      ?.setAttribute("content", "noindex, nofollow");
  }, []);

  return (
    <div className="container my-5">
      <h1 className="page-title">Mentions légales</h1>
      <div className="accordion" id="MentionslegalesAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              type="button"
              className="accordion-button"
              data-bs-toggle="collapse"
              data-bs-target="#one"
              aria-controls="one"
            >
              Éditeur du site
            </button>
          </h2>
          <div id="one" className="accordion-collapse collapse show">
            <div className="accordion-body">John Doe</div>
            <ul className="list-unstyled">
              <li>
                <i className="bi bi-map"></i>40 rue Laure Diebold
              </li>
              <li>
                <i className="bi bi-geo-alt"></i>69009 Lyon, France
              </li>
              <li>
                <i className="bi bi-phone"></i>10 20 30 40 50
              </li>
              <li>
                <i className="bi bi-envelope"></i>john.doe@gmail.com
              </li>
            </ul>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              type="button"
              className="accordion-button collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#two"
              aria-controls="two"
            >
              Hébergeur
            </button>
          </h2>
          <div id="two" className="accordion-collapse collapse show">
            <div className="accordion-body mentions-body">
              <h5 className="fw-bold mb-3">alwaysdata</h5>

              <div className="d-flex align-items-start mb-2">
                <i className="bi bi-geo-alt icon-muted me-2"></i>
                <span>91 Rue du Faubourg Saint-Honoré, 75008 Paris</span>
              </div>

              <div className="d-flex align-items-start">
                <i className="bi bi-globe icon-muted me-2"></i>
                <a
                  href="https://www.alwaysdata.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.alwaysdata.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              type="button"
              className="accordion-button collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#three"
              aria-controls="three"
            >
              Crédits
            </button>
          </h2>
          <div id="three" className="accordion-collapse collapse">
            <div className="accordion-body">
              <p>
                Ce site a été réalisé par John Doe, étudiant au Centre Européen
                de formation.
              </p>

              <p>
                Les images utilisées sur ce site sont libres de droits et ont
                été obtenues sur le site{" "}
                <a href="https://pixabay.com" target="_blank" rel="noreferrer">
                  Pixabay
                </a>
                .
              </p>

              <p>
                La favicon de ce site a été fournie par{" "}
                <a href="https://flaticon.com" target="_blank" rel="noreferrer">
                  John Doe Icons erstellt von Freepik – Flaticon
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MentionsLegales;