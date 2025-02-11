import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Box, Torus } from '@react-three/drei';
import * as THREE from 'three';

export default function FloatingShapes() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2;
      group.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.2;
    }
  });

  return (
    <group ref={group}>
      <Sphere args={[1, 32, 32]} position={[-4, 2, -5]}>
        <meshStandardMaterial
          color="#4f46e5"
          roughness={0.3}
          metalness={0.8}
        />
      </Sphere>

      <Box args={[1.5, 1.5, 1.5]} position={[4, -2, -3]}>
        <meshStandardMaterial
          color="#10b981"
          roughness={0.3}
          metalness={0.8}
        />
      </Box>

      <Torus args={[1, 0.3, 16, 32]} position={[0, 3, -4]} rotation={[Math.PI / 4, 0, 0]}>
        <meshStandardMaterial
          color="#f59e0b"
          roughness={0.3}
          metalness={0.8}
        />
      </Torus>
    </group>
  );
}