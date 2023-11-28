export default function Hero({ children }) {
  return (
    <div className="hero-img-box">
      {children}
      <section className="section-hero">
        <div className="hero-text-box text-center">
          <h1 className="heading-primary">
            Servicio de calidad a la altura que te mereces.
          </h1>
          <div className="hero-text-wrapper">
            <p className="hero-text">Bienvenidos a Caribe Tax Solutions.</p>
          </div>
          <a href="#section-cta" className="btn btn--primary">
            Contactar
          </a>
        </div>
      </section>
    </div>
  );
}
