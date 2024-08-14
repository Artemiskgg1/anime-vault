"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("Gallery");
  return (
    <div className="mx-8 mt-12">
      <div className="flex space-x-4 border-b-2 border-[#ff8b8b]">
        <button
          onClick={() => setActiveTab("Gallery")}
          className={cn(
            "pb-2 text-xl",
            activeTab === "Gallery"
              ? "border-b-4 border-[#ff8b8b] text-[#ff8b8b]"
              : "text-neutral-400 hover:text-neutral-200"
          )}
        >
          Gallery
        </button>
        <button
          onClick={() => setActiveTab("My Groups")}
          className={cn(
            "pb-2 text-xl",
            activeTab === "My Groups"
              ? "border-b-4 border-[#ff8b8b] text-[#ff8b8b]"
              : "text-neutral-400 hover:text-neutral-200"
          )}
        >
          My Groups
        </button>
      </div>
      <div className="mt-8">
        {activeTab === "Gallery" ? (
          <div>
            <h3 className="text-3xl text-neutral-200 mb-4">Anime Gallery</h3>
            <p className="text-lg text-neutral-400">
              Here you can browse through a collection of anime images and fan
              art. Enjoy the visual feast!
            </p>
          </div>
        ) : (
          <div>
            <h3 className="text-3xl text-neutral-200 mb-4">My Groups</h3>
            <p className="text-lg text-neutral-400">
              Join and manage your anime discussion groups. Connect with others
              who share your anime interests!
            </p>
          </div>
        )}
      </div>
      ;
    </div>
  );
};

export default Navbar;
