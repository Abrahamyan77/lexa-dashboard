import { ChevronDown } from "lucide-react";
import "./languageselector.scss";
import flag from "../../../assets/us.jpg";

export default function LanguageSelector({ darkMode }: { darkMode: boolean }) {
  return (
    <div className="language-selector">
      <button className="language-selector__button">
        <span className="language-selector__flag">
          <img src={flag} alt="US Flag" className="language-selector__img" />
        </span>
        <span
          className={
            darkMode
              ? "language-selector__text language-selector__text--dark"
              : "language-selector__text language-selector__text--light"
          }
        >
          English
        </span>
        <ChevronDown
          size={18}
          className={
            darkMode
              ? "language-selector__icon language-selector__icon--dark"
              : "language-selector__icon language-selector__icon--light"
          }
        />
      </button>
    </div>
  );
}
