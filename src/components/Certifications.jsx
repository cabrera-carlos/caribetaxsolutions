import { HiBadgeCheck } from "react-icons/hi";

export default function Certifications() {
  return (
    <section className="section-certs">
      <div className="container--sm">
        <div className="certs-header">
          <HiBadgeCheck className="certs-check" />
          <p className="certs-heading">Registrado con</p>
        </div>
        <div className="certs-container">
          <img src="irs-logo.png" alt="IRS Logo" className="cert-logo" />
          <img src="natp-logo.png" alt="IRS Logo" className="cert-logo" />
        </div>
      </div>
    </section>
  );
}
