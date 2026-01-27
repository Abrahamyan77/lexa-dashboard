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
import HeaderMain from "./HeaderMain/HeaderMain";
import HeaderNav from "./HeaderNav/HeaderNav";
import MobileMenu from "./MobileMenu/MobileMenu";
import SettingsPanel from "./SettingsPanel/SettingsPanel";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSettingsPanelOpen, setIsSettingsPanelOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSettingsPanel = () => {
    setIsSettingsPanelOpen(!isSettingsPanelOpen);
  };

  return (
    <header className="header">
      <div className="header__fluid header__fluid--top">
        <Container>
          <div className="header__fluid">
            <div className="header__logo-lexa">
              <img src={logo_lexa} alt="Logo-lexa" className="logo__lexa" />
              <img src={logo} alt="Logo" className="logo" />
              <button
                className="menu-toggle"
                onClick={toggleMobileMenu}
                aria-label="Toggle menu"
              >
                <TextAlignJustify className="menu" />
              </button>
            </div>
            <div className="header__controls">
              <SearchBar />
              <div className="header__actions">
                <LanguageSelector />
                <Fullscreen />
                <Notification />
                <UserAvatar />
                <button
                  onClick={toggleSettingsPanel}
                  className="settings-toggle"
                >
                  <Setting />
                </button>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
      <SettingsPanel
        isOpen={isSettingsPanelOpen}
        onClose={() => setIsSettingsPanelOpen(false)}
      />
      <HeaderMain title="Dashboard" breadcrumbs={["Lexa", "Dashboard"]} />
      <HeaderNav />
    </header>
  );
}
