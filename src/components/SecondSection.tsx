"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import shootingStar from "@/assets/shootingstart.png"; 
import { useRef } from "react";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const starX = useTransform(scrollYProgress, [0, 1], ["-50%", "1050%"]); 
  const starY = useTransform(scrollYProgress, [0, 1], ["-50%", "1050%"]); 
  const starRotate = useTransform(scrollYProgress, [0, 1], ["-10deg", "10deg"]); 
  const textOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]); 
  const textY = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, -50]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center overflow-hidden py-20 px-4 sm:px-6 lg:px-16"
    >
    
      <motion.div
        className="absolute pointer-events-none"
        style={{
          x: starX,
          y: starY,
          rotate: starRotate,
          width: "25vw",
          maxWidth: 500,
          top: "-10%",
        }}
      >
       <Image src={shootingStar} alt="Shooting Star" width={80} height={80} className="w-auto h-auto" priority />
      </motion.div>

      <motion.div
        className="relative z-20 max-w-2xl md:max-w-3xl lg:max-w-4xl text-left"
        style={{ opacity: textOpacity, y: textY }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
          Crowdsourcing our collective <br /> intelligence to build the best AI
        </h1>
        <p className="mt-4 sm:mt-6 font-secondary text-gray-300 text-sm sm:text-base md:text-lg">
          Open source AI has been lagging behind the likes of Google and OpenAI by billions of dollars.
        </p>
        <p className="mt-3 sm:mt-4 font-secondary text-gray-400 text-xs sm:text-sm md:text-base">
          Salt aims to solve that by rewarding open source developers who contribute to the democratization of AI. 
          We run competitions between AI models to find and reward the best AI models. As a result, our users will be able 
          to access the latest cutting edge AI models.
        </p>

        <button className="mt-6 sm:mt-8 px-5 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-white relative overflow-hidden transition-all duration-300">
          <span className="relative z-10">Use The Cutting Edge AI</span>
          <span className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-[#963488] via-[#FC6F32] to-[#FF4A59]">
            <span className="block w-full h-full rounded-full bg-black"></span>
          </span>
        </button>
      </motion.div>
    </section>
  );
}
