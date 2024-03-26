"use client";

import { Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect } from "react";
import { OrbitControls, Environment, Clone } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";

const Models = [{ name: "k9", url: "/models/k9.glb" }];

const Model = ({ url }: any) => {
  const { scene }: any = useGLTF(url);
  return <Clone object={scene} scale={0.025} position={[35, -35, 35]} />;
};

export default function ThreeRender() {
  useEffect(() => {}, []);

  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [100, 100, 100], near: 15 }}>
        <Environment preset="city" />
        <Suspense>
          <Model url={Models[0].url} />
          <ambientLight intensity={0} />
          <pointLight position={[10, 10, 10]} />
        </Suspense>
        <OrbitControls />
        <Sky sunPosition={[100, 100, 100]} />
      </Canvas>
    </div>
  );
}
