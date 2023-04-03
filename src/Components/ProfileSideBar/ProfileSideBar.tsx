import { ProfileAvatar } from "../ProfileAvatar/ProfileAvatar";
import "./ProfileSideBar.css";

export type ProfileSideBarProps = {
  name: string;
  yearOfBirth: number;
  gender: string;
  location: string;
  position: string;
  avatarSource: string;
};

export const ProfileSideBar: React.FC = () => {
  return (
    <div className="profile-side-bar flex">
      <div className="profile-avatar-container flex">
        <ProfileAvatar />
      </div>
      <div className="personal-info">
        <p>
          <b>Name:</b> Do Tran
        </p>
        <p>
          <p>
            <b>Email:</b>sac@gmail.com
          </p>
          <b>Year of birth:</b> 1998
        </p>
        <p>
          <b>Gender:</b> Male
        </p>
        <p>
          <b>Location:</b> Ho Chi Minh, Viet Nam
        </p>
        <p>
          <b>Position:</b>Headline
        </p>
        <p>
          <b>Introduction:</b>Hi, my name's Tim
        </p>
      </div>
    </div>
  );
};
