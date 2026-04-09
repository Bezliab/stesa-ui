import { useEffect } from "react";
import { useScrollAnimation } from "../components/useScrollAnimation";
import "./InnerPage.css";

export default function AboutPage() {
  useScrollAnimation();

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="page-hero-breadcrumb">
            <a href="/">Home</a> <span>/</span> <span>About</span>
          </div>
          <h1>About the Department</h1>
          <p>
            History, vision, mission, and the values that define our academic
            community.
          </p>
          <div className="page-hero-gold-bar" />
        </div>
      </div>

      <section className="inner-section" id="history">
        <div className="container inner-prose-layout">
          <div className="inner-prose fade-up">
            <div className="section-eyebrow">History & Overview</div>
            <h2 className="section-title">Our Story</h2>
            <div className="gold-rule" />
            <p>
              The Department of Science and Technology Education was established
              as part of the Faculty of Education at the University of Ibadan —
              Nigeria's oldest and most prestigious university — with the
              mandate to train world-class educators in science, mathematics,
              and technology disciplines.
            </p>
            <p>
              Since its founding, the department has grown from a small unit
              into one of the most dynamic and productive academic departments
              in education across sub-Saharan Africa, producing graduates who
              have gone on to distinguished careers in teaching, research,
              curriculum development, policy, and educational leadership at the
              national and international levels.
            </p>
            <p>
              Over the decades, the department has continuously evolved its
              programmes, research agenda, and community engagements in response
              to the changing demands of science and technology in the Nigerian
              and global contexts. Today, STESA stands as a beacon of academic
              excellence, innovation, and socially responsive scholarship.
            </p>

            <div className="info-timeline">
              {[
                {
                  year: "1948",
                  event:
                    "University of Ibadan established as the first Nigerian university",
                },
                {
                  year: "1950s",
                  event:
                    "Faculty of Education created to support teacher training",
                },
                {
                  year: "1970s",
                  event:
                    "Science Education formalised as a distinct academic unit",
                },
                {
                  year: "1990s",
                  event:
                    "Postgraduate programmes (M.Ed. and Ph.D.) established",
                },
                {
                  year: "2000s",
                  event:
                    "Technology Education and Computer Education tracks introduced",
                },
                {
                  year: "2010s",
                  event:
                    "Research output expanded; international partnerships developed",
                },
                {
                  year: "2020s",
                  event:
                    "Department embraces STEM integration and digital pedagogy",
                },
              ].map((item) => (
                <div key={item.year} className="timeline-item fade-up">
                  <div className="timeline-year">{item.year}</div>
                  <div className="timeline-dot" />
                  <div className="timeline-text">{item.event}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="inner-sidebar fade-up delay-2">
            <div className="sidebar-card">
              <h4>Department at a Glance</h4>
              <div className="sidebar-stats">
                {[
                  { label: "Current Students", value: "450+" },
                  { label: "Academic Staff", value: "8" },
                  { label: "Research Publications", value: "120+" },
                  { label: "Degree Programmes", value: "6" },
                  { label: "Research Clusters", value: "4" },
                  { label: "Active Research Projects", value: "19" },
                ].map((stat) => (
                  <div key={stat.label} className="sidebar-stat">
                    <span className="sidebar-stat-val">{stat.value}</span>
                    <span className="sidebar-stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="sidebar-card" style={{ marginTop: "24px" }}>
              <h4>Quick Contacts</h4>
              <div className="sidebar-contacts">
                <div className="sidebar-contact-item">
                  <strong>Head of Department</strong>
                  <span>Prof. A.O. Fadahunsi</span>
                  <a href="mailto:ao.fadahunsi@ui.edu.ng">
                    ao.fadahunsi@ui.edu.ng
                  </a>
                </div>
                <div className="sidebar-contact-item">
                  <strong>Departmental Office</strong>
                  <span>Faculty of Education Building</span>
                  <span>University of Ibadan</span>
                </div>
                <div className="sidebar-contact-item">
                  <strong>Office Hours</strong>
                  <span>Mon–Fri: 8:00 AM – 4:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="inner-section bg-blue" id="vision">
        <div className="container">
          <div className="section-header centered fade-up">
            <div
              className="section-eyebrow"
              style={{ color: "var(--ui-gold-light)" }}
            >
              Our Guiding Principles
            </div>
            <h2 className="section-title" style={{ color: "var(--ui-white)" }}>
              Vision & Mission
            </h2>
            <div className="gold-rule centered" />
          </div>
          <div className="vision-mission-grid">
            <div className="vm-card fade-up delay-1">
              <div className="vm-icon">👁️</div>
              <h3 className="vm-title">Vision</h3>
              <p className="vm-text">
                To be a world-class centre for the study, practice, and
                advancement of science and technology education, producing
                transformative educators and researchers who drive sustainable
                development in Nigeria and across the African continent.
              </p>
            </div>
            <div className="vm-card fade-up delay-2">
              <div className="vm-icon">🎯</div>
              <h3 className="vm-title">Mission</h3>
              <p className="vm-text">
                To provide an intellectually stimulating and inclusive
                environment for the training of highly competent science and
                technology educators; to generate and disseminate knowledge
                through rigorous research; and to engage communities in
                advancing STEM literacy and educational quality across Nigeria.
              </p>
            </div>
          </div>
          <div className="values-grid fade-up delay-3">
            {[
              {
                icon: "🏛️",
                value: "Academic Excellence",
                desc: "We uphold the highest standards of scholarship and intellectual achievement.",
              },
              {
                icon: "🔬",
                value: "Research Integrity",
                desc: "We conduct ethical, rigorous, and impactful research that serves society.",
              },
              {
                icon: "🤝",
                value: "Inclusivity",
                desc: "We cultivate a diverse and respectful community that values every voice.",
              },
              {
                icon: "💡",
                value: "Innovation",
                desc: "We embrace creative thinking and modern approaches to education and scholarship.",
              },
              {
                icon: "🌍",
                value: "Social Responsibility",
                desc: "We engage with communities and contribute to national development.",
              },
              {
                icon: "⚖️",
                value: "Integrity",
                desc: "We act with honesty, transparency, and accountability in all endeavours.",
              },
            ].map((v) => (
              <div key={v.value} className="value-card">
                <span className="value-icon">{v.icon}</span>
                <h4 className="value-title">{v.value}</h4>
                <p className="value-desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
