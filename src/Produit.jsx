/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import datas from "../product.json";
import { Link } from "react-router-dom";
import { ProductCard } from "./Components/Card/ProductCard";
import { getRatingStars, showCurrentPrice, disponibility } from "./utils";

import img1 from "./assets/imgSofa/img1.jpg";
import img2 from "./assets/imgSofa/img2.jpg";
import img3 from "./assets/imgSofa/img3.jpg";
import img4 from "./assets/imgSofa/Img4.jpg"
import favorite from "./assets/favorite.svg";
import { LuShoppingCart } from "react-icons/lu";

export default function Produit() {
  const params = useParams();
  const product =
    datas.products.find((product) => product.id === +params.id) || {};

  const [currentImg, setCurrentImg] = useState(img1);
  let recommendationList = datas.products.filter(
    (prod) => prod.type === product.type || prod.brand == product.brand
  );
  recommendationList = recommendationList.filter(
    (prod) => prod.id !== product.id
  );

  console.log(recommendationList);

  const [color, dispoInfo] = disponibility();
  function changeImg(img) {
    setCurrentImg(img);
  }
  return (
    <main className="  ">
      <section className="productDetail mb-5 mx-3 d-flex flex-column flex-md-row ">
        <div className="imgSliderP">
          <div className="mainImg">
            <img src={currentImg} className="currentImg img-fluid " alt="" />
            <div className="sliderBtn">
              <span className="leftBtn"></span>
              <span className="rightBtn"></span>
            </div>
          </div>
          <ul className="sliderImage list-unstyled gap-2">
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
        <div className="detailContainer">
          <div className="w-75 mx-auto d-flex flex-column gap-3 details">
            <h2 className=" h2 d-flex justify-content-between align-items-center ">
              {product.name}{" "}
              <span className="favorite">
                <img src={favorite} alt="favorite icon" />
              </span>
            </h2>
            <div>
              <div className="description m-1">
                <strong>Description : </strong>
                {product.description}
              </div>
              <div className="marque">
                <strong>Marque : </strong>
                {product.brand}
              </div>
            </div>
            {product.promotion ? (
              <div className="h2">
                {" "}
                {showCurrentPrice(product)}{" "}
                <span className=" fs-6 text-decoration-line-through ">
                  {product.price}
                </span>
              </div>
            ) : (
              <div className="h2">{product.price} </div>
            )}

            <div className="rating">
              {getRatingStars(product)}
              <span className=" text-decoration-underline ms-3 ">
                {product.comment.length} Commentaires
              </span>
            </div>

            <div className=" d-flex gap-2 align-items-center">
              <span
                style={{ backgroundColor: color, width: 15, height: 15 }}
                className=" rounded-5 "
              ></span>
              <span>{dispoInfo}</span>
            </div>

            <div className="colorCotainer">
              <div className=" mb-2 ">Couleurs</div>
              <div className="colors">
                <button className="couleur selected"></button>
                <button className="couleur"></button>
                <button className="couleur"></button>
                <button className="couleur"></button>
              </div>
            </div>

            <button className="addProductBtn mt-3 d-flex justify-content-center gap-2 p-2  border-0 ">
              Ajouter au panier{" "}
              <span>
                <LuShoppingCart />
              </span>
            </button>
          </div>
        </div>
      </section>
      <section className="recommendation bg-secondary p-4">
        <h2 className="mb-2">Vous pourriez également aimer</h2>
        <div className="recommendationList d-flex gap-3 overflow-x-scroll ">
          {recommendationList.length ? (
            recommendationList?.map((prod) => (
              <ProductCard product={prod} key={prod.id} />
            ))
          ) : (
            <p className=" text-center flex-grow-1 my-5 ">
              Pas de produit trouvé pour cette recherche
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
