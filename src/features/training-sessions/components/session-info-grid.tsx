"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Users } from "lucide-react";
import { SessionType } from "../types";

interface SessionInfoGridProps {
    session: SessionType;
    isInView: boolean;
}

export const SessionInfoGrid = ({ session, isInView }: SessionInfoGridProps) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="space-y-4"
            >
                <motion.div variants={itemVariants} className="flex items-start">
                    <div className="mt-1 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mr-3">
                        <MapPin className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                        <span className="font-medium block">Location</span>
                        <span className="text-gray-600">{session.location}</span>
                    </div>
                </motion.div>
                
                <motion.div variants={itemVariants} className="flex items-start">
                    <div className="mt-1 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mr-3">
                        <Clock className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                        <span className="font-medium block">Time</span>
                        <span className="text-gray-600">{session.time}</span>
                    </div>
                </motion.div>
            </motion.div>
            
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="space-y-4"
            >
                <motion.div variants={itemVariants} className="flex items-start">
                    <div className="mt-1 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mr-3">
                        <Users className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                        <span className="font-medium block">Coach</span>
                        <span className="text-gray-600">{session.coach}</span>
                    </div>
                </motion.div>
                
                <motion.div variants={itemVariants} className="flex items-start">
                    <div className="mt-1 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mr-3">
                        <Users className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                        <span className="font-medium block">Capacity</span>
                        <span className="text-gray-600">{session.capacity}</span>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}; 