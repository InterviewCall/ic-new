import z from "zod";

export const basicDetailsSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be under 50 characters"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Enter a valid email address"),
  phone: z
    .string()
    .length(10, "Phone number must be exactly 10 digits")
    .regex(/^\d{10}$/, "Phone number must contain only digits"),
});

export const workProfileSchema = z.object({
  workStatus: z.string().min(1, "Please select your work status"),
  yearsOfExperience: z.string().min(1, "Please select your years of experience"),
  targetRole: z.string().min(1, "Please select your target role"),
});

export type BasicDetailsFormData = z.infer<typeof basicDetailsSchema>;
export type WorkProfileFormData = z.infer<typeof workProfileSchema>;

export type CohortFormData = BasicDetailsFormData & WorkProfileFormData;
