import { SORT_OPTIONS } from "../../constants";

function Sort({ value, onChange }) {
  return (
    <div className="sort">
      <select
        className="input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {SORT_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Sort;