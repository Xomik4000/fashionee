function PriceFilter({
  minPlaceholder,
  maxPlaceholder,
  valueMin,
  valueMax,
  onChangeMin,
  onChangeMax,
}) {
  return (
    <div className="sidebar-item">
      <h4 className="sidebar-title">Price</h4>
      <div className="sidebar-content">
        <div className="price-bar">
          <input
            type="text"
            placeholder={String(minPlaceholder)}
            className="input"
            value={valueMin}
            onChange={(e) => onChangeMin(e.target.value)}
          />
          <input
            type="text"
            placeholder={String(maxPlaceholder)}
            className="input"
            value={valueMax}
            onChange={(e) => onChangeMax(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default PriceFilter;
