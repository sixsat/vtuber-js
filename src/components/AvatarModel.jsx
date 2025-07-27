import { useEffect, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { VRMLoaderPlugin } from '@pixiv/three-vrm';
import { setArmsAngle } from '../utils/setArmsAngle';
import { getFaceControls } from '../utils/getFaceControls';
import { applyFaceControlsToMesh } from '../utils/applyFaceControl';

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
          console.error('VRM not found in gltf.userData');
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

        // vrm.scene.traverse((obj) => {
        //   if (obj.isMesh && obj.morphTargetDictionary) {
        //     console.log(Object.keys(obj.morphTargetDictionary));
        //   }
        // });
      },
      undefined,
      (error) => {
        console.error('Error loading VRM:', error);
      },
    );
  }, []);

  useFrame((_, delta) => {
    const vrm = modelRef.current;
    if (!vrm) return;

    vrm.update(delta);

    const controls = getFaceControls();
    if (controls) {
      applyFaceControlsToMesh(vrm, controls);
    }
  });

  return vrmScene ? <primitive object={vrmScene} /> : null;
}
