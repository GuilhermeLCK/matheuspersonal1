import React from "react";
import { FaCheck } from "react-icons/fa";

import "./Plans.scss";

function Plans() {
  return (
    <div className="container-Plans" id="Planos">
      <h1>
        Conheça meus <span>Planos</span>
      </h1>
      <span className="span-liner"></span>

      <div className="container-Plans-sections">
        <div className="container-Plans-section">
          <h2>
            R$300 <span>ou 10x35</span>
          </h2>
          <p className="trainer-tag">PLANO BIMESTRAL</p>
          <p className="trainer-plans">
            Acompanhamento personalizado por <strong>2 meses</strong>, com foco em resultados rápidos
          </p>
          <p className="trainer-plans">
            Acesso completo à <strong>plataforma de treino</strong>, para treinar com flexibilidade
          </p>
          <p className="trainer-plans">
            Suporte dedicado via <strong>WhatsApp</strong>, sempre à disposição para te ajudar
          </p>
          <p className="trainer-plans">
            Feedback contínuo para otimizar seu desempenho: <strong>quinzenal ou mensal</strong>
          </p>
          <p className="trainer-plans off">
            Receba uma <strong>camiseta personalizada</strong> como parte do seu plano
          </p>
          <p className="trainer-plans off">
            Desconto de <strong>20%</strong> com nosso nutricionista parceiro para otimizar seus resultados
          </p>
        </div>
        <div className="container-Plans-section updonw">
          <h2>
            R$1500 <span>ou 10x165</span>
          </h2>
          <p className="trainer-tag">PLANO ANUAL</p>
          <p className="trainer-plans">
            Acompanhamento personalizado por <strong>12 meses</strong> para resultados consistentes
          </p>
          <p className="trainer-plans">
            Treinamento exclusivo disponível no seu <strong>celular</strong>, para treinar quando e onde quiser
          </p>
          <p className="trainer-plans">
            Suporte dedicado via <strong>WhatsApp</strong>, pronto para ajudar a qualquer hora
          </p>
          <p className="trainer-plans">
            Feedback contínuo para garantir que você está no caminho certo: <strong>quinzenal ou mensal</strong>
          </p>
          <p className="trainer-plans">
            Receba uma <strong>camiseta personalizada</strong> como parte do seu plano
          </p>
          <p className="trainer-plans">
            Desconto de <strong>20%</strong> com nosso nutricionista parceiro para otimizar seus resultados
          </p>
        </div>
        <div className="container-Plans-section">
          <h2>
            R$750 <span>ou 10x80</span>
          </h2>
          <p className="trainer-tag">PLANO SEMESTRAL</p>
          <p className="trainer-plans">
            Acompanhamento personalizado por <strong>6 meses</strong>, garantindo progresso contínuo
          </p>
          <p className="trainer-plans">
            Treinamento exclusivo no seu <strong>celular</strong>, para que você treine onde e quando preferir
          </p>
          <p className="trainer-plans">
            Suporte dedicado via <strong>WhatsApp</strong>, sempre disponível para tirar dúvidas e oferecer orientação
          </p>
          <p className="trainer-plans">
            Feedback constante para garantir que você esteja atingindo seus objetivos: <strong>quinzenal ou mensal</strong>
          </p>

          <p className="trainer-plans off">
            Receba uma <strong>camiseta personalizada</strong> como parte do seu plano
          </p>
          <p className="trainer-plans off">
            Desconto de <strong>20%</strong> com nosso nutricionista parceiro para otimizar seus resultados
          </p>
        </div>
      </div>

      <a href="https://api.whatsapp.com/send?phone=5585991151327&text=Ol%C3%A1,%20encontrei%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20planos.%20Voc%C3%AA%20poderia%20me%20fornecer%20mais%20informa%C3%A7%C3%B5es?">
        ESCOLHER UM PLANO
      </a>
    </div>
  );
}

export default Plans;
