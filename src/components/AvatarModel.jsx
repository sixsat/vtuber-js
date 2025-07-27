import { useEffect, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { VRMLoaderPlugin } from '@pixiv/three-vrm';
import { setArmsAngle } from '../utils/setArmsAngle';

export default function AvatarModel() {
  const modelRef = useRef(null);
  const [vrmScene, setVrmScene] = useState(null);

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.register((parser) => new VRMLoaderPlugin(parser));

    loader.load(
      '/models/Avatar_A_V1.0.vrm',
      (gltf) => {
        const vrm = gltf.userData.vrm;
        if (!vrm) {
          console.error('❌ VRM not found in gltf.userData');
          return;
        }

        // Model adjustment
        vrm.scene.scale.set(6, 6, 6);
        vrm.scene.position.set(0, -13.8, 0);
        vrm.scene.rotation.set(-0.78, 0, 0);

        // Fold arms
        setArmsAngle(vrm, 65);

        modelRef.current = vrm;
        setVrmScene(vrm.scene);
      },
      undefined,
      (error) => {
        console.error('❌ Error loading VRM:', error);
      },
    );
  }, []);

  useFrame((_, delta) => {
    modelRef.current?.update(delta);
  });

  return vrmScene ? <primitive object={vrmScene} /> : null;
}
