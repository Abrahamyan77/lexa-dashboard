import { Bell } from "lucide-react";
import "./notification.scss";

export default function Notification() {
  return (
    <div className="notification">
      <button className="notification__button" title="Notifications">
        <Bell size={20} />

        <span className="notification__badge">3</span>
      </button>
    </div>
  );
}
