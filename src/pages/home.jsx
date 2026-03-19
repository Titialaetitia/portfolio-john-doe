import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import GitHubModal from "../components/GitHubModal";
import heroBg from "../assets/images/hero-bg.jpg";
import aboutImg from "../assets/images/john-doe-about.jpg";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* HERO */}
      <header
        className="hero d-flex align-items-center justify-content-center text-center text-light"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <div>
          <h1>Bonjour, je suis John Doe</h1>
          <h2>Développeur web full stack</h2>

          <button
            className="btn-cta mt-3"
            type="button"
            onClick={() => setShowModal(true)}
          >
            En savoir plus
          </button>
        </div>
      </header>

      {/* MODALE */}
      <GitHubModal show={showModal} onHide={() => setShowModal(false)} />

      {/* About and Skills Section */}

      <Container className="my-5 py-5">
        <Row>
          {/* À propos */}

          <Col lg={6} className="mb-4">
            <h2 className="mb-4">À propos</h2>
            <hr
              className="bg-primary mb-4"
              style={{ height: "3px", width: "100px", opacity: 1 }}
            />

            <img
              src={aboutImg}
              alt="John Doe"
              className="img-fluid rounded mb-3"
            />

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
              necessitatibus consectetur tempore perferendis nostrum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
              necessitatibus consectetur tempore perferendis nostrum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
              necessitatibus consectetur tempore perferendis nostrum.
            </p>
          </Col>

          {/* Compétences */}

          <Col lg={6}>
            <h2>Compétences</h2>
            <hr className="mb-4" />

            <p className="mb-1">HTML 5 90%</p>
            <div className="progress mb-3">
              <div
                className="progress-bar bg-danger"
                style={{ width: "90%" }}
              ></div>
            </div>

            <p className="mb-1">CSS 80%</p>
            <div className="progress mb-3">
              <div
                className="progress-bar bg-info"
                style={{ width: "80%" }}
              ></div>
            </div>

            <p className="mb-1">JAVASCRIPT 70%</p>
            <div className="progress mb-3">
              <div
                className="progress-bar bg-warning"
                style={{ width: "70%" }}
              ></div>
            </div>

            <p className="mb-1">PHP 60%</p>
            <div className="progress mb-3">
              <div
                className="progress-bar bg-success"
                style={{ width: "60%" }}
              ></div>
            </div>

            <p className="mb-1">React 50%</p>
            <div className="progress mb-3">
              <div
                className="progress-bar bg-primary"
                style={{ width: "50%" }}
              ></div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}