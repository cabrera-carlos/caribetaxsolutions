import { HiMiniStar } from "react-icons/hi2";

export default function Reviews() {
  return (
    <section className="section-reviews">
      <div className="reviews-container container">
        <div className="review-box">
          <blockquote>
            Excelente servicio, seriedad y puntualidad lo recomiendo 100% .
            <cite>
              <div className="review-stars">
                <HiMiniStar className="review-icon" />
                <HiMiniStar className="review-icon" />
                <HiMiniStar className="review-icon" />
                <HiMiniStar className="review-icon" />
                <HiMiniStar className="review-icon" />
              </div>
              - Gabriel
            </cite>
          </blockquote>
        </div>
        <div className="review-box">
          <blockquote>
            Natali es una profesional experimentada y capaz. Me dio un trato
            personalizado y dulce. Seguiré haciendo mis taxes con ella y la
            recomiendo 100%. Gracias
            <cite>
              <div className="review-stars">
                <HiMiniStar className="review-icon" />
                <HiMiniStar className="review-icon" />
                <HiMiniStar className="review-icon" />
                <HiMiniStar className="review-icon" />
                <HiMiniStar className="review-icon" />
              </div>
              - Maura
            </cite>
          </blockquote>
        </div>
        <div className="review-box">
          <blockquote>
            Buenas tardes. Estoy muy agradecida con el trabajo de Natali Reyes.
            Es muy profesional, me ha dado consejos sobre temas de impuestos que
            desconocía, súper recomiendo su agencia. Muchas gracias Natali.
            <cite>
              <div className="review-stars">
                <HiMiniStar className="review-icon" />
                <HiMiniStar className="review-icon" />
                <HiMiniStar className="review-icon" />
                <HiMiniStar className="review-icon" />
                <HiMiniStar className="review-icon" />
              </div>
              - Karelia
            </cite>
          </blockquote>
        </div>
        <div className="review-box">
          <blockquote>
            Dejo mi comentario en relación a mi experiencia.Estoy muy agradecida
            con la atención y el servicio prestado.Muy complacida,recomiendo que
            usen Caribe Tax Solutions 😉♥️Excelentes Servicios 👌
            <cite>
              <div className="review-stars">
                <HiMiniStar className="review-icon" />
                <HiMiniStar className="review-icon" />
                <HiMiniStar className="review-icon" />
                <HiMiniStar className="review-icon" />
                <HiMiniStar className="review-icon" />
              </div>
              - Dianelis
            </cite>
          </blockquote>
        </div>
      </div>
      <div className="reviews-link-container">
        <a
          href="https://maps.app.goo.gl/9s1sHfKBojDisQaA7"
          target="_blank"
          rel="noopener noreferrer"
          className="reviews-link"
        >
          Nuestros reviews en Google
        </a>
      </div>
    </section>
  );
}
