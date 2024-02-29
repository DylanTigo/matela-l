/* eslint-disable react/prop-types */
import defaultImg from "../../assets/defaultImg.png";
import s from "./style.module.css";
import { Link } from "react-router-dom";
import {getRatingStars, showCurrentPrice, disponibility} from "../../utils.jsx";

export function ProductCard({ product }) {
  
  const [color, dipoInfo] = disponibility();

  const ratingStars = getRatingStars(product);
  const currentPrice = showCurrentPrice(product); 

  return (
    <article className="landingArticle w-auto h-auto">
      <Link to={"/produit/"+ product.name} style={{textDecoration: "none", color: "inherit"}} href={product.id}>
        <img
          src={product.photos[0] ? product.photos[0] : defaultImg}
          alt={`Image de ${product.name}`}
          className="img-fluid object-fit-cover"
        />
        <div className="cardBody d-flex flex-column  justify-content-between gap-2 px-2 py-3 ">
          <div>
            <h5>{product.name}</h5>
            <p className="text-capitalize m-0">{product.brand}</p>
          </div>

          {/* Affichages du rating */}
          <div className=" d-flex justify-content-start align-items-end w-100">
            <div className="starGroup">
              {ratingStars}{" "}
              <span className={s.avis}>
                ({Math.trunc(Math.random() * 50)} avis)
              </span>
            </div>
          </div>

          {/* Affichage du prix */}
          <div className="">
            <span className={s.price}>${currentPrice}</span>
            {product.promotion && (
              <span className="text-decoration-line-through">
                ${product.price}
              </span>
            )}
          </div>

          {/* Disponnibilites */}
          <div className=" d-flex gap-2 align-items-center ">
            <span
              style={{ backgroundColor: color, width: 15, height: 15 }}
              className=" rounded-5 "
            ></span>
            <span>{dipoInfo}</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
