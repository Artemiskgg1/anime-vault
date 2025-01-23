"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import { createList } from "@/actions/create-list";

const AnimeListPage: React.FC = () => {
  const { user } = useUser();
  const [query, setQuery] = useState<string>("");
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [userAnimeList, setUserAnimeList] = useState<any[]>([]);
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
  const handleAddAnime = async (anime: any) => {
    if (!user) {
      alert("You must be logged in to add anime.");
      return;
    }

    try {
      const result = await createList({
        title: anime.title,
        fileUrl: anime.images.jpg.image_url,
        groupId: undefined,
      });

      if (result.error) {
        console.error("Error adding anime:", result.error);
        alert("Failed to add anime.");
      } else {
        setUserAnimeList((prev) => [...prev, result.data]);
      }
    } catch (error) {
      console.error("Error handling add anime:", error);
    }
  };

  const fetchUserAnimeList = async () => {
    try {
      const response = await axios.get(`/api/anime`);
      console.log("Fetched Anime List:", response.data);
      setUserAnimeList(response.data);
    } catch (error) {
      console.error("Error fetching user anime list:", error);
    }
  };

  useEffect(() => {
    if (user) fetchUserAnimeList();
  }, [user]);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      if (query) fetchSuggestions(query);
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [query]);

  return (
    <div className="px-4 py-6 bg-black text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Anime Vault</h1>
      <div className="relative w-full max-w-md mx-auto mb-8">
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring focus:ring-blue-400"
          placeholder="Search for an anime..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {loading && <p className="text-sm text-gray-500">Loading...</p>}
        {suggestions.length > 0 && (
          <ul className="absolute left-0 w-full mt-2 bg-white border border-gray-200 rounded-md shadow-lg">
            {suggestions.map((anime, index) => (
              <li
                key={index}
                className="p-2 hover:bg-gray-100 cursor-pointer"
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

      <h2 className="text-2xl font-semibold mb-4">Your Anime List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {userAnimeList.map((anime, index) => (
          <div key={index} className="p-4 bg-gray-800 rounded-md shadow-md">
            <img
              src={anime.fileUrl}
              alt={anime.title}
              className="w-full h-48 object-cover rounded-md mb-2"
            />
            <h3 className="text-lg font-semibold">{anime.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimeListPage;
