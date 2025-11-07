"use client";

import { motion } from "framer-motion";
import {
  HandHeart, // For finding partners
  Share2, // For sharing the story
  Megaphone, // For making noise / tagging Petfinder
} from "lucide-react";

// 1. We define the "actions" in the same array structure
const supportActions = [
  {
    name: "Help Find New Partners",
    description:
      "Do you work at an LA-based shelter, a rescue, or are you a developer with data ideas? We'd love to connect and find a new path forward.",
    icon: <HandHeart size={28} className="text-rose-600" />,
    bgColor: "bg-rose-100", // Custom color for this action
  },
  {
    name: "Share Our Mission",
    description:
      "Share our video-first mission with anyone who loves animals. The more people who know, the faster we can find a solution and get these pets seen.",
    icon: <Share2 size={28} className="text-blue-600" />,
    bgColor: "bg-blue-100", // Custom color for this action
  },
  {
    name: "Show Your Support",
    description:
      "Love Pawdopt? Follow our journey and tag @Petfinder on social media to show them the community wants this app to launch!",
    icon: <Megaphone size={28} className="text-green-600" />,
    bgColor: "bg-green-100", // Custom color for this action
  },
];

/**
 * A Next.js component to rally community support,
 * styled to match the FeaturesSection component.
 */
export default function CommunitySupportSection() {
  return (
    // 2. Uses the same overall section styling (bg-white, text-gray-800, etc.)
    <section className="w-full min-h-screen bg-white flex flex-col items-center justify-center py-20 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* 3. Uses the same animated title block */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            A Call to Our Community
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Our mission to get animals seen is facing a new hurdle. As we were
            preparing to launch, the public data source for animal listings we
            rely on is being shut down. But this is a community effort, and with
            your help, we can find a new path forward.
          </p>
        </motion.div>

        {/* 4. Uses the same grid and map logic to display the actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-16">
          {supportActions.map((action, index) => (
            <motion.div
              key={action.name}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* 5. Uses the same icon wrapper, but with dynamic bg-color */}
              <div className={`p-4 rounded-full mb-4 ${action.bgColor}`}>
                {action.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {action.name}
              </h3>
              <p className="text-base text-gray-600">{action.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
