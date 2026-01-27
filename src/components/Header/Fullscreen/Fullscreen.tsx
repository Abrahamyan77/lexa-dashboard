import { Maximize } from "lucide-react";
import "./fullscreen.scss";

export default function Fullscreen() {
  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  return (
    <button
      className="fullscreen-btn"
      onClick={handleFullscreen}
      title="Toggle fullscreen"
    >
      <Maximize size={20} />
    </button>
  );
}
