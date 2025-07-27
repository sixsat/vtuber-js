import * as THREE from 'three';

export function setArmsAngle(vrm, angleDeg) {
  const deg = THREE.MathUtils.degToRad;
  const a = deg(angleDeg);

  const L_UP = vrm.humanoid?.getNormalizedBoneNode('leftUpperArm');
  const R_UP = vrm.humanoid?.getNormalizedBoneNode('rightUpperArm');
  const L_LOW = vrm.humanoid?.getNormalizedBoneNode('leftLowerArm');
  const R_LOW = vrm.humanoid?.getNormalizedBoneNode('rightLowerArm');

  // Left is negative, right is positive (rotate around the Z axis)
  if (L_UP) L_UP.rotation.z = -a;
  if (R_UP) R_UP.rotation.z = a;

  // Let the forearm drop slightly (~20% of the top corner)
  if (L_LOW) L_LOW.rotation.z = -a * 0.2;
  if (R_LOW) R_LOW.rotation.z = a * 0.2;
}
