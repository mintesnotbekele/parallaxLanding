"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function CommunityParallaxText() {
  const ref = useRef<HTMLDivElement>(null);


  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"], 
  });

  
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);

  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 0, 1]);

  return (
    <section
      ref={ref}
      className="relative flex items-center justify-center h-60"
    >
      <motion.h1
        style={{ y, opacity }}
        transition={{ ease: [0.25, 0.1, 0.25, 1] }}
        className="text-2xl md:text-3xl font-bold text-white text-center"
      >
        Join our community and harvest{" "}
        <span className="text-[#00E6A8]">$SALT</span>
      </motion.h1>
    </section>
  );
}
