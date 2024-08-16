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
    <div className="flex flex-col items-start w-full md:w-1/2 lg:w-2/5 ml-6 md:ml-12">
      <h1
        className={cn(
          "text-6xl md:text-8xl text-center w-[35rem] pr-14 font-semibold leading-none text-[#ff8b8b] drop-shadow-lg shadow-[#ff8b8b]/50 mb-4",
          headingFont.className
        )}
      >
        Anime Vault
      </h1>
      <div className={cn("space-y-4", textFont.className)}>
        <h2 className="text-3xl md:text-5xl text-[#f3e9e9] drop-shadow-lg shadow-[#f3e9e9]/50 text-center">
          Tadaima!
          <br /> Matteta yo!
        </h2>
        <p className="text-lg md:text-xl text-[#d6d1d1] leading-relaxed text-justify">
          Your ultimate anime watchlist! Keep track of all the shows you've
          watched and Explore your anime journey with a cute and immersive
          Japanese vibe! Join our community and keep your anime memories alive.
        </p>
      </div>
    </div>
  );
};

export default Intro;
