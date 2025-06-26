import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function Paraboloid() {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  const resolution = 60;
  const geometry = new THREE.BufferGeometry();
  const positions = [];

  for (let i = 0; i <= resolution; i++) {
    const theta = (i / resolution) * 2 * Math.PI;
    for (let j = 0; j <= resolution; j++) {
      const r = j / resolution * 3;
      const x = r * Math.cos(theta);
      const y = r * Math.sin(theta);
      const z = x * x + y * y;
      positions.push(x, y, z * 0.05); // スケール調整
    }
  }

  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

  return (
    <mesh ref={meshRef}>
      <bufferGeometry attach="geometry" {...geometry} />
      <meshStandardMaterial color="#ff4081" wireframe />
    </mesh>
  );
}

function InteractiveParaboloid() {
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
        <Paraboloid />
      </Canvas>
    </div>
  );
}

export default InteractiveParaboloid;
