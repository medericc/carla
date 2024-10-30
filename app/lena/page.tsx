"use client";

import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';

type Spot = {
    id: number;
    position: [number, number, number];
    videoUrl: string;
    details: string;
};

const BasketPage: React.FC = () => {
    const [activeSpot, setActiveSpot] = useState<Spot | null>(null);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true); // Confirme que le rendu se fait côté client
    }, []);

    const spots: Spot[] = [
        { id: 1, position: [-2, 0.5, 5], videoUrl: '/videos/panier1.mp4', details: 'Détail du panier 1' },
        { id: 2, position: [3, 0.5, -5], videoUrl: '/videos/panier2.mp4', details: 'Détail du panier 2' },
        // Ajouter d'autres spots ici
    ];

    const handleSpotClick = (spot: Spot) => {
        setActiveSpot(spot);
    };

    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            {isClient && (
                <Canvas>
                    {/* Caméra contrôlable */}
                    <PerspectiveCamera makeDefault position={[0, 1.6, 10]} />
                    <OrbitControls enablePan enableZoom={false} />

                    {/* Terrain */}
                    <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                        <planeGeometry args={[20, 10]} />
                        <meshBasicMaterial map={new THREE.TextureLoader().load('/terrain.png')} />
                    </mesh>

                    {/* Spots */}
                    {spots.map((spot) => (
                        <mesh
                            key={spot.id}
                            position={spot.position}
                            onClick={() => handleSpotClick(spot)}
                        >
                            <sphereGeometry args={[0.2, 32, 32]} />
                            <meshStandardMaterial emissive="green" color="green" />
                        </mesh>
                    ))}

                    {/* Affichage des détails */}
                    {activeSpot && (
                        <Html position={[0, 2, 0]}>
                            <div style={{ background: 'white', padding: '10px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}>
                                <h2>Détails du panier</h2>
                                <p>{activeSpot.details}</p>
                                <video controls width="300">
                                    <source src={activeSpot.videoUrl} type="video/mp4" />
                                    Votre navigateur ne supporte pas la lecture vidéo.
                                </video>
                            </div>
                        </Html>
                    )}
                </Canvas>
            )}
        </div>
    );
};

export default BasketPage;
