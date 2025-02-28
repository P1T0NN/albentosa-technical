"use client";

// REACTJS IMPORTS
import React, { useRef, useEffect } from "react";

// LIBRARIES
import { cn } from "@/lib/utils";

interface MarqueeProps {
    className?: string;
    children: React.ReactNode;
    speed?: number;
    pauseOnHover?: boolean;
}

export const Marquee = ({ 
    className, 
    children, 
    speed = 20,
    pauseOnHover = true
}: MarqueeProps) => {
    const marqueeRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const contentCloneRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!contentRef.current || !contentCloneRef.current) return;
        
        // Clone the content
        contentCloneRef.current.innerHTML = contentRef.current.innerHTML;
        
        // Calculate animation duration based on content width and speed
        const contentWidth = contentRef.current.offsetWidth;
        const duration = contentWidth / speed;
        
        // Apply animation
        contentRef.current.style.animation = `marquee ${duration}s linear infinite`;
        contentCloneRef.current.style.animation = `marquee ${duration}s linear infinite`;
        contentCloneRef.current.style.animationDelay = `${duration / 2}s`;
    }, [speed]);

    return (
        <div 
            ref={marqueeRef}
            className={cn(
                "marquee",
                pauseOnHover && "hover:pause",
                className
            )}
        >
            <div ref={contentRef} className="marquee-content">
                {children}
            </div>
            <div ref={contentCloneRef} className="marquee-content" />
        </div>
    );
};