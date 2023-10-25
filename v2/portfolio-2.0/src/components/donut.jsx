import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const Donut = () => {
  const donutRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    donutRef.current.appendChild(renderer.domElement);

    const donutGeometry = new THREE.TorusGeometry(1, 0.4, 16, 100);
    const donutMaterial = new THREE.MeshStandardMaterial({ color: 0x662549, transparent: true, opacity: 0.8 });
    const donut = new THREE.Mesh(donutGeometry, donutMaterial);
    scene.add(donut);

    const light = new THREE.PointLight(0xffffff);
    light.position.set(5, 5, 5);
    scene.add(light);

    const animate = () => {
      requestAnimationFrame(animate);

      if (donut) {
        donut.rotation.x += 0.01;
        donut.rotation.y += 0.01;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      // Clean up Three.js scene and resources if necessary
    };
  }, []);

  return <div ref={donutRef} className='Donut' style={{ width: '100vw', height: '100vh' }} />;
};

export default Donut;
