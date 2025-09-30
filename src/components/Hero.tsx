"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Track scroll progress
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const cardY = useTransform(scrollYProgress, [1.3, 1], [200, 10]);
  const cardOpacity = useTransform(scrollYProgress, [0.5, 0.55], [0, 1]);
  const cardScale = useTransform(scrollYProgress, [0.25, 0.55], [0.8, 1]);


  const headingMargin = useTransform(scrollYProgress, [0, 0.4], [96, 16]);

  return (
    <div ref={sectionRef} className="relative min-h-screen w-full overflow-hidden">
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 sm:px-8 md:px-12 text-center">
      
        <nav className="absolute top-0 left-0 w-full flex items-center justify-center px-4 gap-10 sm:px-8 md:px-12 py-4">
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="#"
              className="text-xs sm:text-sm text-gray-300 hover:text-white"
            >
              How it Works
            </a>
          </div>

          <button className="mt-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-xs sm:text-sm md:text-base text-white relative overflow-hidden transition-all duration-300 group">
            <span className="relative z-10">Buy Salt AI</span>
            <span className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-[#963488] via-[#FC6F32] to-[#FF4A59]">
              <span className="block w-full h-full rounded-full bg-black transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#963488] group-hover:via-[#FC6F32] group-hover:to-[#FF4A59]"></span>
            </span>
          </button>
        </nav>

       
        <motion.h1
          style={{ marginTop: headingMargin }}
          className="sm:mt-32 max-w-[90%] sm:max-w-[80%] lg:max-w-[70%] mr-auto font-primary font-medium leading-tight text-start tracking-normal text-3xl sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-[#B53EA4] via-[#FC6F32] to-[#FF4A59] bg-clip-text text-transparent"
        >
          A new economic primitive for funding decentralized AI
        </motion.h1>

        <p className="w-full font-secondary mx-4 sm:mx-8 md:mx-16 text-left text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl leading-snug">
          We track, rank and pay for the best open source decentralized LLMs to
          compete against OpenAI
        </p>

        <div className="mt-6 flex w-full flex-wrap justify-start gap-3 sm:gap-4 text-left">
          <button className="px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-xs sm:text-sm md:text-base text-white relative overflow-hidden transition-all duration-300 group">
            <span className="relative z-10">Buy Salt AI</span>
            <span className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-[#963488] via-[#FC6F32] to-[#FF4A59]">
              <span className="block w-full h-full rounded-full bg-black transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#963488] group-hover:via-[#FC6F32] group-hover:to-[#FF4A59]"></span>
            </span>
          </button>

          <button className="rounded-full px-4 sm:px-6 py-2 sm:py-3 font-medium text-xs sm:text-sm md:text-base text-white hover:bg-white/10">
            Try Now
          </button>
        </div>

     
        <motion.div
          style={{ y: cardY, opacity: cardOpacity, scale: cardScale }}
          className="mt-12 sm:mt-16 md:mt-20 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 sm:gap-10 md:gap-20 w-full"
        >
          {[
            { value: "1,873", label: "LLM models" },
            { value: "$326,734", label: "Paid to data scientists" },
            { value: "6,557", label: "Developers" },
          ].map((item, i) => (
            <motion.div
              key={i}
              style={{
                background:
                  "linear-gradient(105.65deg, rgba(150, 52, 136, 0.2) 0.15%, rgba(252, 111, 50, 0.2) 130.58%, rgba(255, 74, 89, 0.2) 263.64%)",
                backdropFilter: "blur(10px)",
              }}
              className="rounded-full px-10 sm:px-16 md:px-20 py-6 sm:py-8 text-center shadow-lg w-full sm:w-auto bg-white/5 backdrop-blur-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 120, damping: 12 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                {item.value}
              </h2>
              <p className="mt-2 text-xs sm:text-sm md:text-base text-neutral-400">
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
