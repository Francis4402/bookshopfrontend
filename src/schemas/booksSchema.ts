import { z } from "zod";

export const booksSchema = z.object({
    title: z.string().min(1, "Title is required"),
    author: z.string().min(1, "Author is required"),
    price: z.number().positive("Price must be a positive number"),
    category: z.enum(['Fiction', 'Science', 'SoftwareDevelopment', 'Poetry', 'Story']),
    description: z.string().min(10, "Description must be at least 10 characters"),
    quantity: z.number().min(1, "Quantity must be at least 1"),
    inStock: z.boolean().default(true),
    bookImage: z
        .any()
        .optional(),
});
