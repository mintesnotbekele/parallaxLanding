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


const moonX = useTransform(
  scrollYProgress,
  [0.2, 0.7],         
  ["-100%", "600%"]
);


  const moonRotate = useTransform(scrollYProgress, [0, 1], ["-5deg", "5deg"]);
  
 
  const textOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, -50]);

  return (
    <section 
      ref={sectionRef} 
      className="relative max-h-screen text-white flex items-center overflow-hidden py-20"
    >
      
      <motion.div
        className="absolute pointer-events-none"
        style={{
          x: moonX,
          zIndex:"1000",
          rotate: moonRotate,
          width: "50%",
          height: "auto",
          maxWidth: "500px"
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

      
      <div className="container  mx-auto px-6 z-10">
        <motion.div 
          className="max-w-lg"
          style={{
            opacity: textOpacity,
            y: textY
          }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Join our community</h2>
          <p className="text-lg mb-6">
            Join us on our mission to to the moon & revolutionize open source AI development
            so that we can build a permissionless, democratized, and decentralized AI.
          </p>
          <p className="text-lg mb-8">
            Let the fate of AI be in our hands and not that of big tech companies.
          </p>
          
         
          <div className="flex space-x-4">
           <Image
           alt="telegram"
           src={telegram}
           
           />
           <Image
           alt="telegram"
           src={twitter}
           
           />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
