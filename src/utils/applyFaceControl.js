export function applyFaceControlsToMesh(vrm, controls) {
  if (!vrm || !controls) {
    return;
  }

  const { mouthOpen, eyeLeftClose, eyeRightClose, yaw, pitch, roll, position, averageBrow } = controls;
  


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
      
      // EyeBrows Position
      if ('Fcl_BRW_Surprised' in dict) {
        influences[dict['Fcl_BRW_Surprised']] = averageBrow;
      }
     

      // Mouth
      if ('Fcl_MTH_A' in dict) {
        influences[dict['Fcl_MTH_A']] = mouthOpen;
      }

      // Rotate and translate
      const head = vrm.humanoid.getNormalizedBoneNode('head');

      if (head) {
        head.rotation.set(
          Math.cos(pitch), // Math.cos(roll), 
          - Math.sin(roll) / 2,
          Math.sin(yaw)
        );
      }
    }
  });
}
