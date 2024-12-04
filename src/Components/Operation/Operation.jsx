import React from "react";
import "./Operation.scss";
import Pimentel from "../../Img/Pimentel.jpg";
function Operation() {
  return (
    <div className="container-Operation">
      <div className="content-Operation">
        <div className="content-Operation-Logo">
          <img src={Pimentel} alt="Logo" />
        </div>
        <div className="content-Operation-Inf">
          <h1>
            CONSULTORIA <span>PERSONALIZADA</span>
          </h1>
          <p>
            Meu nome é André Matheus. Sou personal trainer com formação sólida em Educação Física e especializações Hipertrofia e Emagrecimento.
            Atualmente, estou cursando uma pós-graduação em Fisiologia do Exercício, sempre em busca de aprimorar meus conhecimentos para oferecer
            treinamentos personalizados e eficazes. Ao longo da minha carreira, tive a oportunidade de ajudar centenas de pessoas a atingirem seus
            objetivos, respeitando as particularidades e desafios de cada um.
          </p>
          <br />
          <p>
            Acredito que o treino ideal não precisa ser difícil ou desmotivador. Minha abordagem é fundamentada em ciência e experiência, oferecendo
            treinos dinâmicos e equilibrados, adaptados às necessidades de cada cliente. Para mim, o sucesso vem com constância, motivação e a
            confiança de que cada treino está te aproximando da sua melhor versão.
          </p>

          <a href="https://api.whatsapp.com/send?phone=5585991151327&text=Ol%C3%A1,%20encontrei%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20planos.%20Voc%C3%AA%20poderia%20me%20fornecer%20mais%20informa%C3%A7%C3%B5es?">
            QUERO MUDAR DE VIDA!
          </a>
        </div>
      </div>
    </div>
  );
}

export default Operation;
