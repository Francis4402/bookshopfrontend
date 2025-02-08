import { z } from "zod";

export const registrationSchema = z.object({
    profileImage: z.any(),
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    phone: z.number().min(10, "Phone number must be at least 10 characters"),
    gender: z.string().min(1, "Gender is required"),
    dateOfBirth: z.string().min(1, "Date of birth is required"),
    address: z.string().min(1, "Address is required"),
});
