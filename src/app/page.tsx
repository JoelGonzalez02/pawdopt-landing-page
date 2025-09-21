"use client";

import { useRef } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import VideoSection from "@/components/VideoSection"; // Assuming you have a video section component
import Footer from "@/components/Footer";
import { useHeaderTheme } from "@/hooks/useHeaderTheme"; // Import the new hook

export default function HomePage() {
  // Create refs for each section
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  // Use the hook to get the current theme based on which section is active
  const activeTheme = useHeaderTheme([heroRef, featuresRef, videoRef]);

  return (
    <>
      {/* Pass the active theme to the Header */}
      {/* <Header theme={activeTheme} /> */}

      <main>
        {/* Attach the refs and add a data-theme attribute to each section */}
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
