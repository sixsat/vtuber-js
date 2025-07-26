import { useRef, useState } from 'react';
import useFaceModel from '../hooks/useFaceModel';
import useCamera from '../hooks/useCamera';
import useFaceDetection from '../hooks/useFaceDetection';

function FaceTracker() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const [isCameraOn, setIsCameraOn] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const { model, errMsg, setErrMsg } = useFaceModel(isCameraOn);
  const { startCamera, stopCamera } = useCamera(videoRef, setVideoReady, setErrMsg, canvasRef);
  useFaceDetection(model, videoRef, canvasRef, videoReady, true);

  const toggleCamera = () => {
    if (isCameraOn) {
      stopCamera();
      setIsCameraOn(false);
      setVideoReady(false);
    } else {
      startCamera();
      setIsCameraOn(true);
    }
  };

  return (
    <div className="face-tracker">
      <div
        style={{
          width: 640,
          height: 480,
          border: '1px solid #ccc',
          borderRadius: '8px',
          backgroundImage: videoReady ? 'none' : 'url("/placeholder.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
        }}>
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          width={640}
          height={480}
          className="webcam"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '8px',
          }}
        />
        <canvas
          ref={canvasRef}
          width={640}
          height={480}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            pointerEvents: 'none',
          }}
        />
      </div>
      {errMsg && (
        <p className="error-msg" style={{ color: 'red' }}>
          {errMsg}
        </p>
      )}
      <div style={{ color: model ? 'green' : 'red', fontWeight: 'bold' }}>
        {model ? 'Face Mesh Model Loaded' : 'Model not loaded'}
      </div>
      <button onClick={toggleCamera} style={{ margin: '10px', marginBottom: '10px' }}>
        {isCameraOn ? 'Stop Camera' : 'Start Camera'}
      </button>
    </div>
  );
}

export default FaceTracker;
