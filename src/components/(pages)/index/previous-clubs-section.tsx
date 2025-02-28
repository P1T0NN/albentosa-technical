"use client";

// REACTJS IMPORTS
import { useRef } from "react";

// NEXTJS IMPORTS
import Image from "next/image";

// LIBRARIES
import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";

// DATA
import { previousClubsData } from "@/data/previous-clubs-data";

export const PreviousClubsSection = () => {
    const t = useTranslations("HomePage.previousClubs");
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05
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
        <section id="clubs" ref={ref} className="relative py-24 px-4 bg-[#fafafa] overflow-hidden">
            <div className="noise-bg" />
            
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
                        {t("badge")}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">{t("title")}</h2>
                </motion.div>

                <div className="relative">
                    {/* Timeline */}
                    <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2 hidden md:block" />
                    
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
                    >
                        {previousClubsData.map((club) => (
                            <motion.div
                                key={club.name}
                                variants={itemVariants}
                                className="relative"
                            >
                                <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2 hidden md:block" />
                                
                                <div className="flex flex-col items-center">
                                    <div className="relative w-24 h-24 md:w-32 md:h-32 overflow-hidden group mb-4">
                                        <div className="w-full h-full transition-all duration-500 bg-white p-4 rounded-lg shadow-md">
                                            <Image 
                                                src={club.image} 
                                                alt={t("club_image_alt", { club: club.name })}
                                                className="w-full h-full object-contain transition-transform duration-500 
                                                        group-hover:scale-110"
                                                width={128}
                                                height={128}
                                            />
                                        </div>
                                        
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent 
                                                      opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                                            <div className="absolute bottom-0 left-0 right-0 p-2 text-white">
                                                <h3 className="text-xs md:text-sm font-bold">{club.name}</h3>
                                                <p className="text-xs text-gray-200">{club.period}</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="text-center">
                                        <h3 className="font-bold">{club.name}</h3>
                                        <p className="text-sm text-gray-500">{club.period}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
                
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-block px-6 py-3 bg-primary/10 rounded-full">
                        <span className="text-primary font-medium">{t("experience_summary")}</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};