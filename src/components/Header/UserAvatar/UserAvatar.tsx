import "./useravatar.scss";
import avatar from "../../../assets/avatar.jpg";

interface UserAvatarProps {
  src?: string;
  alt?: string;
  name?: string;
}

export default function UserAvatar({
  src,
  alt = "User",
  name = "User",
}: UserAvatarProps) {
  return (
    <div className="user-avatar">
      <img
        src={src || avatar}
        alt={alt}
        className="user-avatar__image"
        title={name}
      />
    </div>
  );
}
