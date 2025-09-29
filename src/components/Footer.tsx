"use client";

import Image from "next/image";
import bgImage from "@/assets/footerImage.png"; 
import telegram from "@/assets/telegram.png";
import twitter from "@/assets/twitter.png";

export default function Footer() {
  return ( 
    <footer className="relative w-full">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={bgImage}
          alt="Footer background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pt-40 sm:pt-52 md:pt-60 flex flex-col gap-8">
        
        {/* Navigation */}
        <div className="flex flex-col items-center">
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 text-xs sm:text-sm md:text-base text-white font-medium pb-3">
            <a href="#" className="hover:text-gray-300 transition">Home</a>
            <a href="#" className="hover:text-gray-300 transition">Leaderboard</a>
            <a href="#" className="hover:text-gray-300 transition">About</a>
          </nav>
          <div className="w-full h-px bg-white/40"></div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <Image
              src={telegram}
              alt="Telegram"
              className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 object-contain cursor-pointer hover:opacity-80 transition"
            />
            <Image
              src={twitter}
              alt="Twitter"
              className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 object-contain cursor-pointer hover:opacity-80 transition"
            />
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center sm:justify-end items-center gap-4 sm:gap-6 text-[10px] sm:text-xs md:text-sm text-gray-200">
            <a href="#" className="hover:text-gray-400 transition">Terms of Use</a>
            <a href="#" className="hover:text-gray-400 transition">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400 transition">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
