import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei';
import './App.css'
import Avatar from './components/Avatar';
import Room from './components/Room';


function App() {

  return (
    <div id="canvas-container">
      <Canvas id="avatar-canvas" shadows camera={{ position: [5, 5, 5], fov: 50 }} style={{ width: '100vw', height: '100vh' }}>
      
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 5]} intensity={0.8} castShadow />
      <Room />
      <OrbitControls />
      <Avatar scale={0.01} position={[0, 0, 0]}/>
      </Canvas>
    </div>
  )
}

export default App