"use client";

import { useRef } from "react";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import VideoSection from "@/components/VideoSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <main>
        <div ref={heroRef} data-theme="dark">
          <HeroSection />
        </div>
        <div ref={featuresRef} data-theme="light">
          <FeaturesSection />
        </div>
        <div ref={videoRef} data-theme="dark">
          <VideoSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
