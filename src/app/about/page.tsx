"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoChevronBack } from "react-icons/io5";
import Footer from "@/components/Footer";

export default function AboutPage() {
  const [showVideo, setShowVideo] = useState(false);

  const handleBringToLife = () => {
    setShowVideo(true);
    // The video will auto-play due to the `autoPlay` attribute
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-black text-gray-800 dark:text-gray-200">
      <header className="sticky top-0 z-10 bg-white/80 dark:bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between p-4 dark:border-gray-800">
          <Link href="/" className="p-2">
            <IoChevronBack size={28} />
          </Link>
          <h1 className="text-lg font-bold">Our Mission</h1>
          <div className="w-10" /> {/* Spacer */}
        </div>
      </header>

      <main className="flex-grow container mx-auto px-5 py-10">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <Image
            src="/joel-profile.jpeg"
            alt="Joel Gonzalez"
            width={120}
            height={120}
            className="rounded-full border-4 border-purple-800 mb-3"
          />
          <h2 className="text-2xl font-bold dark:text-white">Joel Gonzalez</h2>
          <p className="text-md text-gray-500 dark:text-gray-400 mb-8">
            Founder of Pawdopt
          </p>

          <div className="space-y-6 text-justify">
            <p className="text-lg font-semibold italic text-center text-gray-700 dark:text-gray-300">
              This app is dedicated to the loving memory of my cat, Robin.
            </p>
            <p>
              In late 2021, I lost my best friend, Robin. For 7 years he was my
              constant companion, often purring on my lap or watching me work as
              I began to build the very first version of this app. He was there
              for the start of this journey, and his memory is what insipired me
              to finish it.
            </p>
            <p>
              I built every feature with the goal of bringing the same love and
              companionship he gave me, and I gave him, to as many people and
              pets as possible.
            </p>
          </div>

          <div className="relative w-full max-w-md mx-auto aspect-[9/16] rounded-2xl overflow-hidden bg-gray-200 dark:bg-gray-800 my-8 shadow-lg">
            {/* Image Layer */}
            <Image
              src="/robin.jpg"
              alt="Robin the cat"
              fill
              className={`object-cover transition-opacity duration-700 ${
                showVideo ? "opacity-0" : "opacity-100"
              }`}
            />

            {/* Video Layer */}
            {showVideo && (
              <video
                src="/robin-video.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            )}

            {/* Button Layer */}
            {!showVideo && (
              <div className="absolute inset-0 flex items-end justify-center pb-6">
                <button
                  onClick={handleBringToLife}
                  className="bg-black/60 text-white font-bold text-lg py-3 px-6 rounded-full border border-white/50 backdrop-blur-sm hover:bg-black/80 transition"
                >
                  Bring to Life With Google Veo 3 AI ✨
                </button>
              </div>
            )}
          </div>

          <div className="space-y-6 text-justify">
            <p>
              As a software engineer with experience at multiple companies, I
              wanted to apply my skills to a problem I care about deeply: Using
              technology to make the adoption process more fun and effective.
            </p>
            <p>
              The love for animals that Robin inspired in me continues to be a
              driving force in my life and in the development of this app.
            </p>
            <p>
              I hope to hear many stories of people finding their pet companions
              through Pawdopt.
            </p>
            <p className="text-lg font-semibold italic text-center text-gray-700 dark:text-gray-300">
              Thank you for being a part of this mission!
            </p>

            <p>
              I would also like to thank{" "}
              <a
                href="https://www.petfinder.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:underline font-semibold"
              >
                Petfinder
              </a>
              .com for graciously providing their amazing data API which allows
              us to bring you all of your search results.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
