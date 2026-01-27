import { Search } from "lucide-react";
import "./searchbar.scss";

export default function SearchBar() {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        className="search-bar__input"
      />
      <Search className="search-bar__icon" size={15} strokeWidth={4} />
    </div>
  );
}
