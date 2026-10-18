import type {
  ContactSubmission,
  CreateContactInput,
} from "../types/contact.types.js";

const contactSubmissions: ContactSubmission[] = [];

let nextId = 1;

export function createContactSubmission(
  input: CreateContactInput,
): ContactSubmission {
  const company = input.company?.trim();
  const subject = input.subject?.trim();

  const submission: ContactSubmission = {
    id: nextId++,
    name: input.name.trim(),
    email: input.email.trim(),
    message: input.message.trim(),
    createdAt: new Date().toISOString(),
    ...(company ? { company } : {}),
    ...(subject ? { subject } : {}),
  };

  contactSubmissions.push(submission);

  return submission;
}
