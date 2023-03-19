import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

export const BoxMesh: any = () => {
  let boxRef: any = useRef();
  //refer comment below
  let [goNear, setgoNear] = useState(false);
  const speed = 0.01;

  useFrame(({ clock }) => {
    let elapsedTime = clock.getElapsedTime();

    boxRef.current.rotation.x = elapsedTime;
    boxRef.current.rotation.y = elapsedTime;
    boxRef.current.rotation.z = elapsedTime;

    if (goNear) {
      //first frame is 0 => z = 0 + elapsed 0 second would be 0;
      boxRef.current.position.z += speed;
    } else {
      boxRef.current.position.z -= speed;
    }

    if (boxRef.current.position.z <= 0 || boxRef.current.position.z >= 4) {
      //first time togggle to go near
      setgoNear(!goNear);
    }
  });

  return (
    <mesh ref={boxRef}>
      <boxGeometry />
      <meshStandardMaterial />
    </mesh>
  );
};
