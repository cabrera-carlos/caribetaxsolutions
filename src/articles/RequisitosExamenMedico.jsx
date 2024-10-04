import {
  HiArrowSmRight,
  HiCheck,
  HiCheckCircle,
  HiQuestionMarkCircle,
} from "react-icons/hi";
import PageNavigation from "../components/PageNavigation";
import Footer from "../components/Footer";

export default function RequisitosExamenMedico() {
  return (
    <div id="grid-container">
      <PageNavigation lightBg={true} />
      <section className="section-articles" id="section-articles">
        <div className="container--sm">
          <h3 className="heading-secondary">
            Requisitos para el examen médico de USCIS (Adultos).
          </h3>
          <span className="subheading articles-subheading">
            Última actualización: 9/26/2024
          </span>
          <div className="grid--checklist">
            <ol className="articles-list articles-list-level1">
              <li className="articles-list-item ">
                <span className="articles-list-item-level1">
                  Vacunas/ Inmunización
                </span>
                <ol className="list articles-list-level2">
                  <li className="list-item">
                    <HiCheck className="article-list-icon" />
                    <span>Tétano (Tdap).</span>
                  </li>
                  <li className="list-item">
                    <HiCheck className="article-list-icon" />
                    <span>COVID-19.</span>
                  </li>
                  <li className="list-item">
                    <HiCheck className="article-list-icon" />
                    <span>Influenza (Octubre - Marzo).</span>
                  </li>
                  <li className="list-item">
                    <HiCheck className="article-list-icon" />
                    <span>
                      MMR (Sarampión, paperas, rubeola) o análisis de sangre que
                      demuestre inmunidad.
                    </span>
                  </li>
                  <li className="list-item">
                    <HiCheck className="article-list-icon" />
                    <span>
                      Varicela o análisis de sangre que demuestre inmunidad.
                    </span>
                  </li>
                  <li className="list-item">
                    <HiCheck className="article-list-icon" />
                    <span>Pneumonía (> 65 años de edad).</span>
                  </li>
                  <li className="list-item">
                    <HiCheck className="article-list-icon" />
                    <span>Polio</span>
                  </li>
                  <li className="list-item">
                    <HiCheck className="article-list-icon" />
                    <span>Hepatitis B.</span>
                  </li>
                </ol>
              </li>
            </ol>
            <img
              className="how-img"
              id="checklist-img"
              src="../../public/checklist.svg"
              alt="Contact us"
            />
          </div>
          <p className="articles-text">
            Las vacunas pueden ser administradas en cualquier farmacia local sin
            necesidad de receta médica. La vacuna de la <strong>Polio</strong>{" "}
            también la están administrando en una clínica en Cicero:
          </p>
          <p className="articles-address">
            <strong>Drakos Urgent Care</strong>
            <br />
            5586 Legionnaire Dr <br />
            Cicero, NY 13039 <br />
            United States <br />
            urgentcare.drakosdynamics.com <br />
          </p>
          <p className="articles-text">Notas:</p> <br />
          <ul>
            <li>Sacar cita en el sitio web.</li>
            <li>Llevar record de vacunación</li>
          </ul>
          <ol className="articles-list articles-list-level1" start={2}>
            <li className="articles-list-item ">
              <span className="articles-list-item-level1">
                Quantiferon TB Gold (Tuberculosis)
              </span>
              <br />
              <span className="articles-list-item-description">
                <HiArrowSmRight className="article-list-icon" />
                Análisis de sangre
              </span>
            </li>
          </ol>
          <ol className="articles-list articles-list-level1" start={3}>
            <li className="articles-list-item ">
              <span className="articles-list-item-level1">
                RPR (prueba de sangre de sifilis) - (realizada en los últimos 3
                meses)
              </span>
              <br />
              <span className="articles-list-item-description">
                <HiArrowSmRight className="article-list-icon" />
                Para aplicantes entre 18 y 44 años de edad
              </span>
            </li>
          </ol>
          <ol className="articles-list articles-list-level1" start={4}>
            <li className="articles-list-item ">
              <span className="articles-list-item-level1">
                Prueba de la Gonorrea - (realizada en los últimos 3 meses)
              </span>
              <br />
              <span className="articles-list-item-description articles-list-item-description-no-mb">
                <HiArrowSmRight className="article-list-icon" />
                Para aplicantes entre 18 y 24 años de edad
              </span>
            </li>
          </ol>
          <p className="articles-text">
            El Departamento de Salud del condado de Onondaga ofrece las pruebas
            del <strong>Sífilis</strong> y <strong>Gonorrea</strong> sin
            necesidad de cita. Solo necesita identificación.
          </p>
          <p className="articles-address">
            <strong>
              Room 80 (Basement level), John H. Mulroy Civic Center
            </strong>
            <br />
            421 Montgomery Street <br />
            Syracuse, NY 13202 <br />
            United States <br />
            315.435.3236 <br />
          </p>
          <p className="articles-notes">
            Notas: <br />
            <ul>
              <li>Lunes a Viernes de 8:30 am - 3:30 pm</li>
            </ul>
          </p>
          <p className="articles-text">
            Una vez que tenga todas las vacunas o prueba de Inmunidad puede
            solicitar la cita para realizar el chequeo médico requerido por
            USCIS. A continuación están algunos de los doctores del área
            autorizados a realizar el chequeo.
          </p>
          <p className="articles-address">
            <strong>Center for International Health</strong>
            <br />
            725 E Adams Street Suite 4a Upstate <br />
            Nappi Wellness Institute <br />
            Syracuse, NY 13202 <br />
            United States <br />
            Dr. Andrea Shaw <br />
            315.435.3236 <br />
          </p>
          <p className="articles-address">
            <strong>Robert K. Chruscicki, MD</strong>
            <br />
            288 Genesee Street <br />
            Utica, NY 13502 <br />
            United States <br />
            Dr. Robert Chruscicki <br />
            315-724-7744 <br />
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
          </p>
          <p className="articles-notes">
            Notas: <br />
            <ul>
              <li>Lenguajes adicionales: Español, Urdu</li>
            </ul>
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
