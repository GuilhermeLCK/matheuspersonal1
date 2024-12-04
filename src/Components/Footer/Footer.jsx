import React from "react";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

import "./Footer.scss";

function Footer() {
  return (
    <div className="container-Footer">
      <div className="section-localizacao">
        <p>Siga-nos nas redes sociais</p>
        <div className="section-localizacao-link">
          {/* <a href="#" target="_blank">
            <FaFacebook size={22} />
          </a> */}

          <a href="https://www.instagram.com/matheus.personal1/" target="_blank">
            <FaInstagram size={22} />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5585991151327&text=Ol%C3%A1,%20encontrei%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20planos.%20Voc%C3%AA%20poderia%20me%20fornecer%20mais%20informa%C3%A7%C3%B5es?"
            target="_blank"
          >
            <FaWhatsapp size={22} />
          </a>
        </div>
      </div>
      <h3>
        &copy; 2024 <a href="https://nex-code.vercel.app">SwiftlyDev</a>. Todos os direitos reservados.
      </h3>
    </div>
  );
}

export default Footer;
