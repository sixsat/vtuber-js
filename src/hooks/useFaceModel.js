import { useEffect, useState } from 'react';
import * as faceLandmarksDetection from '@tensorflow-models/face-landmarks-detection';

export default function useFaceModel(isCameraOn) {
  const [model, setModel] = useState(null);
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    if (!isCameraOn) {
      setModel(null);
      return;
    }
    const loadModel = async () => {
      try {
        const loadedModel = await faceLandmarksDetection.createDetector(
          faceLandmarksDetection.SupportedModels.MediaPipeFaceMesh,
          {
            runtime: 'mediapipe',
            solutionPath: 'https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh',
            maxFaces: 1,
          },
        );
        setModel(loadedModel);
        setErrMsg('');
      } catch (err) {
        setErrMsg('Failed to load face mesh model');
        console.error(err);
      }
    };
    loadModel();
  }, [isCameraOn]);

  return { model, errMsg, setErrMsg };
}
