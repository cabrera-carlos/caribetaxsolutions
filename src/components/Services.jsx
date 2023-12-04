import { services } from "../../data/services";
import { useState } from "react";
import ServiceItem from "./ServiceItem";

export default function Services() {
  const [selected, setSelected] = useState(services.at(0).id);

  return (
    <section className="section-services" id="section-services">
      <div className="container--sm">
        <h3 className="heading-secondary">Podemos ayudarte</h3>
        <span class="subheading">Servicios</span>
        <div className="services">
          {services.map((service) => {
            return (
              <ServiceItem
                service={service}
                selected={selected}
                setSelected={setSelected}
                key={service.id}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
