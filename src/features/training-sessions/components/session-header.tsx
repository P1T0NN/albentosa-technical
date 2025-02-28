"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

interface SessionHeaderProps {
    isInView: boolean;
}

export const SessionHeader = ({ isInView }: SessionHeaderProps) => {
    const t = useTranslations("TrainingSessions");

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
        >
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
                {t("upcomingSessions")}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t("title")}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {t("description")}
            </p>
        </motion.div>
    );
}; 