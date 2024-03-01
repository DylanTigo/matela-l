/* eslint-disable react/no-unescaped-entities */
import { Button } from "./Components/Button/Button";
import { Slider } from "./Components/Slider/Slider";
import { LuArrowRight } from "react-icons/lu";
import { SearchBar } from "./Components/SearchBar/SearchBar";
import { Link } from "react-router-dom";

//image
import chaise from "./assets/chair.jpg";
import table from "./assets/table.jpg";
import sofa from "./assets/sofa.jpg";
import matella from "./assets/matella.jpg";
import img from "../src/assets/chair.jpg";
import promoImg1 from "../src/assets/promoImg1.jpg";
import promoImg2 from "../src/assets/promoImg2.jpg";
import promoImg from "./assets/promoImg.jpg";
import LandingCard from "./Components/Card/LandingCard";

export function Accueil() {
  return (
    <>
      <main className="container-fluid p-0 w-100">
        <section className="position-relative" id="hero">
          <Slider className="mb-1 w-100 z-0" />
          <div className="gradiant"></div>

          <div className="heroContainer">
            <h1 className=" display-6 ">Touver votre meuble parfait</h1>
            <p>
              Trouvez le meuble qui correspond à vos attentes. Nous vous
              proposons une large sélection de meubles pour tous les goûts et
              toutes les occasions.
            </p>
            <Link to={"/recherche"}>
              <Button btnType="primary">Rechercher un meuble</Button>
            </Link>
          </div>
        </section>
        <section
          id="nosProduits"
          className="container-fluid container-lg pt-5 pb-3 "
        >
          <h2 className="h1 text-center mb-3 ">Nos produits</h2>
          <div className="cardContainer row row-gap-3 ">
            <div className="col-md-6 col-12">
              <div className="card h-100 overflow-hidden">
                <img src={matella} alt="matella" />
                <button className="card-body">
                  <h5>Matellas</h5>
                  <LuArrowRight />
                </button>
              </div>
            </div>
            <div className=" col-md-6 col-12">
              <div className="card h-100 overflow-hidden">
                <img src={chaise} alt="Chaise" />
                <button className="card-body">
                  <h5 className="card-title">Chaises</h5>
                  <LuArrowRight />
                </button>
              </div>
            </div>
            <div className=" col-md-6 col-12">
              <div className="card h-100 overflow-hidden">
                <img src={sofa} alt="Sofa" />
                <button className="card-body">
                  <h5 className="card-title">Sofa</h5>
                  <LuArrowRight />
                </button>
              </div>
            </div>
            <div className=" col-md-6 col-12">
              <div className="card h-100 overflow-hidden">
                <img src={table} alt="table en verre" />
                <button className="card-body">
                  <h5 className="card-title">Table</h5>
                  <LuArrowRight />
                </button>
              </div>
            </div>
          </div>
          <div className=" d-flex justify-content-center mt-3">
            <Button
              className="mt-2"
              btnType="primary"
            >Voir plus d'equipement</Button>
          </div>
        </section>
        <section
          id="bestSeller"
          className="container-fluid pt-5 pb-3 bg-secondary w-100 p-2 p-md-4 "
        >
          <h2 className="h1 text-center mb-3 ">Best Sellers</h2>
          <div className=" d-flex justify-content-center align-items-center flex-wrap  gap-lg-3 gap-2 ">
            <LandingCard img={img} />
            <LandingCard img={img} />
            <LandingCard img={img} />
          </div>
        </section>
        <section
          id="promotion"
          className="container-fluid pt-5 pb-3 w-100 p-2 p-md-4 "
        >
          <h2 className="h1 text-center mb-3 ">Promotions</h2>
          <div className="row">
            <img
              className=" col-12 col-lg-6 img-fluid object-fit-cover "
              src={promoImg}
              alt="Best Deal"
            />
            <div className="col-12 col-lg-6 mt-0 mt-md-2 ">
              <div className=" col-12 d-flex justify-content-center gap-2 flex-sm-row  ">
                <LandingCard img={promoImg1} />
                <LandingCard img={promoImg2} />
              </div>
              <div className=" col-12 d-flex flex-row justify-content-center gap-2 mt-2 ">
                <LandingCard img={promoImg1} />
                <LandingCard img={promoImg2} />
              </div>
            </div>
          </div>
        </section>
        <section id="justForYou"></section>
        <section id="getInTouch" className="getInTouchContainer">
          <div className="containt m-5">
            <p className="h1 text-white">Rechercher maintenant!</p>
            <SearchBar />
          </div>
        </section>
      </main>
    </>
  );
}
