function Hero() {
  return (

    <section className="hero" id="home">

      <div className="hero-left">

        <h1 className="hero-title">
  Hi, I'm <span>Laxmi Prasanna</span>
</h1>
        <h2>
          Full Stack Developer
        </h2>

        <p>
          Passionate Full Stack Developer focused on
          building responsive, scalable, and user-friendly
          web applications using modern technologies.
        </p>

        <div className="hero-buttons">

          <a href="#projects">
            <button className="primary-btn">
              View Work
            </button>
          </a>

          <a href="#contact">
            <button className="secondary-btn">
              Contact
            </button>
          </a>

        </div>

      </div>

      <div className="hero-right">

        <div className="image-circle">

          <img
            src="/profile.jpeg"
            alt=""
          />

        </div>

      </div>

    </section>

  )
}

export default Hero