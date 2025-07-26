export const faceDataRef = { current: null };

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

  return {
    position,
    mouthOpen,
    yaw,
    pitch,
  };
}
