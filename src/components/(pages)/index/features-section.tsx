"use client";

// REACTJS IMPORTS
import { useRef } from "react";

// LIBRARIES
import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";

// COMPONENTS
import { Card3D } from "@/components/ui/3d-card";

// DATA
import { useFeaturesData } from "@/data/hooks/useFeaturesData";

// LUCIDE ICONS
import { Star } from "lucide-react";

export const FeaturesSection = () => {
    const t = useTranslations("HomePage.features");
    const features = useFeaturesData();
    
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

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
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6 }
        }
    };

    return (
        <section id="programs" ref={ref} className="relative py-24 px-4 bg-[#fafafa] hero-pattern overflow-hidden">
            <div className="noise-bg" />
            
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
                            {t("badge")}
                        </span>

                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            {t("title")}
                        </h2>

                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            {t("description")}
                        </p>
                    </motion.div>
                </div>
            
                <motion.div 
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {features.map((feature) => (
                        <motion.div
                            key={feature.title}
                            variants={itemVariants}
                            className="h-full"
                        >
                            <Card3D className="h-full">
                                <div className={`feature-card sketchy-border h-full bg-gradient-to-br ${feature.color}`}>
                                    <div className="trophy-shine mb-6 w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                                        <feature.icon className="h-8 w-8 text-primary" />
                                    </div>
                                    
                                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                    <p className="text-gray-600 mb-6">{feature.description}</p>
                                    
                                    <ul className="space-y-3">
                                        {feature.features.map((item, i) => (
                                            <li key={i} className="flex items-center text-sm text-gray-600">
                                                <Star className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Card3D>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};