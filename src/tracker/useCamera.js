export default function useCamera(
  videoRef,
  setVideoReady,
  setErrMsg,
  canvasRef
) {
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

    if (canvasRef?.current) {
      const ctx = canvasRef.current.getContext("2d");
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    }
  };

  return { startCamera, stopCamera };
}
