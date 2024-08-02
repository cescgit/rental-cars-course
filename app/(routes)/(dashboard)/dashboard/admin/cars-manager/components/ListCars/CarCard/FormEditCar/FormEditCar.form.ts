import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(4).max(50),
  horsep: z.string().min(2).max(50),
  transmission: z.string().min(2).max(50),
  people: z.string().min(1),
  photo: z.string().min(2).max(100),
  engine: z.string().min(2).max(10),
  type: z.string().min(2).max(50),
  priceDay: z.string().min(2).max(50),
  isPublish: z.boolean(),
});
