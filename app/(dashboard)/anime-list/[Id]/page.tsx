"use client";

import TopNav from "../../_components/TopNav";
import Lists from "../../_components/Lists";
import { motion } from "framer-motion";
import AnimeHero from "../../_components/AnimeHero";

const AnimeListPage: React.FC = () => {
  return (
    <div className="relative h-screen w-full pt-16 bg-black flex flex-col items-center text-center">
      <TopNav />
      <motion.h1
        className="text-5xl md:text-7xl font-bold mt-8 font-kirame text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        Your{" "}
        <span className="bg-gradient-to-r from-red-500 via-pink-500 to-yellow-500 text-transparent bg-clip-text">
          ANIME VAULT
        </span>
      </motion.h1>
      <div className="bg-black text-white ">
        <AnimeHero />
      </div>
    </div>
  );
};

export default AnimeListPage;
