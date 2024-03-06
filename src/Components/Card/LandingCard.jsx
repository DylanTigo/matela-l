/* eslint-disable react/prop-types */
import { getRatingStars } from "../../utils";
import { Link } from "react-router-dom";

export default function LandingCard({ product, img }) {
  const ratingStars = getRatingStars(product);

  return (
    <article className="landingArticle col-6">
      <Link to={`/produit/${product.id}`}>
        <img
          src={img}
          alt=""
          className=" img-fluid object-fit-cover align-self-stretch"
        />
        <h5>{product.name}</h5>
        <div className=" d-flex justify-content-between align-items-center w-100 px-">
          <div className="starGroup">{ratingStars}</div>
          <p className="price fs-4 fw-bold m-0">350$</p>
        </div>
      </Link>
    </article>
  );
}
