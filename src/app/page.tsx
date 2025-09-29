"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

import moonImage from "@/assets/halfmoon.png";
import vectorImage from "@/assets/vectorImage.png";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import HeroSection from "@/components/SecondSection";
import Leaderboard from "@/components/Leaderboard";
import Footer from "@/components/Footer";
import CommunitySection from "@/components/CommunitySection";
import CommunityParallaxText from "@/components/CommunityText";

export default function Home() {
  const { scrollY } = useScroll();

  const moonY = useTransform(scrollY, [200, 1500], [0, -350], { clamp: false });
  const smoothMoonY = useSpring(moonY, { stiffness: 60, damping: 20, mass: 1 });

 
  const vectorY = useTransform(scrollY, [0, 0], [0, 120], { clamp: false });
  const smoothVectorY = useSpring(vectorY, { stiffness: 70, damping: 25, mass: 1 });


  const backgroundOpacity = useTransform(scrollY, [0, 800], [1, 0.5]);

  return (
    <main className="relative min-h-screen bg-black text-white" >
    
      <motion.div
        className="fixed inset-0 z-0 overflow-hidden"
        style={{ opacity: backgroundOpacity }}
      >
        <motion.div
          style={{
            y: smoothMoonY,
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

    
      <motion.div
        className="fixed inset-0 z-10 overflow-hidden"
        style={{ opacity: backgroundOpacity }}
      >
        <motion.div
          style={{
            y: smoothVectorY,
            height: "100%",
            width: "100%",
            position: "absolute",
            bottom: 0,
            left: 0,
          }}
        >
          <Image
            src={vectorImage}
            alt="Vector background"
            style={{ height: "50%", width: "50%", marginLeft: 0 }}
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
        <CommunitySection />
        <CommunityParallaxText />
        <Footer />
      </div>
    </main>
  );
}
