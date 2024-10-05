import * as THREE from 'three';
import { useEffect, useRef } from 'react';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';

interface FlowTextEffectProps {
    text: string;
    shouldAnimate: boolean;
}

const FlowTextEffect: React.FC<FlowTextEffectProps> = ({ text, shouldAnimate }) => {
    const canvasRef = useRef<HTMLDivElement>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const sceneRef = useRef<THREE.Scene | null>(null);
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
    const particlesRef = useRef<THREE.Points | null>(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x000000); // Set to black for better visibility
        sceneRef.current = scene;

        const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
        camera.position.set(0, 0, 600);
        cameraRef.current = camera;

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        if (canvasRef.current) {
            canvasRef.current.appendChild(renderer.domElement);
        }
        rendererRef.current = renderer;

        const loader = new FontLoader();
        loader.load('https://threejs.org/fonts/helvetiker_regular.typeface.json', (font) => {
            const shapes = font.generateShapes(text, 100);
            const geometry = new THREE.ShapeGeometry(shapes);
            geometry.computeBoundingBox();

            const boundingBox = geometry.boundingBox;
            if (boundingBox) {
                const xMid = -0.5 * (boundingBox.max.x - boundingBox.min.x);
                geometry.translate(xMid, 0, 0);

                const textMaterial = new THREE.MeshBasicMaterial({
                    color: 0xffffff, // Set text color to white
                    transparent: true,
                    opacity: shouldAnimate ? 1 : 0,
                });
                const textMesh = new THREE.Mesh(geometry, textMaterial);
                scene.add(textMesh);

                const lineMaterial = new THREE.LineBasicMaterial({ color: 0x00ff00 }); // Change to a contrasting color
                const lineText = new THREE.Object3D();

                for (let shape of shapes) {
                    const points = shape.getPoints();
                    const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
                    const lineMesh = new THREE.Line(lineGeometry, lineMaterial);
                    lineText.add(lineMesh);
                }

                scene.add(lineText);
                createParticles(scene, boundingBox);
                animate();
            }
        });

        window.addEventListener('resize', onWindowResize);

        return () => {
            if (canvasRef.current) {
                canvasRef.current.removeChild(renderer.domElement);
            }
            window.removeEventListener('resize', onWindowResize);
        };
    }, [text]);

    const createParticles = (scene: THREE.Scene, boundingBox: THREE.Box3) => {
        const particleCount = 1000;
        const particles = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        for (let i = 0; i < particleCount; i++) {
            positions[i * 3] = (Math.random() - 0.5) * (boundingBox.max.x - boundingBox.min.x);
            positions[i * 3 + 1] = (Math.random() - 0.5) * (boundingBox.max.y - boundingBox.min.y);
            positions[i * 3 + 2] = (Math.random() - 0.5) * (boundingBox.max.z - boundingBox.min.z);
        }
        particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        const particleMaterial = new THREE.PointsMaterial({ color: 0xff0000, size: 0.5 }); // Red particles
        particlesRef.current = new THREE.Points(particles, particleMaterial);
        scene.add(particlesRef.current);
    };

    const animate = () => {
        requestAnimationFrame(animate);
        if (particlesRef.current) {
            particlesRef.current.rotation.y += 0.01; // Example rotation
        }
        if (sceneRef.current && cameraRef.current && rendererRef.current) {
            rendererRef.current.render(sceneRef.current, cameraRef.current);
        }
    };

    const onWindowResize = () => {
        if (cameraRef.current) {
            cameraRef.current.aspect = window.innerWidth / window.innerHeight;
            cameraRef.current.updateProjectionMatrix();
        }
        rendererRef.current?.setSize(window.innerWidth, window.innerHeight);
    };

    return <div ref={canvasRef} style={{ width: '100%', height: '100%' }} />;
};

export default FlowTextEffect;
