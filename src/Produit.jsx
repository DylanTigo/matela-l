/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import datas from "../product.json";

import img1 from "./assets/imgSofa/img1.jpg";
import img2 from "./assets/imgSofa/img2.jpg";
import img3 from "./assets/imgSofa/img3.jpg";
import img4 from "./assets/imgSofa/img4.jpg";

export default function Produit() {
  const params = useParams();
  const product =
    datas.products.find((product) => product.id === +params.id) || {};
  const imgUrl = "/assets/imgSofa";

  const [currentImg, setCurrentImg] = useState(img1);

  console.log(currentImg);
  function changeImg(img) {
    setCurrentImg(img);
  }
  return (
    <main>
      <section className="productDetail mb-5 ">
        <div className="imgSlider w-50">
          <div className="imgContainer">
            <img src={currentImg} className="currentImg w-100" alt="" />
            <div className="sliderBtn">
              <span className="leftBtn"></span>
              <span className="rightBtn"></span>
            </div>
          </div>
          <ul className="sliderImages list-unstyled d-flex gap-2">
            <li onClick={() => changeImg(img1)}>
              <img src={img1} alt="" />
            </li>
            <li onClick={() => changeImg(img2)}>
              <img src={img2} alt="" />
            </li>
            <li onClick={() => changeImg(img3)}>
              <img src={img3} alt="" />
            </li>
            <li onClick={() => changeImg(img4)}>
              <img src={img4} alt="" />
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
