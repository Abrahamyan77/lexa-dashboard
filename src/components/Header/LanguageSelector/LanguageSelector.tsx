import { ChevronDown } from "lucide-react";
import "./languageselector.scss";
import flag from "../../../assets/us.jpg";

export default function LanguageSelector() {
  return (
    <div className="language-selector">
      <button className="language-selector__button">
        <span className="language-selector__flag">
          <img src={flag} alt="US Flag" className="language-selector__img" />
        </span>
        <span className="language-selector__text">English</span>
        <ChevronDown size={18} className="language-selector__icon" />
      </button>
    </div>
  );
}
