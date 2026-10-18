import type { Request, Response } from "express";
import { createContactSubmission } from "../services/contact.service.js";
import type { CreateContactInput } from "../types/contact.types.js";

export function createContact(req: Request, res: Response) {
  const body: unknown = req.body;

  if (typeof body !== "object" || body === null || Array.isArray(body)) {
    return res.status(400).json({
      message: "Request body must be a JSON object.",
    });
  }

  const { name, email, company, subject, message } = body as Record<
    string,
    unknown
  >;

  if (
    typeof name !== "string" ||
    !name.trim() ||
    typeof email !== "string" ||
    !email.trim() ||
    typeof message !== "string" ||
    !message.trim()
  ) {
    return res.status(400).json({
      message: "Name, email and message are required.",
    });
  }

  if (
    (company !== undefined && typeof company !== "string") ||
    (subject !== undefined && typeof subject !== "string")
  ) {
    return res.status(400).json({
      message: "Company and subject must be strings.",
    });
  }

  const input: CreateContactInput = {
    name,
    email,
    message,
    ...(typeof company === "string" ? { company } : {}),
    ...(typeof subject === "string" ? { subject } : {}),
  };

  const submission = createContactSubmission(input);

  return res.status(201).json({
    message: "Contact message received successfully.",
    submission: {
      id: submission.id,
      createdAt: submission.createdAt,
    },
  });
}
