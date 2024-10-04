export default function HowItWorks() {
  return (
    <section className="section-how" id="section-how">
      <div className="container--sm">
        <h3 className="heading-secondary">3 Simples Pasos</h3>
        {/* <span class="subheading">Como funciona</span> */}
        <div className="grid-how">
          <div className="how-img-box">
            <p className="how-step">1</p>
            <img className="how-img" src="contact_us.svg" alt="Contact us" />
          </div>
          <div className="how-item item--1">
            <p className="how-heading">Contáctenos</p>
            <p className="how-text">
              Utilice cualquiera de nuestras vías de comunicación para iniciar
              su servicio.
            </p>
          </div>
          <div className="how-img-box">
            <p className="how-step">2</p>
            <img className="how-img" src="files.svg" alt="Contact us" />
          </div>
          <div className="how-item item--2">
            <p className="how-heading">Enviar documentación</p>
            <p className="how-text">
              Usted elige la manera en la que nos hace llegar los documentos
              requeridos para su trámite.
            </p>
          </div>
          <div className="how-img-box">
            <p className="how-step">3</p>
            <img className="how-img" src="reviewed_docs.svg" alt="Contact us" />
          </div>
          <div className="how-item item--3">
            <p className="how-heading">Completar</p>
            <p className="how-text">
              Una vez que se complete su servicio, lo revisaremos juntos para
              asegurar su satisfacción.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
