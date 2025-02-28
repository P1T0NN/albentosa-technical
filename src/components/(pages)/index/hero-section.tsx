"use client";

// REACTJS IMPORTS
import { useRef, useEffect } from "react";

// LIBRARIES
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { useTranslations } from "next-intl";

// COMPONENTS
import { Button } from "@/components/ui/button";
import { GlitchText } from "@/components/ui/glitch-text";
import { SoccerBallAnimation } from "@/components/ui/soccer-ball-animation";

// LUCIDE ICONS
import { ChevronRight } from "lucide-react";

export const HeroSection = () => {
    const t = useTranslations("HomePage.hero");

    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    useEffect(() => {
        if (!textRef.current) return;

        const chars = textRef.current.querySelectorAll('.char');
        
        gsap.fromTo(chars, 
            { y: 100, opacity: 0 },
            { 
                y: 0, 
                opacity: 1, 
                stagger: 0.03, 
                duration: 0.8, 
                ease: "power4.out",
                delay: 0.5
            }
        );
    }, []);

    const splitText = (text: string) => {
        return text.split('').map((char, i) => (
            <span key={i} className="char inline-block opacity-0">
                {char === ' ' ? '\u00A0' : char}
            </span>
        ));
    };

    return (
        <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Parallax */}
            <motion.div 
                className="absolute inset-0 z-0"
                style={{ y }}
            >
                <div 
                    className="absolute inset-0"
                    style={{
                        backgroundImage: 'url("/images/hero-section.jpg")',
                        backgroundPosition: 'center 42.5%',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                    <div className="absolute inset-0 bg-black/60" />
                </div>
            </motion.div>

            {/* Soccer Ball Animation */}
            <SoccerBallAnimation count={5} />

            {/* Content */}
            <motion.div 
                className="relative z-10 max-w-7xl mx-auto px-4 py-32 text-center text-white"
                style={{ opacity }}
            >
                <div ref={textRef} className="mb-6">
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
                        <div className="overflow-hidden">
                            {splitText(t("title"))}
                        </div>

                        <div className="overflow-hidden mt-2">
                            <GlitchText text={t("subtitle")} className="text-7xl md:text-9xl gradient-text" />
                        </div>
                    </h1>
                </div>

                <motion.p 
                    className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-200"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                >
                    {t("description")}
                </motion.p>

                <motion.div 
                    className="flex flex-col md:flex-row items-center justify-center gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                >
                    <Button 
                        size="lg" 
                        className="animated-border text-lg px-8 py-6 bg-primary hover:bg-primary/90 w-full md:w-auto"
                    >
                        {t("start_training")} <ChevronRight className="ml-2" />
                    </Button>

                    <Button 
                        size="lg" 
                        variant="outline" 
                        className="text-black text-lg px-8 py-6 hover:bg-white/10 hover:text-white w-full md:w-auto"
                    >
                        {t("learn_more")}
                    </Button>
                </motion.div>
            </motion.div>

            {/* Bottom Wave */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative w-full h-[100px]" style={{ transform: 'rotate(180deg)' }}>
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#faf8f5"/>
                </svg>
            </div>
        </section>
    );
};