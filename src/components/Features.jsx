import {
  FaStoreAlt,
  FaLanguage,
  FaPiggyBank,
  FaRegThumbsUp,
  FaMousePointer,
  FaLock,
} from "react-icons/fa";

export default function Features() {
  return (
    <section className="section-features" id="section-features">
      <div className="features-box container">
        <div className="feature">
          <FaStoreAlt className="feature-icon" />
          <p className="feature-title">Negocio de familia</p>
          <p className="feature-text">
            Ambiente acogedor y servicio personalizado a sus necesidades.
          </p>
        </div>
        <div className="feature mobile-hidden">
          <FaLanguage className="feature-icon" />
          <p className="feature-title">Servicio en Español</p>
          <p className="feature-text">
            Comuníquese con nosotros en Español o Inglés.
          </p>
        </div>
        <div className="feature mobile-hidden">
          <FaPiggyBank className="feature-icon" />
          <p className="feature-title">El mejor precio</p>
          <p className="feature-text">
            Ofrecemos precios justos y competitivos.
          </p>
        </div>
        <div className="feature mobile-hidden">
          <FaRegThumbsUp className="feature-icon" />
          <p className="feature-title">Calidad garantizada</p>
          <p className="feature-text">
            Prometemos trabajar con usted para garantizar su satisfacción.
          </p>
        </div>
        <div className="feature">
          <FaMousePointer className="feature-icon" />
          <p className="feature-title">100% Online</p>
          <p className="feature-text">
            Complete sus trámites desde la comodidad de su hogar.
          </p>
        </div>
        <div className="feature">
          <FaLock className="feature-icon" />
          <p className="feature-title">Privado y seguro</p>
          <p className="feature-text">
            Usamos métodos seguros para intercambiar documentos.
          </p>
        </div>
      </div>
    </section>
  );
}
