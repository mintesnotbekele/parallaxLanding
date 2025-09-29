
"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import rocket from "@/assets/rocket.png";
import Image from "next/image";
import { useRef, useState } from "react";

import upArrow from "@/assets/uparrow.png";
import downArrow from "@/assets/downarrow.png";
import dashArrow from "@/assets/dasharrow.png";
import downButton from "@/assets/DownButton.png"; 
import upButton from "@/assets/UpButton.png"

type LeaderboardRow = {
  "#": number;
  trend: "up" | "down" | "dash";
  "Model Name": string;
  Average: number;
  ARC: number;
  HellaSwag: number;
  MMLU: number;
  TruthfulQA: number;
  Winogrande: number;
  GSM8K: number;
  Usage: string | number;
};

export default function Leaderboard() {

  
  const leaderboardData : LeaderboardRow[] = [
    { "#": 1, trend: "dash", "Model Name": "davidkim205/Rhea-72b-v0.5", Average: 81.22, ARC: 79.78, HellaSwag: 91.15, MMLU: 77.95, TruthfulQA: 74.5, Winogrande: 87.85, GSM8K: 76.12, Usage: "1,384,193" },
    { "#": 2, trend: "up", "Model Name": "MTSAIR/MultiVerse_70B", Average: 81.22, ARC: 79.78, HellaSwag: 91.15, MMLU: 77.95, TruthfulQA: 74.5, Winogrande: 87.85, GSM8K: 76.12, Usage: "1,384,193" },
    { "#": 3, trend: "dash", "Model Name": "SF-Foundation/Ein-72B-v0.11", Average: 81.22, ARC: 79.78, HellaSwag: 91.15, MMLU: 77.95, TruthfulQA: 74.5, Winogrande: 87.85, GSM8K: 76.12, Usage: "1,384,193" },
    { "#": 4, trend: "up", "Model Name": "abacusai/Smaug-72B-v0.1", Average: 81.22, ARC: 79.78, HellaSwag: 91.15, MMLU: 77.95, TruthfulQA: 74.5, Winogrande: 87.85, GSM8K: 76.12, Usage: "1,384,193" },
    { "#": 5, trend: "down", "Model Name": "ibivibiv/alpaca-dragon-72b-v1", Average: 81.22, ARC: 79.78, HellaSwag: 91.15, MMLU: 77.95, TruthfulQA: 74.5, Winogrande: 87.85, GSM8K: 76.12, Usage: "1,384,193" },
    { "#": 6, trend: "down", "Model Name": "mistralai/Mixtral-8x22B-Instruct-v0.1", Average: 81.22, ARC: 79.78, HellaSwag: 91.15, MMLU: 77.95, TruthfulQA: 74.5, Winogrande: 87.85, GSM8K: 76.12, Usage: "1,384,193" },
    { "#": 7, trend: "down", "Model Name": "moreh/MoMo-72B-lora-1.8.7-DPO", Average: 81.22, ARC: 79.78, HellaSwag: 91.15, MMLU: 77.95, TruthfulQA: 74.5, Winogrande: 87.85, GSM8K: 76.12, Usage: "1,384,193" },
    { "#": 8, trend: "down", "Model Name": "cloudyu/TomGrc_FusionNet_34Bx2_MoE_v0.1_DPO_f16", Average: 81.22, ARC: 79.78, HellaSwag: 91.15, MMLU: 77.95, TruthfulQA: 74.5, Winogrande: 87.85, GSM8K: 76.12, Usage: "1,384,193" },
    { "#": 9, trend: "down", "Model Name": "meta-llama/Meta-Llama-3-70B-Instruct", Average: 77.88, ARC: 71.42, HellaSwag: 85.69, MMLU: 80.06, TruthfulQA: 61.81, Winogrande: 82.87, GSM8K: 85.44, Usage: 1190560 },
    { "#": 10, trend: "dash", "Model Name": "sail/luxia-21-4b-alignment-v1.0", Average: 77.74, ARC: 71.47, HellaSwag: 91.88, MMLU: 68.1, TruthfulQA: 73.17, Winogrande: 87.37, GSM8K: 71.11, Usage: 1185234 },
    { "#": 11, trend: "up", "Model Name": "zhenye/MixT40-7B-v2-MoE-v8.1", Average: 77.5, ARC: 73.81, HellaSwag: 89.22, MMLU: 64.92, TruthfulQA: 78.57, Winogrande: 87.37, GSM8K: 71.11, Usage: 1178689 },
    { "#": 12, trend: "down", "Model Name": "yunconglong/Truthful_DPO_TomGrc_FusionNet", Average: 77.44, ARC: 74.91, HellaSwag: 89.3, MMLU: 64.67, TruthfulQA: 78.02, Winogrande: 88.24, GSM8K: 68.52, Usage: 1177065 },
    { "#": 13, trend: "dash", "Model Name": "JaeyeonKang/CGK_Asura_v1", Average: 77.43, ARC: 73.89, HellaSwag: 89.07, MMLU: 75.44, TruthfulQA: 71.75, Winogrande: 86.35, GSM8K: 68.08, Usage: 1170054 },
    { "#": 14, trend: "down", "Model Name": "fbigit/UNA-SimpleSmaug-34b-v1bte3", Average: 77.41, ARC: 74.57, HellaSwag: 86.74, MMLU: 75.69, TruthfulQA: 70.17, Winogrande: 83.92, GSM8K: 72.46, Usage: 1165952 },
    { "#": 15, trend: "up", "Model Name": "TomGrc/FusionNet_34B-v2-MoE_v0.1", Average: 77.38, ARC: 73.72, HellaSwag: 88.46, MMLU: 76.72, TruthfulQA: 71.01, Winogrande: 83.35, GSM8K: 73.01, Usage: 1144223 },
    { "#": 16, trend: "dash", "Model Name": "mjlbjessse/Tess-72B-v1.5b", Average: 77.3, ARC: 71.25, HellaSwag: 95.53, MMLU: 81.22, TruthfulQA: 71.99, Winogrande: 81.45, GSM8K: 76.95, Usage: 1129110 },
  ];

   const getArrow = (trend: LeaderboardRow["trend"]) => {
    if (trend === "up") return upArrow;
    if (trend === "down") return downArrow;
    return dashArrow;
  };


  const [page, setPage] = useState(0);
  const itemsPerPage = 8;

  const startIndex = page * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = leaderboardData.slice(startIndex, endIndex);

  const canGoUp = page > 0;
  const canGoDown = endIndex < leaderboardData.length;

 
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const rawY = useTransform(scrollYProgress, [0, 1], ["30%", "-250%"]);
  const y = useSpring(rawY, { stiffness: 100, damping: 20 });

  return (
   <div ref={sectionRef} className="relative py-16 overflow-hidden">
     
      <motion.div style={{ y }} className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-full max-w-6xl mx-auto grid grid-cols-10">
          <div className="col-span-6 flex items-center justify-center">
            <Image src={rocket} alt="Rocket" width={60} height={120} priority />
          </div>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
       
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8">
          <motion.h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-4 sm:mb-0">
            LLM Leaderboard
          </motion.h2>
          <button className="px-4 sm:px-5 py-2 sm:py-3 rounded-full font-medium text-white relative overflow-hidden transition-all duration-300 text-sm sm:text-base">
            <span className="relative z-10">Submit Your Model</span>
            <span className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-[#963488] via-[#FC6F32] to-[#FF4A59]">
              <span className="block w-full h-full rounded-full bg-black"></span>
            </span>
          </button>
        </div>

        
        <motion.div className="overflow-x-auto rounded-lg">
          <table className="w-full table-auto min-w-[900px] md:min-w-[1000px] lg:min-w-[1200px]">
            <thead>
              <tr className="border-b border-gray-800 text-left text-xs sm:text-sm text-gray-400">
                <th></th>
                <th>#</th>
                <th>Model Name</th>
                <th>Average</th>
                <th>ARC</th>
                <th>HellaSwag</th>
                <th>MMLU</th>
                <th>TruthfulQA</th>
                <th>Winogrande</th>
                <th>GSM8K</th>
                <th>Usage</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((row, i) => (
                <tr
                  key={i}
                  className={`text-white transition-colors ${
                    i % 2 === 0 ? "bg-transparent" : "bg-white/10 backdrop-blur-md"
                  } hover:bg-white/20 hover:backdrop-blur-lg`}
                >
                  {(Object.keys(row) as (keyof LeaderboardRow)[]).map((key, j) => (
                    <td key={j} className="px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm whitespace-nowrap">
                      {key === "#" ? (
                        <div className="flex items-center gap-1">
                          <Image src={getArrow(row.trend)} alt="trend" width={14} height={14} />
                          <span>{row[key]}</span>
                        </div>
                      ) : key !== "trend" ? (
                        row[key]
                      ) : null}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        
        <div className="flex justify-end gap-4 mt-4 sm:mt-6">
          {canGoUp && (
            <button onClick={() => setPage((p) => p - 1)}>
              <Image src={upButton} alt="Up" width={10} height={10} className="sm:w-10 sm:h-10" />
            </button>
          )}
          {canGoDown && (
            <button onClick={() => setPage((p) => p + 1)}>
              <Image src={downButton} alt="Down" width={10} height={10} className="sm:w-10 sm:h-10" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
