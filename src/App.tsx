import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  GizmoHelper,
  GizmoViewport,
  Html,
  OrbitControls,
  useGLTF,
} from "@react-three/drei";

import { Model } from "./CesiumMan";

function App() {
  return (
    <Canvas>
      <Content />
    </Canvas>
  );
}

function Content() {
  return (
    <>
      <group scale={1}>
        <ambientLight intensity={1} />

        <pointLight position={[-1, 0, 0]} intensity={2} />

        {/* <BlendShapeSubdiv /> */}
        <Info />
        <Model tmp={10} />
        <Model tmp={20} position={[1, 0, 0]} />

        <axesHelper />
        <OrbitControls makeDefault />
      </group>
    </>
  );
}

function Info() {
  const { gl } = useThree();

  const [triangles, setTriangles] = useState(0);
  useFrame(() => {
    if (triangles !== gl.info.render.triangles) {
      setTriangles(gl.info.render.triangles);
    }
  }, -1);

  return (
    <Html fullscreen>
      info:
      <br />
      {triangles} triangles
      <br />
    </Html>
  );
}
export default App;
