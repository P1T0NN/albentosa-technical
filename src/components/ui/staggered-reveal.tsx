"use client";

// REACTJS IMPORTS
import React, { useRef } from "react";

// LIBRARIES
import { motion, useInView, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface StaggeredRevealProps {
    className?: string;
    children: React.ReactNode;
    delay?: number;
    staggerDelay?: number;
    once?: boolean;
}

export const StaggeredReveal = ({ 
    className, 
    children, 
    delay = 0.2,
    staggerDelay = 0.1,
    once = true
}: StaggeredRevealProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once });

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: delay,
                staggerChildren: staggerDelay
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    // Add stagger-item class to direct children
    const childrenWithProps = React.Children.map(children, child => {
        if (React.isValidElement(child)) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return React.cloneElement(child as React.ReactElement<any>, {
                className: cn('stagger-item', (child.props as { className?: string }).className)
            });
        }
        return child;
    });

    return (
        <motion.div
            ref={ref}
            className={className}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
        >
            {React.Children.map(childrenWithProps, (child, index) => (
                <motion.div key={index} variants={itemVariants}>
                    {child}
                </motion.div>
            ))}
        </motion.div>
    );
};