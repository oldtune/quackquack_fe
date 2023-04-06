import { Position } from "../Position";

export type TextMeshProps = {
  content: string;
  position: Position;
};

export const TextMesh: React.FC<TextMeshProps> = ({ position, content }) => {
  return (
    <mesh>
      <planeGeometry />
      <meshStandardMaterial />
    </mesh>
  );
  // return (
  // <mesh>
  //   <Text position={[position.x, position.y, position.z]}>{content}</Text>
  //   <meshStandardMaterial />
  // </mesh>
  // );
};
