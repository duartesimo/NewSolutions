import { prisma } from "../../prisma/prisma.js";
import type { CreateContactInput } from "../types/contact.types.js";

export async function createContactSubmission(input: CreateContactInput) {
  const company = input.company?.trim();
  const subject = input.subject?.trim();

  return prisma.contactSubmission.create({
    data: {
      name: input.name.trim(),
      email: input.email.trim(),
      message: input.message.trim(),
      ...(company ? { company } : {}),
      ...(subject ? { subject } : {}),
    },
  });
}
