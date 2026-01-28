import { useState } from "react";
import "./settingspanel.scss";
import layout1 from "../../../assets/layout1.jpg";
import layout2 from "../../../assets/layout-2.jpg";

interface SettingsPanelProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export default function SettingsPanel({
  isOpen,
  onClose,
  darkMode,
  setDarkMode,
}: SettingsPanelProps) {
  const [customColor, setCustomColor] = useState("default");
  const [layout, setLayout] = useState("vertical");
  const [layoutWidth, setLayoutWidth] = useState("fluid");

  return (
    <>
      {isOpen && <div className="settings-panel__overlay" onClick={onClose} />}
      <div
        className={`settings-panel ${isOpen ? "settings-panel--open" : ""} ${!darkMode ? "settings-panel__light" : ""}`}
      >
        <div className="settings-panel__header">
          <h2 className="settings-panel__title">Settings</h2>
          <button
            className="settings-panel__close"
            onClick={onClose}
            aria-label="Close settings"
          >
            ✕
          </button>
        </div>

        <div className="settings-panel__content">
          <div className="settings-panel__group">
            <label className="settings-panel__label">
              Select Custom Colors
            </label>
            <div className="settings-panel__options">
              <button
                className={`settings-panel__option ${customColor === "default" ? "settings-panel__option--active" : ""}`}
                onClick={() => setCustomColor("default")}
              >
                Default
              </button>
              <button
                className={`settings-panel__option settings-panel__option--red ${customColor === "red" ? "settings-panel__option--active" : ""}`}
                onClick={() => setCustomColor("red")}
              >
                Red
              </button>
              <button
                className={`settings-panel__option settings-panel__option--teal ${customColor === "teal" ? "settings-panel__option--active" : ""}`}
                onClick={() => setCustomColor("teal")}
              >
                Teal
              </button>
            </div>
          </div>

          <div className="settings-panel__group">
            <label className="settings-panel__label">Layouts</label>
            <div className="settings-panel__options">
              <button
                className={`settings-panel__option ${layout === "vertical" ? "settings-panel__option--active" : ""}`}
                onClick={() => setLayout("vertical")}
              >
                Vertical
              </button>
              <button
                className={`settings-panel__option ${layout === "horizontal" ? "settings-panel__option--active" : ""}`}
                onClick={() => setLayout("horizontal")}
              >
                Horizontal
              </button>
            </div>
          </div>

          {/* Mode */}
          <div className="settings-panel__group">
            <label className="settings-panel__label">Mode</label>
            <div className="settings-panel__options">
              <button
                className={`settings-panel__option ${!darkMode ? "settings-panel__option--active" : ""}`}
                onClick={() => setDarkMode(false)}
              >
                Light
              </button>
              <button
                className={`settings-panel__option ${darkMode ? "settings-panel__option--active" : ""}`}
                onClick={() => setDarkMode(true)}
              >
                Dark
              </button>
            </div>
          </div>

          {/* Layout Width */}
          <div className="settings-panel__group">
            <label className="settings-panel__label">Layout Width</label>
            <div className="settings-panel__options">
              <button
                className={`settings-panel__option ${layoutWidth === "fluid" ? "settings-panel__option--active" : ""}`}
                onClick={() => setLayoutWidth("fluid")}
              >
                Fluid
              </button>
              <button
                className={`settings-panel__option ${layoutWidth === "boxed" ? "settings-panel__option--active" : ""}`}
                onClick={() => setLayoutWidth("boxed")}
              >
                Boxed
              </button>
            </div>
          </div>

          {/* Topbar Theme */}
          <div className="settings-panel__group">
            <label className="settings-panel__label">Topbar Theme</label>
            <div className="settings-panel__options">
              <button className="settings-panel__option">Light</button>
              <button className="settings-panel__option">Dark</button>
            </div>
          </div>

          {/* Choose Layouts */}
          <div className="settings-panel__group">
            <label className="settings-panel__label">Choose Layouts</label>
            <div className="settings-panel__layouts">
              <button className="settings-panel__layout-option">
                <div className="settings-panel__layout-preview">
                  <img src={layout1} alt="layout1" />
                </div>
              </button>
              <button className="settings-panel__layout-option">
                <div className="settings-panel__layout-preview">
                  <img src={layout2} alt="layout2" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
