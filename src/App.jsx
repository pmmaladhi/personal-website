
import './App.css'

function App() {
  return (
    <main className="homepage">
      <header className="site-header">
        <div className="name-block">
          <h1>Maladhi Pande</h1>
          <p className="pronunciation">MAH-luh-dee PAHN-day</p>
        </div>

        <nav className="navigation">
          <a href="#about">About</a>
          <a href="#work">Research & Projects</a>
          <a href="#writing">Writing</a>
          <a href="#beyond">Beyond the Work</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-text">
          <p className="eyebrow">
            COMPUTER SCIENCE · COGNITIVE SCIENCE · WRITING
          </p>

          <h2>
            A little bit about
            <br />
            what makes me, me.
          </h2>

          <p className="hero-description">
            Exploring the intersections of technology, cognition,
            and the human experience.
          </p>
        </div>

        <figure className="portrait">
          <img
            src="/portrait.png"
            alt="Portrait of Maladhi Pande"
          />
          <figcaption>
            A little corner of my world.
          </figcaption>
        </figure>
      </section>

      <section id="about" className="content-section">
        <h2>About</h2>
        <p>
          A space to introduce yourself and the things you're curious about.
        </p>
      </section>

      <section id="work" className="content-section">
        <h2>Research & Projects</h2>
        <p>Research, experiments, and things I've been building.</p>
      </section>

      <section id="writing" className="content-section">
        <h2>Writing</h2>
        <p>Essays, reflections, and other words.</p>
      </section>

      <section id="beyond" className="content-section">
        <h2>Beyond the Work</h2>
        <p>
          The interests and experiences that don't fit neatly into a résumé.
        </p>
      </section>

      <footer>
        <p>Thanks for stopping by.</p>
      </footer>
    </main>
  )
}

export default App
