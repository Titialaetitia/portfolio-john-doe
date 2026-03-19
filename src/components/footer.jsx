import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container">
        <div className="row text-center text-md-start">
          <div className="col-md-4">
            <h5>John Doe</h5>
            <p>
              40 rue Laure Diebold 69009 Lyon, France
              <br />
              10 20 30 40 50
              <br />
              john.doe@gmail.com
            </p>
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <i className="bi bi-github fs-4 me-3"></i>
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              <i className="bi bi-twitter fs-4 me-3"></i>
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
              <i className="bi bi-linkedin fs-4"></i>
            </a>
          </div>

          <div className="col-md-4">
            <h5>Navigation</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="footer-link">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-link">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="footer-link">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  Me contacter
                </Link>
              </li>
              <li>
                <Link to="/mentionslegales" className="footer-link">
                  Mentions Légales
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-4">
            <h5>Dernières réalisations</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/portfolio" className="footer-link">
                  Fresh Food
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="footer-link">
                  Restaurant Akira
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="footer-link">
                  Espace bien-être
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="footer-link">
                  SEO
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="footer-link">
                  Création d'une API
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="footer-link">
                  Maquette d'un site
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;