import { Link } from "react-router-dom";
import PageNavigation from "./PageNavigation";
import Footer from "./Footer";

export default function Services() {
  return (
    <div id="grid-container">
      <PageNavigation lightBg={true} />
      <section className="section-articles" id="section-articles">
        <div className="container--sm">
          <h3 className="heading-secondary">Artículos publicados</h3>
          <div className="articles">
            <ul className="list articles-list">
              <li className="articles-list-item" key="requisitos-examen-medico">
                <Link to={"/articulos/requisitos-examen-medico"}>
                  <span class="subheading articles-subheading-v2">
                    Requisitos para el examen médico de USCIS (Adultos)
                  </span>
                </Link>
                <p className="articles-text-v2">
                  Detalles de las vacunas y ánalisis que usted necesita para
                  complir con todos los requisitos de USCIS para su examen
                  médico.
                </p>
              </li>
              <li className="articles-list-item" key="medicos-civiless">
                <Link to={"/articulos/medicos-civiles"}>
                  <span class="subheading articles-subheading-v2">
                    Médicos Civiles Designados Por USCIS
                  </span>
                </Link>
                <p className="articles-text-v2">
                  Detalles de los Doctores designados por USCIS para realizar su
                  examen médico.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
