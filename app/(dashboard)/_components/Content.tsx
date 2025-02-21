import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const Content = ({
  userAnimeList,
  selectedAnime,
  setSelectedAnime,
  handleDeleteAnime,
}: {
  userAnimeList: any[];
  selectedAnime: any;
  setSelectedAnime: (anime: any) => void;
  handleDeleteAnime: (id: string) => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const [direction, setDirection] = useState<
    "top" | "bottom" | "left" | "right" | string
  >("left");

  const [hoveredAnime, setHoveredAnime] = useState<string | null>(null);

  const handleMouseEnter = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    animeId: string
  ) => {
    setHoveredAnime(animeId); // Set hovered anime ID
    if (!ref.current) return;

    const direction = getDirection(event, ref.current);
    setDirection(["top", "right", "bottom", "left"][direction] || "left");
  };

  const handleMouseLeave = () => {
    setHoveredAnime(null); // Reset when leaving
  };

  const getDirection = (
    ev: React.MouseEvent<HTMLDivElement, MouseEvent>,
    obj: HTMLElement
  ) => {
    const { width: w, height: h, left, top } = obj.getBoundingClientRect();
    const x = ev.clientX - left - (w / 2) * (w > h ? h / w : 1);
    const y = ev.clientY - top - (h / 2) * (h > w ? w / h : 1);
    return Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
  };

  return (
    <div className="bg-black grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
      {userAnimeList.map((anime, index) => (
        <motion.div
          key={anime.id || index}
          onClick={() => setSelectedAnime(anime)}
          onMouseEnter={(event) => handleMouseEnter(event, anime.id)}
          onMouseLeave={handleMouseLeave}
          ref={ref}
          className={`
            relative md:h-96 w-60 h-60 md:w-96 bg-transparent rounded-lg overflow-hidden group/card
            ${
              selectedAnime?.title === anime.title
                ? "border border-zinc-400"
                : ""
            }
          `}
        >
          <AnimatePresence mode="wait">
            <motion.div
              className="relative h-full w-full"
              initial="initial"
              whileHover={direction}
              exit="exit"
            >
              {/* Apply the dark overlay only to non-hovered cards */}
              {hoveredAnime && hoveredAnime !== anime.id && (
                <motion.div className="absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500" />
              )}

              {/* Image Container */}
              <motion.div
                variants={variants}
                className="h-full w-full relative bg-gray-50 dark:bg-black"
                transition={{
                  duration: 0.2,
                  ease: "easeOut",
                }}
              >
                <motion.img
                  src={anime.fileUrl}
                  alt={anime.title}
                  className="w-full h-full object-cover"
                />

                {/* Title */}
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="text-sm font-medium text-white bg-black/70 px-2 py-1 rounded-md">
                    {anime.title}
                  </span>
                </div>

                {/* Delete Button (clickable) */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteAnime(anime.id);
                  }}
                  className="absolute bottom-4 right-4 z-30 px-3 py-1 text-sm text-white bg-red-500 hover:bg-red-600 rounded-md pointer-events-auto"
                >
                  Delete
                </button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

const variants = {
  initial: { x: 0 },
  exit: { x: 0, y: 0 },
  top: { y: 20 },
  bottom: { y: -20 },
  left: { x: 20 },
  right: { x: -20 },
};

export default Content;
