import { Col, Row } from "antd";
import "./Showcase.css";
export type ShowcaseProps = {
  projects: ShowcaseItemProps[];
};

export type ShowcaseItemProps = {
  name: string;
  description: string;
  intro: string;
  href: string[];
  imageUrl: string;
};

export const Showcase = () => {
  return (
    <Row>
      <Col></Col>
    </Row>
  );
};
