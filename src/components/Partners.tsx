"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import solana from "@/assets/solana.png";
import arwave from "@/assets/arewave.png";
import bittensor from "@/assets/bittensor.png";
import youtube from "@/assets/youtube.png";
import telgram from "@/assets/telegram.png";
import Image from "next/image";

export default function Partners() {
  const partners = [
    { name: "Solana", logo: solana },
    { name: "Arweave", logo: arwave },
    { name: "Bittensor", logo: bittensor },
    { name: "YouTube", logo: youtube },
    { name: "Telegram", logo: telgram },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <div
      ref={containerRef}
      className="py-16 w-full min-h-screen flex flex-col justify-center items-center overflow-hidden relative"
    >
      <div className="w-full">
        {/* Responsive Heading */}
        <motion.h2
          className="
            mb-12 
            text-center 
            font-[Clash Grotesk] 
            font-medium 
            text-2xl sm:text-3xl md:text-4xl lg:text-6xl 
            leading-tight tracking-normal text-white
            px-4
          "
          style={{ fontFamily: "Clash Grotesk, sans-serif" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          Projects integrated into the Arrakis AI Ecosystem
        </motion.h2>

        {/* Scrolling Logos */}
        <div className="relative w-full flex justify-center">
          <div className="w-[calc(5*6rem)] sm:w-[calc(10*7rem)] md:w-[calc(15*8rem)] overflow-hidden">
            <motion.div
              className="flex items-center space-x-8 sm:space-x-12 md:space-x-16 lg:space-x-20"
              style={{ x }}
            >
              {[...partners, ...partners, ...partners].map((partner, index) => (
                <motion.div
                  key={index}
                  className="
                    flex 
                    h-12 w-24 
                    sm:h-16 sm:w-32 
                    md:h-20 md:w-40 
                    lg:h-28 lg:w-48 
                    items-center justify-center 
                    p-2 shrink-0
                  "
                  whileHover={{ scale: 1.1 }}
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-contain"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
