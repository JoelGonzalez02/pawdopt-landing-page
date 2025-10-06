import Image from "next/image";
import Link from "next/link";

export default function Header({ theme }: { theme: "light" | "dark" }) {
  return (
    <header className="w-full fixed top-0 z-50 bg-transparent">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/pawdopt-logo-nobg.png"
            alt="Pawdopt Logo"
            width={189}
            height={189}
            className={`transition-all duration-300 ${
              theme === "dark" ? "invert" : ""
            }`}
          />
        </Link>
      </div>
    </header>
  );
}
