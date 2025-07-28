export function applyFaceControlsToMesh(vrm, controls) {
  if (!vrm || !controls) {
    return;
  }

  const { mouthOpen, eyeLeftClose, eyeRightClose } = controls;

  // Apply to blend shape by mesh
  vrm.scene.traverse((obj) => {
    if (obj.isMesh && obj.morphTargetDictionary && obj.morphTargetInfluences) {
      const dict = obj.morphTargetDictionary;
      const influences = obj.morphTargetInfluences;

      // Eyes
      if ('Fcl_EYE_Close_L' in dict) {
        influences[dict['Fcl_EYE_Close_L']] = eyeLeftClose;
      }
      if ('Fcl_EYE_Close_R' in dict) {
        influences[dict['Fcl_EYE_Close_R']] = eyeRightClose;
      }

      // Mouth
      // if ('Fcl_MTH_A' in dict) {
      //   influences[dict['Fcl_MTH_A']] = mouthOpen;
      // }

      if (controls.viseme) {
        const v = controls.viseme;
        ['A', 'I', 'U', 'E', 'O'].forEach((char) => {
          if (dict[`Fcl_MTH_${char}`] !== undefined) {
            influences[dict[`Fcl_MTH_${char}`]] = char === v ? 1 : 0;
          }
        });
      } else {
        if ('Fcl_MTH_A' in dict) {
          influences[dict['Fcl_MTH_A']] = mouthOpen;
        }
      }
    }
  });
}
