import { useRef, useState } from "react";

function FaceTracker() {
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const [errMsg, setErrMsg] = useState("");
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });

      if (videoRef.current) {
        setVideoReady(false);
        videoRef.current.srcObject = stream;
        streamRef.current = stream;

        const onPlaying = () => {
          setVideoReady(true);
          videoRef.current.removeEventListener("playing", onPlaying);
        };
        videoRef.current.addEventListener("playing", onPlaying);
      }
      setErrMsg("");
    } catch (err) {
      setErrMsg("Error accessing webcam");
      console.error(err);
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
    setIsCameraOn(false);
    setVideoReady(false);
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
