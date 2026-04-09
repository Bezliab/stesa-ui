import { useEffect, useRef } from "react";
import { ArrowRight, ChevronDown, Users, BookOpen, FlaskConical, Newspaper, Award, Globe, Microscope } from "lucide-react";
import { programmes, academicStaff, newsItems, stats, researchClusters } from "../data/siteData";
import { useScrollAnimation } from "../components/useScrollAnimation";
import "./HomePage.css";

// ===========================
// HERO SECTION
// ===========================
function HeroSection() {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${window.scrollY * 0.3}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-bg" ref={parallaxRef} />
      <div className="hero-overlay" />
      <div className="hero-pattern" />

      {/* Gold accent bar */}
      <div className="hero-accent-bar" />

      <div className="container hero-content">
        <div className="hero-eyebrow fade-up">
          <span className="hero-badge">University of Ibadan · Est. 1948</span>
        </div>

        <h1 className="hero-title fade-up delay-1">
          Department of<br />
          <span className="hero-title-gold">Science &amp; Technology</span>
          <br />Education
        </h1>

        <p className="hero-subtitle fade-up delay-2">
          Shaping the next generation of educators, researchers, and innovators through
          excellence in science and technology education at Africa's premier university.
        </p>

        <div className="hero-actions fade-up delay-3">
          <a href="#programmes" className="btn btn-primary">
            Explore Programmes <ArrowRight size={16} />
          </a>
          <a href="#about" className="btn btn-outline">
            About the Department
          </a>
        </div>

        {/* Stats strip */}
        <div className="hero-stats fade-up delay-4">
          {stats.map((s, i) => (
            <div key={i} className="hero-stat">
              <span className="hero-stat-value">{s.value}</span>
              <span className="hero-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#about" className="hero-scroll-hint">
        <span>Scroll to explore</span>
        <ChevronDown size={16} className="hero-scroll-icon" />
      </a>
    </section>
  );
}

// ===========================
// QUICK LINKS
// ===========================
function QuickLinks() {
  const links = [
    { icon: <BookOpen size={22} />, label: "Programmes", href: "#programmes", desc: "Explore our degrees" },
    { icon: <Users size={22} />, label: "Meet Our Staff", href: "#staff", desc: "Our faculty members" },
    { icon: <FlaskConical size={22} />, label: "Research", href: "#research", desc: "Innovation & discovery" },
    { icon: <Newspaper size={22} />, label: "Announcements", href: "#news", desc: "Latest news" },
    { icon: <Award size={22} />, label: "Admissions", href: "#admissions", desc: "Join the department" },
    { icon: <Globe size={22} />, label: "Student Resources", href: "#students", desc: "Tools & support" },
  ];

  return (
    <section className="quick-links-section">
      <div className="container">
        <div className="quick-links-grid">
          {links.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              className={`quick-link-card fade-up delay-${i + 1}`}
            >
              <div className="quick-link-icon">{link.icon}</div>
              <div className="quick-link-text">
                <span className="quick-link-label">{link.label}</span>
                <span className="quick-link-desc">{link.desc}</span>
              </div>
              <ArrowRight size={14} className="quick-link-arrow" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===========================
// ABOUT SECTION (Homepage snippet)
// ===========================
function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="container about-inner">
        <div className="about-text fade-up">
          <div className="section-eyebrow">About the Department</div>
          <h2 className="section-title">A Legacy of Excellence in Science Education</h2>
          <div className="gold-rule" />
          <p className="about-body">
            The Department of Science and Technology Education Student Association (STESA), Faculty of Education, University of Ibadan,
            stands as one of Nigeria's most distinguished centres for the study and advancement of science,
            technology, engineering, and mathematics (STEM) education.
          </p>
          <p className="about-body">
            Founded on the principles of academic rigour, innovative pedagogy, and impactful research,
            the department has produced generations of outstanding science educators, curriculum specialists,
            and educational researchers who are transforming learning across Nigeria and beyond.
          </p>
          <div className="about-highlights">
            <div className="about-highlight">
              <Award size={18} />
              <span>NUC Accredited Programmes</span>
            </div>
            <div className="about-highlight">
              <Globe size={18} />
              <span>International Research Partnerships</span>
            </div>
            <div className="about-highlight">
              <Microscope size={18} />
              <span>State-of-the-Art Laboratories</span>
            </div>
          </div>
          <a href="#programmes" className="btn btn-blue" style={{marginTop: "32px"}}>
            Explore Our Programmes <ArrowRight size={16} />
          </a>
        </div>

        <div className="about-visual fade-up delay-2">
          <div className="about-img-card about-img-main">
            <div className="about-img-placeholder main">
              <Microscope size={48} />
              <span>Research & Learning</span>
            </div>
          </div>
          <div className="about-img-card about-img-small">
            <div className="about-img-placeholder small">
              <BookOpen size={28} />
              <span>Academic Excellence</span>
            </div>
          </div>
          <div className="about-badge">
            <span className="about-badge-num">75+</span>
            <span className="about-badge-text">Years of Excellence</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ===========================
// PROGRAMMES SECTION
// ===========================
function ProgrammesSection() {
  const levels = ["Undergraduate", "Postgraduate", "Doctoral"];

  return (
    <section className="programmes-section" id="programmes">
      <div className="container">
        <div className="section-header centered fade-up">
          <div className="section-eyebrow">Academic Programmes</div>
          <h2 className="section-title">Pathways to Excellence</h2>
          <div className="gold-rule centered" />
          <p className="section-subtitle">
            Offering rigorous degree programmes at undergraduate, postgraduate, and doctoral levels,
            designed to develop the educators and researchers of tomorrow.
          </p>
        </div>

        {levels.map((level) => {
          const levelProgs = programmes.filter((p) => p.level === level);
          return (
            <div key={level} className="prog-level-group">
              <div className="prog-level-label">{level}</div>
              <div className="prog-cards-grid">
                {levelProgs.map((prog, i) => (
                  <div key={prog.id} className={`prog-card card fade-up delay-${(i % 3) + 1}`}>
                    <div className="prog-card-icon">{prog.icon}</div>
                    <div className="prog-card-badge">{prog.degree} · {prog.duration}</div>
                    <h3 className="prog-card-title">{prog.title}</h3>
                    <p className="prog-card-desc">{prog.description}</p>
                    <div className="prog-tracks">
                      {prog.tracks.map((t) => (
                        <span key={t} className="prog-track-tag">{t}</span>
                      ))}
                    </div>
                    <a href="#admissions" className="btn btn-ghost">
                      Learn more <ArrowRight size={14} />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// ===========================
// STAFF SECTION (Preview)
// ===========================
function StaffSection() {
  const featured = academicStaff.slice(0, 4);

  return (
    <section className="staff-section" id="staff">
      <div className="container">
        <div className="section-header fade-up" style={{display:"flex", justifyContent:"space-between", alignItems:"flex-end", flexWrap:"wrap", gap:"24px"}}>
          <div>
            <div className="section-eyebrow">Academic Staff</div>
            <h2 className="section-title">Meet Our Faculty</h2>
            <div className="gold-rule" />
          </div>
          <a href="#people" className="btn btn-blue">View All Staff <ArrowRight size={16} /></a>
        </div>

        <div className="staff-grid">
          {featured.map((member, i) => (
            <div key={member.id} className={`staff-card card fade-up delay-${i + 1}`}>
              <div className="staff-avatar" style={{background: member.color}}>
                <span>{member.imageInitials}</span>
              </div>
              <div className="staff-info">
                <h3 className="staff-name">{member.name}</h3>
                <p className="staff-title">{member.title}</p>
                <p className="staff-spec">{member.specialization}</p>
                <div className="staff-interests">
                  {member.researchInterests.slice(0, 2).map((interest) => (
                    <span key={interest} className="staff-interest-tag">{interest}</span>
                  ))}
                </div>
                <a href={`mailto:${member.email}`} className="staff-email">{member.email}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===========================
// RESEARCH SECTION
// ===========================
function ResearchSection() {
  return (
    <section className="research-section" id="research">
      <div className="research-bg" />
      <div className="container" style={{position:"relative", zIndex:1}}>
        <div className="section-header centered fade-up">
          <div className="section-eyebrow" style={{color: "var(--ui-gold-light)"}}>Research & Innovation</div>
          <h2 className="section-title" style={{color: "var(--ui-white)"}}>Advancing the Frontiers of Knowledge</h2>
          <div className="gold-rule centered" />
          <p className="section-subtitle" style={{color: "rgba(255,255,255,0.7)"}}>
            Our research clusters tackle the most pressing challenges in science and technology education,
            driving policy reform and pedagogical innovation across Nigeria and Africa.
          </p>
        </div>

        <div className="research-grid">
          {researchClusters.map((cluster, i) => (
            <div key={cluster.id} className={`research-card fade-up delay-${i + 1}`}>
              <div className="research-card-icon">{cluster.icon}</div>
              <h3 className="research-card-title">{cluster.title}</h3>
              <p className="research-card-lead">Lead: {cluster.lead}</p>
              <p className="research-card-desc">{cluster.description}</p>
              <div className="research-card-stats">
                <div className="research-stat">
                  <span className="research-stat-num">{cluster.projects}</span>
                  <span className="research-stat-label">Active Projects</span>
                </div>
                <div className="research-stat">
                  <span className="research-stat-num">{cluster.publications}</span>
                  <span className="research-stat-label">Publications</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===========================
// NEWS SECTION
// ===========================
function NewsSection() {
  const featured = newsItems.find((n) => n.featured);
  const rest = newsItems.filter((n) => !n.featured).slice(0, 4);

  const categoryColors = {
    Award: "#C9942A",
    Partnership: "#003366",
    Publication: "#004080",
    Achievement: "#0055a5",
    Grant: "#1a7a4a",
    Announcement: "#6b2f8f",
  };

  return (
    <section className="news-section" id="news">
      <div className="container">
        <div className="section-header fade-up" style={{display:"flex", justifyContent:"space-between", alignItems:"flex-end", flexWrap:"wrap", gap:"24px"}}>
          <div>
            <div className="section-eyebrow">News & Announcements</div>
            <h2 className="section-title">Latest from the Department</h2>
            <div className="gold-rule" />
          </div>
          <a href="#" className="btn btn-blue">All News <ArrowRight size={16} /></a>
        </div>

        <div className="news-layout">
          {/* Featured */}
          {featured && (
            <div className="news-featured card fade-up">
              <div className="news-featured-img">
                <div className="news-img-placeholder featured">
                  <Newspaper size={40} />
                </div>
              </div>
              <div className="news-featured-content">
                <span className="news-category-badge" style={{background: categoryColors[featured.category]}}>
                  {featured.category}
                </span>
                <span className="news-date">{featured.date}</span>
                <h3 className="news-featured-title">{featured.title}</h3>
                <p className="news-excerpt">{featured.excerpt}</p>
                <a href="#" className="btn btn-ghost">Read more <ArrowRight size={14} /></a>
              </div>
            </div>
          )}

          {/* Rest */}
          <div className="news-list">
            {rest.map((item, i) => (
              <a key={item.id} href="#" className={`news-list-item fade-up delay-${i + 1}`}>
                <span className="news-list-badge" style={{background: categoryColors[item.category]}}>
                  {item.category}
                </span>
                <div className="news-list-content">
                  <span className="news-list-date">{item.date}</span>
                  <h4 className="news-list-title">{item.title}</h4>
                </div>
                <ArrowRight size={16} className="news-list-arrow" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ===========================
// CTA SECTION
// ===========================
function CTASection() {
  return (
    <section className="cta-section" id="admissions">
      <div className="container">
        <div className="cta-card fade-up">
          <div className="cta-content">
            <div className="section-eyebrow" style={{color: "var(--ui-gold-light)"}}>Join Us</div>
            <h2 className="cta-title">Begin Your Journey in Science Education</h2>
            <p className="cta-desc">
              Applications are now open for the 2025/2026 academic session. Join a community of scholars
              committed to advancing education across Nigeria and Africa.
            </p>
            <div className="cta-actions">
              <a href="#" className="btn btn-primary">Apply for Admission <ArrowRight size={16} /></a>
              <a href="#" className="btn btn-outline">Download Prospectus</a>
            </div>
          </div>
          <div className="cta-badge-stack">
            <div className="cta-badge-item"><Award size={20} /><span>NUC Accredited</span></div>
            <div className="cta-badge-item"><Globe size={20} /><span>Globally Recognised</span></div>
            <div className="cta-badge-item"><Users size={20} /><span>450+ Students</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ===========================
// MAIN HOMEPAGE
// ===========================
export default function HomePage() {
  useScrollAnimation();

  return (
    <>
      <HeroSection />
      <QuickLinks />
      <AboutSection />
      <ProgrammesSection />
      <StaffSection />
      <ResearchSection />
      <NewsSection />
      <CTASection />
    </>
  );
}
