import {
  HiArrowSmRight,
  HiCheck,
  HiCheckCircle,
  HiQuestionMarkCircle,
} from "react-icons/hi";
import PageNavigation from "../components/PageNavigation";
import Footer from "../components/Footer";

function getOS() {
  let os = "unknown";
  const userAgent = window.navigator.userAgent;
  const platform =
    window.navigator?.userAgentData?.platform || window.navigator.platform;

  const macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K", "macOS"];
  const windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"];
  const iosPlatforms = ["iPhone", "iPad", "iPod"];

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = "Mac OS";
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = "iOS";
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = "Windows";
  } else if (/Android/.test(userAgent)) {
    os = "Android";
  } else if (/Linux/.test(platform)) {
    os = "Linux";
  }

  return os;
}

console.log(getOS());

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
            El exámen médico solicitado por USCIS debe ser llevado a cabo por un
            doctor autorizado. A continuación está un listado de los Médicos
            Civiles más cercanos del area del centro de New York.
          </p>

          <p className="articles-address">
            <strong>Center for International Health</strong>
            <br />
            <a href="http://maps.apple.com/?address=1,725+E+Adams+Street,Syracuse,New+York">
              725 E Adams Street Suite 4a Upstate <br />
              Nappi Wellness Institute <br />
              Syracuse, NY 13202 (IOS)
            </a>
            <br />
            <br />
            <br />
            <a
              href="https://www.google.com/maps/search/?api=1&query=725+E+Adams+Street,Syracuse,New+York"
              target="_blank"
              rel="noopener noreferrer"
            >
              725 E Adams Street Suite 4a Upstate <br />
              Nappi Wellness Institute <br />
              Syracuse, NY 13202 (ANDROID)
            </a>
            {/* geo:0,0?q=725+E+Adams+Street,Syracuse,New+York */}
            <br />
            Dr. Andrea Shaw <br />
            <a className="article-link" href="tel:+1 (844) 964-1200">
              (844) 964-1200
            </a>
          </p>
          <p className="articles-address">
            <strong>Robert K. Chruscicki, MD</strong>
            <br />
            288 Genesee Street <br />
            Utica, NY 13502 <br />
            United States <br />
            Dr. Robert Chruscicki <br />
            <a className="article-link" href="tel:+1 (315) 724-7744">
              (315) 724-7744
            </a>
          </p>
          <p className="articles-address">
            <strong>Dr. Michael S Niziol</strong>
            <br />
            83 Lewis Street <br />
            Dryden, NY 13053 <br />
            United States <br />
            <a className="article-link" href="tel:+1 (607) 844-8201">
              (607) 844-8201
            </a>
          </p>
          <p className="articles-address">
            <strong>Slocum Dickson Medical Group</strong>
            <br />
            1729 Burrstone Road <br />
            New Hartford, NY 13413
            <br />
            United States <br />
            Dr. Mohsin Syed <br />
            <a className="article-link" href="tel:+1 (315) 435-3236">
              (315) 435-3236
            </a>
            <br />
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
            <a className="article-link" href="tel:+1 (800) 245-4245">
              (800) 245-4245
            </a>
          </p>

          <p className="articles-text">
            Para encontrar Médicos Civiles cerca de Usted{" "}
            <a
              href="https://www.uscis.gov/es/herramientas/localice-un-medico-civil-designado"
              target="_blank"
              rel="noopener noreferrer"
            >
              de click aquí
            </a>{" "}
            o escanee el código QR a continuación:
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
