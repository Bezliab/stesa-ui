import { useState, useEffect, useRef } from "react";
import { Menu, X, Search, ChevronDown, GraduationCap } from "lucide-react";
import { navLinks, siteConfig } from "../data/siteData";
import "./Navbar.css";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeMobile, setActiveMobile] = useState(null);
  const searchRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (searchOpen && searchRef.current) searchRef.current.focus();
  }, [searchOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveDropdown(null);
        setSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const id = href.split("#")[1];
    if (id) {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
    setActiveDropdown(null);
  };

  return (
    <>
      {/* Top bar */}
      <div className="topbar">
        <div className="container topbar-inner">
          <span className="topbar-uni">
            🎓 University of Ibadan — Faculty of Education
          </span>
          <div className="topbar-right">
            <a href="mailto:stesa@ui.edu.ng" className="topbar-link">
              stesa@ui.edu.ng
            </a>
            <a href="tel:+2348023456789" className="topbar-link">
              +234 802 345 6789
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav ref={navRef} className={`navbar${isScrolled ? " scrolled" : ""}`}>
        <div className="container navbar-inner">
          {/* Logo */}
          <a
            href="/"
            className="nav-logo"
            onClick={(e) => handleNavClick(e, "/")}
          >
            <div className="nav-logo-icon">
              <GraduationCap size={22} />
            </div>
            <div className="nav-logo-text">
              <span className="nav-logo-short">STESA</span>
              <span className="nav-logo-full">
                Dept. of Science & Technology Education Student Association
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li
                key={link.label}
                className={`nav-item${link.children ? " has-dropdown" : ""}`}
                onMouseEnter={() =>
                  link.children && setActiveDropdown(link.label)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={link.href}
                  className="nav-link"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                  {link.children && (
                    <ChevronDown size={13} className="nav-chevron" />
                  )}
                </a>
                {link.children && activeDropdown === link.label && (
                  <div className="nav-dropdown">
                    {link.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="nav-dropdown-item"
                        onClick={(e) => handleNavClick(e, child.href)}
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Search + Hamburger */}
          <div className="nav-actions">
            <div className={`nav-search-wrap${searchOpen ? " open" : ""}`}>
              {searchOpen && (
                <input
                  ref={searchRef}
                  type="text"
                  placeholder="Search the department…"
                  className="nav-search-input"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              )}
              <button
                className="nav-icon-btn"
                onClick={() => setSearchOpen(!searchOpen)}
                aria-label="Toggle search"
              >
                {searchOpen ? <X size={18} /> : <Search size={18} />}
              </button>
            </div>
            <button
              className="nav-icon-btn hamburger"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu${mobileOpen ? " open" : ""}`}>
        <div className="mobile-menu-inner">
          <div className="mobile-search">
            <Search size={16} />
            <input
              type="text"
              placeholder="Search…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <ul className="mobile-nav-list">
            {navLinks.map((link) => (
              <li key={link.label} className="mobile-nav-item">
                <div className="mobile-nav-row">
                  <a
                    href={link.href}
                    className="mobile-nav-link"
                    onClick={(e) => {
                      handleNavClick(e, link.href);
                      if (!link.children) setMobileOpen(false);
                    }}
                  >
                    {link.label}
                  </a>
                  {link.children && (
                    <button
                      className={`mobile-chevron-btn${activeMobile === link.label ? " active" : ""}`}
                      onClick={() =>
                        setActiveMobile(
                          activeMobile === link.label ? null : link.label,
                        )
                      }
                    >
                      <ChevronDown size={16} />
                    </button>
                  )}
                </div>
                {link.children && activeMobile === link.label && (
                  <ul className="mobile-subnav">
                    {link.children.map((child) => (
                      <li key={child.label}>
                        <a
                          href={child.href}
                          className="mobile-subnav-link"
                          onClick={(e) => {
                            handleNavClick(e, child.href);
                            setMobileOpen(false);
                          }}
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="mobile-menu-footer">
            <a href="mailto:stesa@ui.edu.ng" className="mobile-contact-link">
              📧 stesa@ui.edu.ng
            </a>
            <a href="tel:+2348023456789" className="mobile-contact-link">
              📞 +234 802 345 6789
            </a>
          </div>
        </div>
      </div>
      {mobileOpen && (
        <div className="mobile-overlay" onClick={() => setMobileOpen(false)} />
      )}
    </>
  );
}
