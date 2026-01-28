import { Heart } from "lucide-react";
import "./footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        © 2026 Lexa - Crafted with{" "}
        <Heart fill="#ef6767" stroke="none" className="heart" /> by Themesbrand.
      </p>
    </footer>
  );
}
