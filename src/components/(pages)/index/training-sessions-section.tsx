"use client";

// REACTJS IMPORTS
import { useRef, useState } from "react";

// LIBRARIES
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";

// COMPONENTS
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { SessionInfoGrid } from "@/components/(pages)/index/session-info-grid";
import { SessionFeatures } from "@/components/(pages)/index/session-features";
import { SessionCalendar } from "@/components/(pages)/index/session-calendar";
import { CountdownTimer } from "@/components/(pages)/index/countdown-timer";

// DATA
import { useSessionsData } from "@/data/hooks/useSessionData";

export const TrainingSessionsSection = () => {
    const t = useTranslations("HomePage.sessions");
    const ref = useRef<HTMLDivElement>(null);

    const [activeTab, setActiveTab] = useState("fallas");

    const session = useSessionsData();

    const currentSession = activeTab === "fallas" ? session.fallas : session.easter;

    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <section id="training" ref={ref} className="relative py-24 px-4 bg-[#fafafa] overflow-hidden">
            <div className="noise-bg" />
            <div className="max-w-7xl mx-auto">
                <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
                    {t("badge")}
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    {t("title")}
                </h2>

                <Tabs 
                    defaultValue="fallas" 
                    className="w-full"
                    onValueChange={(value) => setActiveTab(value)}
                >
                    <TabsList className="grid w-full h-[65px] grid-cols-2 mb-12 bg-transparent border border-gray-200 p-1 rounded-full max-w-md mx-auto">
                        <TabsTrigger 
                            value="fallas" 
                            className="text-lg data-[state=active]:bg-primary data-[state=active]:text-black rounded-full py-3"
                        >
                            {t("tab_fallas")}
                        </TabsTrigger>
                        
                        <TabsTrigger 
                            value="easter" 
                            className="text-lg data-[state=active]:bg-primary data-[state=active]:text-black rounded-full py-3"
                        >
                            {t("tab_easter")}
                        </TabsTrigger>
                    </TabsList>

                    <AnimatePresence mode="wait">
                        <TabsContent value={activeTab} className="mt-0">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: activeTab === "fallas" ? -20 : 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: activeTab === "fallas" ? 20 : -20 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="grid md:grid-cols-3 gap-8">
                                    {/* Session Details */}
                                    <div className="md:col-span-2">
                                        <Card className="p-8 sketchy-border h-full bg-white overflow-hidden relative">
                                            <div className="absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 bg-primary/10 rounded-full blur-3xl" />
                                            
                                            <div className="relative">
                                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                                                    <div>
                                                        <h3 className="text-2xl font-bold">{currentSession.title}</h3>
                                                        <p className="text-primary text-xl font-bold mt-1">{currentSession.price}</p>
                                                    </div>
                                                    
                                                    <div className="flex gap-2">
                                                        {currentSession.dates.map((date, index) => (
                                                            <div key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                                                                {date}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                                
                                                <SessionInfoGrid session={currentSession} isInView={isInView} />
                                                <SessionFeatures features={currentSession.features} isInView={isInView} />
                                            </div>
                                        </Card>
                                    </div>
                                    
                                    {/* Calendar and Booking */}
                                    <div>
                                        <Card className="p-8 sketchy-border h-full bg-white">
                                            <h3 className="text-xl font-bold mb-6">{t("calendar_title")}</h3>
                                            
                                            <SessionCalendar activeTab={activeTab} />
                                            
                                            <div className="space-y-4 mb-8">
                                                <div>
                                                    <div className="text-sm font-medium mb-1">{t("spots_remaining_title")}</div>
                                                    <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                                                        <div className="absolute top-0 left-0 h-full bg-primary rounded-full" style={{ width: '25%' }} />
                                                    </div>
                                                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                                                        <span>{t("spots_left", { count: 8 })}</span>
                                                        <span>{t("spots_total", { count: 32 })}</span>
                                                    </div>
                                                </div>
                                                
                                                <CountdownTimer />
                                            </div>
                                            
                                            <Button className="w-full bg-primary hover:bg-primary/90 text-black">
                                                {t("reserve_button")}
                                            </Button>
                                        </Card>
                                    </div>
                                </div>
                            </motion.div>
                        </TabsContent>
                    </AnimatePresence>
                </Tabs>
            </div>
        </section>
    );
};