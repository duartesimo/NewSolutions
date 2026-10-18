export type CreateContactInput = {
  name: string;
  email: string;
  company?: string;
  subject?: string;
  message: string;
};

export type ContactSubmission = CreateContactInput & {
  id: number;
  createdAt: string;
};
