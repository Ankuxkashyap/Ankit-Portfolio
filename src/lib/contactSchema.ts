import { Phone } from "lucide-react";
import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(20, "Name is too long"),

  email: z
    .string()
    .email("Invalid email format"),

  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message is too long"),

  phone: z
  .string()
  .min(7, "Number must be at least 7 characters")
  .max(20, "Number is too long")
  .optional()
});

export type ContactSchema = z.infer<typeof contactSchema>;
