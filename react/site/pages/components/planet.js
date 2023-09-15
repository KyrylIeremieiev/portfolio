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

    const planetGeometry = new THREE.SphereGeometry(1, 32, 32);

    // Change the planet's color to #4E31AA
    const planetMaterial = new THREE.MeshBasicMaterial({ color: 0x4E31AA });
    const planet = new THREE.Mesh(planetGeometry, planetMaterial);
    scene.add(planet);

    const createRandomDots = () => {
      const dotGeometry = new THREE.SphereGeometry(0.02, 16, 16);
      const dotMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff }); // Set dot color to white
      const dotCount = 100;

      for (let i = 0; i < dotCount; i++) {
        const dot = new THREE.Mesh(dotGeometry, dotMaterial);
        const phi = Math.random() * Math.PI * 2;
        const theta = Math.random() * Math.PI;
        const radius = 1.1;
        dot.position.set(
          radius * Math.sin(theta) * Math.cos(phi),
          radius * Math.sin(theta) * Math.sin(phi),
          radius * Math.cos(theta)
        );
        planet.add(dot);
      }
    };

    createRandomDots();

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

  return <div ref={containerRef} />;
};

export default SpinningPlanet;
