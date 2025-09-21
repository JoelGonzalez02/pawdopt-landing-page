// src/components/HeroSection.tsx

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    // 1. The main container is now a full-screen, relative box for positioning
    <section className="relative flex items-center justify-center min-h-screen w-full">
      {/* 2. The Next.js Image component, acting as the background */}
      <Image
        src="/hero-background.png" // The path to your new hero image in the `public` folder
        alt="A happy couple with their newly adopted pet"
        layout="fill"
        objectFit="cover"
        quality={85}
        className="z-[-2]" // Places the image in the far background
      />

      {/* 3. A dark overlay to ensure the text is always readable */}
      <div className="absolute inset-0 bg-black/50 z-[-1]" />

      {/* 4. The main content, centered on top of the image and overlay */}
      <div className="relative z-10 flex flex-col items-center gap-6 text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Bring your best friend home
        </h1>
        {/* <p className="text-lg md:text-xl max-w-2xl">
          Discover, swipe, and watch videos of adoptable pets near you. Your
          journey starts here.
        </p> */}

        {/* App Store Buttons - styled to stand out on the image */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Link
            href="#"
            className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition-colors"
          >
            Coming soon to the Apple App Store
          </Link>
          {/* <Link
            href="#"
            className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition-colors"
          >
            Coming Soon To Google Play
          </Link> */}
        </div>
      </div>
    </section>
  );
}
