import "./AboutMe.css";

function AboutMe() {
  return (
    <section id="about-me">
      <h4>SOBRE MÍ</h4>
      <h2>Quién soy</h2>
      <p>
        Soy un desarrollador web Full Stack Junior con experiencia en el campo
        del sonido y la ingeniería acústica, aunque siempre me ha apasionado la
        tecnología en general. Me considero una persona responsable y adaptable
        a nuevos entornos, con una gran capacidad de aprendizaje y un fuerte
        deseo de mejorar constantemente para ofrecer el máximo valor en
        cualquier proyecto al que me dedique.
      </p>
      <a href="#contacto">
        <button className="btn" id="btn-contacto-aboutMe">¡Hablemos!</button>
      </a>
    </section>
  );
}

export default AboutMe;
