import React, { useEffect, useState, useRef } from 'react';
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  Code2,
  Database,
  Download,
  ExternalLink,
  GraduationCap,
  Layers3,
  Mail,
  MapPin,
  Menu,
  MonitorSmartphone,
  Phone,
  Send,
  Sparkles,
  Briefcase,
  X,
} from 'lucide-react';

const Github = ({ size = 24, className = '', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`lucide lucide-github ${className}`}
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-3.8 5.2 5.2 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.4 13.4 0 0 0-7 0C6.2 1.4 5 1.8 5 1.8a5.2 5.2 0 0 0-.1 3.8A5.5 5.5 0 0 0 3 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" />
  </svg>
);

const Linkedin = ({ size = 24, className = '', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`lucide lucide-linkedin ${className}`}
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
import './App.css';

const skills = [
  { name: 'Frontend Development', icon: MonitorSmartphone, items: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'] },
  { name: 'Backend Development', icon: Database, items: ['Node.js', 'REST APIs', 'Server-side architecture'] },
  { name: 'Programming & Data', icon: Code2, items: ['Python', 'Data Structures', 'AI fundamentals'] },
  { name: 'Product & UI', icon: Layers3, items: ['Responsive UI', 'UI/UX thinking', 'Component architecture'] },
];

const workExperience = [
  {
    title: 'RUBY LIVES',
    type: 'Blood Donation Application · 2026 - PRESENT',
    description: 'Collaboratively working in a platform, that acts as a bridge between donors and the patient to save lives. Rather than others apps on playstore we added some unique features and safety measures. Focusing to solve a problem that what the normal users faces.',
    image: '/donor.png',
    tags: ['Blood Donation', 'React', 'Node.js', 'REST API', 'Tailwind CSS'],
    href: 'https://github.com/mshanjeevan828-art/Blood-donation-application',
    featured: true,
    ctaText: 'View repository',
  },
  {
    title: 'LINK TO LEAD',
    type: 'Sports Platform · 2026 - PRESENT',
    description: 'Collaboratively working in an application to solve a problem that every sports player and coaches faces to find the well trained player and finding opportunities for players to showcase their talent. We believe that our application should fulfill the empty opportunities and it should be the perfect platform for the player and coaches.',
    image: '/linktolead.png',
    tags: ['Sports Platform', 'React', 'Full Stack', 'UI/UX Design'],
    href: '#contact',
    featured: false,
    ctaText: 'Discuss project',
  },
];

const internships = [
  {
    title: 'INFOTECHIEZZ',
    role: 'Web Developer Intern',
    type: 'Thozhil Global Platform · AUG 17 — AUG 31, 2026',
    description: 'I gained practical knowledge to explore more in the HTML, CSS, JAVASCRIPT, REACT. I proudly declare that, I have received the Certificate of Appreciation because of my hardwork, dedication, consistency.',
    image: '/certificate.jpeg',
    tags: ['Infotechiezz', 'Web Developer', 'HTML/CSS/JS', 'React', 'Certified'],
    href: '/certificate.jpeg',
    featured: true,
    ctaText: 'View Certificate',
  },
];

const projects = [
  {
    title: 'YAZH-RESTAURANT',
    type: 'Restaurant Website · 2026-COMPLETED',
    description: 'I have created a simple restaurant website to showcase my coding knowledge. I created this demo website using the HTML, CSS, JAVASCRIPT. Here is my vercel link to check out my coding skills.',
    image: '/yazh-restaurant.svg',
    tags: ['HTML', 'CSS', 'JavaScript', '2026-COMPLETED', 'Vercel'],
    href: 'https://yazhrestaurant.vercel.app/',
    githubHref: 'https://github.com/mshanjeevan828-art/yazhrestaurant.git',
    featured: true,
    ctaText: 'Visit live demo',
  },
  {
    title: 'YAZH-CORPORATE HALL BOOKING WEBSITE',
    type: 'Corporate Hall Booking · 2026-COMPLETED',
    description: 'I have created demo and simple website for booking halls for corporate events using the technologies HTML, CSS, JAVASCRIPT, REACT. This project helps me to gain knowledge in UI/UX, how it works. From this project I have learnt how JavaScript works.',
    image: '/yazh-hallbooking.svg',
    tags: ['React', 'JavaScript', 'HTML5', 'CSS3', 'UI/UX', '2026-COMPLETED'],
    href: 'https://corporatehallbooking.vercel.app/',
    githubHref: 'https://github.com/mshanjeevan828-art/Yazhl_corporate-hall-booking.git',
    featured: false,
    ctaText: 'Visit live demo',
  },
];


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showTop, setShowTop] = useState(false);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const sections = document.querySelectorAll('main section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: '-25% 0px -60% 0px', threshold: [0.05, 0.2, 0.5] }
    );
    sections.forEach((section) => observer.observe(section));
    const onScroll = () => setShowTop(window.scrollY > 650);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const closeMenu = () => setIsMenuOpen(false);
  const navItems = ['about', 'skills', 'experience', 'projects', 'contact'];

  // Freelancer contact form state
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    projectType: '',
    budget: '',
    timeline: '',
    projectDescription: '',
  });
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSending, setIsSending] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setFormStatus({ type: '', message: '' });

    try {
      const response = await fetch('https://formsubmit.co/ajax/mshanjeevan828@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          Name: formData.clientName,
          Email: formData.clientEmail,
          Phone: formData.clientPhone,
          'Project Type': formData.projectType,
          Budget: formData.budget,
          Timeline: formData.timeline,
          Message: formData.projectDescription,
        })
      });

      if (!response.ok) throw new Error('Failed to send');

      setFormStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' });
      setFormData({
        clientName: '',
        clientEmail: '',
        clientPhone: '',
        projectType: '',
        budget: '',
        timeline: '',
        projectDescription: '',
      });
    } catch (error) {
      console.error('Submission Error:', error);
      setFormStatus({ type: 'error', message: 'Failed to send message. Please try emailing me directly.' });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="navbar">
        <a href="#home" className="brand" onClick={closeMenu} aria-label="Shanjeevan home">
          <span className="brand-mark">S</span>
          <span>SHANJEEVAN<span className="brand-dot">.</span></span>
        </a>

        <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`} aria-label="Primary navigation">
          {navItems.map((item, index) => (
            <a key={item} href={`#${item}`} className={activeSection === item ? 'active' : ''} onClick={closeMenu}>
              <span>0{index + 1}</span> {item}
            </a>
          ))}
          <a className="nav-cta" href="mailto:mshanjeevan828@gmail.com" onClick={closeMenu}>Let’s talk <ArrowUpRight size={16} /></a>
        </nav>

        <button className="menu-button" onClick={() => setIsMenuOpen((value) => !value)} aria-label="Toggle menu" aria-expanded={isMenuOpen}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        <section id="home" className="hero section-wrap">
          <div className="hero-copy">
            <div className="eyebrow"><span className="pulse-dot" /> Beginner Freelancer · Available for opportunities</div>
            <h1>Building digital experiences that feel <em>clear, useful &amp; memorable.</em></h1>
            <p className="hero-lead">I’m Shanjeevan, a B.Tech Artificial Intelligence &amp; Data Science student and aspiring full-stack developer focused on turning ideas into thoughtful, real-world web applications.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#experience">Explore my work <ArrowUpRight size={18} /></a>
              <a className="button button-ghost" href="/resume.pdf" target="_blank" rel="noreferrer" download="Shanjeevan_M_Resume.pdf"><Download size={17} /> Download resume</a>
            </div>
            <div className="hero-meta">
              <span><MapPin size={15} /> Coimbatore, India</span>
              <span><Sparkles size={15} /> Freelance Full-stack Developer</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="portrait-frame">
              <div className="portrait-glow" />
              <img src="/resume.jpeg" alt="Shanjeevan" />
              <div className="portrait-label"><span>01</span><strong>Developer<br />in progress</strong></div>
            </div>
            <div className="floating-card card-top"><span className="mini-icon"><Code2 size={16} /></span><div><small>Focus</small><strong>Full Stack</strong></div></div>
            <div className="floating-card card-bottom"><span className="mini-icon"><Check size={16} /></span><div><small>Currently</small><strong>Building &amp; learning</strong></div></div>
          </div>
        </section>

        <section className="proof-strip section-wrap" aria-label="Portfolio highlights">
          <div><strong>04+</strong><span>Projects &amp; builds</span></div>
          <div><strong>2026</strong><span>Hands-on experience</span></div>
          <div><strong>B.Tech</strong><span>AI &amp; Data Science</span></div>
          <div><strong>∞</strong><span>Curiosity to build</span></div>
        </section>

        <section id="about" className="content-section section-wrap">
          <div className="section-kicker">01 — About</div>
          <div className="about-grid">
            <div>
              <h2>Learning by building <span>real things.</span></h2>
            </div>
            <div className="about-copy">
              <p>I’m currently pursuing a Bachelor of Technology in Artificial Intelligence and Data Science at RVS College of Engineering and Technology. My interests sit at the intersection of frontend craft, backend logic, and practical problem solving.</p>
              <p>Through projects such as Ruby Lives and LinkToLead, I’m gaining hands-on experience building interfaces, APIs, and product flows that solve concrete problems.</p>
              <div className="about-points">
                <div><span>01</span> Curious by default</div>
                <div><span>02</span> Practical project mindset</div>
                <div><span>03</span> Always improving</div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="content-section section-wrap">
          <div className="section-heading">
            <div><div className="section-kicker">02 — Capabilities</div><h2>Tools I use to <span>build.</span></h2></div>
            <p>A growing toolkit shaped around modern web development and practical product building.</p>
          </div>
          <div className="skills-grid">
            {skills.map(({ name, icon: Icon, items }, index) => (
              <article className="skill-card" key={name}>
                <div className="skill-number">0{index + 1}</div>
                <Icon className="skill-icon" size={25} strokeWidth={1.6} />
                <h3>{name}</h3>
                <ul>{items.map((item) => <li key={item}><ChevronRight size={14} />{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="content-section section-wrap">
          <div className="section-heading project-heading">
            <div>
              <div className="section-kicker">03 — Experience</div>
              <h2>Work &amp; <span>experience.</span></h2>
            </div>
            <p>Practical platforms and industry internships where I’m applying full-stack concepts to real use cases and learning through implementation.</p>
          </div>

          <div className="experience-filter-bar" role="tablist" aria-label="Experience filters">
            <button
              type="button"
              className={`filter-tab ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Columns <span className="filter-badge">03</span>
            </button>
            <button
              type="button"
              className={`filter-tab ${filter === 'work' ? 'active' : ''}`}
              onClick={() => setFilter('work')}
            >
              <Code2 size={14} /> Work Experience <span className="filter-badge">02</span>
            </button>
            <button
              type="button"
              className={`filter-tab ${filter === 'internships' ? 'active' : ''}`}
              onClick={() => setFilter('internships')}
            >
              <Briefcase size={14} /> Internships <span className="filter-badge">01</span>
            </button>
          </div>

          {filter === 'all' && (
            <div className="experience-columns-wrap">
              {/* Column 1: Work Experience */}
              <div className="experience-column">
                <div className="column-header">
                  <div className="column-title-group">
                    <div className="column-icon-badge"><Code2 size={16} /></div>
                    <h3>Work Experience</h3>
                  </div>
                  <span className="column-count-badge">02 Roles</span>
                </div>
                <div className="column-cards">
                  {workExperience.map((item, idx) => (
                    <article className={`project-card ${item.featured ? 'featured' : ''}`} key={item.title}>
                      <div className="project-image">
                        <img src={item.image} alt={item.title} />
                        <div className="project-overlay" />
                        <span className="project-index">EXPERIENCE / 0{idx + 1}</span>
                        <a className="circle-link" href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer' : undefined} aria-label={`Open ${item.title}`}><ExternalLink size={18} /></a>
                      </div>
                      <div className="project-body">
                        <div className="project-type">{item.type}</div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <div className="tag-list">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                        <a className="text-link" href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer' : undefined}>
                          {item.ctaText || 'View details'} <ArrowUpRight size={16} />
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              {/* Column 2: Internships */}
              <div className="experience-column">
                <div className="column-header">
                  <div className="column-title-group">
                    <div className="column-icon-badge"><Briefcase size={16} /></div>
                    <h3>Internships</h3>
                  </div>
                  <span className="column-count-badge">01 Internship</span>
                </div>
                <div className="column-cards">
                  {internships.map((internship, idx) => (
                    <article className={`project-card ${internship.featured ? 'featured' : ''}`} key={internship.title}>
                      <div className="project-image">
                        <img src={internship.image} alt={internship.title} />
                        <div className="project-overlay" />
                        <span className="project-index">INTERNSHIP / 0{idx + 1}</span>
                        <a className="circle-link" href={internship.href} target="_blank" rel="noreferrer" aria-label={`Open ${internship.title}`}><ExternalLink size={18} /></a>
                      </div>
                      <div className="project-body">
                        <div className="project-type">{internship.type}</div>
                        <h3>{internship.title}</h3>
                        <p>{internship.description}</p>
                        <div className="tag-list">{internship.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                        <a className="text-link" href={internship.href} target="_blank" rel="noreferrer">
                          {internship.ctaText} <ArrowUpRight size={16} />
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          )}

          {filter === 'work' && (
            <div className="single-column-grid">
              {workExperience.map((item, idx) => (
                <article className={`project-card ${item.featured ? 'featured' : ''}`} key={item.title}>
                  <div className="project-image">
                    <img src={item.image} alt={item.title} />
                    <div className="project-overlay" />
                    <span className="project-index">EXPERIENCE / 0{idx + 1}</span>
                    <a className="circle-link" href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer' : undefined} aria-label={`Open ${item.title}`}><ExternalLink size={18} /></a>
                  </div>
                  <div className="project-body">
                    <div className="project-type">{item.type}</div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <div className="tag-list">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                    <a className="text-link" href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer' : undefined}>
                      {item.ctaText || 'View details'} <ArrowUpRight size={16} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          )}

          {filter === 'internships' && (
            <div className="single-column-grid">
              {internships.map((internship, idx) => (
                <article className={`project-card ${internship.featured ? 'featured' : ''}`} key={internship.title}>
                  <div className="project-image">
                    <img src={internship.image} alt={internship.title} />
                    <div className="project-overlay" />
                    <span className="project-index">INTERNSHIP / 0{idx + 1}</span>
                    <a className="circle-link" href={internship.href} target="_blank" rel="noreferrer" aria-label={`Open ${internship.title}`}><ExternalLink size={18} /></a>
                  </div>
                  <div className="project-body">
                    <div className="project-type">{internship.type}</div>
                    <h3>{internship.title}</h3>
                    <p>{internship.description}</p>
                    <div className="tag-list">{internship.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                    <a className="text-link" href={internship.href} target="_blank" rel="noreferrer">
                      {internship.ctaText} <ArrowUpRight size={16} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        <section className="experience-section section-wrap">
          <div className="section-kicker">Timeline — Experience &amp; education</div>
          <div className="timeline">
            <article className="timeline-item">
              <div className="timeline-icon"><BriefcaseBusiness size={18} /></div>
              <div className="timeline-content"><span>2026 — Present</span><h3>Full Stack Developer · RUBY LIVES</h3><p>Collaboratively working in a platform that acts as a bridge between donors and the patient to save lives, with unique features and safety measures.</p></div>
            </article>
            <article className="timeline-item">
              <div className="timeline-icon"><BriefcaseBusiness size={18} /></div>
              <div className="timeline-content"><span>2026 — Present</span><h3>Full Stack Developer · LINK TO LEAD</h3><p>Collaboratively working in an application to solve problems for sports players and coaches, finding opportunities to showcase talent.</p></div>
            </article>
            <article className="timeline-item">
              <div className="timeline-icon"><Briefcase size={18} /></div>
              <div className="timeline-content"><span>Aug 17 — Aug 31, 2026</span><h3>Web Developer Intern · INFOTECHIEZZ</h3><p>Completed internship via Thozhil Global Platform; awarded Certificate of Appreciation for dedication, hard work, and consistency.</p></div>
            </article>
            <article className="timeline-item">
              <div className="timeline-icon"><GraduationCap size={19} /></div>
              <div className="timeline-content"><span>Aug 2025 — Aug 2029</span><h3>B.Tech · Artificial Intelligence &amp; Data Science</h3><p>RVS College of Engineering and Technology — foundations in Python, data structures, web development, and AI.</p></div>
            </article>
          </div>
        </section>

        <section id="projects" className="content-section section-wrap">
          <div className="section-heading project-heading">
            <div>
              <div className="section-kicker">04 — Projects</div>
              <h2>Featured <span>projects.</span></h2>
            </div>
            <p>Live websites and web applications built from scratch, showcasing practical coding skills, frontend architecture, and live deployments.</p>
          </div>
          <div className="projects-grid">
            {projects.map((project, idx) => (
              <article className={`project-card ${project.featured ? 'featured' : ''}`} key={project.title}>
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay" />
                  <span className="project-index">PROJECT / 0{idx + 1}</span>
                  <a className="circle-link" href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}><ExternalLink size={18} /></a>
                </div>
                <div className="project-body">
                  <div className="project-type">{project.type}</div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <div style={{ display: 'flex', gap: '18px', alignItems: 'center', flexWrap: 'wrap', marginTop: '22px' }}>
                    <a className="text-link" href={project.href} target="_blank" rel="noreferrer" style={{ marginTop: 0 }}>
                      {project.ctaText} <ArrowUpRight size={16} />
                    </a>
                    {project.githubHref && (
                      <a className="text-link" href={project.githubHref} target="_blank" rel="noreferrer" style={{ marginTop: 0, color: 'var(--muted)' }}>
                        <Github size={14} /> Repository <ArrowUpRight size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section section-wrap">
          <div className="contact-card">
            <div className="contact-main">
              <div className="section-kicker">05 — Contact</div>
              <h2>Have an idea?<br /><span>Let’s build it.</span></h2>
              <p>I’m open to learning opportunities, collaborations, internships, and conversations around interesting web projects.</p>
              <form ref={formRef} onSubmit={handleFormSubmit} className="client-form">
                <div className="form-grid">
                  <input type="text" name="clientName" value={formData.clientName} onChange={handleInputChange} placeholder="Your Name" required />
                  <input type="email" name="clientEmail" value={formData.clientEmail} onChange={handleInputChange} placeholder="Email Address" required />
                  <input type="tel" name="clientPhone" value={formData.clientPhone} onChange={handleInputChange} placeholder="Phone Number" />
                  <select name="projectType" value={formData.projectType} onChange={handleInputChange} required>
                    <option value="" disabled>Select Project Type</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Full Stack App">Full Stack App</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Other">Other</option>
                  </select>
                  <select name="budget" value={formData.budget} onChange={handleInputChange}>
                    <option value="" disabled>Estimated Budget</option>
                    <option value="< 10k INR">&lt; 10k INR</option>
                    <option value="10k - 50k INR">10k - 50k INR</option>
                    <option value="50k+ INR">50k+ INR</option>
                  </select>
                  <select name="timeline" value={formData.timeline} onChange={handleInputChange}>
                    <option value="" disabled>Timeline</option>
                    <option value="ASAP">ASAP</option>
                    <option value="1-2 Months">1-2 Months</option>
                    <option value="Flexible">Flexible</option>
                  </select>
                </div>
                <textarea name="projectDescription" value={formData.projectDescription} onChange={handleInputChange} placeholder="Tell me about your project, goals, and any specific requirements..." rows="4" required></textarea>
                
                <button type="submit" className="button button-primary submit-btn" disabled={isSending}>
                  {isSending ? 'Sending...' : 'Send Details'} <Send size={16} />
                </button>
                {formStatus.message && (
                  <div className={`form-status ${formStatus.type}`}>{formStatus.message}</div>
                )}
              </form>
            </div>
            <div className="contact-side">
              <a href="mailto:mshanjeevan828@gmail.com"><Mail size={19} /><div><small>Email</small><strong>mshanjeevan828@gmail.com</strong></div><ArrowUpRight size={17} /></a>
              <a href="https://github.com/mshanjeevan828-art" target="_blank" rel="noreferrer"><Github size={19} /><div><small>GitHub</small><strong>@mshanjeevan828-art</strong></div><ArrowUpRight size={17} /></a>
              <a href="https://www.linkedin.com/in/m-shanjeevan-442737382/" target="_blank" rel="noreferrer"><Linkedin size={19} /><div><small>LinkedIn</small><strong>Shanjeevan M</strong></div><ArrowUpRight size={17} /></a>
              <a href="tel:9840662474"><Phone size={19} /><div><small>Phone</small><strong>+91 98406 62474</strong></div><ArrowUpRight size={17} /></a>
              <div className="contact-note"><span className="pulse-dot" /> Based in Coimbatore · Open to opportunities</div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <div className="footer-brand"><span className="brand-mark">S</span><span>SHANJEEVAN M</span></div>
        <p>Designed &amp; built with intention · © {new Date().getFullYear()}</p>
        <a href="#home">Back to top <ArrowUpRight size={15} /></a>
      </footer>

      {showTop && <a className="back-top" href="#home" aria-label="Back to top"><ArrowUpRight size={18} /></a>}
    </div>
  );
}

export default App;
