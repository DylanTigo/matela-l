import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
import { Accordion } from "react-bootstrap";
import datas from "../product.json"
import { ProductCard } from "./Components/Card/ProductCard";

export function Rechercher() {

  const productList = datas.products
  return (
    <>
      <Header />
      <div className=" d-flex">
        <aside className="filter d-none  d-md-inline-block">
          <p className=" fs-5 ms-3 ">Filtres</p>
          <Accordion defaultActiveKey={["0"]} alwaysOpen>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Prix</Accordion.Header>
              <Accordion.Body>
                <div className="inputGroup">
                  <label htmlFor="minPrice">Price minimum: </label>
                  <input
                    type="range"
                    name="minPrice"
                    id="minPrive"
                    min="0"
                    max="10000"
                  />
                </div>
                <div className="inputGroup">
                  <label htmlFor="maxPrice">Prix maximum: </label>
                  <input
                    type="range"
                    name="maxPrice"
                    id="maxPrive"
                    min="0"
                    max="10000"
                  />
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Disponibilite</Accordion.Header>
              <Accordion.Body></Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Marque</Accordion.Header>
              <Accordion.Body></Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Note</Accordion.Header>
              <Accordion.Body></Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>Note</Accordion.Header>
              <Accordion.Body></Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>Matiere</Accordion.Header>
              <Accordion.Body></Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </aside>

        <main className=" d-inline-block w-100 mb-3 rounded" >
          <div className=" d-flex justify-content-between">
            <div className="resultat">
              145 resultatas trouver pour:{" "}
              <span className=" fw-bold">Sofa</span>
            </div>
            <div className=" d-flex align-items-center ">
              <p className=" m-0 me-3">Trier par: </p>
              <select
                className="form-select w-auto shadow-none border-dark rounded-5"
                aria-label="
          Select one option"
              >
                <option value="1">Pertinence</option>
                <option value="2">Note</option>
                <option value="3">Prix : plus chere</option>
                <option value="4">Prix : moins chere</option>
              </select>
            </div>
          </div>
          <div className="cardContainer mt-3 px-3 py-4 gap-3">{
            productList.map((product, index) => (
              <ProductCard product={product} key={product.name  + index} />
            ))
          }</div>
        </main>
      </div>
      <Footer />
    </>
  );
}
