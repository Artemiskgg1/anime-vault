"use client";
import React from "react";
import Nav from "./Nav";

export function Hero() {
  return (
    <div className="relative h-screen w-full">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('anime1.gif')",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to Racoon City
        </h1>
        <p className="max-w-2xl text-lg md:text-xl">
          Tras días de silencio en la ciudad, el joven policía Kevin Ryerson
          decide investigar.
        </p>
      </div>

      <Nav />

      <div className="absolute bottom-0 w-full p-4">
        <div className="flex overflow-x-auto space-x-4">
          <div className="w-48 h-32 bg-gray-800 rounded-md flex-shrink-0"></div>
          <div className="w-48 h-32 bg-gray-800 rounded-md flex-shrink-0"></div>
          <div className="w-48 h-32 bg-gray-800 rounded-md flex-shrink-0"></div>
        </div>
      </div>
    </div>
  );
}
