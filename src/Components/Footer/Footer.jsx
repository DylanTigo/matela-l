import { Logo } from "../Logo/Logo";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container1 d-flex">
        <Logo height="auto"/>
        <div className="newletterContainer">
          <h6>
            Recevrez les dernieres promotions en exclisivite en soucrivant a
            notre Newsletter !
          </h6>
          <div className="inputContainer">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Entrer votre adresse Email"
              className="rounded-start-pill ps-4 pe-2 outline flex-grow-1 "
            />
            <button
              type="submit"
              className=" d-flex justify-content-between align-items-center  py-2 px-3 bg-primary text-white rounded-end-pill border-0"
            >
              Souscrire
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
