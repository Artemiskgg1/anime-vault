import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { createList } from "@/actions/create-list";
import { deleteList } from "@/actions/delete-list";
import Lists from "./Lists";
import Content from "./Content";

const AnimeHero = () => {
  const [userAnimeList, setUserAnimeList] = useState<any[]>([]);
  const [selectedAnime, setSelectedAnime] = useState<any>(null);
  const { user } = useUser();

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

  const handleDeleteAnime = async (animeId: string) => {
    if (!user) {
      alert("You must be logged in to delete anime.");
      return;
    }

    try {
      const result = await deleteList({ id: animeId });

      if (result.error) {
        console.error("Error deleting anime:", result.error);
        alert("Failed to delete anime.");
      } else {
        setUserAnimeList((prev) =>
          prev.filter((anime) => anime.id !== animeId)
        );
      }
    } catch (error) {
      console.error("Error handling delete anime:", error);
    }
  };

  const fetchUserAnimeList = async () => {
    try {
      const response = await axios.get(`/api/anime`);
      setUserAnimeList(response.data);
    } catch (error) {
      console.error("Error fetching user anime list:", error);
    }
  };

  useEffect(() => {
    if (user) fetchUserAnimeList();
  }, [user]);

  return (
    <div className="min-h-screen w-screen flex overflow-hidden bg-black text-white">
      <Lists handleAddAnime={handleAddAnime} />
      <Content
        userAnimeList={userAnimeList}
        selectedAnime={selectedAnime}
        setSelectedAnime={setSelectedAnime}
        handleDeleteAnime={handleDeleteAnime}
      />
    </div>
  );
};

export default AnimeHero;
