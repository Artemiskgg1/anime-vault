import { useState, useEffect } from "react";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import { motion } from "framer-motion";
import { createList } from "@/actions/create-list";

const Lists = ({
  handleAddAnime,
}: {
  handleAddAnime: (anime: any) => void;
}) => {
  const [query, setQuery] = useState<string>("");
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

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
    <div className="relative flex flex-col bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white font-sans">
      <div className="relative flex items-center justify-center mt-4">
        <div className="relative w-full max-w-lg">
          <input
            type="text"
            className="w-full p-4 border rounded-full text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="Search for an anime..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {loading && <p className="text-sm text-gray-400 mt-2">Loading...</p>}
          {suggestions.length > 0 && (
            <ul className="absolute left-0 w-full mt-2 bg-gray-800 border border-gray-700 rounded-lg shadow-lg z-10">
              {suggestions.map((anime, index) => (
                <li
                  key={index}
                  className="p-3 hover:bg-gray-700 cursor-pointer text-white rounded-md"
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
