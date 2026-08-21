"use client";

import { FormEvent, useEffect, useState } from "react";
import {
  certifications,
  education,
  experience,
  profile,
  projects,
  services,
  skillGroups,
} from "./content";

const navItems = [
  ["About", "#about"],
  ["Services", "#services"],
  ["Work", "#projects"],
  ["Experience", "#experience"],
  ["Contact", "#contact"],
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  email: `mailto:${profile.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Karachi", addressCountry: "PK" },
  sameAs: [profile.github, profile.linkedin, profile.upwork],
  knowsAbout: ["MERN Stack", "React", "Node.js", "Laravel", "ASP.NET", "Flutter", "Angular", "REST APIs"],
};

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  useEffect(() => {
    const stored = window.localStorage.getItem("sumiaya-theme");
    const initial = stored === "light" ? "light" : "dark";
    setTheme(initial);
    document.documentElement.dataset.theme = initial;
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    window.localStorage.setItem("sumiaya-theme", next);
  }

  function handleContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "Potential client");
    const email = String(data.get("email") || "");
    const projectType = String(data.get("projectType") || "Software development");
    const budget = String(data.get("budget") || "Not specified");
    const message = String(data.get("message") || "");
    const subject = encodeURIComponent(`Project inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nProject type: ${projectType}\nBudget: ${budget}\n\nProject details:\n${message}`,
    );
    setFormStatus("Opening your email app…");
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Sumiaya Aiman home">
          <span>SA</span>
          <strong>Sumiaya Aiman</strong>
        </a>
        <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
        </nav>
        <div className="header-actions">
          {/* <button className="icon-button" onClick={toggleTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>
            {theme === "dark" ? "☀" : "☾"}
          </button> */}
          <a className="button button-small header-cta" href="#contact">Start a project <span>↗</span></a>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">
            <span /><span />
          </button>
        </div>
      </header>

      <section className="hero section-shell" id="top">
        <div className="hero-copy reveal">
          <div className="availability"><i /> Available</div>
          <p className="eyebrow">FULL-STACK SOFTWARE DEVELOPER · KARACHI</p>
          <h1>I build digital products that <em>work beautifully.</em></h1>
          <p className="hero-lead">
            I&apos;m Sumiaya Aiman — a frontend, MERN stack, Laravel, ASP.NET, and Flutter developer who turns product ideas into responsive, reliable web and mobile experiences.
          </p>
          <div className="hero-actions">
            <a className="button" href={profile.upwork} target="_blank" rel="noreferrer">Hire me on Upwork <span>↗</span></a>
            <a className="button button-secondary" href="/Sumiaya_Aiman_Resume.pdf" download>Download resume <span>↓</span></a>
          </div>
          <div className="hero-proof" aria-label="Verified highlights">
            <div><strong>10+</strong><span>Projects built</span></div>
            <div><strong>98.4%</strong><span>Angular certification</span></div>
            <div><strong>100%</strong><span>WordPress certification</span></div>
          </div>
        </div>

        <div className="portrait-wrap reveal delay-1">
          <div className="portrait-frame">
            <img src="/images/sumiaya-aiman.jpg" alt="Sumiaya Aiman, full-stack software developer" width="780" height="920" />
            <div className="portrait-overlay"><span>Currently building</span><strong>MERN & Flutter products</strong></div>
          </div>
          <div className="floating-card card-top"><span>✦</span> Client-focused delivery</div>
          <div className="floating-card card-bottom"><i /> Open to work</div>
        </div>
      </section>

      <section className="logo-strip" aria-label="Core technologies">
        <div>React</div><span>·</span><div>Node.js</div><span>·</span><div>Laravel</div><span>·</span><div>Angular</div><span>·</span><div>Flutter</div><span>·</span><div>ASP.NET</div>
      </section>

      <section className="section section-shell" id="about">
        <div className="section-heading split-heading">
          <div><p className="eyebrow">01 / ABOUT</p><h2>Code is the medium.<br /><em>Business value</em> is the goal.</h2></div>
          <div className="about-copy">
            <p>I help clients move from scattered requirements to dependable digital products. My approach combines a strong frontend eye with hands-on full-stack experience across the MERN ecosystem, PHP/Laravel, C#/ASP.NET, Flutter, and SQL.</p>
            <p>During my frontend internship at Aykays Digital Agency, I translated Figma designs into pixel-accurate responsive interfaces, collaborated with designers, and worked within real production workflows.</p>
            <p>Clients get thoughtful communication, structured implementation, and interfaces built to remain usable—not just look impressive in a screenshot.</p>
            <a className="text-link" href="#experience">See my experience <span>→</span></a>
          </div>
        </div>
      </section>

      <section className="section section-shell section-tint" id="services">
        <div className="section-heading">
          <p className="eyebrow">02 / SERVICES</p>
          <h2>How I can help your <em>next project.</em></h2>
          <p>Focused development support for founders, agencies, and teams that need clean execution without unnecessary complexity.</p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-number">{service.number}</div>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
              <div className="tag-list">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-shell" id="projects">
        <div className="section-heading project-heading">
          <div><p className="eyebrow">03 / SELECTED WORK</p><h2>Proof through <em>real projects.</em></h2></div>
          <p>Selected academic and independent builds from the supplied portfolio. Repository links are included where available; live demos can be shared privately when hosted.</p>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <article className={project.featured ? "project-card featured" : "project-card"} key={project.name}>
              <div className="project-visual">
                {project.images.length > 1 ? (
                  <div className="project-gallery">
                    {project.images.map((image, index) => (
                      <a href={image} target="_blank" rel="noreferrer" key={image} aria-label={`Open ${project.name} screenshot ${index + 1}`}>
                        <img src={image} alt={`${project.name} screenshot ${index + 1}`} loading="lazy" width="1200" height="900" />
                      </a>
                    ))}
                    <span className="gallery-count">{project.images.length} screens · click to expand</span>
                  </div>
                ) : project.images.length === 1 ? (
                  <a className="single-project-image" href={project.images[0]} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} interface preview`}>
                    <img src={project.images[0]} alt={`${project.name} interface preview`} loading="lazy" width="1200" height="760" />
                  </a>
                ) : (
                  <div className="project-placeholder" aria-hidden="true"><span>{project.initials}</span><i /></div>
                )}
                <span className="project-category">{project.category}</span>
              </div>
              <div className="project-body">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="tag-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                <div className="project-links">
                  <a href={project.repo} target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
                  <a href={`mailto:${profile.email}?subject=${encodeURIComponent(`Demo request: ${project.name}`)}`}>Request demo <span>→</span></a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-shell" id="skills">
        <div className="section-heading split-heading compact-split">
          <div><p className="eyebrow">04 / CAPABILITIES</p><h2>A practical, <em>full-stack toolkit.</em></h2></div>
          <p>Skills are grouped by how they contribute to client delivery—interface quality, application logic, data, mobile experiences, and smooth collaboration.</p>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <article className="skill-card" key={group.title}>
              <div className="skill-card-top"><span>0{index + 1}</span><small>{group.level}</small></div>
              <h3>{group.title}</h3>
              <div className="skill-tags">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-shell" id="experience">
        <div className="section-heading"><p className="eyebrow">05 / EXPERIENCE</p><h2>Built in <em>real workflows.</em></h2></div>
        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-item" key={item.role}>
              <div className="timeline-meta"><span>{item.period}</span><small>{item.location}</small></div>
              <div className="timeline-dot" aria-hidden="true" />
              <div className="timeline-card">
                <p>{item.company}</p><h3>{item.role}</h3><strong>{item.summary}</strong>
                <ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-shell" id="education">
        <div className="section-heading project-heading">
          <div><p className="eyebrow">06 / EDUCATION & CERTIFICATIONS</p><h2>Learning that <em>shows in the work.</em></h2></div>
          <p>Formal software engineering studies, full-stack training, and focused certifications support an applied portfolio across web and mobile development.</p>
        </div>
        <div className="education-grid">
          <div className="education-list">
            {education.map((item) => (
              <article key={item.degree}><span>{item.period}</span><h3>{item.degree}</h3><strong>{item.school}</strong><p>{item.note}</p></article>
            ))}
          </div>
          <div className="cert-grid">
            {certifications.map((cert) => (
              <a className="cert-card" href={cert.image} target="_blank" rel="noreferrer" key={cert.name}>
                <img src={cert.image} alt={`${cert.name} certificate`} loading="lazy" width="800" height="560" />
                <div><span>{cert.year}</span><h3>{cert.name}</h3><p>{cert.issuer}</p><strong>{cert.result}</strong></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-shell upwork-section" id="upwork">
        <div className="upwork-intro">
          <p className="eyebrow">07 / UPWORK PROFILE</p>
          <h2>Let&apos;s work together through <em>Upwork.</em></h2>
          <p>View my Upwork profile to discuss your project, send an invitation, or start a contract through the platform.</p>
          <a className="button" href={profile.upwork} target="_blank" rel="noreferrer">View Upwork profile <span>↗</span></a>
        </div>
      </section>

      <section className="section section-shell contact-section" id="contact">
        <div className="contact-copy">
          <p className="eyebrow">08 / START A CONVERSATION</p>
          <h2>Let&apos;s turn your idea into a <em>clear build.</em></h2>
          <p>Share your goal, current roadblock, and preferred timeline. The form opens a ready-to-send email so your project details stay in your own inbox.</p>
          <div className="contact-links">
            <a href={`mailto:${profile.email}`}><span>Email</span><strong>{profile.email}</strong><i>↗</i></a>
            <a href={profile.github} target="_blank" rel="noreferrer"><span>GitHub</span><strong>@sumiayaaim</strong><i>↗</i></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><span>LinkedIn</span><strong>Sumiaya Aiman</strong><i>↗</i></a>
            <a href={profile.upwork} target="_blank" rel="noreferrer"><span>Upwork</span><strong>View freelancer profile</strong><i>↗</i></a>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleContact}>
          <div className="form-row"><label>Full name<input name="name" autoComplete="name" required placeholder="Your name" /></label><label>Email address<input name="email" type="email" autoComplete="email" required placeholder="you@company.com" /></label></div>
          <div className="form-row"><label>Project type<select name="projectType" defaultValue="MERN web application"><option>MERN web application</option><option>Frontend development</option><option>Laravel / ASP.NET application</option><option>Flutter mobile app</option><option>WordPress website</option><option>Other</option></select></label><label>Estimated budget<select name="budget" defaultValue="Let’s discuss"><option>Let’s discuss</option><option>Under $500</option><option>$500 – $1,500</option><option>$1,500 – $3,000</option><option>$3,000+</option></select></label></div>
          <label>Project details<textarea name="message" required rows={7} placeholder="What are you building, and what does success look like?" /></label>
          <button className="button form-submit" type="submit">Prepare project email <span>↗</span></button>
          <p className="form-note" aria-live="polite">{formStatus || "Typical response target: within one business day."}</p>
        </form>
      </section>

      <footer className="site-footer section-shell">
        <a className="brand" href="#top"><span>SA</span><strong>Sumiaya Aiman</strong></a>
        <div className="footer-links"><a href="#projects">Work</a><a href="#services">Services</a><a href="#contact">Contact</a></div>
        <p>© {new Date().getFullYear()} Sumiaya Aiman · Frontend · MERN · Full-Stack · Flutter</p>
      </footer>
    </main>
  );
}
