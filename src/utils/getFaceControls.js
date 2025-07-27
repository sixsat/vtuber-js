import * as THREE from 'three';

export const faceDataRef = { current: null };

let smoothEyeLeft = 0;
let smoothEyeRight = 0;
let smoothMouthOpen = 0;

const getEAR = (top, bottom, left, right) => {
  const vertical = Math.hypot(top.x - bottom.x, top.y - bottom.y);
  const horizontal = Math.hypot(left.x - right.x, left.y - right.y);
  return vertical / horizontal;
};

export function getFaceControls() {
  const kp = faceDataRef.current;
  if (!kp) return null;

  const getAvg = (p1, p2) => ({
    x: (p1.x + p2.x) / 2,
    y: (p1.y + p2.y) / 2,
    z: (p1.z + p2.z) / 2,
  });

  const leftEye = kp[33];
  const rightEye = kp[263];
  const nose = kp[1];
  const mouthUpper = kp[13];
  const mouthLower = kp[14];
  const chin = kp[152];

  if (!leftEye || !rightEye || !nose || !mouthUpper || !mouthLower || !chin) {
    return null;
  }

  const position = nose;
  const smoothing = 0.2;

  // ✅ mouthOpen (normalized)
  const threshold = 0.02;
  const rawDiff = Math.abs(mouthUpper.y - mouthLower.y);
  const mouthOpenRaw = rawDiff < threshold ? 0 : Math.min((rawDiff - threshold) / 0.18, 1);

  smoothMouthOpen = smoothMouthOpen * (1 - smoothing) + mouthOpenRaw * smoothing;
  if (smoothMouthOpen < 0.01) smoothMouthOpen = 0;

  // ✅ head rotation
  const dx = rightEye.x - leftEye.x;
  const dy = rightEye.y - leftEye.y;
  const yaw = Math.atan2(dy, dx) * (180 / Math.PI);

  const midEyes = getAvg(leftEye, rightEye);
  const dyPitch = chin.y - midEyes.y;
  const dzPitch = chin.z - midEyes.z;
  const pitch = Math.atan2(dyPitch, dzPitch) * (180 / Math.PI);

  const dxRoll = chin.x - midEyes.x;
  const dzRoll = chin.z - midEyes.z;
  const roll = Math.atan2(dxRoll, dzRoll) * (180 / Math.PI);

  // ✅ Eye Aspect Ratio (EAR) per side
  const leftEAR = getEAR(kp[159], kp[145], kp[33], kp[133]);
  const rightEAR = getEAR(kp[386], kp[374], kp[362], kp[263]);

  const normalizeEAR = (ear) => {
    const min = 0.1;
    const max = 0.3;
    const ratio = (ear - min) / (max - min);
    return THREE.MathUtils.clamp(1 - ratio, 0, 1);
  };

  const eyeLeftClose = (smoothEyeLeft =
    smoothEyeLeft * (1 - smoothing) + normalizeEAR(leftEAR) * smoothing);

  const eyeRightClose = (smoothEyeRight =
    smoothEyeRight * (1 - smoothing) + normalizeEAR(rightEAR) * smoothing);

  return {
    position,
    mouthOpen: smoothMouthOpen,
    yaw,
    pitch,
    roll,
    eyeLeftClose,
    eyeRightClose,
  };
}
