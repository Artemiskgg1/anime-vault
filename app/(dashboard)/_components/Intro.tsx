import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
const headingFont = localFont({
  src: "../../../public/fonts/kirame.ttf",
});
const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const Intro = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between mx-6 my-10">
      <div className="text-left md:w-1/2">
        <h1
          className={cn(
            "text-6xl md:text-8xl leading-none text-[#ff8b8b] drop-shadow-lg shadow-[#ff8b8b]/50",
            headingFont.className
          )}
        >
          Anime Vault
        </h1>
      </div>
      <div
        className={cn(
          "text-left md:w-1/2 space-y-6 mt-12 md:mt-0",
          textFont.className
        )}
      >
        <h2 className="text-3xl text-center md:text-5xl text-[#f3e9e9] font-semibold drop-shadow-lg shadow-[#f3e9e9]/50">
          Welcome to Anime Vault!
        </h2>
        <p className="text-lg md:text-xl text-justify text-[#d6d1d1] leading-relaxed">
          Your ultimate anime watchlist! Keep track of all the shows you've
          watched and Explore your anime journey with a cute and immersive
          Japanese vibe! Join our community and keep your anime memories alive.
        </p>
      </div>
    </div>
  );
};

export default Intro;
