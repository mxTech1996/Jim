'use client';

import Footer from '@/components/organisms/Footer';
import HeroIntegrationRevolution from '@/components/organisms/Hero';
import InfoSection from '@/components/organisms/Info';
import Navbar from '@/components/organisms/Navbar';
import ProductShowcase from '@/components/organisms/Products';
import CarouselServicesSection from '@/components/organisms/Services';
import TopSection from '@/components/organisms/TopSection';
import Values from '@/components/organisms/Values';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroIntegrationRevolution />
      <TopSection />
      <InfoSection />
      <ProductShowcase />
      <CarouselServicesSection />
      <Values />
      <Footer />
    </main>
  );
}
