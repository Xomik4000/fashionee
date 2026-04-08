function ColorFilter({ colors, selected, onToggleColor }) {
  return (
    <div className="sidebar-item">
      <h4 className="sidebar-title">Colors</h4>
      <div className="sidebar-content">
        <div className="colors">
          {colors.map((color) => {
            const id = `color-${color.toLowerCase()}`;
            const checked = selected.includes(color);

            return (
              <div className="color" key={color}>
                <input
                  type="checkbox"
                  className="color-checkbox"
                  id={id}
                  checked={checked}
                  onChange={() => onToggleColor(color)}
                />
                <label htmlFor={id} className="color-name">
                  {color}
                </label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ColorFilter;
