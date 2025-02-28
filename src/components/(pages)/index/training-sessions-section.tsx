// LIBRARIES
import * as motion from "motion/react-client";

// COMPONENTS
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

// LUCIDE ICONS
import { Star } from "lucide-react";

export const TrainingSessionsSection = () => {
    return (
        <section id="training" className="relative py-24 px-4 bg-[#fafafa]">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold mb-4">Albentosa&apos;s Trainings</h2>

                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Choose your preferred training period
                    </p>
                </motion.div>

                <Tabs defaultValue="fallas" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 mb-8">
                        <TabsTrigger value="fallas" className="text-lg">Before Fallas</TabsTrigger>
                        <TabsTrigger value="easter" className="text-lg">Before Easter</TabsTrigger>
                    </TabsList>

                    <TabsContent value="fallas">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Card className="p-8 sketchy-border">
                                <h3 className="text-2xl font-bold mb-6">3 Sessions (Feb 23, Mar 2, Mar 9): €120</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <Star className="h-5 w-5 text-[#00ff00] mr-2 mt-1 flex-shrink-0" />
                                        <span>32 places per session</span>
                                    </li>

                                    <li className="flex items-start">
                                        <Star className="h-5 w-5 text-[#00ff00] mr-2 mt-1 flex-shrink-0" />
                                        <span>Possibility of 2 sessions on Sundays</span>
                                    </li>

                                    <li className="flex items-start">
                                        <Star className="h-5 w-5 text-[#00ff00] mr-2 mt-1 flex-shrink-0" />
                                        <span>Open to additional days based on demand</span>
                                    </li>

                                    <li className="flex items-start">
                                        <Star className="h-5 w-5 text-[#00ff00] mr-2 mt-1 flex-shrink-0" />
                                        <span>Single day: €50 (2 hours)</span>
                                    </li>

                                    <li className="flex items-start">
                                        <Star className="h-5 w-5 text-[#00ff00] mr-2 mt-1 flex-shrink-0" />
                                        <div>
                                            <p>Monthly package (3-5 sessions per month)</p>
                                            <p className="text-sm text-gray-600 mt-1">€40/session = €120, €160 or €200</p>
                                        </div>
                                    </li>

                                    <li className="flex items-start">
                                        <Star className="h-5 w-5 text-[#00ff00] mr-2 mt-1 flex-shrink-0" />
                                        <span>Second sibling: €30/session</span>
                                    </li>
                                </ul>
                            </Card>
                        </motion.div>
                    </TabsContent>

                    <TabsContent value="easter">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Card className="p-8 sketchy-border">
                                <h3 className="text-2xl font-bold mb-6">3 Sessions (Mar 23, Mar 30, Apr 6): €120</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <Star className="h-5 w-5 text-[#00ff00] mr-2 mt-1 flex-shrink-0" />
                                        <span>32 places per session</span>
                                    </li>

                                    <li className="flex items-start">
                                        <Star className="h-5 w-5 text-[#00ff00] mr-2 mt-1 flex-shrink-0" />
                                        <span>Possibility of 2 sessions on Sundays</span>
                                    </li>

                                    <li className="flex items-start">
                                        <Star className="h-5 w-5 text-[#00ff00] mr-2 mt-1 flex-shrink-0" />
                                        <span>Open to additional days based on demand</span>
                                    </li>

                                    <li className="flex items-start">
                                        <Star className="h-5 w-5 text-[#00ff00] mr-2 mt-1 flex-shrink-0" />
                                        <span>Single day: €50 (2 hours)</span>
                                    </li>

                                    <li className="flex items-start">
                                        <Star className="h-5 w-5 text-[#00ff00] mr-2 mt-1 flex-shrink-0" />
                                        <div>
                                            <p>Monthly package (3-5 sessions per month)</p>
                                            <p className="text-sm text-gray-600 mt-1">€40/session = €120, €160 or €200</p>
                                        </div>
                                    </li>

                                    <li className="flex items-start">
                                        <Star className="h-5 w-5 text-[#00ff00] mr-2 mt-1 flex-shrink-0" />
                                        <span>Second sibling: €30/session</span>
                                    </li>
                                </ul>
                            </Card>
                        </motion.div>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    );
};
