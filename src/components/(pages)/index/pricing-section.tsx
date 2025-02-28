// LIBRARIES
import * as motion from "motion/react-client";

// COMPONENTS
import { Card } from "@/components/ui/card";

// LUCIDE ICONS
import { Users2, Star, Euro } from "lucide-react";

export const PricingSection = () => {
    return (
        <section id="pricing" className="relative py-24 px-4 bg-black text-white">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold mb-4">Training Information</h2>

                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Professional training sessions tailored to your development
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Capacity Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="h-full"
                    >
                        <Card className="bg-white/10 backdrop-blur-sm p-8 sketchy-border h-full">
                            <div className="flex items-center mb-6">
                                <Users2 className="h-8 w-8 text-[#00ff00] mr-3" />
                                <h3 className="text-2xl font-bold text-white">Capacity</h3>
                            </div>

                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <Star className="h-5 w-5 text-[#00ff00] mr-2 mt-1 flex-shrink-0" />
                                    <span className="text-white">32 Places per Session</span>
                                </li>

                                <li className="flex items-start">
                                    <Star className="h-5 w-5 text-[#00ff00] mr-2 mt-1 flex-shrink-0" />
                                    <span className="text-white">Possibility of two sessions on Sundays</span>
                                </li>

                                <li className="flex items-start">
                                    <Star className="h-5 w-5 text-[#00ff00] mr-2 mt-1 flex-shrink-0" />
                                    <span className="text-white">Open to additional days based on demand</span>
                                </li>
                            </ul>
                        </Card>
                    </motion.div>

                    {/* Pricing Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="h-full"
                    >
                        <Card className="bg-white/10 backdrop-blur-sm p-8 sketchy-border h-full">
                            <div className="flex items-center mb-6">
                                <Euro className="h-8 w-8 text-[#00ff00] mr-3" />
                                <h3 className="text-2xl font-bold text-white">Rates</h3>
                            </div>

                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <Star className="h-5 w-5 text-[#00ff00] mr-2 mt-1 flex-shrink-0" />
                                    <span className="text-white">Single day: €50 (2 hours → €25/hour)</span>
                                </li>

                                <li className="flex items-start">
                                    <Star className="h-5 w-5 text-[#00ff00] mr-2 mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="text-white">Monthly package (3-5 Sessions per month)</p>
                                        <p className="text-sm text-gray-400 mt-1">€40/Session = Total: €120, €160 or €200</p>
                                    </div>
                                </li>

                                <li className="flex items-start">
                                    <Star className="h-5 w-5 text-[#00ff00] mr-2 mt-1 flex-shrink-0" />
                                    <span className="text-white">Second sibling: €30/Session (2 hours → €15/hour)</span>
                                </li>
                            </ul>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
