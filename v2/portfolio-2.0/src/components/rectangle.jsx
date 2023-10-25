import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const WhiteCuboid = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Add a white cuboid
    const cuboidGeometry = new THREE.BoxGeometry(2, 2, 2);
    const cuboidMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff }); // Use MeshPhongMaterial for lighting
    const cuboid = new THREE.Mesh(cuboidGeometry, cuboidMaterial);
    scene.add(cuboid);

    // Add directional light to illuminate the cuboid
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1).normalize();
    scene.add(directionalLight);

    // Animation code...
    const animate = () => {
      // Animation code...
    };

    animate();

    return () => {
      // Clean up any resources if needed
    };
  }, []);

  return <div ref={containerRef} className='cuboid' style={{ width: '100%', height: '100%' }} />;
};

export default WhiteCuboid;
