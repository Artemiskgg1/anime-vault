"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/cards-carousel";

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
    src: "/images/spyxfamily.jpg",
  },
  {
    category: "Bento Box Reviews 🍱",
    title: "Add reviews to animes you've watched",
    src: "/images/anime-toroto.jpg",
  },
  {
    category: "Seasonal Anime Recommendations 🍁",
    title: "Experience anime just like the changing seasons in Japan!",
    src: "/images/anime1.gif",
  },
  {
    category: "Community Scroll 📜",
    title: "Scroll through a community feed.",
    src: "/images/aot.jpg",
  },
  {
    category: "Webtoon World 🌏",
    title: "Add the latest and greatest webtoons.",
    src: "/images/LaurenandKieran.jpg",
  },
];
