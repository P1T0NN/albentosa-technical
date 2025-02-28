"use client";

// REACTJS IMPORTS
import { useRef } from "react";

// LIBRARIES
import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";

// COMPONENTS
import { Card } from "@/components/ui/card";
import { MagneticButton } from "@/components/ui/magnetic-button";

// LUCIDE ICONS
import { Users2, Star, Euro, Calendar, Clock, User, Check } from "lucide-react";

export const PricingSection = () => {
    const t = useTranslations("HomePage.pricing");
    
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, type: "spring" }
        }
    };

     return (
        <section id="pricing" ref={ref} className="relative py-24 px-4 bg-black text-white overflow-hidden">
            <div className="field-lines" />
            <div className="noise-bg" />
            
            {/* Decorative elements */}
            <div className="pitch-circle absolute top-[20%] left-[10%] w-32 h-32 opacity-20" />
            <div className="pitch-circle absolute bottom-[10%] right-[5%] w-48 h-48 opacity-10" />
            <div className="pitch-line absolute top-[30%] right-0 w-[30%] h-[1px] opacity-20" />
            <div className="pitch-line absolute bottom-[40%] left-0 w-[20%] h-[1px] opacity-20" />
      
            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary font-medium text-sm mb-4">
                        {t("badge")}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">{t("title")}</h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        {t("description")}
                    </p>
                </motion.div>

                <motion.div className="grid md:grid-cols-2 gap-8" variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
                    {/* Capacity Card */}
                    <motion.div variants={itemVariants} className="h-full">
                        <Card className="bg-white/5 backdrop-blur-sm p-8 sketchy-border h-full border-0 overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-50" />
                            
                            <div className="relative z-10">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4">
                                        <Users2 className="h-6 w-6 text-[#00ff00]" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">{t("capacity_title")}</h3>
                                </div>

                                <ul className="space-y-6">
                                    <li className="flex items-start">
                                        <div className="mt-1 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mr-4">
                                            <Star className="h-3 w-3 text-[#00ff00]" />
                                        </div>
                                        <div>
                                            <span className="text-white font-medium block mb-1">{t("capacity_places_title")}</span>
                                            <span className="text-gray-400 text-sm">{t("capacity_places_description")}</span>
                                        </div>
                                    </li>

                                    <li className="flex items-start">
                                        <div className="mt-1 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mr-4">
                                            <Calendar className="h-3 w-3 text-[#00ff00]" />
                                        </div>
                                        <div>
                                            <span className="text-white font-medium block mb-1">{t("capacity_sessions_title")}</span>
                                            <span className="text-gray-400 text-sm">{t("capacity_sessions_description")}</span>
                                        </div>
                                    </li>

                                    <li className="flex items-start">
                                        <div className="mt-1 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mr-4">
                                            <Clock className="h-3 w-3 text-[#00ff00]" />
                                        </div>
                                        <div>
                                            <span className="text-white font-medium block mb-1">{t("capacity_scheduling_title")}</span>
                                            <span className="text-gray-400 text-sm">{t("capacity_scheduling_description")}</span>
                                        </div>
                                    </li>
                                </ul>
                                
                                <div className="mt-8 pt-6 border-t border-white/10">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mr-4">
                                            <Check className="h-5 w-5 text-black" />
                                        </div>
                                        <p className="text-gray-300">{t("capacity_reserve_message")}</p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </motion.div>

                    {/* Pricing Card */}
                    <motion.div variants={itemVariants} className="h-full">
                        <Card className="bg-white/5 backdrop-blur-sm p-8 sketchy-border h-full border-0 overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50" />
                            
                            <div className="relative z-10">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4">
                                        <Euro className="h-6 w-6 text-[#00ff00]" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">{t("rates_title")}</h3>
                                </div>

                                <ul className="space-y-6">
                                    <li className="flex items-start">
                                        <div className="mt-1 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mr-4">
                                            <Star className="h-3 w-3 text-[#00ff00]" />
                                        </div>
                                        <div>
                                            <span className="text-white font-medium block mb-1">{t("rates_single_day_title")}</span>
                                            <span className="text-gray-400 text-sm">{t("rates_single_day_description")}</span>
                                        </div>
                                    </li>

                                    <li className="flex items-start">
                                        <div className="mt-1 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mr-4">
                                            <Calendar className="h-3 w-3 text-[#00ff00]" />
                                        </div>
                                        <div>
                                            <span className="text-white font-medium block mb-1">{t("rates_monthly_title")}</span>
                                            <span className="text-gray-400 text-sm">{t("rates_monthly_description")}</span>
                                            <div className="mt-2 flex gap-2">
                                                <span className="px-2 py-1 rounded-full bg-white/10 text-white text-xs">{t("rates_sessions_range")}</span>
                                                <span className="px-2 py-1 rounded-full bg-white/10 text-white text-xs">{t("rates_best_value")}</span>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="flex items-start">
                                        <div className="mt-1 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mr-4">
                                            <User className="h-3 w-3 text-[#00ff00]" />
                                        </div>
                                        <div>
                                            <span className="text-white font-medium block mb-1">{t("rates_family_title")}</span>
                                            <span className="text-gray-400 text-sm">{t("rates_family_description")}</span>
                                        </div>
                                    </li>
                                </ul>
                                
                                <div className="mt-8 pt-6 border-t border-white/10">
                                    <MagneticButton className="w-full bg-primary hover:bg-primary/90 text-black">
                                        {t("book_button")}
                                    </MagneticButton>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};