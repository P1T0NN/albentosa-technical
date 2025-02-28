// LIBRARIES
import * as motion from "motion/react-client";

// COMPONENTS
import { Card } from "@/components/ui/card";

// LUCIDE ICONS
import { Trophy, Users, Calendar, Star } from "lucide-react";

export const FeaturesSection = () => {
    return (
        <section id="programs" className="relative py-24 px-4 bg-[#fafafa] hero-pattern">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold mb-4">Elite Training Programs</h2>

                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Choose from our comprehensive range of professional training programs designed to elevate your game
                        </p>
                    </motion.div>
                </div>
            
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            title: 'Youth Development',
                            icon: Users,
                            description: 'Specialized training for young talents aged 6-16',
                            features: ['Technical Skills', 'Team Play', 'Physical Development'],
                        },
                        {
                            title: 'Elite Training',
                            icon: Trophy,
                            description: 'Advanced programs for competitive players',
                            features: ['Pro Coaching', 'Match Analysis', 'Performance Tracking'],
                        },
                        {
                            title: 'Summer Camps',
                            icon: Calendar,
                            description: 'Intensive training camps during summer breaks',
                            features: ['Daily Training', 'Friendly Matches', 'Pro Workshops'],
                        },
                    ].map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <Card className="feature-card sketchy-border">
                                <feature.icon className="h-12 w-12 text-primary mb-4" />
                                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                <p className="text-gray-600 mb-4">{feature.description}</p>
                                
                                <ul className="space-y-2">
                                    {feature.features.map((item, i) => (
                                        <li key={i} className="flex items-center text-sm text-gray-600">
                                            <Star className="h-4 w-4 text-primary mr-2" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
