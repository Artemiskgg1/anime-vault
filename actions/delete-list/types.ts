import { z } from "zod";
import { DeleteList } from "./schema";

export type DeleteListInput = z.infer<typeof DeleteList>;
export type DeleteListResponse = { data?: any; error?: string };
