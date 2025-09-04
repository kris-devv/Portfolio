export default function ProjectsFilter() {
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
      ["Excel", "icons/excel.png"]
    ]

    return (
      <div className="about-skills-layout">
          {skills.map((skill) => (
            <div className="about-skill" key={skill[0]}>
              <img src={skill[1]} alt=""/>
              <p>{skill[0]}</p>
            </div>
        ))}
      </div>
    );
  }
  