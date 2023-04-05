import { Col, Divider, Row } from "antd";
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
      <Col md={16} span={24} className="border bg-sky-200 box-shadow-lift">
        <h1>Summary</h1>
        <Divider />
        <Summary />
        <h1>Showcase</h1>
        <Divider />
        <Showcase />
        <h1 className="font-bold">Education</h1>
        <Divider />
        <Education educationList={[]} />
      </Col>
    </Row>
  );
};
