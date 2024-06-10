// "use client";

// import { Html, Sky, useProgress } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";
// import { Suspense, useEffect } from "react";
// import { OrbitControls, Environment, Clone } from "@react-three/drei";
// import { useGLTF } from "@react-three/drei";
// import { Progress } from "@nextui-org/react";

// const Model = ({ url }: any) => {
//   const { scene }: any = useGLTF(url);
//   return (
//     <Clone
//       object={scene}
//       scale={0.025}
//       position={[35, -35, 35]}
//       onBeforeRender={() => {
//         console.log(11);
//       }}
//     />
//   );
// };

// export default function ThreeRender(props: any) {
//   const Models = [
//     {
//       name: "k9",
//       url: props.src,
//     },
//   ];

//   function Loader() {
//     const { active, progress, errors, item, loaded, total } = useProgress();
//     return (
//       <Html center>
//         <div className="text-black flex w-full h-full">
//           <Progress
//             aria-label="Loading..."
//             value={progress}
//             color={"danger"}
//             // className="max-w-3xl"
//             showValueLabel={true}
//           />
//         </div>
//       </Html>
//     );
//   }

//   useEffect(() => {}, []);

//   return (
//     <div className="w-full h-full">
//       <Canvas camera={{ position: [100, 100, 100], near: 15 }}>
//         <Suspense fallback={<Loader />}>
//           <Model url={Models[0].url} />
//           <ambientLight intensity={0} />
//           <pointLight position={[10, 10, 10]} />
//           <Environment preset="city" />
//           <OrbitControls />
//           <Sky sunPosition={[100, 100, 100]} />
//         </Suspense>
//       </Canvas>
//     </div>
//   );
// }

"use client";

import { Html, Sky, useProgress } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect } from "react";
import { OrbitControls, Environment, Clone } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import { Progress } from "@nextui-org/react";

export default function ThreeRender(props: any) {
  const Model = ({ url }: any) => {
    const { scene }: any = useGLTF(url);
    return (
      <Clone
        object={scene}
        scale={props.scale}
        position={[0, 0, 0]}
        onBeforeRender={() => {
          console.log(11);
        }}
      />
    );
  };

  const Models = [
    {
      name: "k9",
      url: props.src,
    },
  ];

  function Loader() {
    const { active, progress, errors, item, loaded, total } = useProgress();
    return (
      <Html fullscreen>
        <div className="flex h-full w-full items-center justify-center text-black">
          <Progress
            aria-label="Loading..."
            value={progress}
            color={"primary"}
            className="px-8"
            showValueLabel={true}
          />
        </div>
      </Html>
    );
  }

  useEffect(() => {}, []);

  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [100, 100, 100], near: 15 }}>
        <Suspense fallback={<Loader />}>
          <Model url={Models[0].url} />
          <ambientLight intensity={0} />
          <pointLight position={[10, 10, 10]} />
          <Environment preset="city" />
          <OrbitControls />
          <Sky sunPosition={[100, 100, 100]} />
        </Suspense>
      </Canvas>
    </div>
  );
}
