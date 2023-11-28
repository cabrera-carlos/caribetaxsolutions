import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { encode, validateEmail, validatePhone } from "../../utils/Misc";
import { IMaskInput } from "react-imask";

export default function Contact() {
  const [status, setStatus] = useState("empty"); //empty, submitting, success
  const [error, setError] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [state, setState] = useState("AL");
  const [comment, setComment] = useState("");
  const [errorInputs, setErrorInputs] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!name || !email || !phone || !state) {
      setError("Campo requerido");
      setErrorInputs(["name", "email", "phone", "state"]);
      return;
    }
    if (!validateEmail(email)) {
      setError("Correo no válido");
      setErrorInputs(["email"]);
      return;
    }
    if (!validatePhone(phone)) {
      setError("Teléfono no válido");
      setErrorInputs(["phone"]);
      return;
    }

    setStatus("submitting");
    setError(null);
    setErrorInputs([]);
    const formData = { name, email, phone, state, comment };

    // console.log({ ...formData });
    // console.log(encode({ "form-name": "contact-form", ...formData }));

    try {
      const resp = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact-form", ...formData }),
      });

      if (resp.status !== 200)
        throw new Error(
          "Hubo un problema al tratar de enviar su información, por favor comuníquese usando otra vía. Disculpe el inconveniente."
        );

      toast.success("Gracias por contactarnos");
    } catch (error) {
      setError(error.message);
    } finally {
      setName("");
      setEmail("");
      setPhone("");
      setState("");
      setComment("");
      setStatus("empty");
      setError(null);
    }
  }

  return (
    <section className="section-cta" id="section-cta">
      <ToastContainer style={{ fontSize: "1.6rem" }} />
      <div className="container">
        <div className="cta">
          <div className="cta-additional">
            <div>
              <p className="cta-heading text-center">Contáctanos hoy</p>
              <div className="cta-list-box">
                <ul className="cta-list">
                  <li className="cta-list-item">
                    <FaPhoneAlt className="cta-icon" />
                    <a className="cta-list-link" href="tel:+1 (315) 921-3933">
                      (315) 921-3933
                    </a>
                  </li>
                  <li className="cta-list-item">
                    <FaEnvelope className="cta-icon" />
                    <a
                      className="cta-list-link"
                      href="mailto:caribetaxsolutions@gmail.com"
                    >
                      caribetaxsolutions@gmail.com
                    </a>
                  </li>
                  <li className="cta-list-item">
                    <FaWhatsapp className="cta-icon" />
                    <a
                      className="cta-list-link"
                      href="https://wa.me/13159213933"
                      target="_blank"
                    >
                      (315) 921-3933
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="cta-text-box">
            <form
              name="contact-form"
              className="cta-form"
              onSubmit={handleSubmit}
            >
              <div>
                <label htmlFor="name">Nombre *</label>
                <input
                  type="text"
                  required
                  id="name"
                  name="name"
                  placeholder="Juan Perez"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={
                    errorInputs.includes("name") ? "form-input-error " : ""
                  }
                />
                {errorInputs.includes("name") ? (
                  <p className="cta-error-text">{error}</p>
                ) : (
                  ""
                )}
              </div>

              <div>
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  required
                  id="email"
                  name="email"
                  placeholder="juan@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={
                    errorInputs.includes("email") ? "form-input-error " : ""
                  }
                />
                {errorInputs.includes("email") ? (
                  <p className="cta-error-text">{error}</p>
                ) : (
                  ""
                )}
              </div>

              <div>
                <label htmlFor="phone">Teléfono*</label>
                {/* <input
                  type="tel"
                  required
                  id="phone"
                  name="phone"
                  placeholder="123-456-7890"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={
                    errorInputs.includes("phone") ? "form-input-error " : ""
                  }
                /> */}
                <IMaskInput
                  mask={"(000) 000-0000"}
                  required
                  id="phone"
                  name="phone"
                  placeholder="(123) 456-7890"
                  value={phone}
                  onAccept={(value, mask) => {
                    // console.log(value, mask)
                    setPhone(value);
                  }}
                  className={
                    errorInputs.includes("phone") ? "form-input-error " : ""
                  }
                />
                {errorInputs.includes("phone") ? (
                  <p className="cta-error-text">{error}</p>
                ) : (
                  ""
                )}
              </div>

              <div>
                <label htmlFor="state">Estado *</label>
                <select
                  id="state"
                  name="state"
                  required
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className={
                    errorInputs.includes("state") ? "form-input-error " : ""
                  }
                >
                  <option value="">Seleccione...</option>
                  <option value="NY">New York</option>
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DE">Delaware</option>
                  <option value="DC">District Of Columbia</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="IA">Iowa</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="ME">Maine</option>
                  <option value="MD">Maryland</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MS">Mississippi</option>
                  <option value="MO">Missouri</option>
                  <option value="MT">Montana</option>
                  <option value="NE">Nebraska</option>
                  <option value="NV">Nevada</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>

                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VT">Vermont</option>
                  <option value="VA">Virginia</option>
                  <option value="WA">Washington</option>
                  <option value="WV">West Virginia</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WY">Wyoming</option>
                </select>
                {errorInputs.includes("state") ? (
                  <p className="cta-error-text">{error}</p>
                ) : (
                  ""
                )}
              </div>

              <div>
                <fieldset>
                  <legend>Estoy interesado en *</legend>

                  <div className="grid--checkbox">
                    <input type="checkbox" id="taxes" name="taxes" />
                    <label htmlFor="taxes">Taxes</label>
                  </div>
                  <div className="grid--checkbox">
                    <input
                      type="checkbox"
                      id="translation"
                      name="translation"
                    />
                    <label htmlFor="translation">Traducción</label>
                  </div>
                  <div className="grid--checkbox">
                    <input
                      type="checkbox"
                      id="inmigration"
                      name="inmigration"
                    />
                    <label htmlFor="inmigration">Tramite migratorio</label>
                  </div>
                  <div className="grid--checkbox">
                    <input type="checkbox" id="other" name="other" />
                    <label htmlFor="other">Otro servicio</label>
                  </div>
                </fieldset>
              </div>
              <div>
                <label htmlFor="comment">Comentario</label>
                <textarea
                  name="comment"
                  id="comment"
                  cols="50"
                  rows="5"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                ></textarea>
              </div>
              <button className="btn btn--form">Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
