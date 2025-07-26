import { useRef, useState, useEffect } from "react";
import * as faceLandmarksDetection from "@tensorflow-models/face-landmarks-detection";
import "@tensorflow/tfjs-backend-webgl";

function FaceTracker() {
  const videoRef = useRef(null);
  const [model, setModel] = useState(null);
  const [errMsg, setErrMsg] = useState("");
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    if (isCameraOn) {
      const loadModel = async () => {
        try {
          const loadedModel = await faceLandmarksDetection.createDetector(
            faceLandmarksDetection.SupportedModels.MediaPipeFaceMesh,
            {
              runtime: "mediapipe",
              solutionPath: "https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh",
              maxFaces: 1,
            }
          );
          setModel(loadedModel);
          setErrMsg("");
        } catch (err) {
          setErrMsg("Failed to load face mesh model");
          console.error(err);
        }
      };
      loadModel();
    } else {
      setModel(null);
    }
  }, [isCameraOn]);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });

      if (videoRef.current) {
        setVideoReady(false);
        videoRef.current.srcObject = stream;

        const onPlaying = () => {
          setVideoReady(true);
          videoRef.current.removeEventListener("playing", onPlaying);
        };
        videoRef.current.addEventListener("playing", onPlaying);
      }
      setErrMsg("");
    } catch (err) {
      if (err.name === "NotAllowedError") {
        setErrMsg("Permission denied: Please allow camera access.");
      } else if (err.name === "NotFoundError") {
        setErrMsg("No camera device found.");
      } else {
        setErrMsg("Error accessing webcam");
      }
      console.error(err);
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
    setIsCameraOn(false);
    setVideoReady(false);
    setModel(null);
  };

  const toggleCamera = () => {
    if (isCameraOn) {
      stopCamera();
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
          border: "1px solid #ccc",
          borderRadius: "8px",
          backgroundImage: videoReady ? "none" : 'url("/placeholder.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          width={640}
          height={480}
          className="webcam"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
      </div>
      {errMsg && (
        <p className="error-msg" style={{ color: "red" }}>
          {errMsg}
        </p>
      )}
      <div style={{ color: model ? "green" : "red", fontWeight: "bold" }}>
        {model ? "Face Mesh Model Loaded" : "Model not loaded"}
      </div>
      <button
        onClick={toggleCamera}
        style={{ margin: "10px", marginBottom: "10px" }}
      >
        {isCameraOn ? "Stop Camera" : "Start Camera"}
      </button>
    </div>
  );
}

export default FaceTracker;
