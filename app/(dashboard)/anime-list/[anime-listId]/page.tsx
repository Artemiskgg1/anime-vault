import React from "react";
import Header from "../../_components/Header";
import Intro from "../../_components/Intro";
import Navbar from "../../_components/Navbar";
import AnimeCard from "../../_components/AnimeCard";

const page = () => {
  return (
    <div>
      <Header />
      <Intro />
      {/* <Navbar /> */}
      <AnimeCard />
      <AnimeCard />
    </div>
  );
};

export default page;
