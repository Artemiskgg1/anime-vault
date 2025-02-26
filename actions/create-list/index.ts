"use server";

import { auth } from "@clerk/nextjs/server";
import { CreateList } from "./schema";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { createSafeAction } from "@/lib/create-safe-action";
import { z } from "zod";

const handler = async (data: z.infer<typeof CreateList>) => {
  const { userId } = auth();
  if (!userId) {
    return { error: "Unauthorized" };
  }

  const { title, fileUrl, groupId } = data;

  try {
    const list = await db.list.create({
      data: {
        title,
        fileUrl,
        userId,
        groupId,
      },
    });

    revalidatePath(`/anime-list`);
    console.log("Saved to database:", list);

    return { data: list };
  } catch (error) {
    console.error("Error creating list:", error);
    return { error: "Failed to create list" };
  }
};

export const createList = createSafeAction(CreateList, handler);
