"use client";

// REACTJS IMPORTS
import React, { useRef, useState } from "react";

// LIBRARIES
import { cn } from "@/lib/utils";

// COMPONENTS
import { Button, ButtonProps } from "@/components/ui/button";

interface MagneticButtonProps extends ButtonProps {
    strength?: number;
    children: React.ReactNode;
}

export const MagneticButton = ({ 
    strength = 30, 
    className, 
    children, 
    ...props 
}: MagneticButtonProps) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!buttonRef.current) return;
        
        const rect = buttonRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        setPosition({ x, y });
    };

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
        setPosition({ x: 0, y: 0 });
    };

    const magneticStrength = isHovering ? strength : 0;

    return (
        <Button
            ref={buttonRef}
            className={cn("magnetic-button", className)}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            {...props}
        >
            <span 
                className="magnetic-button-content"
                    style={{ 
                    transform: `translate(${position.x / magneticStrength}px, ${position.y / magneticStrength}px)`,
                }}
            >
                {children}
            </span>
        </Button>
    );
};