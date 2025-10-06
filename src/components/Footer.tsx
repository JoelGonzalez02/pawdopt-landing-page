import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600 dark:text-gray-400">
        <div className="text-center sm:text-left">
          <p>© 2025 Pawdopt. All rights reserved.</p>
          {/* <p className="text-xs mt-1">
            Data provided by{" "}
            <a
              href="https://www.petfinder.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline hover:text-purple-600"
            >
              Petfinder
            </a>
            .
          </p> */}
        </div>
        <div className="flex flex-wrap justify-center gap-6 mt-4 sm:mt-0">
          <Link href="/about" className="hover:text-purple-600">
            About
          </Link>
          <Link href="/contact" className="hover:text-purple-600">
            Contact
          </Link>
          <Link href="/privacy-policy" className="hover:text-purple-600">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="hover:text-purple-600">
            Terms of Service
          </Link>
          <Link
            href="https://tiktok.com/@pawadoptapp"
            target="_blank"
            className="hover:text-purple-600"
          >
            TikTok
          </Link>
          <Link
            href="https://instagram.com/pawadoptapp"
            target="_blank"
            className="hover:text-purple-600"
          >
            Instagram
          </Link>
        </div>
      </div>
    </footer>
  );
}
