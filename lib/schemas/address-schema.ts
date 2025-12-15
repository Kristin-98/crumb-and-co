import { z } from "zod";

export const addressSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  street: z.string().min(1, "Street address is required"),
  city: z.string().min(1, "City is required"),
  zip: z.string().min(4, "Postal code is too short"),
  email: z.string().email("Invalid email address"),
});
export type AddressFormValues = z.infer<typeof addressSchema>;