import { useFrame } from "@react-three/fiber";

export const BoxMesh: any = () => {
  let three = useFrame(() => {
    console.log("spinning");
  });

  return (
    <mesh>
      <boxGeometry />
      <meshStandardMaterial />
    </mesh>
  );
};
