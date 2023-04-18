import { useRef, useState } from "react";
import { MdEmail } from "react-icons/md";
import { SiTelegram } from "react-icons/si";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import "./Contact.css";

function Contact() {
  const form = useRef();
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [formMessage, setFormMessage] = useState(null);

  const sendMessage = (e) => {
    e.preventDefault();
    if (!nombre || !email || !mensaje) {
      return setFormMessage(
        "Debes rellenar todos los campos para enviarme un mensaje"
      );
    }
    emailjs
      .sendForm(
        import.meta.env.VITE_YOUR_SERVICE_ID,
        import.meta.env.VITE_YOUR_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          setFormMessage(`${result.text}, mensaje enviado.`);
          setNombre("");
          setEmail("");
          setMensaje("");
        },
        (error) => {
          setFormMessage(
            "Ops, ha habido un error al enviar el mensaje, por favor, inténtalo de nuevo más tarde."
          );
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contacto">
      <h4>Contacto</h4>
      <h2>Formas de contactar conmigo</h2>
      <div className="contact-container">
        <div className="mail-Telegram-container">
          <h5><MdEmail /></h5>
          <p>apleon89@gmail.com</p>
          <Link to={"mailto:apleon89@gmail.com"} target="_blank">
            <button className="btn">Envíame un correo</button>
          </Link>
        </div>
        <div className="mail-Telegram-container">
          <h5><SiTelegram /></h5>
          <p>
            Telegram: <span>@Apleon89</span>
          </p>
          <Link to={"https://t.me/Apleon89"} target="_blank">
            <button className="btn">Envíame un mensaje</button>
          </Link>
        </div>
        <hr />
        <form ref={form} onSubmit={sendMessage} id="form-container">
          <input
            type="text"
            value={nombre}
            name="user_name"
            placeholder="Nombre"
            onChange={(e) => setNombre(e.target.value)}
          />
          <input
            type="email"
            name="user_email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            cols="30"
            rows="10"
            name="user_message"
            value={mensaje}
            placeholder="Mensaje"
            onChange={(e) => setMensaje(e.target.value)}
          ></textarea>
          {formMessage && <h3>{formMessage}</h3>}
          <button className="btn btn2">Enviar</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
