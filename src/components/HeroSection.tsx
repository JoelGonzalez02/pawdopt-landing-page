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
          />
        </Link>
      </div>

      <Image
        src="/hero-background.png"
        alt="A happy couple with their newly adopted pet"
        layout="fill"
        objectFit="cover"
        quality={85}
        className="z-[-2]"
      />

      <div className="absolute inset-0 bg-black/50 z-[-1]" />

      <div className="relative z-10 flex flex-col items-center gap-6 text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Bring your best friend home
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Link
            href="#"
            className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition-colors"
          >
            Coming soon to the Apple App Store
          </Link>
        </div>
      </div>
    </section>
  );
}
