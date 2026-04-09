import { Mail } from "lucide-react";
import { academicStaff, nonAcademicStaff } from "../data/siteData";
import { useScrollAnimation } from "../components/useScrollAnimation";
import "./InnerPage.css";

export default function PeoplePage() {
  useScrollAnimation();

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="page-hero-breadcrumb">
            <a href="/">Home</a> <span>/</span> <span>People</span>
          </div>
          <h1>Our People</h1>
          <p>
            Meet the dedicated scholars, educators, and staff who make STESA
            exceptional.
          </p>
          <div className="page-hero-gold-bar" />
        </div>
      </div>

      {/* Academic Staff */}
      <section className="inner-section" id="academic">
        <div className="container">
          <div className="section-header fade-up">
            <div className="section-eyebrow">Faculty</div>
            <h2 className="section-title">Academic Staff</h2>
            <div className="gold-rule" />
            <p className="section-subtitle">
              Our faculty members are accomplished scholars, dedicated teachers,
              and active researchers committed to advancing science and
              technology education.
            </p>
          </div>

          <div className="staff-full-grid">
            {academicStaff.map((member, i) => (
              <div
                key={member.id}
                className={`staff-full-card card fade-up delay-${(i % 3) + 1}`}
              >
                <div
                  className="staff-full-header"
                  style={{ background: member.color }}
                >
                  <div className="staff-full-avatar">
                    <span>{member.imageInitials}</span>
                  </div>
                </div>
                <div className="staff-full-body">
                  <h3 className="staff-full-name">{member.name}</h3>
                  <p className="staff-full-title">{member.title}</p>
                  <p className="staff-full-spec">{member.specialization}</p>
                  <p className="staff-full-quals">{member.qualifications}</p>
                  <div className="staff-full-interests">
                    <strong>Research Interests:</strong>
                    <div className="staff-tags">
                      {member.researchInterests.map((r) => (
                        <span key={r} className="staff-tag">
                          {r}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={`mailto:${member.email}`}
                    className="staff-full-email"
                  >
                    <Mail size={14} /> {member.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Non-Academic Staff */}
      <section className="inner-section bg-light" id="non-academic">
        <div className="container">
          <div className="section-header fade-up">
            <div className="section-eyebrow">Support Staff</div>
            <h2 className="section-title">Non-Academic Staff</h2>
            <div className="gold-rule" />
            <p className="section-subtitle">
              Our administrative and technical staff ensure the smooth operation
              of the department and provide essential support to faculty and
              students.
            </p>
          </div>

          <div className="non-acad-table fade-up">
            <div className="non-acad-header">
              <span>Name</span>
              <span>Role</span>
              <span>Email</span>
            </div>
            {nonAcademicStaff.map((s) => (
              <div key={s.id} className="non-acad-row">
                <span className="non-acad-name">{s.name}</span>
                <span className="non-acad-role">{s.role}</span>
                <a href={`mailto:${s.email}`} className="non-acad-email">
                  {s.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
