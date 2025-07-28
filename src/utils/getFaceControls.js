import * as THREE from 'three';

export const faceDataRef = { current: null };

let smoothEyeLeft = 0;
let smoothEyeRight = 0;
let smoothMouthOpen = 0;

// For debounce viseme
let lastViseme = null;
let visemeHoldFrames = 0;
const HOLD_THRESHOLD = 5;

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
  const chin = kp[152];
  const mouthUpper = kp[13];
  const mouthLower = kp[14];
  const leftMouth = kp[61];
  const rightMouth = kp[291];
  const faceTop = kp[10];

  if (!leftEye || !rightEye || !nose || !mouthUpper || !mouthLower || !chin || !faceTop) {
    return null;
  }

  const position = nose;

  const faceHeight = Math.abs(faceTop.y - chin.y);

  const rawDiff = Math.abs(mouthUpper.y - mouthLower.y);
  const mouthRatio = rawDiff / faceHeight;

  const threshold = 0.01;
  const mouthOpenRaw = Math.max(0, mouthRatio - threshold);
  const normalizedMouth = Math.min(mouthOpenRaw / 0.15, 1);

  const smoothing = 0.25;
  smoothMouthOpen = smoothMouthOpen * (1 - smoothing) + normalizedMouth * smoothing;
  if (smoothMouthOpen < 0.02) smoothMouthOpen = 0;

  // console.log('mouth diff:', rawDiff);

  // Head Rotation
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

  // Eye Aspect Ratio (EAR) per side
  const leftEAR = getEAR(kp[159], kp[145], kp[33], kp[133]);
  const rightEAR = getEAR(kp[386], kp[374], kp[362], kp[263]);

  const normalizeEAR = (ear) => {
    const min = 0.1;
    const max = 0.2;
    const ratio = (ear - min) / (max - min);
    return THREE.MathUtils.clamp(1 - ratio, 0, 1);
  };
  const eyeSmoothing = 0.2;
  smoothEyeLeft = smoothEyeLeft * (1 - eyeSmoothing) + normalizeEAR(leftEAR) * eyeSmoothing;
  smoothEyeRight = smoothEyeRight * (1 - eyeSmoothing) + normalizeEAR(rightEAR) * eyeSmoothing;

  // ✅ Viseme Estimation
  const mouthWidth = Math.abs(rightMouth.x - leftMouth.x);
  const visemeRatio = rawDiff / mouthWidth;
  let newViseme = null;

  if (window.__testViseme) {
    console.log(`🎯 Viseme ${window.__testViseme}:`, {
      visemeRatio: visemeRatio.toFixed(3),
      smoothMouthOpen: smoothMouthOpen.toFixed(3),
    });
  }

  if (smoothMouthOpen > 0.05) {
    if (visemeRatio > 0.58 && smoothMouthOpen > 0.35) newViseme = 'A';
    else if (visemeRatio < 0.3 && smoothMouthOpen > 0.3) newViseme = 'I';
    else if (visemeRatio >= 0.32 && visemeRatio < 0.45 && smoothMouthOpen > 0.3) newViseme = 'E';
    else if (visemeRatio < 0.4 && smoothMouthOpen > 0.45) newViseme = 'U';
    else if (visemeRatio < 0.5 && smoothMouthOpen > 0.6) newViseme = 'O';
  }

  // 👇 Debounce viseme เปลี่ยนทุก 5 frame เท่านั้น
  if (newViseme !== lastViseme) {
    if (visemeHoldFrames > HOLD_THRESHOLD) {
      lastViseme = newViseme;
      visemeHoldFrames = 0;
    } else {
      visemeHoldFrames++;
      newViseme = lastViseme;
    }
  } else {
    visemeHoldFrames = 0;
  }

  return {
    position,
    mouthOpen: smoothMouthOpen,
    yaw,
    pitch,
    roll,
    eyeLeftClose: smoothEyeLeft,
    eyeRightClose: smoothEyeRight,
    viseme: newViseme,
  };
}
