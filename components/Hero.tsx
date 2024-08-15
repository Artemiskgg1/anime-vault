"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/images-slider";
import Link from "next/link";
import Image from "next/image"; // Import the correct component

export function ImagesSliderDemo() {
  const images = ["/yourName2.gif", "/anime-toroto.jpg"];
  return (
    <ImagesSlider className="h-[60vh]" images={images}>
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
        className="z-50 flex flex-col justify-center items-center"
      >
        <Image
          src="/logo.svg" // Provide the correct path to the image
          alt="logo"
          width={101}
          height={96}
          className="object-contain opacity-70"
        />
        <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <Link href="/sign-in">Sign Up →</Link>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
}
