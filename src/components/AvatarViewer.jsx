import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Center } from '@react-three/drei';
import { Suspense } from 'react';

function AvatarModel() {
  const { scene } = useGLTF('/models/face.glb');
  return (
    <Center top>
      <primitive object={scene} scale={0.1} />
    </Center>
  );
}

export default function AvatarViewer() {
  return (
    <div className="w-full h-full">
      <Canvas className="w-full h-full" camera={{ position: [0, 4, 3], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[3, 5, 2]} />
        <Suspense fallback={null}>
          <AvatarModel />
        </Suspense>
        <OrbitControls
          target={[0, 2, 0]}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enableZoom={false}
        />
      </Canvas>
    </div>
  );
}
