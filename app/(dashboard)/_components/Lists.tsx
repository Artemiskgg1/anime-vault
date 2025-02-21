import { useState, useEffect } from "react";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import { motion } from "framer-motion";
import { createList } from "@/actions/create-list";
import { Search } from "lucide-react";

const placeholderTexts = [
  "Search for an anime...",
  "Search for an anime : One Piece",
  "Search for an anime : Attack on Titan",
  "Search for an anime : Death Note",
];

const Lists = ({
  handleAddAnime,
}: {
  handleAddAnime: (anime: any) => void;
}) => {
  const [query, setQuery] = useState<string>("");
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % placeholderTexts.length);
    }, 9000);
    return () => clearInterval(interval);
  }, []);

  const fetchSuggestions = async (searchTerm: string) => {
    if (!searchTerm) return;
    setLoading(true);

    try {
      const response = await axios.get(`https://api.jikan.moe/v4/anime`, {
        params: { q: searchTerm, limit: 5 },
      });
      setSuggestions(response.data.data);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      if (query) fetchSuggestions(query);
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [query]);

  return (
    <div className="relative flex flex-col  text-white font-sans">
      <div className="relative flex items-center justify-center mt-4">
        <div className="relative w-full max-w-lg">
          <input
            type="text"
            className="w-[30rem] p-4  rounded-full outline-none text-white focus:border-transparent bg-zinc-900"
            placeholder=""
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Search className="absolute top-4 right-4 text-zinc-500" />
          <motion.span
            className="absolute top-4 left-4 text-zinc-500 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: query ? 0 : 1 }}
            transition={{ duration: 0.5 }}
            key={placeholderIndex}
          >
            {placeholderTexts[placeholderIndex]}
          </motion.span>
          {loading && <p className="text-sm text-zinc-400 mt-2">Loading...</p>}
          {suggestions.length > 0 && (
            <ul className="absolute left-0 w-full mt-2 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg z-10">
              {suggestions.map((anime, index) => (
                <li
                  key={index}
                  className="p-3 hover:bg-zinc-800 cursor-pointer text-white rounded-md"
                  onClick={() => {
                    handleAddAnime(anime);
                    setSuggestions([]);
                    setQuery("");
                  }}
                >
                  {anime.title}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Lists;
