/* eslint-disable react/prop-types */
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { LuSearch } from "react-icons/lu";

export function SearchBar({onSearch}) {

  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };
  return (
    <div className="inputSearchContainer bg-secondary">
      <input
        type="search"
        name="search"
        id="search"
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        className="searchInput ps-3"
        placeholder="Que recherchiez-vous?"
      />
      <button type="button" onClick={handleSearch} className="searchBtn ms-1">
        <LuSearch />
      </button>
    </div>
  );
}
