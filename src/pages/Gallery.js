import React, { useState } from "react";
import { TfiClose } from "react-icons/tfi";
import productImg1 from "../images/Dekorace tac-2.jpg";
import productImg2 from "../images/Dekorace venec1-1.png";
import productImg3 from "../images/Dekorace-dyne-2.jpg";
import productImg4 from "../images/Dekorace-dyne.jpg";
import productImg5 from "../images/Dekorace-kulac (2).jpg";
import productImg6 from "../images/Dekorace-kvetina-zima.jpg";
import productImg7 from "../images/Dekorace-kvetinac-2.png";
import productImg8 from "../images/Dekorace-kvetinac-svetelny.jpg";
import productImg9 from "../images/Dekorace-kvetinac-svetelny2.jpg";
import productImg10 from "../images/Dekorace-kvetinac-zima.jpg";
import productImg11 from "../images/Dekorace-podzim-hromadná.jpg";
import productImg12 from "../images/Dekorace-podzim-kvetinac.jpg";
import productImg13 from "../images/Dekorace-sisky-kvetinace-zima.jpg";
import productImg14 from "../images/Dekorace-stromek-2.png";
import productImg15 from "../images/Dekorace-stromek-sisky-zima.jpg";
import productImg16 from "../images/Dekorace-stromek-zima.jpg";
import productImg17 from "../images/Dekorace-svicen-zima.jpg";
import productImg18 from "../images/Dekorace-tac-1.png";
import productImg19 from "../images/Dekorace-tac.jpg";
import productImg20 from "../images/Dekorace-vazy-zima.jpg";
import productImg21 from "../images/Dekorace-vazy2-zima.jpg";
import productImg22 from "../images/Dekorace-venec-4.jpg";
import productImg23 from "../images/Dekorace-venec-bily-zima.jpg";
import productImg24 from "../images/Dekorace-venec-podzim.jpg";
import productImg25 from "../images/Dekorace-venec-zima.jpg";
import productImg26 from "../images/Dekorace-venec2-1.png";
import productImg27 from "../images/Dekorace-venec3-2.png";
import productImg28 from "../images/IMG-20221107-WA0006.jpg";
import productImg29 from "../images/IMG-20221112-WA0000.jpg";
import productImg30 from "../images/IMG-20221112-WA0001.jpg";
import productImg31 from "../images/IMG-20221112-WA0002.jpg";
import productImg32 from "../images/IMG-20221112-WA0003.jpg";
import productImg33 from "../images/IMG-20221112-WA0004.jpg";
import productImg34 from "../images/IMG-20221112-WA0005.jpg";

const Gallery = () => {
  let data = [
    {
      id: 1,
      imgSrc: productImg1,
    },
    {
      id: 2,
      imgSrc: productImg2,
    },
    {
      id: 3,
      imgSrc: productImg3,
    },
    {
      id: 4,
      imgSrc: productImg4,
    },
    {
      id: 5,
      imgSrc: productImg5,
    },
    {
      id: 6,
      imgSrc: productImg6,
    },
    {
      id: 7,
      imgSrc: productImg7,
    },
    {
      id: 8,
      imgSrc: productImg8,
    },
    {
      id: 9,
      imgSrc: productImg9,
    },
    {
      id: 10,
      imgSrc: productImg10,
    },
    {
      id: 11,
      imgSrc: productImg11,
    },
    {
      id: 12,
      imgSrc: productImg12,
    },
    {
      id: 13,
      imgSrc: productImg13,
    },
    {
      id: 14,
      imgSrc: productImg14,
    },
    {
      id: 15,
      imgSrc: productImg15,
    },
    {
      id: 16,
      imgSrc: productImg16,
    },
    {
      id: 17,
      imgSrc: productImg17,
    },
    {
      id: 18,
      imgSrc: productImg18,
    },
    {
      id: 19,
      imgSrc: productImg19,
    },
    {
      id: 20,
      imgSrc: productImg20,
    },
    {
      id: 21,
      imgSrc: productImg21,
    },
    {
      id: 22,
      imgSrc: productImg22,
    },
    {
      id: 23,
      imgSrc: productImg23,
    },
    {
      id: 24,
      imgSrc: productImg24,
    },
    {
      id: 25,
      imgSrc: productImg25,
    },
    {
      id: 26,
      imgSrc: productImg26,
    },
    {
      id: 27,
      imgSrc: productImg27,
    },
    {
      id: 28,
      imgSrc: productImg28,
    },
    {
      id: 29,
      imgSrc: productImg29,
    },
    {
      id: 30,
      imgSrc: productImg30,
    },
    {
      id: 31,
      imgSrc: productImg31,
    },
    {
      id: 32,
      imgSrc: productImg32,
    },
    {
      id: 33,
      imgSrc: productImg33,
    },
    {
      id: 34,
      imgSrc: productImg34,
    },
  ];

  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");
  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };
  return (
    <>
      <div className="gallery-bg"></div>
      <div className={model ? "model open" : "model"}>
        <img src={tempImgSrc} />
        <TfiClose onClick={() => setModel(false)} />
      </div>
      <div className="gallery">
        {data.map((item, index) => {
          return (
            <div
              className="pictures"
              key={index}
              onClick={() => getImg(item.imgSrc)}
            >
              <img src={item.imgSrc} style={{ width: "100%" }} />
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Gallery;
