"use client";

import { Sky } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { OrbitControls, Stats, Environment, Clone } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const Models = [{ name: "kim", url: "/scene.glb" }];

const Model = ({ url }: any) => {
  const { scene }: any = useGLTF(url);
  return <Clone object={scene} scale={0.01} />;
};

const Box2 = (props: JSX.IntrinsicElements["mesh"]) => {
  const mesh = useRef<THREE.Mesh>(null!);
  useFrame(() => {
    //mesh.current.rotation.x = mesh.current.rotation.y += 0.05
  });
  return (
    <mesh {...props} ref={mesh}>
      <boxGeometry args={[1, 1, 1]} />
      <meshLambertMaterial attach="material" color="royalblue" />
    </mesh>
  );
};

export default function Page() {
  return (
    <div className="w-ful h-screen">
      <Canvas camera={{ position: [100, 100, 100], near: 10 }}>
        <Environment preset="city" />
        <Suspense>
          <Model url={Models[0].url} />
          <ambientLight intensity={0} />
          <pointLight position={[1000, 1000, 1000]} />
          {/* <Box2 position={[-1.2, 0, 0]} /> */}
          {/* <Box2 position={[1.2, 0, 0]} /> */}
        </Suspense>
        <OrbitControls />
        <Sky sunPosition={[100, 110, 50]} />
      </Canvas>
    </div>
  );
}
