import * as THREE from 'three';
import { getVisemeFromLandmarks } from './getVisemeFromLandmarks.js';

export const faceDataRef = { current: null };

let smoothEyeLeft = 0;
let smoothEyeRight = 0;
let smoothMouthOpen = 0;
let smoothViseme = { A: 0, I: 0, U: 0, E: 0, O: 0 };
let smoothroll = 0;
let smoothpitch = 0;
let smoothyaw = 0;
let smoothBrowLeft = 0;
let smoothBrowRight = 0;

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
  const faceTop = kp[10];
  const leftEyeBrow = kp[276];
  const rightEyeBrow = kp[46];

  if (
    !leftEye ||
    !rightEye ||
    !nose ||
    !mouthUpper ||
    !mouthLower ||
    !chin ||
    !leftEyeBrow ||
    !rightEyeBrow
  ) {
    return null;
  }

  // Head orientation calculation
  const vLeftEye = new THREE.Vector3(leftEye.x, leftEye.y, leftEye.z);
  const vRightEye = new THREE.Vector3(rightEye.x, rightEye.y, rightEye.z);
  const vChin = new THREE.Vector3(chin.x, chin.y, chin.z);
  const vTop = new THREE.Vector3(faceTop.x, faceTop.y, faceTop.z);

  // Head axes
  const xAxis = vRightEye.clone().sub(vLeftEye).normalize();
  const yAxis = vChin.clone().sub(vTop).normalize();
  const zAxis = new THREE.Vector3().crossVectors(xAxis, yAxis).normalize();
  yAxis.copy(new THREE.Vector3().crossVectors(zAxis, xAxis).normalize());

  // Rotation matrix from axes
  const rotMat = new THREE.Matrix4();
  rotMat.makeBasis(xAxis, yAxis, zAxis);

  // Euler angles
  const euler = new THREE.Euler().setFromRotationMatrix(rotMat, 'YXZ');
  // Smoothing
  const smoothCoeff = 0.04; // Even more smoothing for less jiggle
  smoothyaw = smoothyaw * (1 - smoothCoeff) + -euler.z * smoothCoeff;
  smoothpitch = smoothpitch * (1 - smoothCoeff) + euler.x * smoothCoeff;
  smoothroll = smoothroll * (1 - smoothCoeff) + euler.y * smoothCoeff;

  // Map axes: yaw = turn left/right, pitch = up/down, roll = tilt
  const yaw = Math.abs(smoothyaw) < 0.01 ? 0 : smoothyaw;
  const pitchOffset = 1.5; // calibrate head looking up/down direction in radians
  let pitch = Math.abs(smoothpitch - pitchOffset) < 0.035 ? 0 : smoothpitch - pitchOffset;
  let roll = smoothroll;

  // Mouth
  const faceHeight = Math.abs(faceTop.y - chin.y);
  const rawDiff = Math.abs(mouthUpper.y - mouthLower.y);
  const mouthRatio = rawDiff / faceHeight;
  const threshold = 0.01;
  const mouthOpenRaw = Math.max(0, mouthRatio - threshold);
  const normalizedMouth = Math.min(mouthOpenRaw / 0.15, 1);
  const smoothing = 0.25;
  smoothMouthOpen = smoothMouthOpen * (1 - smoothing) + normalizedMouth * smoothing;
  if (smoothMouthOpen < 0.02) {
    smoothMouthOpen = 0;
  }

  const rawViseme = getVisemeFromLandmarks(kp);
  if (!rawViseme) return null;

  const vSmooth = 0.25;
  for (const k in smoothViseme) {
    smoothViseme[k] = smoothViseme[k] * (1 - vSmooth) + rawViseme[k] * vSmooth;
  }

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

  // EyeBrows
  const browSmoothing = 0.1;
  smoothBrowLeft =
    smoothBrowLeft * (1 - browSmoothing) +
    ((leftEyeBrow.y - leftEye.y) / (nose.y - chin.y)) * browSmoothing;
  smoothBrowRight =
    smoothBrowRight * (1 - browSmoothing) +
    ((rightEyeBrow.y - rightEye.y) / (nose.y - chin.y)) * browSmoothing;
  let averageBrow = (smoothBrowLeft + smoothBrowRight) / 2;
  // Linear mapping of averageBrow to [0, 5]
  const browMin = 0.2;
  const browMax = 0.35;
  const mappedBrow = THREE.MathUtils.clamp(
    ((averageBrow - browMin) / (browMax - browMin)) * 2,
    0,
    4,
  );

  return {
    mouthOpen: smoothMouthOpen,
    yaw,
    pitch,
    roll,
    eyeLeftClose: smoothEyeLeft,
    eyeRightClose: smoothEyeRight,
    averageBrow: mappedBrow,
    viseme: smoothViseme,
  };
}
