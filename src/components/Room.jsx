import React from 'react';
import { OrbitControls, Grid } from '@react-three/drei'

function Room() {
  return (
    <>
      {/* Floor */}
      <mesh receiveShadow rotation-x={-Math.PI / 2} position={[0, 0, 0]}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#dddddd" />
      </mesh>

      {/* Grid */}
      <Grid
        position={[0, 0.001, 0]} // slightly above the floor to avoid z-fighting
        args={[10, 10]}
        cellSize={0.5}
        cellThickness={0.5}
        sectionSize={5}
        sectionThickness={1}
        fadeDistance={20}
        fadeStrength={1}
        infiniteGrid={true}
      />

      {/* Walls */}
      {/* {[ // 4 walls + ceiling
        { position: [0, 2.5, -5], rotation: [0, 0, 0] }, // back wall
        { position: [0, 2.5, 5], rotation: [0, Math.PI, 0] }, // front wall
        { position: [-5, 2.5, 0], rotation: [0, Math.PI / 2, 0] }, // left wall
        { position: [5, 2.5, 0], rotation: [0, -Math.PI / 2, 0] }, // right wall
        { position: [0, 5, 0], rotation: [Math.PI / 2, 0, 0] } // ceiling
      ].map((wall, i) => (
        <mesh key={i} position={wall.position} rotation={wall.rotation}>
          <planeGeometry args={[10, 5]} />
          <meshStandardMaterial color="#888888" side={2} />
        </mesh>
      ))} */}
    </>
  )
}

export default Room;
