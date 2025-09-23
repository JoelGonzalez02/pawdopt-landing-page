// components/SupportSection.tsx

import Link from "next/link";

const SupportSection = () => {
  return (
    <div className="mt-12 w-full max-w-2xl border-t border-gray-200 pt-8 text-center dark:border-gray-700">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
        Support the Mission
      </h3>
      <p className="mt-2 text-gray-600 dark:text-gray-300">
        Pawdopt is a passion project built by a solo developer. If you enjoy the
        app and believe in the mission, your support helps cover server costs
        and fuels future development!
      </p>
      <div className="mt-6">
        <Link
          href="https://ko-fi.com/pawdopt"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-full bg-[#67295F] px-6 py-3 font-bold text-white shadow-lg transition-transform hover:scale-105"
        >
          {/* --- FIX: Replaced SVG with a clearer coffee cup icon --- */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5} // Adjusted strokeWidth for a slightly finer look
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3m4-3v3m4-3v3"
            />
          </svg>
          Buy Me a Coffee on Ko-fi
        </Link>
      </div>
    </div>
  );
};

export default SupportSection;
