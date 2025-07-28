export function applyFaceControlsToMesh(vrm, controls) {
  const { mouthOpen, eyeLeftClose, eyeRightClose } = controls;

  // Apply to blend shape by mesh
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

      if ('Fcl_MTH_A' in dict) {
        influences[dict['Fcl_MTH_A']] = mouthOpen;
      }
      if ('Fcl_MTH_Large' in dict) {
        influences[dict['Fcl_MTH_Large']] = mouthOpen;
      }
      if ('Fcl_MTH_Down' in dict) {
        influences[dict['Fcl_MTH_Down']] = mouthOpen * 0.5;
      }
      if ('Fcl_MTH_Up' in dict) {
        influences[dict['Fcl_MTH_Up']] = mouthOpen * 0.5;
      }
    }
  });
}
