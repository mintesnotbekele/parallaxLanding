"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

import moonImage from "@/assets/halfmoon.png";

import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import HeroSection from "@/components/SecondSection";
import Leaderboard from "@/components/Leaderboard";

export default function Home() {
  const { scrollY } = useScroll();

  
  const backgroundY = useTransform(scrollY, [200, 1500], [0, -400], {
  clamp: false,
});


const smoothBackgroundY = useSpring(backgroundY, {
  stiffness: 60,
  damping: 20,
  mass: 1,
});

const backgroundOpacity = useTransform(scrollY, [0, 800], [1, 0.5]);

  return (
    <main className="relative min-h-screen bg-black text-white">
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
    
      <div className="relative z-10">
        <Hero />
         <Partners />
         <HeroSection />
         <Leaderboard />
         <HeroSection />
      </div>
    </main>
  );
}
