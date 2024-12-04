import React from "react";
import "./About.scss";
import Pimentel from "../../Img/Pimentel.jpg";

function About() {
  return (
    <div className="container-About">
      <div className="content-About">
        <div className="content-About-Inf">
          <h1>
            TÁ DIFÍCIL CONQUISTAR <br />
            <span>O CORPO DOS SEUS SONHOS?</span>
          </h1>
          <p>
            Chega de treinos complicados e sem resultados, imagine transformar o seu corpo com um plano de treino personalizado, adaptado ao seu ritmo
            e rotina, sem precisar abrir mão da sua qualidade de vida.
            <br />
            <br />
            Com meu método, vou te ajudar a perder peso, ganhar definição e conquistar o corpo que você sempre quis, de forma simples e eficiente.
          </p>

          <a href="https://api.whatsapp.com/send?phone=5585991151327&text=Ol%C3%A1,%20encontrei%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20planos.%20Voc%C3%AA%20poderia%20me%20fornecer%20mais%20informa%C3%A7%C3%B5es?">
            QUERO MUDAR DE VIDA!
          </a>
        </div>

        <div className="content-About-Logo">
          <img src={Pimentel} alt="Logo" />
        </div>
      </div>
    </div>
  );
}

export default About;
