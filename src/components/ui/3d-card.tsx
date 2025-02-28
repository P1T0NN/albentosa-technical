"use client";

// REACTJS IMPORTS
import React, { useRef, useState } from "react";

// LIBRARIES
import { cn } from "@/lib/utils";

interface Card3DProps {
  className?: string;
  children: React.ReactNode;
  intensity?: number;
}

export const Card3D = ({ 
    className, 
    children, 
    intensity = 15 
}: Card3DProps) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const [shineOpacity, setShineOpacity] = useState(0);
    const [shinePosition, setShinePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        
        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;
        
        const rotateXValue = (mouseY / (rect.height / 2)) * -intensity;
        const rotateYValue = (mouseX / (rect.width / 2)) * intensity;
        
        setRotateX(rotateXValue);
        setRotateY(rotateYValue);
        
        // Calculate shine effect
        const shineX = (e.clientX - rect.left) / rect.width * 100;
        const shineY = (e.clientY - rect.top) / rect.height * 100;
        setShinePosition({ x: shineX, y: shineY });
        setShineOpacity(0.7);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
        setShineOpacity(0);
    };

    return (
        <div 
            ref={cardRef}
            className={cn("card-3d", className)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div 
                className="card-3d-content"
                    style={{ 
                    transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                }}
            >
                {children}
                <div 
                    className="card-3d-shine"
                    style={{ 
                        opacity: shineOpacity,
                        background: `radial-gradient(circle at ${shinePosition.x}% ${shinePosition.y}%, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 80%)`,
                    }}
                />
            </div>
        </div>
    );
};