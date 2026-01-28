import { Search } from "lucide-react";
import "./searchbar.scss";

export default function SearchBar({ darkMode }: { darkMode: boolean }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        className={
          darkMode
            ? "search-bar__input search-bar__input--dark"
            : "search-bar__input search-bar__input--light"
        }
      />
      <Search
        className={
          darkMode
            ? "search-bar__icon search-bar__icon--dark"
            : "search-bar__icon search-bar__icon--light"
        }
        size={15}
        strokeWidth={4}
      />
    </div>
  );
}
