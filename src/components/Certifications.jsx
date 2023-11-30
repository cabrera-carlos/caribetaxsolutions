import { HiBadgeCheck } from "react-icons/hi";

export default function Certifications() {
  return (
    <section className="section-certs">
      <div className="certs-header">
        <HiBadgeCheck className="certs-check" />
        <p className="certs-heading">Certificado por</p>
      </div>
      <div className="certs-container">
        <img src="irs-logo.png" alt="IRS Logo" className="cert-logo" />
        <img src="nys-logo.png" alt="IRS Logo" className="cert-logo" />
        <img src="natp-logo.png" alt="IRS Logo" className="cert-logo" />
      </div>
    </section>
  );
}
