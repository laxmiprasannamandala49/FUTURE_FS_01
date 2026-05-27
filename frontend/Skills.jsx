function Skills() {

  const skills = [
    "Java",
    "Python",
    "C",
    "HTML",
    "CSS",
    "JavaScript",
    "MySQL"
  ]

  return (

    <section id="skills">

      <h2>Skills</h2>

      <div className="skills-container">

        {skills.map((skill,index) => (

          <div className="skill-card" key={index}>
            {skill}
          </div>

        ))}

      </div>

    </section>

  )
}

export default Skills