/* eslint-disable react/prop-types */
import { FullStar } from "../Star/FullStar";
import { HalfStar } from "../Star/HalfStar";


export default function LandingCard({productDetail, img}) {
  return (
    <article className="landingArticle">
      <a href={productDetail}>
        <img
          src={img}
          alt=""
          className=" img-fluid object-fit-cover align-self-stretch"
        />
        <h5>Chaise minimaliste et moderne</h5>
        <div className=" d-flex justify-content-between align-items-center w-100 px-">
          <div className="starGroup">
            <FullStar />
            <FullStar />
            <FullStar />
            <FullStar />
            <HalfStar />
          </div>
          <p className="price fs-4 fw-bold m-0">350$</p>
        </div>
      </a>
    </article>
  )
}
