// NEXTJS IMPORTS
import Image from "next/image";

// LIBRARIES
import * as motion from "motion/react-client";

// COMPONENTS
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

export const CareerSection = () => {
    const careerImages = [
        { src: "/images/hero-section.jpg", alt: "Career Highlight 1" },
        // ... add all 16 images
    ];

    return (
        <section id="career" className="relative py-24 px-4 bg-black text-white">
            <div className="max-w-7xl mx-auto">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl font-bold mb-6">
                        <span className="text-[#00ff00]">Raul Albentosa</span><br />
                        Professional Career
                    </h2>
                    <div className="space-y-4 text-gray-300 max-w-3xl">
                        <motion.p
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            With over 15 years of professional experience in football, Raul Albentosa has competed at the highest levels of the sport, including La Liga and the English Championship.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            His career spans multiple prestigious clubs across Europe, where he has developed a deep understanding of different playing styles and tactical approaches.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            Now, he brings this wealth of experience to young athletes, helping them develop both technical skills and tactical understanding of the game.
                        </motion.p>
                    </div>
                </motion.div>

                {/* Carousel */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-2 md:-ml-4">
                            {careerImages.map((image, index) => (
                                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/4 lg:basis-1/4">
                                    <div className="relative aspect-square overflow-hidden rounded-lg">
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            fill
                                            className="object-cover transition-transform duration-300 hover:scale-110"
                                            sizes="(max-width: 768px) 50vw, 25vw"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        <CarouselPrevious className="hidden md:flex" />
                        <CarouselNext className="hidden md:flex" />
                    </Carousel>
                </motion.div>
            </div>
        </section>
    );
};