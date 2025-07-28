import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import AvatarModel from './AvatarModel';
import { PerspectiveCamera } from '@react-three/drei';

export default function AvatarViewer() {
  return (
    <Canvas style={{ height: '100vh', width: '100%' }}>
      <PerspectiveCamera makeDefault position={[0, 1.5, 2]} fov={10} />

      <ambientLight intensity={0.7} />
      <directionalLight position={[0, 1, 1]} intensity={1.5} />
      <OrbitControls
        enableRotate={false}
        enableZoom={false}
        enablePan={false}
        target={[0, 1.39, 0]}
      />
      <AvatarModel />
    </Canvas>
  );
}
