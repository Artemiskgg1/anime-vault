"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/cards-carousel";

// Import images
import spyxfamily from "@/public/images/spyxfamily.jpg";
import animeToroto from "@/public/images/anime-toroto.jpg";
import anime1 from "@/public/images/anime1.gif";
import aot from "@/public/images/aot.jpg";
import laurenAndKieran from "@/public/images/LaurenandKieran.jpg";

export function CardsCarousel() {
  const cards = data.map((card, index) => (
    <Card key={index} card={card} layout={true} />
  ));

  return (
    <div className="">
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: "Shrine of Favorites ⛩️",
    title: "Create your Anime Shrine.",
    src: spyxfamily.src, // ✅ Use .src to get the image URL
  },
  {
    category: "Bento Box Reviews 🍱",
    title: "Add reviews to animes you've watched",
    src: animeToroto.src,
  },
  {
    category: "Seasonal Anime Recommendations 🍁",
    title: "Experience anime just like the changing seasons in Japan!",
    src: anime1.src,
  },
  {
    category: "Community Scroll 📜",
    title: "Scroll through a community feed.",
    src: aot.src,
  },
  {
    category: "Webtoon World 🌏",
    title: "Add the latest and greatest webtoons.",
    src: laurenAndKieran.src,
  },
];
