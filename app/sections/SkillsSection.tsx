export default function ProjectsFilter() {
    const skills = [ "Python", "Git", "GitHub", "Linux", "Flutter", "PySide", "Flask", "SQLite", "Pandas", "NumPy", "Excel"];

    return (
      <div className="about-skills-layout">
        {skills.map((skill) => (
          <div className="about-skill">
            <p>{skill}</p>
          </div>
        ))}
      </div>
    );
  }
  