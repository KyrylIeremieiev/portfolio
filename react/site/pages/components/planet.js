import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const SpinningPlanet = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Create a WebGLRenderer with anti-aliasing and a black clear color
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setClearColor(0x000000, 0); // Black background with 0 opacity
renderer.setSize(window.innerWidth, window.innerHeight);
containerRef.current.appendChild(renderer.domElement);


    const planetGeometry = new THREE.SphereGeometry(1, 32, 32);

    // Create a shader material with a gradient
    const planetMaterial = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normal;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        void main() {
          vec3 color1 = vec3(162.0 / 255.0, 135.0 / 255.0, 244.0 / 255.0); // #A287F4
          vec3 color2 = vec3(122.0 / 255.0, 87.0 / 255.0, 209.0 / 255.0);  // #7A57D1
          float gradient = (vNormal.y + 1.0) / 2.0; // Map normal.y from [-1, 1] to [0, 1]
          vec3 finalColor = mix(color1, color2, gradient);
          gl_FragColor = vec4(finalColor, 1.0);
        }
      `,
    });

    const planet = new THREE.Mesh(planetGeometry, planetMaterial);
    planet.scale.set(1.5, 1.5, 1.5);
    scene.add(planet);

    const createRandomDots = () => {
      const dotGeometry = new THREE.SphereGeometry(0.02, 16, 16);
      const dotMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
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
