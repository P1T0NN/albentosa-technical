"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface SessionFeaturesProps {
    features: string[];
    isInView: boolean;
}

export const SessionFeatures = ({ features, isInView }: SessionFeaturesProps) => {
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    return (
        <div>
            <h4 className="text-lg font-bold mb-4">What&apos;s Included</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                    <motion.div 
                        key={index}
                        variants={itemVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center"
                    >
                        <Star className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}; 