import {
  HiArrowSmRight,
  HiCheck,
  HiCheckCircle,
  HiQuestionMarkCircle,
} from "react-icons/hi";
import PageNavigation from "../components/PageNavigation";
import Footer from "../components/Footer";

export default function MedicosCiviles() {
  return (
    <div id="grid-container">
      <PageNavigation lightBg={true} />
      <section className="section-articles" id="section-articles">
        <div className="container--sm">
          <h3 className="heading-secondary">
            Médicos Civiles Designados Por USCIS.
          </h3>
          <span className="subheading articles-subheading">
            Última actualización: 9/26/2024
          </span>

          <p className="articles-text">
            El exámen medico solicitado por USCIS debe ser llevado a cabo por un
            médico autorizado. A continuación está un listado de los Médicos
            Civiles más cercanos del area del centro de New York.
          </p>

          <p className="articles-address">
            <strong>Center for International Health</strong>
            <br />
            725 E Adams Street Suite 4a Upstate <br />
            Nappi Wellness Institute <br />
            Syracuse, NY 13202 <br />
            United States <br />
            Dr. Andrea Shaw <br />
            844-964-1200 <br />
          </p>
          <p className="articles-address">
            <strong>Dr. Michael S Niziol</strong>
            <br />
            83 Lewis Street <br />
            Dryden, NY 13053 <br />
            United States <br />
            607-844-8201 <br />
          </p>
          <p className="articles-address">
            <strong>Slocum Dickson Medical Group</strong>
            <br />
            1729 Burrstone Road <br />
            New Hartford, NY 13413
            <br />
            United States <br />
            Dr. Mohsin Syed <br />
            315.435.3236 <br />
            Notas: Lenguajes adicionales: Español, Urdu
          </p>
          <p className="articles-address">
            <strong>The IMA Group</strong>
            <br />
            609 East Main Street Suite 1 <br />
            Endicott, NY 13760
            <br />
            United States <br />
            Dr. Justine Magurno
            <br />
            800-245-4245
            <br />
          </p>

          <p className="articles-text">
            Para encontrar Medicos Civiles cerca de Usted{" "}
            <a
              href="https://www.uscis.gov/es/herramientas/localice-un-medico-civil-designado"
              target="_blank"
              rel="noopener noreferrer"
            >
              de click aquí
            </a>{" "}
            o escanee el codigo QR a continuacion:
          </p>
          <div className="articles-qrcode-box">
            <img
              className="articles-qrcode"
              src="/qr-code-medicos.png"
              alt="Contact us"
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
