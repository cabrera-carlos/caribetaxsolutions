import { HiChevronDown, HiChevronLeft, HiCheck } from "react-icons/hi";

export default function ServiceItem({ service, selected, setSelected }) {
  const isSelected = service.id === selected;

  return (
    <div
      className={`services-item ${isSelected ? "services-item-active" : ""}`}
      onClick={() => setSelected(service.id)}
    >
      <div className="services-item-heading">
        <p className="service-title">{service.title}</p>
        {isSelected ? (
          <HiChevronDown className="service-icon" />
        ) : (
          <HiChevronLeft className="service-icon" />
        )}
      </div>
      <div className="hidden-box">
        <div>
          <ul className="list service-list">
            {service.items.map((item) => {
              return (
                <li className="list-item" key={item}>
                  <HiCheck className="list-icon" />
                  <span>{item}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
