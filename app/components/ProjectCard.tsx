export default function ProjectCard() {
    const project_url = "/smile.png";
    const project_img = "/smile.png";
    const project_alt = "smile";
    const project_title = "Project";
    const project_description = "Project description";

    return (
      <div className="project-card">
        <a href={project_url}><img src={project_img} alt={project_alt} /></a>
        <h3>{project_title}</h3>
        <p>{project_description}</p>
      </div>
    );
  }
  