import {
  Mail,
  Grid3x3,
  FileText,
  LineChart,
  FileCheck,
  Gauge,
  Logs,
} from "lucide-react";
import "./headernav.scss";

interface NavItem {
  icon?: React.ReactNode;
  label: string;
  active?: boolean;
}

const defaultItems: NavItem[] = [
  { icon: <Gauge size={20} />, label: "Dashboard", active: true },
  { icon: <Mail size={20} />, label: "Email" },
  { icon: <Grid3x3 size={20} />, label: "UI Elements" },
  { icon: <FileText size={20} />, label: "Forms" },
  { icon: <Logs size={20} />, label: "More" },
  { icon: <LineChart size={20} />, label: "Charts" },
  { icon: <FileCheck size={20} />, label: "Pages" },
];

interface HeaderNavProps {
  items?: NavItem[];
}

export default function HeaderNav({ items = defaultItems }: HeaderNavProps) {
  return (
    <div className="haeder__wrapper">
      <nav className="header-nav">
        <div className="header-nav__container">
          {items.map((item, index) => (
            <button
              key={index}
              className={`header-nav__item ${item.active ? "header-nav__item--active" : ""}`}
            >
              {item.icon && (
                <span className="header-nav__icon">{item.icon}</span>
              )}
              <span className="header-nav__label">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}
