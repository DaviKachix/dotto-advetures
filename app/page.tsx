// app/packages/page.tsx

import { Hero } from "@/components/sections/Hero";
import { WhyChooseUs } from "@/components/sections/whychooseus";
import { SafariExperiences } from "@/components/sections/SafariExperience";
import { FeaturedPackages} from "@/components/sections/Featured";
import { TravelGallery } from "@/components/sections/TravelGallery";
import { CTASection } from "@/components/sections/CTASection";

export default function PackagesPage() {
  return (
    <main className="bg-[#f7faf7] text-gray-800 overflow-hidden">
      {/* HERO SECTION */}
      <Hero />

      {/* WHY CHOOSE US */}
      <WhyChooseUs />

      {/* SAFARI EXPERIENCES */}
      <SafariExperiences />

      {/* FEATURED PACKAGES */}
      <FeaturedPackages />

      {/* GALLERY */}
      <TravelGallery />

      {/* CTA */}
      <CTASection />
    </main>
  );
}