import { IoMdSettings } from "react-icons/io";
import "./setting.scss";

export default function Setting() {
  return (
    <button className="settings-btn" title="Settings">
      <IoMdSettings size={25} />
    </button>
  );
}
