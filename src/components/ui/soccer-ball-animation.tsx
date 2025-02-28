"use client";

// REACTJS IMPORTS
import { useEffect, useState } from "react";

interface SoccerBallProps {
    count?: number;
}

export const SoccerBallAnimation = ({ count = 3 }: SoccerBallProps) => {
    const [balls, setBalls] = useState<Array<{ id: number, delay: number }>>([]);

    useEffect(() => {
        const newBalls = Array.from({ length: count }, (_, i) => ({
            id: i,
            delay: Math.random() * 10
        }));
        
        setBalls(newBalls);
    }, [count]);

    return (
        <>
            {balls.map((ball) => (
                <div
                    key={ball.id}
                    className="soccer-ball"
                    style={{
                        animationDelay: `${ball.delay}s`,
                        left: `${Math.random() * 20}%`,
                        top: `${Math.random() * 20}%`,
                    }}
                />
            ))}
        </>
    );
};