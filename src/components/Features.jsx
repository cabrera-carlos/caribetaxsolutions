import {
  FaStoreAlt,
  FaLanguage,
  FaPiggyBank,
  FaRegThumbsUp,
} from "react-icons/fa";

export default function Features() {
  return (
    <section className="section-features" id="section-features">
      <div className="features-box container">
        <div className="feature">
          <FaStoreAlt className="feature-icon" />
          <p className="feature-title">Negocio de familia</p>
          <p className="feature-text">
            Disfruta de un ambiente acogedor y un servicio personalizado a tus
            necesidades.
          </p>
        </div>
        <div className="feature">
          <FaLanguage className="feature-icon" />
          <p className="feature-title">Servicio en Español</p>
          <p className="feature-text">
            Comunícate con nosotros en Español o Inglés.
          </p>
        </div>
        <div className="feature">
          <FaPiggyBank className="feature-icon" />
          <p className="feature-title">El mejor precio</p>
          <p className="feature-text">
            Ofrecemos precios justos y competitivos.
          </p>
        </div>
        <div className="feature">
          <FaRegThumbsUp className="feature-icon" />
          <p className="feature-title">Calidad garantizada</p>
          <p className="feature-text">
            Prometemos trabajar con usted para garantizar su satisfacción.
          </p>
        </div>
      </div>
    </section>
  );
}
