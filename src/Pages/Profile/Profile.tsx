import { Col, Row } from "antd";
import { ProfileSideBar } from "../../Components/ProfileSideBar/ProfileSideBar";
import "./Profile.css";

export const Profile: React.FC = () => {
  return (
    <Row className="profile-page flex">
      <Col
        md={4}
        span={24}
        className="border box-shadow"
      >
        <ProfileSideBar />
      </Col>
      <Col
        md={20}
        span={24}
        className="border box-shadow"
      >
        <div className="project-and-experience flex">Find me</div>
      </Col>
    </Row>
  );
};
