import { Col, Row } from "antd";
import { Education } from "../../Components/Education/Education";
import { ProfileSideBar } from "../../Components/ProfileSideBar/ProfileSideBar";
import { Showcase } from "../../Components/ShowCase/Showcase";
import { Summary } from "../../Components/Summary/Summary";
import "./Profile.css";

export const Profile: React.FC = () => {
  return (
    <Row className="profile-page flex-1">
      <Col
        offset={2}
        md={4}
        span={24}
        className="border bg-fuchsia-200 box-shadow-lift"
      >
        <ProfileSideBar />
      </Col>
      <Col md={16} span={24} className="px-4 border bg-sky-200 box-shadow-lift">
        <div>
          <span className="text-xl">Summary</span>
          <Summary />
        </div>
        <div>
          <span className="text-xl">Showcase</span>
          <Showcase />
        </div>
        <div>
          <span className="text-xl">Education</span>
          <Education educationList={[]} />
        </div>
      </Col>
    </Row>
  );
};
