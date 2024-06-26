import Image from "next/image";
import { Header}  from "./components/Header";
import { Navbar}  from "./components/Navbar";
import { AboutSection }  from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
import { MediaKitSection } from "./components/MediaKitSection";
import  { ServicesSection }  from "./components/ServicesSection";
import { PartnersSections } from "./components/PartnersSections";
import { ContactSection } from "./components/ContactSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mx-auto px-12 py-16">
        <Header />
        <AboutSection />
        <ProjectsSection />
        <MediaKitSection />
        <ServicesSection />
        <PartnersSections />
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}