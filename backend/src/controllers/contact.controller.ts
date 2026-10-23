import type { Request, Response } from "express";
import { createContactSubmission } from "../services/contact.service.js";
import { createContactSchema } from "../schemas/contact.schema.js";

export async function createContact(req: Request, res: Response) {
  const result = createContactSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      message: "Invalid contact submission.",
      errors: result.error.issues.map((issue) => ({
        field: issue.path.join("."),
        message: issue.message,
      })),
    });
  }

  try {
    const submission = await createContactSubmission(result.data);

    return res.status(201).json({
      message: "Contact message received successfully.",
      submission: {
        id: submission.id,
        createdAt: submission.createdAt,
      },
    });
  } catch (error) {
    console.error("Failed to save contact submission:", error);

    return res.status(500).json({
      message: "Unable to save contact message.",
    });
  }
}
