import React from "react";
import "./App.css";
import { Toaster } from "sonner";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import FleetSection from "./components/FleetSection";
import RoutesSection from "./components/RoutesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Toaster position="top-right" richColors />
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <FleetSection />
        <RoutesSection />
        <TestimonialsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
