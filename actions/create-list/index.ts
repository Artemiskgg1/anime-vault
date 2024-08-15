import { db } from "@/lib/db";
import { CreateList, InputType } from "./schema";
import { List } from "@prisma/client";
import { ActionState } from "@/lib/create-safe-action";

export const createList = async (
  input: InputType
): Promise<ActionState<InputType, List>> => {
  try {
    const { title, fileUrl, groupId } = input;

    const list = await db.list.create({
      data: {
        title,
        fileUrl,
        ...(groupId ? { group: { connect: { id: groupId } } } : {}),
      },
    });

    return { data: list };
  } catch (error) {
    return { error: "Failed to create list." };
  }
};
