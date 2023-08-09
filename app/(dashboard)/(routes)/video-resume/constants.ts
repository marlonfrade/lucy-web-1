import * as z from "zod";

export const formSchema = z.object({
  link: z.string().min(1, { message: "O prompt deve ser preenchido" }),
  instruction: z
    .string()
    .min(1, { message: "O prompt do vídeo deve ser preenchido" }),
});
