import React from "react";
import "./Whats.scss";
import Icone from "../../Img/whatsapp.svg";

function Whats() {
  return (
    <>
      <a
        href="https://api.whatsapp.com/send?phone=5585991151327&text=Ol%C3%A1,%20encontrei%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20planos.%20Voc%C3%AA%20poderia%20me%20fornecer%20mais%20informa%C3%A7%C3%B5es?"
        className="icon-whats"
      >
        <img src={Icone} alt="Icone do  Whats" />
      </a>
    </>
  );
}

export default Whats;
