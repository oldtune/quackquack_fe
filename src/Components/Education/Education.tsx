import { Timeline } from "antd";

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
  let items = props.educationList.map((child) => {
    return {
      label: child.eventDate ? child.eventDate : "",
      children: constructEventTitle(child),
    };
  });
  return (
    <div className="flex flex-1">
      <Timeline />
    </div>
  );
};
