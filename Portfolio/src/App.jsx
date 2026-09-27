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
  FileText,
  GraduationCap,
  Layers3,
  Mail,
  MapPin,
  Menu,
  MonitorSmartphone,
  Phone,
  Send,
  Sparkles,
  User,
  Clock,
  DollarSign,
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
import './App.css';

const skills = [
  { name: 'Frontend Development', icon: MonitorSmartphone, items: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'] },
  { name: 'Backend Development', icon: Database, items: ['Node.js', 'REST APIs', 'Server-side architecture'] },
  { name: 'Programming & Data', icon: Code2, items: ['Python', 'Data Structures', 'AI fundamentals'] },
  { name: 'Product & UI', icon: Layers3, items: ['Responsive UI', 'UI/UX thinking', 'Component architecture'] },
];

const projects = [
  {
    title: 'Ruby Lives',
    type: 'Blood Donation Platform',
    description: 'A practical platform designed to connect blood donors with patients in need, with donor registration, blood-group selection, and donor–patient connections.',
    image: '/donor.png',
    tags: ['React', 'Node.js', 'REST API', 'Tailwind CSS'],
    href: 'https://github.com/mshanjeevan828-art/Blood-donation-application',
    featured: true,
  },
  {
    title: 'LinkToLead',
    type: 'Sports Opportunity Platform',
    description: 'A platform focused on helping sports players discover opportunities and connect with coaches and organizations through a focused web experience.',
    image: '/linktolead.png',
    tags: ['React', 'Full Stack', 'UI/UX Design'],
    href: '#contact',
    featured: false,
  },
];

const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showTop, setShowTop] = useState(false);

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
  const navItems = ['about', 'skills', 'projects', 'contact'];

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
      // Dynamically load EmailJS SDK
      if (!window.emailjs) {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
        script.async = true;
        await new Promise((resolve, reject) => {
          script.onload = resolve;
          script.onerror = reject;
          document.head.appendChild(script);
        });
      }

      const templateParams = {
        from_name: formData.clientName,
        from_email: formData.clientEmail,
        phone: formData.clientPhone,
        project_type: formData.projectType,
        budget: formData.budget,
        timeline: formData.timeline,
        message: formData.projectDescription,
      };

      await window.emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

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
      console.error('EmailJS Error:', error);
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
            <div className="eyebrow"><span className="pulse-dot" /> Available for opportunities</div>
            <h1>Building digital experiences that feel <em>clear, useful &amp; memorable.</em></h1>
            <p className="hero-lead">I’m Shanjeevan, a B.Tech Artificial Intelligence &amp; Data Science student and aspiring full-stack developer focused on turning ideas into thoughtful, real-world web applications.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={18} /></a>
              <a className="button button-ghost" href="/Final_resume.pdf" target="_blank" rel="noreferrer" download="Shanjeevan_Resume.pdf"><Download size={17} /> Download resume</a>
            </div>
            <div className="hero-meta">
              <span><MapPin size={15} /> Coimbatore, India</span>
              <span><Sparkles size={15} /> Full-stack development</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="portrait-frame">
              <div className="portrait-glow" />
              <img src="/portfolio1.jpeg" alt="Shanjeevan" />
              <div className="portrait-label"><span>01</span><strong>Developer<br />in progress</strong></div>
            </div>
            <div className="floating-card card-top"><span className="mini-icon"><Code2 size={16} /></span><div><small>Focus</small><strong>Full Stack</strong></div></div>
            <div className="floating-card card-bottom"><span className="mini-icon"><Check size={16} /></span><div><small>Currently</small><strong>Building &amp; learning</strong></div></div>
          </div>
        </section>

        <section className="proof-strip section-wrap" aria-label="Portfolio highlights">
          <div><strong>02+</strong><span>Active projects</span></div>
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

        <section id="projects" className="content-section section-wrap">
          <div className="section-heading project-heading">
            <div><div className="section-kicker">03 — Selected work</div><h2>Projects with a <span>purpose.</span></h2></div>
            <p>Projects where I’m applying full-stack concepts to real use cases and learning through implementation.</p>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <article className={`project-card ${project.featured ? 'featured' : ''}`} key={project.title}>
                <div className="project-image">
                  <img src={project.image} alt="" />
                  <div className="project-overlay" />
                  <span className="project-index">PROJECT / {project.featured ? '01' : '02'}</span>
                  <a className="circle-link" href={project.href} target={project.href.startsWith('http') ? '_blank' : undefined} rel={project.href.startsWith('http') ? 'noreferrer' : undefined} aria-label={`Open ${project.title}`}><ExternalLink size={18} /></a>
                </div>
                <div className="project-body">
                  <div className="project-type">{project.type}</div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <a className="text-link" href={project.href} target={project.href.startsWith('http') ? '_blank' : undefined} rel={project.href.startsWith('http') ? 'noreferrer' : undefined}>
                    {project.featured ? 'View repository' : 'Discuss project'} <ArrowUpRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="experience-section section-wrap">
          <div className="section-kicker">Experience &amp; education</div>
          <div className="timeline">
            <article className="timeline-item">
              <div className="timeline-icon"><BriefcaseBusiness size={18} /></div>
              <div className="timeline-content"><span>2026 — Present</span><h3>Full Stack Developer · Ruby Lives</h3><p>Collaborating on a blood donation platform with donor registration, blood-group selection, and donor–patient connection features.</p></div>
            </article>
            <article className="timeline-item">
              <div className="timeline-icon"><BriefcaseBusiness size={18} /></div>
              <div className="timeline-content"><span>2026 — Present</span><h3>Full Stack Developer · LinkToLead</h3><p>Collaborating on a platform that helps sports players discover opportunities and connect with coaches and organizations.</p></div>
            </article>
            <article className="timeline-item">
              <div className="timeline-icon"><GraduationCap size={19} /></div>
              <div className="timeline-content"><span>Aug 2025 — Aug 2029</span><h3>B.Tech · Artificial Intelligence &amp; Data Science</h3><p>RVS College of Engineering and Technology — building foundations in Python, data structures, web development, and artificial intelligence.</p></div>
            </article>
          </div>
        </section>

        <section id="contact" className="contact-section section-wrap">
          <div className="contact-card">
            <div className="contact-main">
              <div className="section-kicker">04 — Contact</div>
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
