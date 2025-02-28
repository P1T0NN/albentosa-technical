// LIBRARIES
import * as motion from "motion/react-client";

// COMPONENTS
import { Button } from "@/components/ui/button";

// LUCIDE ICONS
import { ChevronRight } from "lucide-react";

export const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div 
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: 'url("/images/hero-section.jpg")',
                    backgroundPosition: 'center 42.5%',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 py-32 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        Develop Your Soccer Skills
                    </h1>

                    <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
                        Train with professional coaches and unlock your potential on the field
                    </p>

                    <div className="flex items-center justify-center gap-4">
                        <Button size="lg" className="sketchy-border text-lg px-8 py-6 bg-primary hover:bg-primary/90">
                            Start Training <ChevronRight className="ml-2" />
                        </Button>

                        <Button size="lg" variant="outline" className="text-black text-lg px-8 py-6 hover:bg-white/10 hover:text-white">
                            Learn More
                        </Button>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Wave */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative w-full h-[100px]" style={{ transform: 'rotate(180deg)' }}>
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#faf8f5"/>
                </svg>
            </div>
        </section>
    )
}
