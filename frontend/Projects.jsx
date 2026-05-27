function Projects() {
  return (

    <section id="projects">

      <h2>Projects</h2>

      {/* PROJECT 1 */}

      <div className="project-card">

        <h3>
          Online Hospital Billing & Payment Portal
        </h3>

        <p>
          Developed a full stack hospital billing and payment
          portal with patient dashboard, due tracking,
          online payment system, and payment verification
          features for efficient hospital management.
        </p>

        <h4>
          Tech Stack:
        </h4>

        <span>
          Python Flask | HTML | CSS | JavaScript | SQLite

        </span>

      </div>

      {/* PROJECT 2 */}

      <div className="project-card">

        <h3>
          Personal Portfolio Website
        </h3>

        <p>
          Designed and developed a responsive personal
          portfolio website to showcase skills, projects,
          and contact information with modern UI and
          smooth navigation.
        </p>

        <h4>
          Tech Stack:
        </h4>

        <span>
          React JS | HTML | CSS | JavaScript
        </span>

      </div>

      {/* PROJECT 3 */}

      <div className="project-card">

        <h3>
          Student Management System
        </h3>

        <p>
          Developed a student management system to manage,
          store, and update student records efficiently
          with database integration and user-friendly interface.
        </p>

        <h4>
          Tech Stack:
        </h4>

        <span>
          Python | Flask | SQLite
        </span>

      </div>

    </section>

  )
}

export default Projects