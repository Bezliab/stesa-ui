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
              The Faculty of Education came into being in 1962 when the then
              Institute of Education (founded in 1957) and the Department of
              Extra-Mural Studies (founded in 1949) were merged together and
              called "Faculty of Education and Extra-Mural Studies". It was
              based in the present Faculty of Arts until it moved to its present
              site in 1967. In the year of its inception in 1962, the Institute
              of Education started the Bachelor of Education Programme and was
              renamed the Department and Institute of Education that same year.
            </p>
            <p>
              From 1974/75 session, new departments were created from this
              initial set-up. These were the Departments of Physical and Health
              Education (1975/76) - now called Human Kinetics and Health
              Education, Educational Management, Guidance and Counseling and
              Special Education, all in 1976/77 session. The former Department
              and Institute was then re-designated the Department of Teacher
              Education. Thus, the department is not only the mother department;
              she remains the centre of both academic and professional
              activities within the present Faculty of Education till 2015/16
              academic session. The department further broke into three
              departments namely Early Childhood and Educational Foundations,
              Arts and Social Sciences Education and Science and Technology
              Education. These new departments are conceived on demand by the
              National University Commission. The Department was mandated by
              National University Commission (2017) to change the nomenclature
              of the degree to B.Sc. (Ed) in all the Science subjects:
              Chemistry, Physics, Biology and Mathematics. This mandate was as a
              result of global practices and that for a qualification as a
              science teacher, prospective candidate must offer 75.0% of courses
              from the cognate discipline.
            </p>

            <div className="info-timeline">
              {[
                {
                  year: "1948",
                  event:
                    "University of Ibadan established as the first Nigerian university",
                },
                {
                  year: "1962",
                  event:
                    "Faculty of Education came into being with the merging of the then Institute of Education and the Department of Extra-Mural Studies",
                },
                {
                  year: "1967",
                  event:
                    "Moved to present site from the present Faculty of Arts building",
                },
                {
                  year: "1974/75",
                  event: "Creation o fnew departments",
                },
                {
                  year: "1976/77",
                  event:
                    "Redesignation of the former Department and Institute to Department of Teacher Education",
                },
                {
                  year: "2016/17",
                  event: "Techer Education split into ASSE, ECE & STE",
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
                  { label: "Current Students", value: "200+" },
                  { label: "Academic Staff", value: "17" },
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
                  <span>Dr Adetunmbi L. Akinyemi</span>
                  <a href="mailto:la.adetunmbi@ui.edu.ng">
                    la.adetunmbi@ui.edu.ng
                  </a>
                </div>
                <div className="sidebar-contact-item">
                  <strong>Departmental Office</strong>
                  <span>Faculty of Education Building</span>
                  <span>University of Ibadan</span>
                </div>
                <div className="sidebar-contact-item">
                  <strong>Office Hours</strong>
                  <span>Mon–Fri: 8:00 AM – 6:00 PM</span>
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
                Our vision is to be a top-tier institution renowned for academic
                excellence and enduring social relevance.
              </p>
            </div>
            <div className="vm-card fade-up delay-2">
              <div className="vm-icon">🎯</div>
              <h3 className="vm-title">Mission</h3>
              <p className="vm-text">
                Our mission is to expand the frontiers of knowledge, produce
                graduate teachers of strong character and professional
                competence, and contribute meaningfully to societal
                transformation through research, innovation, and community
                engagement.
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
