import Container from "../Container/Container";
import "./header.scss";
import logo_lexa from "../../assets/logo-lexa.png";
import logo from "../../assets/logo.png";
import { TextAlignJustify } from "lucide-react";
import SearchBar from "./SearchBar/SearchBar";
import LanguageSelector from "./LanguageSelector/LanguageSelector";
import Fullscreen from "./Fullscreen/Fullscreen";
import Notification from "./Notification/Notification";
import UserAvatar from "./UserAvatar/UserAvatar";
import Setting from "./Settings/Setting";

export default function Header() {
  return (
    <header className="header">
      <div className="header__fluid header__fluid--top">
        <Container>
          <div className="header__fluid">
            <div className="header__logo-lexa">
              <img src={logo_lexa} alt="Logo-lexa" className="logo__lexa" />
              <img src={logo} alt="Logo" className="logo" />
              <TextAlignJustify className="menu" />
            </div>
            <div className="header__controls">
              <SearchBar />
              <div className="header__actions">
                <LanguageSelector />
                <Fullscreen />
                <Notification />
                <UserAvatar />
                <Setting />
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="heder__main"></div>
      <div className="Header__nav"></div>
    </header>
  );
}
