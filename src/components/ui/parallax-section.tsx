"use client";

// REACTJS IMPORTS
import React, { useRef, useEffect } from "react";

// LIBRARIES
import { cn } from "@/lib/utils";

interface ParallaxSectionProps {
    className?: string;
    children: React.ReactNode;
    backgroundImage: string;
    speed?: number;
}

export const ParallaxSection = ({ 
    className, 
    children, 
    backgroundImage,
    speed = 0.5
}: ParallaxSectionProps) => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current || !bgRef.current) return;
            
            const rect = sectionRef.current.getBoundingClientRect();
            const scrollPosition = window.scrollY;
            const sectionTop = rect.top + scrollPosition;
            const sectionHeight = rect.height;
            const viewportHeight = window.innerHeight;
            
            // Check if section is in viewport
            if (
                scrollPosition + viewportHeight > sectionTop &&
                scrollPosition < sectionTop + sectionHeight
            ) {
                const offset = (scrollPosition - sectionTop) * speed;
                bgRef.current.style.transform = `translateY(${offset}px)`;
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial position
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [speed]);

    return (
        <div 
            ref={sectionRef}
            className={cn("parallax-section", className)}
        >
            <div 
                ref={bgRef}
                className="parallax-bg"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            />
            
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};