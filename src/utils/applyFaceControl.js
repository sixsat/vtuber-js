import * as THREE from 'three';

export function applyFaceControlsToMesh(vrm, controls) {
  const { eyeLeftClose, eyeRightClose } = controls;

  // ✅ Apply to blend shape by mesh
  vrm.scene.traverse((obj) => {
    if (obj.isMesh && obj.morphTargetDictionary && obj.morphTargetInfluences) {
      const dict = obj.morphTargetDictionary;
      const influences = obj.morphTargetInfluences;

      if ('Fcl_EYE_Close_L' in dict) {
        influences[dict['Fcl_EYE_Close_L']] = eyeLeftClose;
      }

      if ('Fcl_EYE_Close_R' in dict) {
        influences[dict['Fcl_EYE_Close_R']] = eyeRightClose;
      }
    }
  });
}
