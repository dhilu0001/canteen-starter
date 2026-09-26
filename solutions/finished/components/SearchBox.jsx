// FILE 5 — finished
export default function SearchBox({ value, onChange }) {
  return (
    <div className="search-row">
      <input
        id="search"
        className="search"
        type="text"
        placeholder="Search dishes..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
