"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/images-slider";
import Link from "next/link";
import Intro from "@/app/(dashboard)/_components/Intro";
import AnimeCard from "@/app/(dashboard)/_components/AnimeCard";

export function ImagesSliderDemo() {
  const images = ["/anime1.gif"];
  const cardsData = [
    {
      title: "Tokyo Ghoul",
      imageSrc: "/anime-toroto.jpg",
      description: "Dark fantasy anime about ghouls living among humans.",
    },
    {
      title: "Japan Sinks",
      imageSrc: "/anime-toroto.jpg",
      description: "A disaster survival anime set in Japan.",
    },
  ];

  return (
    <ImagesSlider className="h-screen" images={images}>
      <motion.div
        initial={{
          opacity: 0.6,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col items-start justify-center h-full px-6 md:px-12"
      >
        <Intro />
        <div className="flex justify-center items-center w-[34rem] gap-5">
          <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white text-center rounded-full relative mt-6">
            <Link href="/sign-in">Log In →</Link>
            <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
          </button>
          <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white text-center rounded-full relative mt-6">
            <Link href="/sign-up">Sign Up →</Link>
            <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
          </button>
        </div>
      </motion.div>

      {/* Cards Section */}
      <div className="absolute top-0 right-0 flex flex-col space-y-6 p-6 md:p-12">
        {cardsData.map((card, index) => (
          <AnimeCard
            key={index}
            title={card.title}
            imageSrc={card.imageSrc}
            description={card.description}
          />
        ))}
      </div>
    </ImagesSlider>
  );
}
