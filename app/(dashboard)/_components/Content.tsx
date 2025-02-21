import { motion } from "framer-motion";

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
  return (
    <div className="flex h-[65vh] bg-gray-950 rounded-xl overflow-hidden shadow-lg">
      <div className="w-1/3 p-5 overflow-y-auto h-full bg-gray-900 border-r border-gray-800">
        <h2 className="text-2xl font-semibold mb-4 text-yellow-400">
          Your Anime List
        </h2>
        <ul className="space-y-3">
          {userAnimeList.map((anime, index) => (
            <li
              key={index}
              className={`p-3 rounded-lg cursor-pointer hover:bg-gray-700 text-white shadow-md transition-all duration-300 flex items-center space-x-3 ${
                selectedAnime?.title === anime.title
                  ? "border border-yellow-400"
                  : ""
              }`}
              onClick={() => setSelectedAnime(anime)}
            >
              <img
                src={anime.fileUrl}
                alt={anime.title}
                className="w-14 h-14 object-cover rounded-md"
              />
              <span className="text-sm font-medium">{anime.title}</span>
              <button
                onClick={() => handleDeleteAnime(anime.id)}
                className="px-3 py-1 text-sm bg-red-500 hover:bg-red-600 rounded-md"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 bg-gray-800 p-6 flex flex-col items-center justify-center">
        {selectedAnime ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={selectedAnime.fileUrl}
              alt={selectedAnime.title}
              className="w-full h-64 object-cover rounded-lg mb-4 shadow-lg"
            />
            <h2 className="text-4xl font-bold mb-4 text-yellow-400">
              {selectedAnime.title}
            </h2>
            <p className="text-gray-400 text-lg text-center">
              More details about the anime will go here...
            </p>
          </motion.div>
        ) : (
          <p className="text-gray-500 text-lg">
            Select an anime to see its details.
          </p>
        )}
      </div>
    </div>
  );
};

export default Content;
