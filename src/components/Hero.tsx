"use client";

import { motion, Variants } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.25 },
    },
  };

  const cardVariants: Variants = {
    hidden: { y: 100, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeOut" as const,
        duration: 0.8,
      },
    },
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
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
          className="
            mt-24 sm:mt-32
            max-w-[90%] sm:max-w-[80%] lg:max-w-[70%]
            mr-auto
            font-[Clash Grotesk] font-medium leading-tight text-start tracking-normal
            text-3xl sm:text-5xl md:text-6xl lg:text-7xl
            bg-gradient-to-r from-[#B53EA4] via-[#FC6F32] to-[#FF4A59]
            bg-clip-text text-transparent
          "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          A new economic primitive for funding decentralized AI
        </motion.h1>

        <motion.p
  className="w-full mx-4 sm:mx-8 md:mx-16 text-left text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl leading-snug"
  style={{
    fontFamily: "Inter, sans-serif",
    fontWeight: 400,
  }}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
>
  We track, rank and pay for the best open source decentralized LLMs to
  compete against OpenAI
</motion.p>


       
     <motion.div
  className="mt-6 flex w-full flex-wrap justify-start gap-3 sm:gap-4 text-left"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.4 }}
>
  <button className="px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-xs sm:text-sm md:text-base text-white relative overflow-hidden transition-all duration-300 group">
    <span className="relative z-10">Buy Salt AI</span>
    <span className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-[#963488] via-[#FC6F32] to-[#FF4A59]">
      <span className="block w-full h-full rounded-full bg-black transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#963488] group-hover:via-[#FC6F32] group-hover:to-[#FF4A59]"></span>
    </span>
  </button>

  <button className="rounded-full px-4 sm:px-6 py-2 sm:py-3 font-medium text-xs sm:text-sm md:text-base text-white hover:bg-white/10">
    Try Now
  </button>
</motion.div>

       
        <motion.div
          className="mt-12 sm:mt-16 md:mt-20 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 sm:gap-10 md:gap-20 w-full"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {[
            { value: "1,873", label: "LLM models" },
            { value: "$326,734", label: "Paid to data scientists" },
            { value: "6,557", label: "Developers" },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="rounded-2xl px-10 sm:px-16 md:px-20 py-6 sm:py-8 text-center shadow-lg w-full sm:w-auto"
              variants={cardVariants}
              style={{
                background:
                  "linear-gradient(105.65deg, rgba(150, 52, 136, 0.2) 0.15%, rgba(252, 111, 50, 0.2) 130.58%, rgba(255, 74, 89, 0.2) 263.64%)",
                backdropFilter: "blur(10px)",
              }}
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
