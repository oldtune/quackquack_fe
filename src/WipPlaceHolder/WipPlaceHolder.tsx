import { Canvas } from "@react-three/fiber";
import { BoxMesh } from "../BoxMesh/BoxMesh";

export const WipPlaceHolder: React.FC = () => {
  return (
    <Canvas shadows="soft">
      <ambientLight intensity={0.1} />
      <directionalLight color="red" position={[0, 0, 5]} />
      <BoxMesh />
    </Canvas>
  );
};
