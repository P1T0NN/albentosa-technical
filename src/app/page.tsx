// COMPONENTS
import { HeroSection } from '@/components/(pages)/index/hero-section';
import { FeaturesSection } from '@/components/(pages)/index/features-section';
import { CareerSection } from '@/components/(pages)/index/career-section';
import { PreviousClubsSection } from '@/components/(pages)/index/previous-clubs-section';
import { PricingSection } from '@/components/(pages)/index/pricing-section';
import { TrainingSessionsSection } from '@/components/(pages)/index/training-sessions-section';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <TrainingSessionsSection />
      <CareerSection />
      <PreviousClubsSection />
    </div>
  );
}