import ProjectCard from "../components/ProjectCard";
import freshFood from "../assets/images/fresh-food.jpg";
import sushi from "../assets/images/restaurant-japonais.jpg";
import spa from "../assets/images/espace-bien-etre.jpg";
import seo from "../assets/images/seo.jpg";
import api from "../assets/images/coder.jpg";
import maquette from "../assets/images/screens.jpg";

const projects = [
  {
    title: "Fresh Food",
    description: "Site de vente de produits frais en ligne",
    img: freshFood,
    tech: "Réalisé avec PHP et MySQL",
  },
  {
    title: "Restaurant Akira",
    description: "Site de vente de produits frais en ligne",
    img: sushi,
    tech: "Site réalisé avec WordPress",
  },
  {
    title: "Espace bien-être",
    description: "Site de vente de produits frais en ligne",
    img: spa,
    tech: "Site réalisé avec Laravel",
  },
  {
    title: "SEO",
    description: "Amélioration du référencement d'un site e-commerce",
    img: seo,
    tech: "Utilisation d'outils SEO",
  },
  {
    title: "Création d'une API",
    description: "Création d'une API RESTFULL publique",
    img: api,
    tech: "PHP - SYMFONY",
  },
  {
    title: "Maquette d'un site web",
    description: "Création du prototype d'un site",
    img: maquette,
    tech: "Réalisé avec Figma",
  },
];

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="section-title text-center">Portfolio</h2>
      <p className="section-subtitle text-center">
        Voici quelques-unes de mes réalisations.
      </p>
      <div className="section-line" />

      <div className="portfolio-grid">
        {projects.map((p, i) => (
          <div className="card project-card h-100">
            <div className="project-card" key={i}>
              <img className="project-img" src={p.img} alt={p.title} />
              <div className="project-body">
                <h4>{p.title}</h4>
                <p>{p.description}</p>
                <button className="project-btn">Voir le site</button>
                <div className="project-tech">{p.tech}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}