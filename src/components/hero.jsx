import { useEffect, useState } from "react";
import HeroBg from "../assets/images/hero-bg.jpg";

function GitHubModal() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/github-john-doe")
      .then((res) => res.json())
      .then((data) => setProfile(data));
  }, []);

  if (!profile) return null;

  return (
    <div className="modal fade" id="githubmodal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Profil GitHub</h5>
            <button className="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div className="modal-body text-center">
            <img
              src={profile.avatar_url}
              className="img-fluid rounded-circle mb-3"
              width="100"
            />
            <h5>{profile.name}</h5>
            <p>{profile.bio}</p>
            <a href={profile.html_url} target="_blank">
              Voir GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GitHubModal;