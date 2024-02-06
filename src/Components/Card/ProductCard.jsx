/* eslint-disable react/prop-types */
import { FullStar } from "../Star/FullStar";
import { HalfStar } from "../Star/HalfStar";
import { EmptyStar } from "../Star/EmptyStar";
import promotionPourcentage from "../../utils";
import defaultImg from "../../assets/defaultImg.png";
import s from "./style.module.css";

export function ProductCard({ product }) {
  const disponibility = () => {
    let isAvailable = Math.trunc(Math.random() * 4);
    if (isAvailable) {
      return ["#66E264", "En stock"];
    }
    return ["#E7A05E", "Bientot disponible"];
  };
  const [color, dipoInfo] = disponibility();

  const stars = [];
  const nbrFullstar = Math.floor(product.rating);
  const nbrEmptystar = 5 - Math.ceil(product.rating);
  const nbrHalfstar = 5 - nbrEmptystar - nbrFullstar;

  for (let i = 0; i < nbrFullstar; i++) {
    stars.push(<FullStar key={"Fullstar" + i} />);
  }
  if (nbrHalfstar > 0) {
    stars.push(<HalfStar key="HalfStar" />);
  }
  for (let i = 0; i < nbrEmptystar; i++) {
    stars.push(<EmptyStar key={"EmptyStar" + i} />);
  }
  function showCurrentPrice() {
    let currentPrice;
    if (product.promotion === true) {
      currentPrice = product.price - product.price * promotionPourcentage;
    } else {
      currentPrice = product.price;
    }
    return parseFloat(currentPrice.toFixed(2));
  }

  return (
    <article className="landingArticle w-auto ">
      <a href={product.id}>
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
              {stars}{" "}
              <span className={s.avis}>
                ({Math.trunc(Math.random() * 50)} avis)
              </span>
            </div>
          </div>

          {/* Affichage du prix */}
          <div className="">
            <span className={s.price}>${showCurrentPrice()}</span>
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
      </a>
    </article>
  );
}
