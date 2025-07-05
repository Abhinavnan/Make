import React from 'react'
import * as THREE from 'three';
import { Box } from '@mui/material'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, ScrollControls } from '@react-three/drei';
import { OfficeModel } from './Office';

function ThreeJS() {
  return (
    <Canvas camera={{fov: 64, position: [2.3,1.5,2.3]}}>
      <ambientLight intensity={1} />
      <OrbitControls enableZoom={false} />
      {/* <ScrollControls pages={3} damping={0.25}>
        <OfficeModel />
      </ScrollControls> */}
      <mesh>
        <capsuleGeometry args={[1, 1, 4, 8]} />
        <meshBasicMaterial color='#89ffee' />
      </mesh>
    </Canvas>
  )
}

export default ThreeJS
