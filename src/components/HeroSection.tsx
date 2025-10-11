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
          Bring your best friend home
        </h1>
        <p className="text-lg md:text-xl text-gray-200">
          I am visiting local shelters to share the stories of overlooked pets.
          To launch Pawdopt with the most comprehensive data, we need to partner
          with Petfinder. Sign the petition to show your support and help bring
          this app to life.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          {/* The <Link> component for the petition, without a nested <a> tag */}
          <Link
            href="https://c.org/VmNQnP8sTn"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black font-semibold px-8 py-3 rounded-full hover:bg-gray-200 transition-colors text-lg"
          >
            Sign the Petition
          </Link>

          {/* The <Link> component for the waitlist, without a nested <a> tag */}
          {/* <Link
            href="#waitlist"
            className="bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-black transition-colors text-lg"
          >
            Join the Waitlist
          </Link> */}
        </div>
      </div>
    </section>
  );
}
