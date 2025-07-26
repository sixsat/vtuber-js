import { useEffect, useRef } from 'react';

const Camera = ({ videoRef, onStreamReady, onStreamStop, isCameraEnabled }) => {
  const mediaStreamRef = useRef(null);

  const enableCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      mediaStreamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
      onStreamReady(stream);
    } catch (err) {
      console.error('Error accessing camera: ', err);
      onStreamStop();
    }
  };

  const disableCamera = () => {
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach((track) => track.stop());
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
    mediaStreamRef.current = null;
    onStreamStop();
  };

  useEffect(() => {
    if (isCameraEnabled) {
      enableCamera();
    } else {
      if (mediaStreamRef.current) {
        disableCamera();
      }
    }

    // Cleanup function
    return () => {
      if (mediaStreamRef.current) {
        disableCamera();
      }
    };
  }, [isCameraEnabled, onStreamReady, onStreamStop, videoRef]);

  return <video ref={videoRef} autoPlay playsInline className=""></video>;
};

export default Camera;
