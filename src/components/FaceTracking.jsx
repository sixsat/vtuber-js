import { useEffect, useRef, useState } from 'react';
import { FaceLandmarker, FilesetResolver, DrawingUtils } from '@mediapipe/tasks-vision';
import faceLandmarkerTask from '../assets/face_landmarker.task';
import Camera from './Camera';

const FaceTracking = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);

  const [faceLandmarker, setFaceLandmarker] = useState(null);
  const [isCameraEnabled, setIsCameraEnabled] = useState(false);
  const [isStreamActive, setIsStreamActive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const canvasCtx2D = '2d';

  const createFaceLandmarker = async () => {
    try {
      const filesetResolver = await FilesetResolver.forVisionTasks(
        'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm',
      );
      const newFaceLandmarker = await FaceLandmarker.createFromOptions(filesetResolver, {
        baseOptions: {
          modelAssetPath: faceLandmarkerTask,
          delegate: 'GPU',
        },
        outputFaceBlendshapes: true,
        outputFacialTransformationMatrixes: true,
        runningMode: 'VIDEO',
        numFaces: 1,
      });
      setFaceLandmarker(newFaceLandmarker);
      setIsLoading(false);
    } catch (err) {
      console.error('Error creating FaceLandmarker:', err);
      setIsLoading(false);
    }
  };

  const drawCanvas = () => {
    if (!isStreamActive || !videoRef.current || !canvasRef.current || !faceLandmarker) {
      return;
    }

    const video = videoRef.current;
    if (video.readyState < HTMLMediaElement.HAVE_CURRENT_DATA) {
      animationFrameRef.current = requestAnimationFrame(drawCanvas);
      return;
    }

    const canvas = canvasRef.current;
    const canvasCtx = canvas.getContext(canvasCtx2D);
    if (canvas.width !== video.videoWidth) {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
    }

    const results = faceLandmarker.detectForVideo(video, performance.now());
    canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
    if (results.faceLandmarks) {
      const drawingUtils = new DrawingUtils(canvasCtx);
      for (const landmarks of results.faceLandmarks) {
        drawingUtils.drawConnectors(landmarks, FaceLandmarker.FACE_LANDMARKS_FACE_OVAL, {
          color: '#C0C0C0',
        });
        drawingUtils.drawConnectors(landmarks, FaceLandmarker.FACE_LANDMARKS_TESSELATION, {
          color: '#C0C0C050',
          lineWidth: 1,
        });
        drawingUtils.drawConnectors(landmarks, FaceLandmarker.FACE_LANDMARKS_RIGHT_EYEBROW, {
          color: '#FF0000',
          lineWidth: 1,
        });
        drawingUtils.drawConnectors(landmarks, FaceLandmarker.FACE_LANDMARKS_RIGHT_EYE, {
          color: '#FF0000',
          lineWidth: 1,
        });
        drawingUtils.drawConnectors(landmarks, FaceLandmarker.FACE_LANDMARKS_RIGHT_IRIS, {
          color: '#FF0000',
          lineWidth: 1,
        });
        drawingUtils.drawConnectors(landmarks, FaceLandmarker.FACE_LANDMARKS_LEFT_EYEBROW, {
          color: '#FF0000',
          lineWidth: 1,
        });
        drawingUtils.drawConnectors(landmarks, FaceLandmarker.FACE_LANDMARKS_LEFT_EYE, {
          color: '#FF0000',
          lineWidth: 1,
        });
        drawingUtils.drawConnectors(landmarks, FaceLandmarker.FACE_LANDMARKS_LEFT_IRIS, {
          color: '#FF0000',
          lineWidth: 1,
        });
        drawingUtils.drawConnectors(landmarks, FaceLandmarker.FACE_LANDMARKS_LIPS, {
          color: '#FF0000',
          lineWidth: 1,
        });
      }
    }
    animationFrameRef.current = requestAnimationFrame(drawCanvas);
  };

  useEffect(() => {
    createFaceLandmarker();
  }, []);

  useEffect(() => {
    if (isStreamActive && faceLandmarker) {
      animationFrameRef.current = requestAnimationFrame(drawCanvas);
    }

    // Cleanup function
    return () => {
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [isStreamActive, faceLandmarker]);

  return (
    <>
      <div className="">
        {isLoading && <p>Loading model, please wait...</p>}
        <button onClick={() => setIsCameraEnabled(true)} disabled={isLoading || isCameraEnabled}>
          Enable Camera
        </button>
        <button onClick={() => setIsCameraEnabled(false)} disabled={!isCameraEnabled}>
          Disable Camera
        </button>
      </div>
      <div className="">
        <Camera
          videoRef={videoRef}
          isCameraEnabled={isCameraEnabled}
          onStreamReady={() => {
            setIsStreamActive(true);
          }}
          onStreamStop={() => {
            setIsStreamActive(false);
            // clear the canvas when the stream stop
            const canvas = canvasRef.current;
            if (canvas) {
              const context = canvas.getContext(canvasCtx2D);
              context.clearRect(0, 0, canvas.width, canvas.height);
            }
          }}
        />
        <canvas ref={canvasRef} className=""></canvas>
      </div>
    </>
  );
};

export default FaceTracking;
