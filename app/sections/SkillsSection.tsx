export default function SkillsSection() {
    const skills = [
      ["Python", "icons/python.png"],
      ["Git", "icons/git.png"],
      ["GitHub", "icons/github.png"],
      ["Linux", "icons/linux.png"],
      ["Flutter", "icons/flutter.png"],
      ["PySide", "icons/qt.png"],
      ["Flask", "icons/flask.png"],
      ["SQLite", "icons/sqlite.png"],
      ["Pandas", "icons/pandas.png"],
      ["NumPy", "icons/numpy.png"],
      ["Excel", "icons/excel.png"],
      ["HTML", "icons/html.png"],
      ["CSS", "icons/css.png"],
      ["Figma", "icons/figma.png"],
      ["Photoshop", "icons/photoshop.png"],
      ["OpenAI", "icons/openai.png"],
      ["Trello", "icons/trello.svg"],
    ]

    // Duplikujemy tablicę, aby stworzyć płynną pętlę
    const duplicatedSkills = [...skills, ...skills];

    return (
      <div className="skills-section">
        <div className="skills-container">
          <div className="skills-track">
            {duplicatedSkills.map((skill, index) => (
              <div className="about-skill" key={`${skill[0]}-${index}`}>
                <img src={skill[1]} alt={skill[0]} loading="lazy" />
                <p>{skill[0]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }