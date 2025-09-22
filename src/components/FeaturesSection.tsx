"use client"; // *** NEW ***: This component is now interactive, so it must be a Client Component.

import { motion } from "framer-motion"; // *** NEW ***: Import the motion component.
import {
  Heart,
  PlaySquare,
  FolderHeart,
  SlidersHorizontal,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";

const features = [
  // ... your features array remains the same
  {
    name: "Swipe Mode",
    description:
      "A fun way to find your pawfect match. Swipe right or press the heart icon on a pet to save them to your favorites list.",
    icon: <Heart size={28} className="text-purple-600" />,
  },
  {
    name: "Discovery Mode",
    description:
      "Explore a beautiful collection of pets available near you. Tap any photo for an expanded view of each pet.",
    icon: (
      <Image
        src="/gridicon_custom.png"
        alt="Grid Icon"
        width={35}
        height={35}
      />
    ),
  },
  {
    name: "Video Reels",
    description:
      "Get to know a pet's true personality with an engaging feed of short videos from adoptable pets near you, and popular videos from accross the country.",
    icon: <PlaySquare size={28} className="text-purple-600" />,
  },
  {
    name: "Organize Favorites",
    description:
      "In your 'Liked' list, view profiles or tap the 'X' to remove a pet you're no longer considering, keeping your list neat and tidy.",
    icon: <FolderHeart size={28} className="text-purple-600" />,
  },
  {
    name: "Set Preferences",
    description:
      "Use our powerful filters powered by Petfinder.com to narrow your search. Filter by location, distance, age, breed, gender, and more to find the perfect match.",
    icon: <SlidersHorizontal size={28} className="text-purple-600" />,
  },
  {
    name: "Connect with Shelters",
    description:
      "Ready to meet? Tap to view a pet's full adoption page and contact them directly to start the process.",
    icon: <ExternalLink size={28} className="text-purple-600" />,
  },
];

export default function FeaturesSection() {
  return (
    <section className="w-full min-h-screen bg-white flex flex-col items-center justify-center py-20 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* *** MODIFIED ***: Header is now a motion.div to animate it. */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            How Pawdopt Works
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            From finding your perfect pet, to managing your favorites, Pawdopt
            provides all the tools you need for a simple and fun adoption
            journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-16">
          {/* *** MODIFIED ***: Each feature card is now a motion.div. */}
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered delay
            >
              <div className="bg-purple-100 p-4 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {feature.name}
              </h3>
              <p className="text-base text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
