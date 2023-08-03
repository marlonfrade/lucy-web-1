import * as z from "zod";

export const formSchema = z.object({
  prompt: z
    .string()
    .min(1, { message: "O prompt da Imagem deve ser preenchido" }),
  amount: z.string().min(1),
  resolution: z.string().min(1),
});

export const amountOptions = [
  { value: "1", label: "1 Foto" },
  { value: "2", label: "2 Fotos" },
  { value: "3", label: "3 Fotos" },
  { value: "4", label: "4 Fotos" },
  { value: "5", label: "5 Fotos" },
];

export const resolutionOptions = [
  {
    value: "256X256",
    label: "256X256",
  },
  {
    value: "512X512",
    label: "512X512",
  },
  {
    value: "1024X1024",
    label: "1024X1024",
  },
];
