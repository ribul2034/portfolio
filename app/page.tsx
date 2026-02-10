const experience = [
  {
    role: "Full Stack Developer",
    company: "Media-AMP",
    period: "Jan 2024 — Present",
    location: "Ahmedabad, India",
    bullets: [
      "Designed and developed secure backend services using Flask and FastAPI with JWT auth and role-based access control.",
      "Built data acquisition pipelines with Scrapy, including proxy rotation and anti-bot defenses.",
      "Implemented Redis for caching, token handling, and application data management.",
      "Managed containerized workloads with Docker and Docker Compose for scalable services.",
      "Built task orchestration logic for batching and parallel execution within provider limits.",
      "Engineered relational SQL schemas and RESTful APIs for high-volume data systems.",
    ],
  },
];

const projects = [
  {
    title: "Media-AMP Company Website",
    role: "Backend Developer",
    link: "https://www.media-amp.com/",
    bullets: [
      "Engineered backend infrastructure with FastAPI for static and dynamic content delivery.",
      "Delivered internal CRUD modules for blog management and content workflows.",
      "Implemented asset handling and serving for images and media using FastAPI static files.",
      "Built recruitment module APIs for job application submission and tracking.",
      "Partnered with the frontend team to design and optimize API endpoints.",
    ],
  },
  {
    title: "Ad Performance & Budget Allocation Dashboard",
    role: "Backend Developer",
    bullets: [
      "Automated daily data collection from advertising platforms into Amazon S3.",
      "Developed ETL pipelines with scheduled jobs for transformations and reporting.",
      "Built synchronization to update Google Sheets with pacing and budget insights.",
      "Integrated Looker Studio dashboards for client-specific reporting and monitoring.",
    ],
  },
];

const skills = [
  "Python",
  "Flask",
  "FastAPI",
  "Docker",
  "Redis",
  "Celery",
  "SQLAlchemy",
  "Pandas",
  "Apache Airflow",
  "PostgreSQL",
  "Scrapy",
  "GraphQL",
  "Webhooks",
  "OOP",
  "Git",
  "VS Code",
  "Postman",
  "DBeaver",
  "Figma",
  "Balsamiq",
  "n8n",
];

