import { FaArrowDown } from "react-icons/fa";

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
            <p className="hero-text">
              Ayudando a la comunidad hispana a superar la barrera del idioma.
            </p>
          </div>
          <a href="#section-cta" className="btn btn--primary">
            <div className="hero-btn-box">
              <span>Contactar</span> <FaArrowDown />
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}
