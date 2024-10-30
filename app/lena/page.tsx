"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Canvas, ThreeEvent } from '@react-three/fiber';
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
    const detailsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setIsClient(true);
        console.log("Rendered on the client:", isClient);

        const handleOutsideClick = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            console.log("Outside click detected");

            // Vérifier si le clic n'est pas dans detailsRef ou un spot
            if (
                activeSpot &&
                detailsRef.current &&
                !detailsRef.current.contains(target) &&
                !target.closest(".spot-mesh")
            ) {
                setTimeout(() => {
                    setActiveSpot(null);
                    console.log("Active spot set to null from outside click");
                }, 50); // Délai pour s'assurer que handleSpotClick passe en premier
            }
        };

        document.addEventListener("click", handleOutsideClick);
        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, [activeSpot]);

    useEffect(() => {
        console.log("Active spot changed:", activeSpot);
    }, [activeSpot]);

    const spots: Spot[] = [
        { id: 1, position: [-8, 0.1, 3], videoUrl: '/videos/panier1.mp4', details: 'Détail du panier 1' },
        { id: 2, position: [3, 0.1, 2], videoUrl: '/videos/panier2.mp4', details: 'Détail du panier 2' },
    ];

    const handleSpotClick = (event: ThreeEvent<MouseEvent>, spot: Spot) => {
        console.log("Spot clicked:", spot);

        setActiveSpot({ ...spot });
        console.log("Active spot set to:", spot);

        console.log("Spot clicked (adjusted position):", {
            ...spot,
            adjustedPosition: [spot.position[0], spot.position[1] + 0.2, spot.position[2]]
        });
    };

    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            {isClient && (
                <Canvas>
                    <PerspectiveCamera makeDefault position={[0, 1.6, 10]} />
                    <OrbitControls enablePan={false} enableZoom={true} minPolarAngle={-1} maxPolarAngle={Math.PI / 2} />

                    {/* Ground */}
                    <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                        <planeGeometry args={[20, 10]} />
                        <meshBasicMaterial map={new THREE.TextureLoader().load('/terrain.png')} />
                    </mesh>

                    {/* Spots */}
                    {spots.map((spot) => (
                        <mesh
                            key={spot.id}
                            position={spot.position}
                            onClick={(e) => handleSpotClick(e, spot)}
                            className="spot-mesh"
                        >
                            <sphereGeometry args={[0.2, 32, 32]} />
                            <meshStandardMaterial emissive="green" color="green" />
                        </mesh>
                    ))}

                    {/* Displaying details */}
                    {activeSpot && (
                        <Html position={[activeSpot.position[0], activeSpot.position[1] + 1, activeSpot.position[2]]}>
                            <div
                                ref={detailsRef}
                                className="details-block"
                                style={{
                                    background: 'white',
                                    padding: '10px',
                                    borderRadius: '8px',
                                    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                                    pointerEvents: 'auto', 
                                }}
                            >
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
