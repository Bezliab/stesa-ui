import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Calendar,
  ArrowRight,
} from "lucide-react";
import {
  events,
  newsItems,
  researchClusters,
  studentResources,
  galleryImages,
  admissionsInfo,
} from "../data/siteData";
import { useScrollAnimation } from "../components/useScrollAnimation";
import "./InnerPage.css";

// ===========================
// ADMISSIONS PAGE
// ===========================
export function AdmissionsPage() {
  useScrollAnimation();
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="page-hero-breadcrumb">
            <a href="/">Home</a> <span>/</span> <span>Admissions</span>
          </div>
          <h1>Admissions Information</h1>
          <p>
            Everything you need to know about joining the Department of Science
            and Technology Education.
          </p>
          <div className="page-hero-gold-bar" />
        </div>
      </div>
      <section className="inner-section">
        <div className="container">
          <div className="admissions-grid">
            {[admissionsInfo.undergraduate, admissionsInfo.postgraduate].map(
              (info, idx) => (
                <div key={idx} className="admissions-card card fade-up">
                  <div
                    className="admissions-card-header"
                    style={{
                      background:
                        idx === 0 ? "var(--ui-blue)" : "var(--ui-gold)",
                    }}
                  >
                    <h3>{info.title}</h3>
                  </div>
                  <div className="admissions-card-body">
                    <div className="admissions-block">
                      <h4>Entry Requirements</h4>
                      <ul className="admissions-list">
                        {info.requirements.map((r, i) => (
                          <li key={i}>{r}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="admissions-block">
                      <h4>Application Process</h4>
                      <ol className="admissions-steps">
                        {info.process.map((step, i) => (
                          <li key={i}>
                            <span className="step-num">{i + 1}</span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>
              ),
            )}
          </div>
          <div className="admissions-cta fade-up">
            <div className="section-eyebrow">Apply Now</div>
            <h2 className="section-title">Ready to Join Us?</h2>
            <div className="gold-rule" />
            <p className="section-subtitle">
              Applications for the 2025/2026 academic session are open. Take the
              first step towards an outstanding education at the University of
              Ibadan.
            </p>
            <div
              style={{
                display: "flex",
                gap: "16px",
                marginTop: "32px",
                flexWrap: "wrap",
              }}
            >
              <a href="#" className="btn btn-primary">
                Apply via JAMB/UI Portal <ArrowRight size={16} />
              </a>
              <a href="#contact" className="btn btn-blue">
                Contact Admissions Office
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// ===========================
// NEWS PAGE
// ===========================
export function NewsPage() {
  useScrollAnimation();
  const categoryColors = {
    Award: "#C9942A",
    Partnership: "#003366",
    Publication: "#004080",
    Achievement: "#0055a5",
    Grant: "#1a7a4a",
    Announcement: "#6b2f8f",
  };
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="page-hero-breadcrumb">
            <a href="/">Home</a> <span>/</span> <span>News</span>
          </div>
          <h1>News & Announcements</h1>
          <p>
            Stay up to date with the latest developments, achievements, and
            announcements from STESA.
          </p>
          <div className="page-hero-gold-bar" />
        </div>
      </div>
      <section className="inner-section">
        <div className="container">
          <div className="news-full-grid">
            {newsItems.map((item, i) => (
              <a
                key={item.id}
                href="#"
                className={`news-full-card card fade-up delay-${(i % 3) + 1}`}
              >
                <div className="news-full-img">
                  <div className="news-full-img-placeholder">📰</div>
                </div>
                <div className="news-full-body">
                  <div className="news-full-meta">
                    <span
                      className="news-category-badge"
                      style={{ background: categoryColors[item.category] }}
                    >
                      {item.category}
                    </span>
                    <span className="news-date">{item.date}</span>
                  </div>
                  <h3 className="news-full-title">{item.title}</h3>
                  <p className="news-excerpt">{item.excerpt}</p>
                  <span className="btn btn-ghost">
                    Read More <ArrowRight size={14} />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// ===========================
// EVENTS PAGE
// ===========================
export function EventsPage() {
  useScrollAnimation();
  const typeColors = {
    Conference: "var(--ui-blue)",
    Workshop: "var(--ui-gold)",
    "Open Day": "#1a7a4a",
    "Inaugural Lecture": "#6b2f8f",
    Outreach: "#d44b00",
  };
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="page-hero-breadcrumb">
            <a href="/">Home</a> <span>/</span> <span>Events</span>
          </div>
          <h1>Events Calendar</h1>
          <p>
            Upcoming events, conferences, workshops, and activities at the
            department.
          </p>
          <div className="page-hero-gold-bar" />
        </div>
      </div>
      <section className="inner-section" id="events">
        <div className="container">
          <div className="section-header fade-up">
            <div className="section-eyebrow">Upcoming Events</div>
            <h2 className="section-title">What's Coming Up</h2>
            <div className="gold-rule" />
          </div>
          <div className="events-list">
            {events.map((event, i) => (
              <div
                key={event.id}
                className={`event-card card fade-up delay-${(i % 3) + 1}`}
              >
                <div
                  className="event-date-block"
                  style={{
                    background: typeColors[event.type] || "var(--ui-blue)",
                  }}
                >
                  <Calendar size={20} />
                  <div className="event-date-text">{event.date}</div>
                </div>
                <div className="event-body">
                  <div className="event-meta">
                    <span
                      className="event-type-badge"
                      style={{
                        color: typeColors[event.type],
                        borderColor: typeColors[event.type],
                      }}
                    >
                      {event.type}
                    </span>
                    <span className="event-time">{event.time}</span>
                  </div>
                  <h3 className="event-title">{event.title}</h3>
                  <p className="event-desc">{event.description}</p>
                  <div className="event-location">
                    <MapPin size={14} />
                    <span>{event.location}</span>
                  </div>
                </div>
                <a href="#" className="btn btn-blue event-cta">
                  Register <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// ===========================
// RESEARCH PAGE
// ===========================
export function ResearchPage() {
  useScrollAnimation();
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="page-hero-breadcrumb">
            <a href="/">Home</a> <span>/</span> <span>Research</span>
          </div>
          <h1>Research & Innovation</h1>
          <p>
            Advancing knowledge and driving change through rigorous, impactful
            scholarship.
          </p>
          <div className="page-hero-gold-bar" />
        </div>
      </div>
      <section className="inner-section">
        <div className="container">
          <div className="section-header fade-up">
            <div className="section-eyebrow">Research Clusters</div>
            <h2 className="section-title">Areas of Excellence</h2>
            <div className="gold-rule" />
            <p className="section-subtitle">
              Our research is organised into four focused clusters, each
              addressing critical questions in science and technology education.
            </p>
          </div>
          <div className="research-full-grid">
            {researchClusters.map((c, i) => (
              <div
                key={c.id}
                className={`research-full-card card fade-up delay-${(i % 2) + 1}`}
              >
                <div className="research-full-icon">{c.icon}</div>
                <div className="research-full-body">
                  <h3 className="research-full-title">{c.title}</h3>
                  <p className="research-full-lead">
                    Cluster Lead: <strong>{c.lead}</strong>
                  </p>
                  <p className="research-full-desc">{c.description}</p>
                  <div className="research-full-stats">
                    <div>
                      <span className="research-stat-num">{c.projects}</span>
                      <br />
                      <span
                        style={{
                          fontSize: "0.75rem",
                          color: "var(--ui-gray-mid)",
                        }}
                      >
                        Active Projects
                      </span>
                    </div>
                    <div>
                      <span className="research-stat-num">
                        {c.publications}
                      </span>
                      <br />
                      <span
                        style={{
                          fontSize: "0.75rem",
                          color: "var(--ui-gray-mid)",
                        }}
                      >
                        Publications
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="research-cta fade-up">
            <h3>Interested in Collaborating?</h3>
            <p>
              We welcome partnerships with institutions, government agencies,
              NGOs, and industry organisations interested in advancing science
              and technology education in Nigeria and beyond.
            </p>
            <a
              href="#contact"
              className="btn btn-blue"
              style={{ marginTop: "24px" }}
            >
              Get in Touch <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

// ===========================
// STUDENT RESOURCES PAGE
// ===========================
export function StudentsPage() {
  useScrollAnimation();
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="page-hero-breadcrumb">
            <a href="/">Home</a> <span>/</span> <span>Students</span>
          </div>
          <h1>Student Resources</h1>
          <p>
            Everything you need to succeed in your academic journey at STESA.
          </p>
          <div className="page-hero-gold-bar" />
        </div>
      </div>
      <section className="inner-section" id="students">
        <div className="container">
          <div className="section-header centered fade-up">
            <div className="section-eyebrow">Resources</div>
            <h2 className="section-title">Tools & Support for Students</h2>
            <div className="gold-rule centered" />
          </div>
          <div className="resources-grid">
            {studentResources.map((r, i) => (
              <a
                key={r.title}
                href={r.link}
                className={`resource-card card fade-up delay-${(i % 3) + 1}`}
              >
                <div className="resource-icon">{r.icon}</div>
                <h3 className="resource-title">{r.title}</h3>
                <p className="resource-desc">{r.description}</p>
                <span className="btn btn-ghost">
                  Access <ArrowRight size={14} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// ===========================
// GALLERY PAGE
// ===========================
export function GalleryPage() {
  useScrollAnimation();
  const galleryBgs = [
    "linear-gradient(135deg, #003366, #0055a5)",
    "linear-gradient(135deg, #C9942A, #E8B84B)",
    "linear-gradient(135deg, #1a3a5c, #004080)",
    "linear-gradient(135deg, #2a5934, #3a7a46)",
    "linear-gradient(135deg, #003366, #0a2e5a)",
    "linear-gradient(135deg, #5a2080, #8b32c8)",
    "linear-gradient(135deg, #C9942A, #003366)",
    "linear-gradient(135deg, #1a4a6c, #C9942A)",
    "linear-gradient(135deg, #003366, #1a3a5c)",
  ];
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="page-hero-breadcrumb">
            <a href="/">Home</a> <span>/</span> <span>Gallery</span>
          </div>
          <h1>Photo Gallery</h1>
          <p>
            A visual journey through academic life, events, and milestones at
            STESA.
          </p>
          <div className="page-hero-gold-bar" />
        </div>
      </div>
      <section className="inner-section">
        <div className="container">
          <div className="gallery-grid">
            {galleryImages.map((img, i) => (
              <div
                key={img.id}
                className={`gallery-item fade-up delay-${(i % 4) + 1}${i === 0 || i === 4 ? " gallery-wide" : ""}`}
              >
                <div
                  className="gallery-img-placeholder"
                  style={{ background: galleryBgs[i % galleryBgs.length] }}
                >
                  <span className="gallery-category">{img.category}</span>
                  <span className="gallery-emoji">🖼️</span>
                </div>
                <div className="gallery-caption">{img.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// ===========================
// CONTACT PAGE
// ===========================
export function ContactPage() {
  useScrollAnimation();
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="page-hero-breadcrumb">
            <a href="/">Home</a> <span>/</span> <span>Contact</span>
          </div>
          <h1>Contact Us</h1>
          <p>
            We'd love to hear from you. Reach out with any enquiries about our
            programmes, research, or admissions.
          </p>
          <div className="page-hero-gold-bar" />
        </div>
      </div>

      <section className="inner-section" id="contact">
        <div className="container contact-layout">
          <div className="contact-info fade-up">
            <div className="section-eyebrow">Get in Touch</div>
            <h2 className="section-title">Contact Information</h2>
            <div className="gold-rule" />

            <div className="contact-items">
              {[
                {
                  icon: <MapPin size={20} />,
                  label: "Address",
                  lines: [
                    "Faculty of Education Building",
                    "University of Ibadan",
                    "Ibadan, Oyo State, Nigeria",
                  ],
                },
                {
                  icon: <Mail size={20} />,
                  label: "Email",
                  lines: ["stesa@ui.edu.ng", "admissions.stesa@ui.edu.ng"],
                },
                {
                  icon: <Phone size={20} />,
                  label: "Phone",
                  lines: ["+234 802 345 6789", "+234 803 456 7890"],
                },
                {
                  icon: <Clock size={20} />,
                  label: "Office Hours",
                  lines: ["Monday – Friday", "8:00 AM – 4:00 PM"],
                },
              ].map((item) => (
                <div key={item.label} className="contact-item">
                  <div className="contact-item-icon">{item.icon}</div>
                  <div>
                    <strong>{item.label}</strong>
                    {item.lines.map((l, i) => (
                      <p key={i}>{l}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="map-placeholder">
              <MapPin size={32} />
              <span>University of Ibadan, Ibadan, Nigeria</span>
            </div>
          </div>

          <div className="contact-form-wrap card fade-up delay-2">
            <h3 className="contact-form-title">Send Us a Message</h3>
            <p className="contact-form-subtitle">
              Fill in the form below and a member of our team will respond
              within 2 working days.
            </p>

            <div className="contact-form">
              <div className="form-row">
                <div className="form-field">
                  <label>First Name *</label>
                  <input type="text" placeholder="Your first name" />
                </div>
                <div className="form-field">
                  <label>Last Name *</label>
                  <input type="text" placeholder="Your last name" />
                </div>
              </div>
              <div className="form-field">
                <label>Email Address *</label>
                <input type="email" placeholder="your.email@example.com" />
              </div>
              <div className="form-field">
                <label>Phone Number</label>
                <input type="tel" placeholder="+234 xxx xxx xxxx" />
              </div>
              <div className="form-field">
                <label>Subject *</label>
                <select>
                  <option value="">Select enquiry type…</option>
                  <option>Admissions Enquiry</option>
                  <option>Programme Information</option>
                  <option>Research Collaboration</option>
                  <option>Academic Staff Contact</option>
                  <option>General Enquiry</option>
                </select>
              </div>
              <div className="form-field">
                <label>Message *</label>
                <textarea rows={5} placeholder="Write your message here…" />
              </div>
              <button className="btn btn-primary contact-submit">
                Send Message <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
