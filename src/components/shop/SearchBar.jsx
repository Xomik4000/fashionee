import searchIcon from "../../assets/icons/search.svg";

function SearchBar({ value, onChange }) {
  return (
    <div className="search">
      <label>
        <input
          type="text"
          placeholder="Search"
          className="input search-row"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <img src={searchIcon} alt="search" className="search-icon" />
      </label>
    </div>
  );
}

export default SearchBar;
