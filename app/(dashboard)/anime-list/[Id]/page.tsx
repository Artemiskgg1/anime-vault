import React from "react";
import Header from "../../_components/Header";
import Intro from "../../_components/Intro";
import Navbar from "../../_components/Navbar";
import AnimeCard from "../../_components/AnimeCard";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div>
      <Header />
      <Intro />
      {/* <Navbar /> */}
      <Button>Create</Button>
      <AnimeCard />
      <AnimeCard />
    </div>
  );
};

export default page;
