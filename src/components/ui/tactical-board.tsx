"use client";

// REACTJS IMPORTS
import React, { useState } from "react";

// LIBRARIES
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PlayerMarker {
    id: number;
    position: { x: number, y: number };
    number: number;
}

interface TacticalBoardProps {
    className?: string;
}

export const TacticalBoard = ({ className }: TacticalBoardProps) => {
    const initialPlayers: PlayerMarker[] = [
        { id: 1, position: { x: 50, y: 90 }, number: 1 },
        { id: 2, position: { x: 20, y: 70 }, number: 2 },
        { id: 3, position: { x: 40, y: 70 }, number: 3 },
        { id: 4, position: { x: 60, y: 70 }, number: 4 },
        { id: 5, position: { x: 80, y: 70 }, number: 5 },
        { id: 6, position: { x: 30, y: 50 }, number: 6 },
        { id: 7, position: { x: 70, y: 50 }, number: 7 },
        { id: 8, position: { x: 50, y: 40 }, number: 8 },
        { id: 9, position: { x: 30, y: 20 }, number: 9 },
        { id: 10, position: { x: 50, y: 20 }, number: 10 },
        { id: 11, position: { x: 70, y: 20 }, number: 11 },
    ];

    const [players, setPlayers] = useState<PlayerMarker[]>(initialPlayers);

    return (
        <div className={cn("tactical-board", className)}>
            <div className="tactical-grid" />
            
            {/* Center line */}
            <div className="pitch-line" style={{ top: '50%', left: 0, right: 0, height: '1px' }} />
            
            {/* Center circle */}
            <div className="pitch-circle" style={{ top: '50%', left: '50%', width: '60px', height: '60px', transform: 'translate(-50%, -50%)' }} />
            
            {/* Penalty areas */}
            <div className="pitch-line" style={{ top: '70%', left: '20%', right: '20%', height: '1px' }} />
            <div className="pitch-line" style={{ top: '30%', left: '20%', right: '20%', height: '1px' }} />
            
            {/* Goal areas */}
            <div className="pitch-line" style={{ top: '85%', left: '35%', right: '35%', height: '1px' }} />
            <div className="pitch-line" style={{ top: '15%', left: '35%', right: '35%', height: '1px' }} />
            
            {/* Players */}
            {players.map((player) => (
                <motion.div
                    key={player.id}
                    className="player-marker"
                    style={{ 
                        left: `${player.position.x}%`, 
                        top: `${player.position.y}%` 
                    }}
                    drag
                    dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                    dragElastic={0.1}
                    dragMomentum={false}
                    onDragEnd={(_, info) => {
                        const boardRect = document.querySelector('.tactical-board')?.getBoundingClientRect();
                        if (!boardRect) return;
                        
                        const newX = player.position.x + (info.offset.x / boardRect.width) * 100;
                        const newY = player.position.y + (info.offset.y / boardRect.height) * 100;
                        
                        setPlayers(players.map(p => 
                        p.id === player.id 
                            ? { ...p, position: { x: newX, y: newY } } 
                            : p
                        ));
                    }}
                >
                    {player.number}
                </motion.div>
            ))}
        </div>
    );
};