import { Col, Row } from "antd";
import { Education } from "../../Components/Education/Education";
import { ProfileSideBar } from "../../Components/ProfileSideBar/ProfileSideBar";
import { ProjectList } from "../../Components/ProjectList/ProjectList";
import "./Profile.css";

export const Profile: React.FC = () => {
  return (
    <Row className="profile-page flex-1">
      <Col md={4} span={24} className="border bg-fuchsia-200 box-shadow-lift">
        <ProfileSideBar />
      </Col>
      <Col md={20} span={24} className="border bg-sky-200 box-shadow-lift">
        <Education />
        <ProjectList />
      </Col>
    </Row>
  );
};
