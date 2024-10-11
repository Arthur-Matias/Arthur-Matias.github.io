import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { fragmentShader, vertexShader } from './shaders';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';

const BlobBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null); // Create a ref for the mount point

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 1, 10000);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;

    // Create geometry and shader material
    const geometry = new THREE.IcosahedronGeometry(1, 200);
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: new THREE.Vector3(0, 0.1, 0.7) },
      },
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Add lights
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.75);
    directionalLight.position.set(5, 5, 5);
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(directionalLight, ambientLight);

    // Effect Composer for post-processing
    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    composer.addPass(new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 0.7, 0.4, 0.4));

    camera.position.z = 3;
    camera.lookAt(0, 0, 0);

    // Append renderer to the React reference
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Animation loop
    const animate = (timestamp: DOMHighResTimeStamp) => {
      const time = timestamp / 10000;
      material.uniforms.uTime.value = time;

      // Use composer for rendering with bloom effect
      composer.render();
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate); // Store the ID of the animation frame

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      composer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '100%' }} />; // Return a div with ref
};

export default BlobBackground;
