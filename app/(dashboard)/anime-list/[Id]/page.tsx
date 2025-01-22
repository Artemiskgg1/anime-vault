"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";

const AnimeSearch: React.FC = () => {
  const [query, setQuery] = useState<string>(""); // User input
  const [suggestions, setSuggestions] = useState<string[]>([]); // Suggested anime
  const [loading, setLoading] = useState<boolean>(false);

  // Function to fetch suggestions
  const fetchSuggestions = async (searchTerm: string) => {
    if (!searchTerm) return; // Avoid unnecessary API calls
    setLoading(true);

    try {
      const response = await axios.get(`https://api.jikan.moe/v4/anime`, {
        params: { q: searchTerm, limit: 5 },
      });
      const animeTitles = response.data.data.map((anime: any) => anime.title);
      setSuggestions(animeTitles);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    } finally {
      setLoading(false);
    }
  };

  // Debounced Search Function
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      if (query) fetchSuggestions(query);
    }, 300); // Adjust debounce delay as needed

    return () => clearTimeout(debounceTimer); // Cleanup timer
  }, [query]);

  return (
    <div className="relative w-full max-w-md mx-auto">
      <input
        type="text"
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
        placeholder="Search for an anime..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {loading && <p className="text-sm text-gray-500">Loading...</p>}
      {suggestions.length > 0 && (
        <ul className="absolute left-0 w-full mt-2 bg-white border border-gray-200 rounded-md shadow-lg">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setQuery(suggestion);
                setSuggestions([]);
              }}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AnimeSearch;
