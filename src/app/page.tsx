import Navbar from '@/components/Navbar';
import HeroSlider from '@/components/HeroSlider';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import ClientsSection from '@/components/ClientsSection';
import NewsCenter from '@/components/NewsCenter';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroSlider />
        <ServicesSection />
        <AboutSection />
        <ClientsSection />
        <NewsCenter />
      </main>
      <Footer />
    </div>
  );
}
