function ProjectCard({ title, description }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <div className="card-body">
          <h5 className="card-title text-center">{title}</h5>
          <p className="card-text text-center">{description}</p>
          <button className="btn btn-primary">Voir le projet</button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;