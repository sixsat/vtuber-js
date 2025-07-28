import * as THREE from 'three';

export function getVisemeFromLandmarks(kp) {
  const faceTop = kp[10];
  const chin = kp[152];
  const mouthUpper = kp[13];
  const mouthLower = kp[14];
  const mouthLeft = kp[61];
  const mouthRight = kp[291];

  if (!faceTop || !chin || !mouthUpper || !mouthLower || !mouthLeft || !mouthRight) {
    return null;
  }

  const faceHeight = Math.abs(faceTop.y - chin.y);
  const mouthOpen = Math.abs(mouthUpper.y - mouthLower.y) / faceHeight;
  const mouthWidth = Math.abs(mouthLeft.x - mouthRight.x) / faceHeight;

  if (mouthOpen < 0.04) {
    return { A: 0, I: 0, U: 0, E: 0, O: 0 };
  }

  const viseme = {
    A: THREE.MathUtils.clamp((mouthOpen - 0.08) / 0.1, 0, 1),
    I: THREE.MathUtils.clamp((mouthWidth - 0.22) / 0.08, 0, 1),
    U: THREE.MathUtils.clamp((0.2 - mouthWidth) / 0.1, 0, 1),
    E: THREE.MathUtils.clamp((mouthWidth - 0.2) / 0.1, 0, 1) * (1 - mouthOpen),
    O:
      THREE.MathUtils.clamp((mouthOpen - 0.07) / 0.08, 0, 1) *
      THREE.MathUtils.clamp((0.26 - mouthWidth) / 0.06, 0, 1),
  };

  return viseme;
}
