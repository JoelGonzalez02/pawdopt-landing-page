// src/components/Header.tsx

import Image from "next/image";
import Link from "next/link";

// *** MODIFIED ***: The component now accepts a 'theme' prop.
export default function Header({ theme }: { theme: "light" | "dark" }) {
  return (
    // The header is always transparent and fixed.
    <header className="w-full fixed top-0 z-50 bg-transparent">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/pawdopt-logo-nobg.png"
            alt="Pawdopt Logo"
            width={189}
            height={189}
            // *** MODIFIED ***: The logo's class now depends on the theme prop.
            // If the theme is 'dark' (i.e., over a dark section), the logo is white (inverted).
            // If the theme is 'light' (i.e., over a light section), the logo is black.
            className={`transition-all duration-300 ${
              theme === "dark" ? "invert" : ""
            }`}
          />
        </Link>
      </div>
    </header>
  );
}
