import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Navigation({ lightBg = false }) {
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <header
      className={`header-nav header-nav--alt container ${
        mobileNav ? "open-nav" : ""
      }`}
    >
      <Link
        to={"/"}
        className={lightBg ? "main-nav-link-dark" : "main-nav-link"}
      >
        <img
          className="logo desktop-logo"
          src="/logo.png"
          alt="Caribe Tax Solutions logo"
        />
      </Link>
      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <Link
              to={"/"}
              className={lightBg ? "main-nav-link-dark" : "main-nav-link"}
              onClick={() => setMobileNav((n) => !n)}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to={"/articulos"}
              className={lightBg ? "main-nav-link-dark" : "main-nav-link"}
              onClick={() => setMobileNav((n) => !n)}
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
