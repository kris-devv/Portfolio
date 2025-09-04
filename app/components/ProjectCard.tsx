interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  url: string;
}

export default function ProjectCard({ title, description, image, url }: ProjectCardProps) {
    const project_url = url;
    const project_image = image;
    const project_title = title;
    const project_description = description;
    
    return (
      <div className="project-card">
        <a href={url}>
          <img src={image} alt={title} />
          <div className="project-card-overlay">
            <img src="/icons/view.png" alt="view" />
          </div>
        </a>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  }
  