import type { Category } from "../../types/campus-event";

interface EventFilterProps {
  searchText: string;
  onSearchChange: (value: string) => void;
  selectedCategory: Category | "";
  onCategoryChange: (value: Category | "") => void;
  categories: string[];
}

function EventFilter({
  searchText,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  categories,
}: EventFilterProps) {
  return (
    <div
      className="filters-container"
      style={{
        margin: "1rem 0",
        display: "flex",
        gap: "1rem",
        flexWrap: "wrap",
      }}
    >
      <input
        type="search"
        placeholder="Etkinlik ara (başlık veya açıklama)..."
        value={searchText}
        onChange={(e) => onSearchChange(e.target.value)}
        style={{ padding: "0.5rem", minWidth: "250px" }}
      />

      <select
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value as Category | "")}
        style={{ padding: "0.5rem" }}
      >
        <option value="">Tüm Kategoriler</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
}

export default EventFilter;