export default function Home() {
  return (
    <div className="page">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="hero" id="top">
        <nav className="nav">
          <span className="logo">RJ</span>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
          <details className="nav-menu">
            <summary>Menu</summary>
            <div className="nav-panel">
              <a href="#about">About</a>
              <a href="#experience">Experience</a>
              <a href="#projects">Projects</a>
              <a href="#skills">Skills</a>
              <a href="#contact">Contact</a>
              <a className="nav-panel-cta" href="#contact">
                Let’s Talk
              </a>
            </div>
          </details>
          <a className="nav-cta" href="#contact">
            Let’s Talk
          </a>
        </nav>

        <div className="hero-grid">
          <div className="hero-content">
            <p className="eyebrow">Full Stack Developer • Ahmedabad, India</p>
            <h1>
              Rishika Jain
              <span>Building scalable backends and data-rich platforms.</span>
            </h1>
            <p className="hero-sub">
              Versatile engineer focused on secure APIs, automation, and high-performance
              data pipelines. I design reliable systems that move data fast, stay resilient,
              and enable teams to ship confidently.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href="/Rishika-Resume-2026.docx" download>
                Download Resume
              </a>
              <a className="btn ghost" href="#projects">
                View Projects
              </a>
            </div>
            <div className="hero-meta">
              <div>
                <span>Email</span>
                <a href="mailto:rishikajain1202@gmail.com">rishikajain1202@gmail.com</a>
              </div>
              <div>
                <span>Phone</span>
                <a href="tel:+919926866808">+91 99268 66808</a>
              </div>
              <div>
                <span>LinkedIn</span>
                <a
                  href="https://www.linkedin.com/in/rishika-jain-8b641a1b7/"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/in/rishika-jain-8b641a1b7
                </a>
              </div>
            </div>
          </div>
          <div className="hero-card">
            <div className="portrait">
              <div className="portrait-ring" />
              <div className="portrait-img" role="img" aria-label="Rishika Jain" />
            </div>
            <div className="card-panel">
              <h3>Professional Summary</h3>
              <p>
                Full stack developer with expertise in scalable Python backends, RESTful APIs,
                SQL data models, and automated ETL pipelines for high-volume data products.
              </p>
              <div className="card-stats">
                <div>
                  <strong>2+ yrs</strong>
                  <span>Backend & data systems</span>
                </div>
                <div>
                  <strong>20+</strong>
                  <span>Tools & frameworks</span>
                </div>
                <div>
                  <strong>10k+</strong>
                  <span>Rows processed daily</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main id="main">
        <section className="section about" id="about">
          <div className="section-title">
            <p>About</p>
            <h2>Engineering systems that scale with clarity.</h2>
          </div>
          <div className="about-grid">
            <div className="about-copy">
              <p>
                I specialize in building backend services that are secure, observable, and
                efficient. My work spans ETL pipelines, data acquisition, and API design. I
                partner closely with teams to translate product needs into reliable systems
                with clean data flows and resilient infrastructure.
              </p>
              <div className="about-list">
                <span>Focus Areas</span>
                <ul>
                  <li>API design with clear contracts and scalable data models.</li>
                  <li>Automation pipelines that keep data fresh and reliable.</li>
                  <li>Infrastructure practices that prioritize security and uptime.</li>
                </ul>
              </div>
            </div>
            <div className="about-highlights">
              <div className="highlight">
                <h4>Secure by design</h4>
                <p>JWT authentication, RBAC, and credential isolation for production apps.</p>
              </div>
              <div className="highlight">
                <h4>Automation first</h4>
                <p>ETL pipelines, cron-driven orchestration, and data quality guardrails.</p>
              </div>
              <div className="highlight">
                <h4>Performance focus</h4>
                <p>Redis caching, optimized SQL schemas, and scalable API contracts.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-title">
            <p>Experience</p>
            <h2>Hands-on delivery across backends and data platforms.</h2>
          </div>
          <div className="stack">
            {experience.map((item) => (
              <article key={item.role} className="card">
                <header>
                  <div>
                    <h3>{item.role}</h3>
                    <p>{item.company}</p>
                  </div>
                  <div className="card-meta">
                    <span>{item.period}</span>
                    <span>{item.location}</span>
                  </div>
                </header>
                <ul>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-title">
            <p>Projects</p>
            <h2>Platforms that move data fast and stay reliable.</h2>
          </div>
          <div className="grid">
            {projects.map((project) => (
              <article key={project.title} className="card project-card">
                <header>
                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.role}</p>
                  </div>
                  {project.link ? (
                    <a className="link" href={project.link} target="_blank" rel="noreferrer">
                      Visit Site
                    </a>
                  ) : null}
                </header>
                <ul>
                  {project.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-title">
            <p>Skills</p>
            <h2>Modern stack for APIs, automation, and data engineering.</h2>
          </div>
          <div className="pill-grid">
            {skills.map((skill) => (
              <span key={skill} className="pill">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="section education-section" id="education">
          <div className="section-title">
            <p>Education</p>
            <h2>Computer Science Engineering</h2>
          </div>
          <div className="card education">
            <div>
              <h3>Bachelor of Technology in Computer Science Engineering</h3>
              <p>Poornima University, Jaipur</p>
            </div>
            <div className="card-meta">
              <span>CGPA 8.65</span>
              <span>2020 — 2024</span>
            </div>
          </div>
        </section>

        <section className="cta" id="contact">
          <div>
            <h2>Let’s build something reliable together.</h2>
            <p>
              Reach out for backend engineering, data pipelines, or API architecture work.
            </p>
          </div>
          <div className="cta-actions">
            <a className="btn primary" href="mailto:rishikajain1202@gmail.com">
              Email Me
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 Rishika Jain. All rights reserved.</p>
        <div className="footer-links">
          <a href="#top">Back to top</a>
          <a
            href="https://www.linkedin.com/in/rishika-jain-8b641a1b7/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}
