// import { Button } from "./Components/Button/Button"
import { Route, Routes } from "react-router-dom";
import { Accueil } from "./Accueil";
import { Rechercher } from "./Recherche";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/recherche" element={<Rechercher />} />
    </Routes>
  );
}

export default App;
