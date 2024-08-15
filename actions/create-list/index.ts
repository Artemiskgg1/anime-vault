import { auth } from "@clerk/nextjs/server";
import { InputType, ReturnType } from "./types";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { createSafeAction } from "@/lib/create-safe-action";
import { CreateList } from "./schema";

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId } = auth();
  if (!userId) {
    return { error: "Unauthorized" };
  }
  const { title, fileUrl } = data;
  let list;

  revalidatePath(`/anime-list/${userId}`);
  return { data: list };
};

export const createList = createSafeAction(CreateList, handler);
