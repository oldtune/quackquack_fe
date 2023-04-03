import { Avatar } from "antd";
import "./ProfileAvatar.css";

export type ProfileAvatarProps = {
  source: string;
};

export const ProfileAvatar: React.FC = () => {
  return (
    <div className="profile-avatar">
      <Avatar
        className="profile-avatar-content"
        style={{ height: "100px", width: "100px" }}
        src="https://i.imgur.com/98QPuFM.jpeg"
      />
    </div>
  );
};
