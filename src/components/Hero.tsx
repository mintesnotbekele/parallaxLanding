"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.25 },
    },
  };

  const cardVariants = {
    hidden: { y: 100, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { ease: "easeOut", duration: 0.8 },
    },
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        {/* Navbar */}
        <nav className="absolute top-0 flex items-center justify-between p-6">
          <div className="flex center items-center ">
            <a
              href="#"
              className="px-5 text-sm text-gray-300 hover:text-white"
            >
              How it Works
            </a>
        <button
              className="mt-2 px-6 py-3 rounded-full font-medium text-white relative overflow-hidden transition-all duration-300 group"
            >
              <span className="relative z-10">Buy Salt AI</span>

              {/* Border layer */}
              <span className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-[#963488] via-[#FC6F32] to-[#FF4A59]">
                {/* Inner background with hover effect */}
                <span className="block w-full h-full rounded-full bg-black transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#963488] group-hover:via-[#FC6F32] group-hover:to-[#FF4A59]"></span>
              </span>
            </button>


          </div>
        </nav>

        {/* Hero Heading */}
        <motion.h1
          className="
            m-16
            max-w-[70%]
            mr-auto
            font-[Clash Grotesk] font-medium leading-[100%] text-start tracking-normal
            text-4xl sm:text-6xl md:text-6xl lg:text-7xl
            bg-gradient-to-r from-[#B53EA4] via-[#FC6F32] to-[#FF4A59]
            bg-clip-text text-transparent
          "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          A new economic primitive for funding decentralized AI
        </motion.h1>

        {/* Hero Subtext */}
        <motion.p
          className="mx-16 text-gray-300 mr-auto"
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            fontSize: "24px",
            lineHeight: "100%",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We track, rank and pay for the best open source decentralized LLMs to
          compete against OpenAI
        </motion.p>

        {/* Hero Buttons */}
        <motion.div
          className="px-15 py-5 flex w-full flex-wrap justify-start gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
       <button
              className="mt-2 px-6 py-3 rounded-full font-medium text-white relative overflow-hidden transition-all duration-300 group"
            >
              <span className="relative z-10">Buy Salt AI</span>

              {/* Border layer */}
              <span className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-[#963488] via-[#FC6F32] to-[#FF4A59]">
                {/* Inner background with hover effect */}
                <span className="block w-full h-full rounded-full bg-black transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#963488] group-hover:via-[#FC6F32] group-hover:to-[#FF4A59]"></span>
              </span>
            </button>

          <button className="rounded-full px-6 py-2 font-medium text-white hover:bg-white/10">
            Try Now
          </button>
        </motion.div>
  
      
      
      <motion.div
          className="mt-20 flex justify-center items-center gap-20 w-full"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div
            className="rounded-full bg-gradient-to-b from-neutral-900 to-neutral-800 px-32 py-8 text-center shadow-lg"
            variants={cardVariants}
            style={{
                background:
                  "linear-gradient(105.65deg, rgba(150, 52, 136, 0.2) 0.15%, rgba(252, 111, 50, 0.2) 130.58%, rgba(255, 74, 89, 0.2) 263.64%)",
                backdropFilter: "blur(10px)",
              }}
          >
            <h2 className="text-4xl font-bold">1,873</h2>
            <p className="mt-2 text-sm text-neutral-400">LLM models</p>
          </motion.div>

          <motion.div
            className="rounded-full bg-gradient-to-b from-neutral-900 to-neutral-800 px-32 py-8 text-center shadow-lg"
            variants={cardVariants}
            style={{
                background:
                  "linear-gradient(105.65deg, rgba(150, 52, 136, 0.2) 0.15%, rgba(252, 111, 50, 0.2) 130.58%, rgba(255, 74, 89, 0.2) 263.64%)",
                backdropFilter: "blur(10px)",
              }}
          >
            <h2 className="text-4xl font-bold">$326,734</h2>
            <p className="mt-2 text-sm text-neutral-400">
              Paid to data scientists
            </p>
          </motion.div>

          <motion.div
            className="rounded-full bg-gradient-to-b from-neutral-900 to-neutral-800 px-32 py-8 text-center shadow-lg"
            variants={cardVariants}
            style={{
                background:
                  "linear-gradient(105.65deg, rgba(150, 52, 136, 0.2) 0.15%, rgba(252, 111, 50, 0.2) 130.58%, rgba(255, 74, 89, 0.2) 263.64%)",
                backdropFilter: "blur(10px)",
              }}
          >
            <h2 className="text-4xl font-bold">6,557</h2>
            <p className="mt-2 text-sm text-neutral-400">Developers</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
