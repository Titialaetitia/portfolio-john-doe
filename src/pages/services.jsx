import banner from "../assets/images/banner.jpg";

function Services() {
  const Services = [
    {
      title: "UX Design",
      text: "L'UX Design est une discipline qui consiste à concevoir des produits (site web, applications mobiles, logiciels, objets connectés, etc.) en plaçant l'utilisateur au centre des préoccupations. Lobjectif est de rendre l'expérience utilisateur la plus fluide et agréable possible.",
    },
    {
      title: "Développement web",
      text: "Le développement de sites web consiste à créer des sites internet en utilisant des langages de programmation (HTML, CSS, JavaSript, PHP, tec.) et des frameworks (Bootstrap, React, Angular, etc.).",
    },
    {
      title: "Référencement",
      text: "Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs de recherche (Google, Bing, Yahoo, tec.). L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site.",
    },
  ];

  return (
    <section className="services">
      <div
        className="services-banner"
        style={{ backgroundImage: `url(${banner})` }}
      ></div>

      <h2 className="section-title">Mon offre de services</h2>
      <p className="section-subtitle">
        Voici les prestations sur lesquelles je peux intervenir
      </p>
      <div className="section-line" />

      <div className="services-grid">
        <div className="service-card">
          <div className="service-icon">
            <i class="bi bi-brush"></i>
          </div>
          <h4>UX Design</h4>
          <p>
            L’UX Design est une discipline qui consiste à concevoir des produits
            (sites web, applications mobiles, logiciels, objets connectés, tec.)
            en plaçant l'utilisateur au centre des préocupations. L'objectif est
            de rendre l'expérience utilisateur la plus fluide et agréable
            possible.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <i class="bi bi-code-slash"></i>
          </div>
          <h4>Développement web</h4>
          <p>
            Le développement de sites web consiste à créer des sites internet en
            utilisant des langages de programmation (HTML? CSS? JavaScript, PHP,
            etc.) et des frameworks (Bootsrap, React, Angular, etc).
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <i class="bi bi-search"></i>
          </div>
          <h4>Référencement</h4>
          <p>
            Le référencement naturel (SEO) est une technique qui consiste à
            optimiser un site web pour le faire remonter dans les résultats des
            moteurs de recherche (Google, Bing, Yahoo, etc.). L'objectif est de
            d'attirer un maximum de visiteurs qualifiés sur le site.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;