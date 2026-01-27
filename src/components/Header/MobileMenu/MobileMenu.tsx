import {
  BarChart3,
  Mail,
  Grid3x3,
  FileText,
  MoreHorizontal,
} from "lucide-react";
import "./mobilemenu.scss";

interface MenuItem {
  icon: React.ReactNode;
  label: string;
  submenu?: string[];
}

const menuItems: MenuItem[] = [
  { icon: <BarChart3 size={20} />, label: "Dashboard" },
  { icon: <Mail size={20} />, label: "Email" },
  { icon: <Grid3x3 size={20} />, label: "UI Elements" },
  { icon: <FileText size={20} />, label: "Forms" },
  {
    icon: <MoreHorizontal size={20} />,
    label: "More",
    submenu: ["Calendar", "Chat", "Kanban", "Icons"],
  },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <>
      {isOpen && <div className="mobile-menu__overlay" onClick={onClose} />}
      <div className={`mobile-menu ${isOpen ? "mobile-menu--open" : ""}`}>
        <nav className="mobile-menu__nav">
          {menuItems.map((item, index) => (
            <div key={index} className="mobile-menu__item-wrapper">
              <button className="mobile-menu__item">
                <span className="mobile-menu__icon">{item.icon}</span>
                <span className="mobile-menu__label">{item.label}</span>
              </button>
              {item.submenu && (
                <div className="mobile-menu__submenu">
                  {item.submenu.map((subitem, subindex) => (
                    <button key={subindex} className="mobile-menu__subitem">
                      {subitem}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </>
  );
}
