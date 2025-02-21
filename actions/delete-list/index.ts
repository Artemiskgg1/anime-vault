"use server";

import { auth } from "@clerk/nextjs/server";
import { DeleteList } from "./schema";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { createSafeAction } from "@/lib/create-safe-action";
import { z } from "zod";

const handler = async (data: z.infer<typeof DeleteList>) => {
  const { userId } = auth();
  if (!userId) {
    return { error: "Unauthorized" };
  }

  const { id } = data;

  try {
    const deletedAnime = await db.list.delete({
      where: {
        id,
        userId,
      },
    });

    revalidatePath(`/anime-list`);
    console.log("Deleted from database:", deletedAnime);

    return { data: deletedAnime };
  } catch (error) {
    console.error("Error deleting anime:", error);
    return { error: "Failed to delete anime" };
  }
};

export const deleteList = createSafeAction(DeleteList, handler);
