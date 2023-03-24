import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export const BoxMesh: any = () => {
  let boxRef: any = useRef();
  // let [goNear, setgoNear] = useState(true);
  // const speed = 0.01;

  useFrame(({ clock }) => {
    let elapsedTime = clock.getElapsedTime() / 100;
    console.log(elapsedTime);

    // boxRef.current.rotation.x += elapsedTime;
    // boxRef.current.rotation.y += elapsedTime;
    boxRef.current.rotation.z += elapsedTime;

    // if (goNear) {
    //   boxRef.current.position.z += speed;
    // } else {
    //   boxRef.current.position.z -= speed;
    // }

    // if (boxRef.current.position.z <= 0 || boxRef.current.position.z >= 4) {
    //   console.log(boxRef.current.position.z, "toggle");
    //   setgoNear(!goNear);
    // }
  });

  return (
    <mesh ref={boxRef}>
      <boxGeometry />
      <meshStandardMaterial />
    </mesh>
  );
};
