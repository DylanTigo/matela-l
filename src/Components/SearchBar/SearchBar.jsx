import "bootstrap/dist/css/bootstrap.min.css";
import { LuSearch } from "react-icons/lu";

export function SearchBar() {
  return (
    <div className="inputSearchContainer bg-secondary">
      <input
        type="search"
        name="search"
        id="search"
        className="searchInput ps-3"
        placeholder="Que recherchiez-vous?"
      />
      <button type="button" className="searchBtn ms-1">
        <LuSearch />
      </button>
    </div>
  );
}
