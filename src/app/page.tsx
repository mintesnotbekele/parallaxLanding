"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

import moonImage from "@/assets/halfmoon.png";
import vectorCenter from "@/assets/Vectorbottom.png";

import Hero from "@/components/Hero";

export default function Home() {
  const { scrollY } = useScroll();

  // Delay the parallax start → only start moving after 200px scroll
  const backgroundY = useTransform(scrollY, [200, 1500], [0, -400], {
  clamp: false,
});

  // Smooth spring effect for natural easing
const smoothBackgroundY = useSpring(backgroundY, {
  stiffness: 60,
  damping: 20,
  mass: 1,
});

  // Subtle fade-out for atmosphere
  const backgroundOpacity = useTransform(scrollY, [0, 800], [1, 0.5]);

  return (
    <main className="relative min-h-screen bg-black text-white">
      {/* Fixed background with parallax effect */}
      <motion.div
        className="fixed inset-0 z-0 overflow-hidden"
        style={{ opacity: backgroundOpacity }}
      >
        <motion.div
          style={{
            y: smoothBackgroundY,
            height: "100%",
            width: "100%",
            position: "absolute",
            bottom: 0,
            right: 0,
          }}
        >
          <Image
            src={moonImage}
            alt="Moon background"
            style={{ height: "100%", width: "50%", marginLeft: "auto" }}
            className="object-contain"
            priority
          />
        </motion.div>
      </motion.div>

      {/* Foreground vector */}
      <div
        style={{
          width: "100%",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        <Image src={vectorCenter} alt="Vector background" priority />
      </div>

      {/* Content sections */}
      <div className="relative z-10">
        <Hero />
      
      </div>
    </main>
  );
}
