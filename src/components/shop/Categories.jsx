function Categories({ categories, value, onChange }) {
  return (
    <div className="sidebar-item">
      <h4 className="sidebar-title">Categories</h4>
      <div className="sidebar-content">
        <ul className="custom-list">
          {categories.map((c) => (
            <li
              key={c}
              className={c === value ? "item active" : "item"}
              onClick={() => onChange(c)}
              style={{ cursor: "pointer" }}
            >
              {c}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Categories;
