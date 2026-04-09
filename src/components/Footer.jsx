import {
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Clock,
  ExternalLink,
} from "lucide-react";
import { siteConfig } from "../data/siteData";
import "./Footer.css";

const footerLinks = {
  "Quick Links": [
    { label: "About the Department", href: "#about" },
    { label: "Our Programmes", href: "#programmes" },
    { label: "Academic Staff", href: "#staff" },
    { label: "Research & Innovation", href: "#research" },
    { label: "Admissions", href: "#admissions" },
    { label: "News & Events", href: "#news" },
  ],
  "Student Resources": [
    { label: "Course Registration Portal", href: "#" },
    { label: "e-Library Access", href: "#" },
    { label: "Examination Schedule", href: "#" },
    { label: "Research Guidelines", href: "#" },
    { label: "Student Welfare", href: "#" },
    { label: "Scholarships", href: "#" },
  ],
  "University Links": [
    {
      label: "University of Ibadan",
      href: "https://www.ui.edu.ng",
      external: true,
    },
    { label: "Faculty of Education", href: "#", external: true },
    { label: "UI Postgraduate School", href: "#", external: true },
    { label: "UI Library", href: "#", external: true },
    { label: "UI Student Portal", href: "#", external: true },
    { label: "TETFund", href: "#", external: true },
  ],
};

export default function Footer() {
  return (
    <footer className="footer">
      {/* Main Footer */}
      <div className="footer-main">
        <div className="container footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <GraduationCap size={20} />
              </div>
              <div>
                <div className="footer-logo-name">STESA</div>
                <div className="footer-logo-sub">University of Ibadan</div>
              </div>
            </div>
            <p className="footer-brand-desc">
              Advancing excellence in science and technology education through
              rigorous scholarship, impactful research, and transformative
              teaching.
            </p>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <MapPin size={14} />
                <span>Faculty of Education Building, UI, Ibadan, Nigeria</span>
              </div>
              <div className="footer-contact-item">
                <Mail size={14} />
                <a href="mailto:stesa@ui.edu.ng">stesa@ui.edu.ng</a>
              </div>
              <div className="footer-contact-item">
                <Phone size={14} />
                <a href="tel:+2348023456789">+234 802 345 6789</a>
              </div>
              <div className="footer-contact-item">
                <Clock size={14} />
                <span>Mon–Fri: 8:00 AM – 4:00 PM</span>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading} className="footer-col">
              <h4 className="footer-col-title">{heading}</h4>
              <ul className="footer-col-list">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="footer-link"
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                    >
                      {link.label}
                      {link.external && <ExternalLink size={11} />}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Department of Science and Technology
            Education, Faculty of Education, University of Ibadan. All rights
            reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="#" className="footer-bottom-link">
              Privacy Policy
            </a>
            <a href="#" className="footer-bottom-link">
              Accessibility
            </a>
            <a href="#" className="footer-bottom-link">
              Site Map
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
