import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Screenshots from "@/components/Screenshots";
import StationOwner from "@/components/StationOwner";
import Download from "@/components/Download";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <Screenshots />
      <StationOwner />
      <Download />
      <Footer />
    </main>
  );
}