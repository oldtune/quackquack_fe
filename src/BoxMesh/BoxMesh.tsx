import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useState } from "react";

export const BoxMesh: any = () => {
  let { camera } = useThree();
  let boxRef: any = useRef();
  let [goNear, setgoNear] = useState(true);
  useFrame(({ clock }) => {
    let elapsedTime = clock.getElapsedTime();
    let elapsedTimeTenThousand = elapsedTime / 10000;

    boxRef.current.rotation.x = elapsedTime;
    boxRef.current.rotation.y = elapsedTime;
    boxRef.current.rotation.z = elapsedTime;

    if (boxRef.current.position.z == 0 || boxRef.current.position.z == 5) {
      setgoNear(!goNear);
    }

    if (goNear) {
      boxRef.current.position.z += elapsedTimeTenThousand;
    } else {
      boxRef.current.position.z -= elapsedTimeTenThousand;
    }
  });

  return (
    <mesh ref={boxRef}>
      <boxGeometry />
      <meshStandardMaterial />
    </mesh>
  );
};
