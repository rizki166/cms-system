import { z } from "zod";

export const authSchema = z.object({
  email: z.string().email("Email tidak valid"),
  password: z.string().min(8, "Password harus minimal 8 karakter"),
});

export const addUserSchema = z.object({
  email: z.string().email("Email tidak valid"),
  first_name: z.string().min(3, "First name harus minimal 3 karakter"),
  last_name: z.string().min(3, "Last name harus minimal 3 karakter"),
  avatar: z.string().min(3, "Avatar harus minimal 3 karakter"),
});
