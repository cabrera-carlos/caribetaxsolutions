import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Navigation({ lightBg = false }) {
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <header className={`header-nav ${mobileNav ? "open-nav" : ""}`}>
      <img
        className="logo desktop-logo"
        src="/logo.png"
        alt="Caribe Tax Solutions logo"
      />
      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <a
              href="#section-how"
              className={lightBg ? "main-nav-link-dark" : "main-nav-link"}
              onClick={() => setMobileNav((n) => !n)}
            >
              Pasos
            </a>
          </li>
          {/* <li>
            <a
              className={lightBg ? "main-nav-link-dark" : "main-nav-link"}
              href="#section-services"
              onClick={() => setMobileNav((n) => !n)}
            >
              Servicios
            </a>
          </li> */}
          <li>
            <a
              className={lightBg ? "main-nav-link-dark" : "main-nav-link"}
              href="#section-features"
              onClick={() => setMobileNav((n) => !n)}
            >
              Características
            </a>
          </li>
          <li>
            <a
              className={lightBg ? "main-nav-link-dark" : "main-nav-link"}
              href="#section-cta"
              onClick={() => setMobileNav((n) => !n)}
            >
              Contactar
            </a>
          </li>
          <li>
            <Link
              to={"/articulos"}
              className={lightBg ? "main-nav-link-dark" : "main-nav-link"}
            >
              Artículos
            </Link>
          </li>
        </ul>
      </nav>

      <button
        aria-label="Mobile Navigation"
        className="btn-mobile-nav"
        onClick={() => setMobileNav((n) => !n)}
      >
        <HiMenu className="icon-mobile-nav icon-mobile-menu" />
        <HiX className="icon-mobile-nav icon-mobile-close" />
      </button>
    </header>
  );
}
