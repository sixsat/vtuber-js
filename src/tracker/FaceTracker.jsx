import { useRef, useState, useEffect, useCallback } from "react";
import * as faceLandmarksDetection from "@tensorflow-models/face-landmarks-detection";
import "@tensorflow/tfjs-backend-webgl";
import { faceDataRef } from "./getFaceData";

function FaceTracker() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const animationFrameId = useRef(null);
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
      if (animationFrameId.current !== null) {
        cancelAnimationFrame(animationFrameId.current);
        animationFrameId.current = null;
      }
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
    if (animationFrameId.current !== null) {
      cancelAnimationFrame(animationFrameId.current);
      animationFrameId.current = null;
    }

    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    }
  };

  const detectFaces = useCallback(async () => {
    if (
      !model ||
      !videoRef.current ||
      !videoReady ||
      videoRef.current.readyState !== 4
    ) {
      return;
    }

    try {
      const faces = await model.estimateFaces(videoRef.current);
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (faces.length > 0) {
        faceDataRef.current = faces[0].keypoints;
        for (const point of faceDataRef.current) {
          ctx.beginPath();
          ctx.arc(point.x, point.y, 2, 0, 2 * Math.PI);
          ctx.fillStyle = "lime";
          ctx.fill();
        }

      } else {
        faceDataRef.current = null;
      }
    } catch (err) {
      console.error("Face detection failed:", err);
    }

    animationFrameId.current = requestAnimationFrame(detectFaces);
  }, [model, videoReady]);

  useEffect(() => {
    if (model && videoReady) {
      animationFrameId.current = requestAnimationFrame(detectFaces);
    } else {
      if (animationFrameId.current !== null) {
        cancelAnimationFrame(animationFrameId.current);
        animationFrameId.current = null;
      }
    }
    return () => {
      if (animationFrameId.current !== null) {
        cancelAnimationFrame(animationFrameId.current);
        animationFrameId.current = null;
      }
    };
  }, [model, videoReady, detectFaces]);

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
        <canvas
          ref={canvasRef}
          width={640}
          height={480}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            pointerEvents: "none",
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
