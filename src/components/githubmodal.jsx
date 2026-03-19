import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import githubImg from "../assets/images/photoprofil.png"; // <-- vérifie le nom exact !npm
export default function GitHubModal({ show, onHide }) {
  return (
    <Modal show={show} onHide={onHide} centered size="lg">
      <Modal.Header closeButton className="bg-dark text-light border-secondary">
        <Modal.Title>Mon profil GitHub</Modal.Title>
      </Modal.Header>

      <Modal.Body className="bg-dark text-light">
        <div className="row g-3 align-items-start">
          {/* IMAGE À GAUCHE */}
          <div className="col-md-5">
            <img
              src={githubImg}
              alt="Profil GitHub"
              className="img-fluid rounded"
            />
          </div>

          {/* INFOS À DROITE */}
          <div className="col-md-7">
            <p className="mb-2">
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                John Doe
              </a>
            </p>

            <hr className="border-secondary" />

            <p className="small mb-3">
              As we all know, John Doe&apos;s identity is unknown. I just wanted
              to contribute without being known.
            </p>

            <ul className="list-unstyled small mb-0">
              <li className="mb-2">📦 Repositories : 1</li>
              <li className="mb-2">👥 Followers : 16</li>
              <li className="mb-2">➕ Following : 0</li>
            </ul>
          </div>
        </div>
      </Modal.Body>

      <Modal.Footer className="bg-dark border-secondary">
        <Button variant="secondary" onClick={onHide}>
          Fermer
        </Button>
      </Modal.Footer>
    </Modal>
  );
}