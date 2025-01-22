"use client";
import React from "react";
import Nav from "./Nav";
import { AppleCardsCarouselDemo } from "./Cards";

export function Hero() {
  return (
    <div className="relative h-[calc(100vh] w-full pt-16 bg-[#131313]">
      <Nav />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative m-20 z-10 flex flex-col items-center justify-center text-center text-white h-full px-4">
        <h1 className="text-4xl md:text-8xl font-bold mb-4 font-kirame">
          Welcome to Anime Vault
        </h1>
        <p className="max-w-2xl text-lg md:text-xl mb-6">
          Your ultimate anime watchlist! Keep track of all the shows you've
          watched and Explore your anime journey with a cute and immersive
          Japanese vibe! Join our community and keep your anime memories alive.
        </p>
        <div className="relative overflow-hidden w-full max-w-screen-xl mx-auto mt-6 h-[50%]">
          <AppleCardsCarouselDemo />
          <div className="absolute bottom-0 left-0 w-full h-[20%] bg-gradient-to-t from-[#131313] to-transparent"></div>
        </div>
      </div>
    </div>
  );
}
