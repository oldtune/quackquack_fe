import { Canvas } from "@react-three/fiber";
import { BoxMesh } from "../../Meshes/BoxMesh/BoxMesh";
import { TextMesh } from "../../Meshes/TextMesh/TextMesh";

export const WipPlaceHolder: React.FC = () => {
  return (
    <Canvas shadows="soft">
      <ambientLight intensity={0.1} />
      <directionalLight color="red" position={[0, 0, 5]} />
      <TextMesh position={{ x: 0, y: 2, z: 0 }} content="Under construction" />
      <BoxMesh />
    </Canvas>
  );
};
