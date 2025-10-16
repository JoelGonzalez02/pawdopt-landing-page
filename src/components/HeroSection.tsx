import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center min-h-screen w-full">
      <div className="absolute top-0 left-0 w-full p-6 z-20">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/pawdopt-logo-nobg.png"
            alt="Pawdopt Logo"
            width={189}
            height={189}
            className="invert"
            priority // Preload the logo for better performance
          />
        </Link>
      </div>

      {/* Background Image using Next.js Image component for optimization */}
      <Image
        src="/hero-background.png"
        alt="A happy couple with their newly adopted pet"
        layout="fill"
        objectFit="cover"
        quality={85}
        priority // Preload the main background image
        className="z-[-2]"
      />

      <div className="absolute inset-0 bg-black/60 z-[-1]" />

      <div className="relative z-10 flex flex-col items-center gap-6 text-center text-white px-6 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          A new way to discover your best friend.
        </h1>
        {/* NEW: Announce the private beta for LA */}
        <p className="text-lg md:text-xl text-gray-200">
          The most engaging way to find adoptable pets is almost here. Join the
          waitlist for exclusive early access in the Los Angeles area.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          {/* UPDATED: A single, clear call-to-action for the waitlist */}
          <Link
            href="#waitlist" // This should link to your waitlist form section
            className="bg-white text-black font-semibold px-8 py-3 rounded-full hover:bg-gray-200 transition-colors text-lg"
          >
            Join Waitlist
          </Link>
        </div>
      </div>
    </section>
  );
}
