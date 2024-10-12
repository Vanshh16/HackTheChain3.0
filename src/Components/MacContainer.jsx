import { useGLTF, useScroll, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

export default function MacContainer({ onScreenOpen }) {
  let model = useGLTF('/mac.glb');
  let tex = useTexture('./red.jpg');
  let meshes = {};
  let targetCameraPosition = useRef(new THREE.Vector3(0, 0, 220)); // Starting camera position
  const hasNavigated = useRef(false); // Track if navigation has occurred

  model.scene.traverse((e) => {
    meshes[e.name] = e;
  });

  meshes.screen.rotation.x = THREE.MathUtils.degToRad(180);
  meshes.matte.material.map = tex;
  meshes.matte.material.emissiveIntensity = -0.3;
  meshes.matte.material.metalness = 0;
  meshes.matte.material.roughness = 1;

  let data = useScroll();

  useFrame((state) => {
    const screenRotation = 180 - data.offset * 90; // Calculate the rotation based on scroll offset
    meshes.screen.rotation.x = THREE.MathUtils.degToRad(screenRotation);

    // Check if the screen is fully opened to 90 degrees
    if (screenRotation <= 90) {
      // Set target z-value for zoom (e.g., z = 200)
      targetCameraPosition.current.lerp(new THREE.Vector3(0, 0, 200), 0.08); // Adjust 0.05 for zoom speed
      state.camera.position.copy(targetCameraPosition.current); // Update camera position
      state.camera.lookAt(0, 0, 0); // Keep the camera looking at the center
    
      // Check if the z-position is close enough to 200 (with a tolerance of 0.1)
      if (!hasNavigated.current && Math.abs(targetCameraPosition.current.z - 200) < 0.1) {
        hasNavigated.current = true; // Prevent multiple navigations
        onScreenOpen(); // Call the function to navigate to the new component
      }
    }
    
  });

  return (
    <group position={[0, -10, 20]}>
      <primitive object={model.scene} />
    </group>
  );
}
