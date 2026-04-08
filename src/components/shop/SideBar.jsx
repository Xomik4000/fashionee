import SearchBar from "./SearchBar";
import Categories from "./Categories";
import PriceFilter from "./PriceFilter";
import ColorFilter from "./ColorFilter";
import ReviewedProducts from "./ReviewedProducts";
import SeasonSaleBanner from "./SeasonSaleBanner";
import useFilterDraft from "../../hooks/useFilterDraft";

function SideBar({ searchText, onSearchChange, filterOptions, onApply }) {
  const { draft, setCategory, setPriceMin, setPriceMax, toggleColor } =
    useFilterDraft();

  return (
    <aside className="sidebar">
      <SearchBar value={searchText} onChange={onSearchChange} />
      <Categories
        categories={filterOptions.categories}
        value={draft.category}
        onChange={setCategory}
      />
      <PriceFilter
        minPlaceholder={filterOptions.minPrice}
        maxPlaceholder={filterOptions.maxPrice}
        valueMin={draft.priceMin}
        valueMax={draft.priceMax}
        onChangeMin={setPriceMin}
        onChangeMax={setPriceMax}
      />
      <ColorFilter
        colors={filterOptions.colors}
        selected={draft.colors}
        onToggleColor={toggleColor}
      />
      <div className="sidebar-item">
        <div className="button-wrapper">
          <button className="button" type="button" onClick={() => onApply(draft)}>
            Apply Filter
          </button>
          <div className="vertical-line"></div>
        </div>
      </div>
      <ReviewedProducts />
      <SeasonSaleBanner />
    </aside>
  );
}

export default SideBar;