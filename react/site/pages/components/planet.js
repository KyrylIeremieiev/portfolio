import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const SpinningPlanet = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Make the big sphere 2 times bigger
    const planetGeometry = new THREE.SphereGeometry(2, 32, 32);
    const planetMaterial = new THREE.MeshBasicMaterial({ color: 0x5D12D2 }); // Set big sphere color to #5D12D2
    const planet = new THREE.Mesh(planetGeometry, planetMaterial);
    scene.add(planet);

    // Create random dots orbiting the planet
    const dotCount = 100;
    const dotGeometry = new THREE.SphereGeometry(0.04, 16, 16);
    const dotMaterial = new THREE.MeshBasicMaterial({ color: 0xFFE5E5 }); // Set dot color to #FFE5E5

    for (let i = 0; i < dotCount; i++) {
      const dot = new THREE.Mesh(dotGeometry, dotMaterial);
      const phi = Math.random() * Math.PI * 2;
      const theta = Math.random() * Math.PI;
      const radius = 2.2; // Smaller radius brings dots closer to the big sphere
      dot.position.set(
        radius * Math.sin(theta) * Math.cos(phi),
        radius * Math.sin(theta) * Math.sin(phi),
        radius * Math.cos(theta)
      );
      planet.add(dot);
    }

    // Rest of your code for animation...

    const animate = () => {
      planet.rotation.x += 0.005;
      planet.rotation.y += 0.005;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      // Clean up any resources if needed
    };
  }, []);

  return <div ref={containerRef} style={{ width: '100vw', height: '100vh' }} />;
};

export default SpinningPlanet;
