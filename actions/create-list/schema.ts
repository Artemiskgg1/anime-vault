import { z } from "zod";

export const CreateList = z.object({
  title: z
    .string({
      required_error: "Title is required",
      invalid_type_error: "Title must be a string",
    })
    .min(3, {
      message: "Title must be at least 3 characters long",
    }),
  fileUrl: z.string().url(),
  groupId: z.string().optional(),
});

export type InputType = z.infer<typeof CreateList>;
