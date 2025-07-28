import * as THREE from 'three';

export function applyFaceControlsToMesh(vrm, controls) {
  if (!vrm || !controls) return;

  const { mouthOpen, eyeLeftClose, eyeRightClose, viseme } = controls;

  vrm.scene.traverse((obj) => {
    if (obj.isMesh && obj.morphTargetDictionary && obj.morphTargetInfluences) {
      const dict = obj.morphTargetDictionary;
      const influences = obj.morphTargetInfluences;

      if ('Fcl_EYE_Close_L' in dict) influences[dict['Fcl_EYE_Close_L']] = eyeLeftClose;
      if ('Fcl_EYE_Close_R' in dict) influences[dict['Fcl_EYE_Close_R']] = eyeRightClose;

      const visemeSum = Object.values(viseme).reduce((a, b) => a + b, 0);
      if ('Fcl_MTH_Close' in dict) {
        influences[dict['Fcl_MTH_Close']] = THREE.MathUtils.clamp(1 - visemeSum, 0, 1);
      }

      if ('JawOpen' in dict) influences[dict['JawOpen']] = mouthOpen;

      // Apply viseme
      for (const key in viseme) {
        const shapeName = `Fcl_MTH_${key}`;
        if (shapeName in dict) {
          influences[dict[shapeName]] = viseme[key];
        }
      }
    }
  });
}
