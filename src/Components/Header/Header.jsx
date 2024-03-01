/* eslint-disable react/prop-types */
import { SearchBar } from "../SearchBar/SearchBar";
import { Logo } from "../Logo/Logo";
import { LuHeart, LuMenu, LuShoppingCart } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { NavIcon } from "../NavIcon/NavIcon";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="header container-fluid pt-1 mb-3 flex-nowrap flex-md-wrap">
      <div className="navbar">
        <Logo className=" navbar-brand" />
        <SearchBar />
        <nav className="navIconGroup ">
          <NavIcon icon={<LuMenu />} />
          <NavIcon icon={<LuHeart />} />
          <NavIcon icon={<LuShoppingCart />} />
          <NavIcon icon={<CgProfile />} />
        </nav>
      </div>
      <div className="d-flex justify-content-center flex-wrap column-gap-3 row-gap-2">
        <Link></Link>
        <Button btnType="dropdown">Matela</Button>
        <Button btnType="dropdown">Salle a manger</Button>
        <Button btnType="dropdown">Table</Button>
        <Button btnType="dropdown">Bureau</Button>
        <Button btnType="dropdown">Lits</Button>
        <Button btnType="dropdown">Equipements Mixtes</Button>
        <div className=" d-inline">
          <Button>Promotions</Button>
        </div>
      </div>
    </header>
  );
}
