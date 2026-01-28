import Container from "../Container/Container";
import "./header.scss";
import logo_lexa from "../../assets/logo-lexa.png";
import logo__lexa_light from "../../assets/logo-lexa-light.png";
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

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export default function Header({ darkMode, setDarkMode }: HeaderProps) {
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
      <div
        className={
          darkMode
            ? "header__fluid header__fluid--top"
            : "header__fluid header__fluid--top header__fluid--light"
        }
      >
        <Container>
          <div className="header__fluid">
            <div className="header__logo-lexa">
              {darkMode ? (
                <img src={logo_lexa} alt="Logo-lexa" className="logo__lexa" />
              ) : (
                <img
                  src={logo__lexa_light}
                  alt="Logo-lexa"
                  className="logo__lexa"
                />
              )}
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
              <SearchBar darkMode={darkMode} />
              <div className="header__actions">
                <LanguageSelector darkMode={darkMode} />
                <Fullscreen darkMode={darkMode} />
                <Notification darkMode={darkMode} />
                <UserAvatar />
                <button
                  onClick={toggleSettingsPanel}
                  className="settings-toggle"
                >
                  <Setting darkMode={darkMode} />
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
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <HeaderMain title="Dashboard" breadcrumbs={["Lexa", "Dashboard"]} />
      <HeaderNav darkMode={darkMode} />
    </header>
  );
}
