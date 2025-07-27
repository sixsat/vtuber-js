export const faceDataRef = { current: null };

const getEAR = (top, bottom, left, right) => {
  const vertical = Math.hypot(top.y - bottom.y);
  const horizontal = Math.hypot(left.x - right.x);
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

  const position = nose;

  const mouthOpen = Math.abs(mouthUpper.y - mouthLower.y);

  const dx = rightEye.x - leftEye.x;
  const dy = rightEye.y - leftEye.y;
  const yaw = Math.atan2(dy, dx) * (180 / Math.PI);

  const chin = kp[152];
  const midEyes = getAvg(leftEye, rightEye);
  const dyPitch = chin.y - midEyes.y;
  const dzPitch = chin.z - midEyes.z;
  const pitch = Math.atan2(dyPitch, dzPitch) * (180 / Math.PI);

  const leftEAR = getEAR(kp[159], kp[145], kp[33], kp[133]);
  const rightEAR = getEAR(kp[386], kp[374], kp[362], kp[263]);
  const blink = (leftEAR + rightEAR) / 2 < 0.22;

  return {
    position,
    mouthOpen,
    yaw,
    pitch,
    blink,
  };
}
