"use client";

import TopNav from "../../_components/TopNav";
import Lists from "../../_components/Lists";

const AnimeListPage: React.FC = () => {
  return (
    <div className="relative h-[calc(100vh] w-full pt-16 bg-black">
      <TopNav />
      <div className="">
        <h1 className="text-3xl font-bold mb-6 text-center text-white">
          Your Anime Vault
        </h1>
        <div>
          <Lists />
        </div>
      </div>
    </div>
  );
};

export default AnimeListPage;
