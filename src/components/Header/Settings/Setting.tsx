import { IoMdSettings } from "react-icons/io";
import "./setting.scss";

export default function Setting({ darkMode }: { darkMode: boolean }) {
  return (
    <div className="settings-btn" title="Settings">
      <IoMdSettings size={25} className={darkMode ? "dark" : "light"} />
    </div>
  );
}
