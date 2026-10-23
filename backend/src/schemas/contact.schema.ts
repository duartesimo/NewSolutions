import { z } from "zod";

export const createContactSchema = z.object({
  name: z.string().trim().min(1, "Name is required."),
  email: z.string().trim().email("A valid email address is required."),
  company: z.string().trim().optional(),
  subject: z.string().trim().optional(),
  message: z.string().trim().min(1, "Message is required."),
});

export type CreateContactInput = z.infer<typeof createContactSchema>;
