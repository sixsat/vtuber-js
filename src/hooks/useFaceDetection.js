import { useEffect, useRef, useCallback } from "react";
import { faceDataRef } from "../utils/getFaceControls";
import drawGreenPoints from "../utils/drawGreenPoints";

export default function useFaceDetection(
  model,
  videoRef,
  canvasRef,
  videoReady,
  drawGreenPointsEnabled = false
) {
  const animationFrameId = useRef(null);

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

        if (drawGreenPointsEnabled) {
          drawGreenPoints(ctx, faceDataRef.current);
        } else {
          for (const point of faceDataRef.current) {
            ctx.beginPath();
            ctx.arc(point.x, point.y, 2, 0, 2 * Math.PI);
            ctx.fillStyle = "lime";
            ctx.fill();
          }
        }
      } else {
        faceDataRef.current = null;
      }
    } catch (err) {
      console.error("Face detection failed:", err);
    }

    animationFrameId.current = requestAnimationFrame(detectFaces);
  }, [model, videoReady, drawGreenPointsEnabled, videoRef, canvasRef]);

  useEffect(() => {
    if (model && videoReady) {
      animationFrameId.current = requestAnimationFrame(detectFaces);
    } else if (animationFrameId.current !== null) {
      cancelAnimationFrame(animationFrameId.current);
      animationFrameId.current = null;
    }

    return () => {
      if (animationFrameId.current !== null) {
        cancelAnimationFrame(animationFrameId.current);
        animationFrameId.current = null;
      }
    };
  }, [model, videoReady, detectFaces]);
}
