import { Col, Row } from "antd";
import "./Education.css";

export type EducationProps = {
  educationList: EducationDetailProps[];
};

export type EducationDetailProps = {
  eventDate: string;
  eventType: EventType;
  schoolName: string;
  major: string;
  title: string;
  remark: Remark[];
};

export enum EventType {
  DropOut,
  Graduate,
  Begin,
}

export type Remark = {
  description: string;
};

function constructEventTitle(detail: EducationDetailProps): string {
  switch (detail.eventType) {
    case EventType.DropOut:
      return `Dropped out of ${detail.schoolName}`;
    case EventType.Graduate:
      return `Graduated ${detail.schoolName}, ${detail.title} ${detail.major}`;
    default:
      return `Begin ${detail.title} ${detail.major} at ${detail.schoolName}`;
  }
}

export const Education: React.FC<EducationProps> = (props) => {
  // let items = [
  //   {
  //     children: "sac",
  //     color: "red",
  //   },
  //   {
  //     children:
  //       "Sasuke Uchiha is a fictional character in the Naruto manga and anime franchise created by Masashi Kishimoto. Sasuke belongs to the Uchiha clan, a notorious ninja family, and one of the most powerful, allied with Konohagakure.",
  //     color: "green",
  //   },
  //   {
  //     children:
  //       "Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village. Wikipedia Author: Masashi KishimotoAdaptations: Naruto: Shippuden (2007), Naruto (2002), MOREPublished: September 21, 1999 (initial release)Genres: Shonen manga, Action manga, FantasyEnglish publisher: AUS Madman EntertainmentNA/UK Viz Media",
  //     color: "green",
  //     onMouseOver: () => {
  //       console.log("sac");
  //     },
  //   },
  // ];

  // let items = props.educationList.map((child) => {
  //   return {
  //     label: child.eventDate ? child.eventDate : "",
  //     children: constructEventTitle(child),
  //     color: "red",
  //   };
  // });
  //   return (
  //     <div className="flex flex-1">
  //       <Timeline className="min-w-fit" items={items} mode="left" />
  //     </div>
  //   );

  const boxes = [
    <Col
      span={24}
      md={6}
      style={{ height: "100px" }}
      className=" text-left box-shadow-lift-2"
    >
      I studied information technology at Cao Thang Technical College from 2016
      - 2019
    </Col>,
  ];

  return <Row>{boxes}</Row>;
};
