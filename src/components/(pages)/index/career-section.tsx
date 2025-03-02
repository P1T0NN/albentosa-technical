"use client";

// REACTJS IMPORTS
import { useRef } from "react";

// NEXTJS IMPORTS
import Image from "next/image";

// LIBRARIES
import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";

// COMPONENTS
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Card3D } from "@/components/ui/3d-card";
import { GlitchText } from "@/components/ui/glitch-text";

// DATA
import { careerPhotosData } from "@/data/career-photos-data";

export const CareerSection = () => {
    const t = useTranslations("HomePage.career");
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const stats = [
        { label: t("stats_matches"), value: "350+" },
        { label: t("stats_goals"), value: "25" },
        { label: t("stats_experience"), value: "15+" },
        { label: t("stats_leagues"), value: "5" }
    ];

    const achievements = [
        t("achievement1"),
        t("achievement2"),
        t("achievement3"),
        t("achievement4")
    ];

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
            transition: { duration: 0.6 }
        }
    };

    return (
        <section id="career" ref={ref} className="relative py-24 px-4 bg-black text-white overflow-hidden">
            <div className="field-lines" />
            <div className="noise-bg" />
            
            {/* Decorative elements */}
            <div className="pitch-circle absolute top-[10%] right-[10%] w-32 h-32 opacity-20" />
            <div className="pitch-circle absolute bottom-[20%] left-[5%] w-48 h-48 opacity-10" />
            <div className="pitch-line absolute top-[40%] left-0 w-[30%] h-[1px] opacity-20" />
            <div className="pitch-line absolute bottom-[30%] right-0 w-[20%] h-[1px] opacity-20" />
            
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="mb-16 md:mb-0"
                    >
                        <motion.div variants={itemVariants}>
                            <span className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary font-medium text-sm mb-4">
                                {t("badge")}
                            </span>
                        </motion.div>
                        
                        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6">
                            <span className="text-[#00ff00] gradient-text block mb-2">{t("name")}</span>
                            <GlitchText text={t("title")} />
                        </motion.h2>
                        
                        <div className="space-y-6 text-gray-300 max-w-3xl">
                            <motion.p variants={itemVariants}>{t("description1")}</motion.p>
                            <motion.p variants={itemVariants}>{t("description2")}</motion.p>
                            <motion.p variants={itemVariants}>{t("description3")}</motion.p>
                        </div>
                        
                        <motion.div 
                            variants={itemVariants}
                            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
                        >
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center p-4 bg-white/5 rounded-lg">
                                    <div className="text-3xl font-bold text-primary">{stat.value}</div>
                                    <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                        
                        <motion.div variants={itemVariants} className="mt-8">
                            <h3 className="text-xl font-bold mb-4">{t("highlights_title")}</h3>
                            <div className="grid grid-cols-2 gap-3">
                                {achievements.map((achievement, index) => (
                                    <div key={index} className="flex items-center">
                                        <div className="w-2 h-2 rounded-full bg-primary mr-2" />
                                        <span>{achievement}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Carousel */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <Card3D>
                            <div className="p-4 bg-white/5 rounded-lg">
                                <Carousel opts={{ align: "start", loop: true }} className="w-full">
                                    <CarouselContent className="-ml-2 md:-ml-4">
                                        {careerPhotosData.map((image, index) => (
                                            <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2">
                                                <div className="relative aspect-video overflow-hidden rounded-lg">
                                                    <Image
                                                        src={image.src}
                                                        alt={image.alt}
                                                        fill
                                                        className="object-cover transition-transform duration-500 hover:scale-110"
                                                        sizes="(max-width: 768px) 100vw, 50vw"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100 flex items-end p-4">
                                                        <div className="text-white">
                                                            <div className="text-sm font-medium">{t("moment_title")}</div>
                                                            <div className="text-xs opacity-80">{t("moment_period")}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </CarouselItem>
                                        ))}
                                    </CarouselContent>

                                    <div className="flex justify-center mt-4 gap-2">
                                        <CarouselPrevious className="relative inset-0 translate-y-0 bg-white/10 hover:bg-white/20 border-0" />
                                        <CarouselNext className="relative inset-0 translate-y-0 bg-white/10 hover:bg-white/20 border-0" />
                                    </div>
                                </Carousel>
                                
                                <div className="mt-6">
                                    <div className="tactical-board h-[200px]">
                                        <div className="tactical-grid" />
                                        <div className="pitch-line" style={{ top: '50%', left: 0, right: 0, height: '1px' }} />
                                        <div className="pitch-circle" style={{ top: '50%', left: '50%', width: '60px', height: '60px', transform: 'translate(-50%, -50%)' }} />
                                        <div className="player-marker" style={{ left: '50%', top: '70%' }}>5</div>
                                        <div className="absolute bottom-4 left-0 right-0 text-center text-white text-sm">
                                            {t("position")}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card3D>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};