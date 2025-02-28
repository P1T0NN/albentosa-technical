// NEXTJS IMPORTS
import Image from "next/image";

// LIBRARIES
import * as motion from "motion/react-client";

// DATA
import { previousClubsData } from "@/data/previous-clubs-data";

export const PreviousClubsSection = () => {
    return (
        <section id="clubs" className="relative py-24 px-4 bg-[#fafafa] overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold mb-4">Raul Albentosa&apos;s Career</h2>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                    {previousClubsData.map((club, index) => (
                        <motion.div
                            key={club.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ 
                                duration: 0.5,
                                delay: index * 0.1 
                            }}
                            viewport={{ once: true }}
                            className="flex items-center justify-center"
                        >
                            <div className="relative w-24 h-24 md:w-32 md:h-32 overflow-hidden group">
                                <div className="w-full h-full transition-all duration-500">
                                    <Image 
                                        src={club.image} 
                                        alt={club.name}
                                        className="w-full h-full object-contain transition-transform duration-500 
                                                group-hover:scale-110"
                                        width={128}
                                        height={128}
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent 
                                              opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-0 left-0 right-0 p-2 text-white">
                                        <h3 className="text-xs md:text-sm font-bold">{club.name}</h3>
                                        <p className="text-xs text-gray-200">{club.period}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};