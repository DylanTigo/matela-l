import { SearchBar } from "../SearchBar/SearchBar";
import { Logo } from "../Logo/Logo";
import { LuHeart, LuMenu, LuShoppingCart } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { NavIcon } from "../NavIcon/NavIcon";
import { Button } from "../Button/Button";

export function Header() {
  return (
    <header className="header container-fluid pt-1 mb-3">
      <div className="navbar">
        <Logo className=" navbar-brand" />
        <SearchBar />
        <nav className="navIconGroup">
          <NavIcon icon={<LuMenu />} />
          <NavIcon icon={<LuHeart />} />
          <NavIcon icon={<LuShoppingCart />} />
          <NavIcon icon={<CgProfile />} />
        </nav>
      </div>
      <div className="d-flex justify-content-center flex-wrap column-gap-3 row-gap-2">
        <Button content="Matelas" btnType="dropdown" />
        <Button content="Salle a manger" btnType="dropdown" />
        <Button content="Table" btnType="dropdown" />
        <Button content="Bureaux" btnType="dropdown" />
        <Button content="Lits" btnType="dropdown" />
        <Button content="equipement Mixtes" btnType="dropdown" />
        <div className=" d-inline">
          <Button content="Promotions" />
        </div>
      </div>
    </header>
  );
}
