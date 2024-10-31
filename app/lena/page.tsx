"use client"
import React, { useState, useEffect, useRef } from 'react'; 
import { Canvas, ThreeEvent, useFrame } from '@react-three/fiber'; 
import { PerspectiveCamera, OrbitControls, Html } from '@react-three/drei'; 
import * as THREE from 'three'; 

type Spot = { 
    id: number; 
    position: [number, number, number]; 
    videoUrl: string; 
    details: string; 
    matchInfo: string; // Ex: "TGB vs ESBVA - Journée 1"
    timeInfo: string;  // Ex: "1e quart temps 4'54 - 3 pts"
}; 


const BasketPage: React.FC = () => { 
    const [activeSpot, setActiveSpot] = useState<Spot | null>(null); 
    const [isClient, setIsClient] = useState(false); 
    const [mousePos, setMousePos] = useState<[number, number]>([0, 0]); 
    const canvasRef = useRef<HTMLCanvasElement>(null); 
    const detailsRef = useRef<HTMLDivElement>(null); 

    useEffect(() => { 
        setIsClient(true); 

        const handleMouseMove = (event: MouseEvent) => {
            setMousePos([event.clientX, event.clientY]);
        };

        document.addEventListener("mousemove", handleMouseMove);
        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    useEffect(() => { 
        const handleOutsideClick = (event: MouseEvent) => { 
            const target = event.target as HTMLElement; 

            if ( 
                activeSpot && 
                detailsRef.current && 
                !detailsRef.current.contains(target) && 
                !target.closest(".spot-mesh") 
            ) { 
                setTimeout(() => { 
                    setActiveSpot(null); 
                }, 50); 
            } 
        }; 

        document.addEventListener("click", handleOutsideClick); 
        return () => { 
            document.removeEventListener("click", handleOutsideClick); 
        }; 
    }, [activeSpot]); 

    const spots: Spot[] = [ 
        { 
            id: 1, 
            position: [-8, 0.1, 1], 
            videoUrl: '/videos/panier1.mp4', 
            details: 'Saison 2022-2023', 
            matchInfo: 'LBB vs TGB - Journée 12', 
            timeInfo: '4e quart temps 3\'24 - Lay Up' 
        }, 
        { 
            id: 2, 
            position: [5, 0.1, -3], 
            videoUrl: '/videos/panier2.mp4', 
            details: 'Saison 2023-2024', 
            matchInfo: 'TGB vs BLB - Journée 5', 
            timeInfo: '2e quart temps 0\'57 - 3 pts' 
        }, 
        { 
            id: 3, 
            position: [3, 0.1, -0.5], 
            videoUrl: '/videos/panier3.mp4', 
            details: 'Saison 2023-2024',
            matchInfo: 'TGB vs RVB - Journée 8', 
            timeInfo: '2e quart temps 6\'48 - 3 pts' 
        }, 
        { 
            id: 4, 
            position: [8, 0.1, 1], 
            videoUrl: '/videos/panier4.mp4', 
            details: 'Saison 2023-2024',
            matchInfo: 'TGB vs BLM - Journée 9', 
            timeInfo: '2e quart temps 1\'34 - 2 pts' 
        }, 
        { 
            id: 5, 
            position: [5.5, 0.1, 3.8], 
            videoUrl: '/videos/panier5.mp4', 
            details: 'Saison 2023-2024',
            matchInfo: 'TGB vs BLM - Journée 9', 
            timeInfo: '2e quart temps 4\'34 - 3 pts'
        }, 
        { 
            id: 6, 
            position: [-8.5, 0.1, 0.5], 
            videoUrl: '/videos/panier6.mp4', 
            details: 'Saison 2023-2024',
            matchInfo: 'FCB vs TGB - Journée 7', 
            timeInfo: '4e quart temps 0\'21 - 2 pts' 
        }, 
        { 
            id: 7, 
            position: [-4.2, 0.1, 2.5], 
            videoUrl: '/videos/panier7.mp4', 
            details: 'Saison 2023-2024',
            matchInfo: 'FCB vs TGB - Journée 7', 
            timeInfo: '4e quart temps 3\'07 - 3 pts' 
        }, 
        { 
            id: 8, 
            position: [8, 0.1, 0.5], 
            videoUrl: '/videos/panier8.mp4', 
            details: 'Saison 2023-2024',
            matchInfo: 'SAH vs TGB - Journée 14', 
            timeInfo: '1e quart temps 0\'04 - 2 pts' 
        }, 
        { 
            id: 9, 
            position: [3.6, 0.1, 2], 
            videoUrl: '/videos/panier9.mp4', 
            details: 'Saison 2023-2024',
            matchInfo: 'BLB vs TGB - Journée 16', 
            timeInfo: '2e quart temps 0\'19 - 3 pts' 
        }, 
        { 
            id: 10, 
            position: [-5.5, 0.1, -3.5], 
            videoUrl: '/videos/panier10.mp4', 
            details: 'Saison 2023-2024',
            matchInfo: 'RVB vs TGB - Journée 19', 
            timeInfo: '3e quart temps 1\'05 - 3 pts' 
        }, 
        { 
            id: 11, 
            position: [-8.5, 0.1, 4.2], 
            videoUrl: '/videos/panier11.mp4', 
            details: 'Saison 2023-2024',
            matchInfo: 'RVB vs TGB - Journée 19', 
            timeInfo: '4e quart temps 0\'41 - 3 pts' 
        }, 
        { 
            id: 12, 
            position: [-4.8, 0.1, -3.], 
            videoUrl: '/videos/panier12.mp4', 
            details: 'Saison 2024-2025',
            matchInfo: 'UFA vs TGB - Journée 1', 
            timeInfo: '4e quart temps 7\'22 - 3 pts' 
        }, 

    ];
    

    const handleSpotClick = (event: ThreeEvent<MouseEvent>, spot: Spot) => { 
        setActiveSpot({ ...spot });

        if (canvasRef.current) {
            const rect = canvasRef.current.getBoundingClientRect();
            const x = ((mousePos[0] - rect.left) / rect.width) * 2 - 1; // Normalize to -1 to 1
            const y = -((mousePos[1] - rect.top) / rect.height) * 2 + 1; // Normalize to -1 to 1
            
            const vector = new THREE.Vector3(x, y, 0.5); // Z is set to 0.5 to go forward
            vector.unproject(event.camera); // Use the camera directly
            
            // Adjust the camera position to zoom towards the clicked spot
            const cameraPosition = new THREE.Vector3();
            cameraPosition.copy(event.camera.position);
            
            cameraPosition.lerp(vector, 0.5); // Adjust the lerp factor to control zoom speed
            event.camera.position.copy(cameraPosition);
            event.camera.lookAt(spot.position[0], spot.position[1], spot.position[2]); // Look at the clicked spot
        }
    }; 

    return ( 
        <div style={{ width: '100vw', height: '100vh' }}> 
            {isClient && ( 
                <Canvas ref={canvasRef}> 
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
                background: 'black', 
                color: 'white', 
                padding: '20px', 
                width:'120vh',
                borderRadius: '12px', 
                border: '2px solid violet', 
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)', 
                pointerEvents: 'auto',  
                maxWidth: '300px',
                textAlign: 'center'
            }} 
        > 
            <h2 style={{ margin: '0', fontSize: '1.2em' }}>{activeSpot.matchInfo}</h2> 
            <p style={{ margin: '5px 0', fontSize: '0.9em' }}>{activeSpot.timeInfo}</p>
            <video controls width="100%" style={{ marginTop: '10px', borderRadius: '8px' }}> 
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
