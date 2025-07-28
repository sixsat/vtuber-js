import { useRef, useState } from 'react';
import useFaceModel from '../hooks/useFaceModel';
import useCamera from '../hooks/useCamera';
import useFaceDetection from '../hooks/useFaceDetection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';

function FaceTracker() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const [isCameraOn, setIsCameraOn] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  const { model, setErrMsg } = useFaceModel(isCameraOn);
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
    <div className="flex flex-col items-center gap-2">
      <div
        className="relative w-[200px] h-[150px] rounded-2xl overflow-hidden border border-gray-300 shadow-lg"
        style={{
          backgroundImage: videoReady ? 'none' : 'url("/vtuber-js/placeholder.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          width={640}
          height={480}
          className="w-full h-full object-cover"
        />
        <canvas
          ref={canvasRef}
          width={640}
          height={480}
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
        />
      </div>
      <button
        onClick={toggleCamera}
        className={`w-10 h-10 rounded-full flex items-center justify-center transition
            ${
              isCameraOn
                ? 'bg-gray-700 text-white shadow-[0_0_10px_rgba(255,255,255,0.3)]'
                : 'bg-black text-white shadow-[0_0_10px_rgba(255,255,255,0.6)]'
            }
            hover:scale-105`}
        aria-label={isCameraOn ? 'Stop Camera' : 'Start Camera'}>
        <FontAwesomeIcon icon={faVideo} />
      </button>
    </div>
  );
}

export default FaceTracker;
