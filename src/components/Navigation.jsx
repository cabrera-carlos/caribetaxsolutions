export default function Navigation() {
  return (
    <header className="header-nav container">
      <img className="logo" src="/logo.png" alt="Caribe Tax Solutions logo" />
      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <a className="main-nav-link" href="#section-how">
              Pasos
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#section-services">
              Servicios
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#section-features">
              Características
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#section-cta">
              Contactar
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
