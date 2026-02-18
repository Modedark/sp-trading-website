import { Hero } from '@/components/home/Hero';
import { Segmentation } from '@/components/home/Segmentation';
import { FarmToFlour } from '@/components/home/FarmToFlour';
import { B2BSection } from '@/components/home/B2BSection';
import { B2CSection } from '@/components/home/B2CSection';
import { TrustSection } from '@/components/home/TrustSection';
import { CTASection } from '@/components/home/CTASection';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
      <Hero />
      <TrustSection />
      <Segmentation />
      <FarmToFlour />
      <B2BSection />
      <B2CSection />
      <CTASection />
    </main>
  );
}
