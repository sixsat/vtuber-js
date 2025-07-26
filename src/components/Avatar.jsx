import {
  Environment,
  OrbitControls,
  useAnimations,
  useGLTF,
} from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { useControls } from "leva";
import { useEffect, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

export default function Avatar() {
  const model = useGLTF('/src/assets/fox.glb');

  const animations = useAnimations(model.animations, model.scene);
  const boneRefs = useRef({});

  const positionmargin = 100;

  useEffect(() => {
    model.scene.traverse((child) => {
      if (child.isBone) {
        boneRefs.current[child.name] = child;
      }
    });
  }, [model]);
 
  const {posx, posy, posz, rotx, roty, rotz} = useControls({
    // posx: {value: boneRefs.current.b_Head_05.position.x, min: -positionmargin, max: positionmargin},
    // posy: {value: boneRefs.current.b_Head_05.position.y, min: -positionmargin, max: positionmargin},  
    // posz: {value: boneRefs.current.b_Head_05.position.z, min: -positionmargin, max: positionmargin},
    rotx: {value: 0, min: 0, max: Math.PI * 2},
    roty: {value: 0, min: 0, max: Math.PI * 2},
    rotz: {value: 0, min: 0, max: Math.PI * 2},
  });

  console.log({
    cur: boneRefs.current,
    head: boneRefs.current.b_Head_05,
  });

  // useEffect(() => {
  //   boneRefs.current["b_Head_05"].position.set(posx, posy, posz);
  //   boneRefs.current["b_Head_05"].rotation.set(rotx, roty, rotz);
  // }, [posx, posy, posz, rotx, roty, rotz]);
  // b_Head_05
  return <primitive object={model.scene} scale={0.05} position-y={0} />;
}
