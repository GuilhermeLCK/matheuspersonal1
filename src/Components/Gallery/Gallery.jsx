import { React } from "react";
import "./Gallery.scss";

import Resultado1 from "../../Img/Resultado1.jpeg";
import Resultado2 from "../../Img/Resultado2.jpeg";
import Resultado3 from "../../Img/Resultado3.jpeg";
import Resultado4 from "../../Img/Resultado4.jpeg";

function Gallery() {
  const imgList = [Resultado1, Resultado2, Resultado3, Resultado4];

  return (
    <div className="Container-Gallery">
      <h1>
        Veja algumas <span>Transformaçães</span>
      </h1>
      <div className="Content-Gallery">
        {imgList.map((imageUrl, index) => (
          <img className="Gallery-Img" key={index} src={imageUrl} alt={`Imagem ${index}`} />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
