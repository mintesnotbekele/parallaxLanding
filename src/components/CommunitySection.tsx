"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import moonImage from "@/assets/moon.png"; 
import { useRef } from "react";
import telegram from "@/assets/telegram.png";
import twitter from "@/assets/twitter.png";

export default function CommunitySection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  
  const moonX = useTransform(scrollYProgress, [0.2, 0.7], ["-50%", "910%"]);
  const moonRotate = useTransform(scrollYProgress, [0, 1], ["-5deg", "5deg"]);

 
  const textOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, -50]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen flex items-center overflow-hidden py-20 px-4 sm:px-6 lg:px-16 text-white"
    >

      <motion.div
        className="absolute pointer-events-none"
        style={{
          x: moonX,
          rotate: moonRotate,
          width: "25vw",
          maxWidth: 500,
          
          zIndex: 1000
        }}
      >
        <Image
          src={moonImage}
          alt="Moon"
          width={500}
          height={500}
          className="w-full h-auto"
          priority
        />
      </motion.div>

      
      <div className="relative z-20 max-w-2xl md:max-w-3xl lg:max-w-4xl">
        <motion.div
          style={{ opacity: textOpacity, y: textY }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-left">
            Join our community
          </h2>
          <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 text-left">
            Join us on our mission to to the moon & revolutionize open source AI development<br/>
            so that we can build a permissionless, democratized, and decentralized AI.
          </p>
          <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 text-left">
            Let the fate of AI be in our hands and not that of big tech companies.
          </p>

        
          <div className="flex items-center space-x-4">
            <Image
              alt="Telegram"
              src={telegram}
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain cursor-pointer hover:opacity-80 transition"
            />
            <Image
              alt="Twitter"
              src={twitter}
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain cursor-pointer hover:opacity-80 transition"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
