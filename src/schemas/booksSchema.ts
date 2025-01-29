import {z} from "zod";

export const booksSchema =  z.object({
    product_id: z.number(),
    title: z.string(),
    bookImage: z.string().optional(),
    author: z.string(),
    price: z.number(),
    category: z.enum(['Fiction' , 'Science' , 'SoftwareDevelopment' , 'Poetry' , 'Story']),
    description: z.string(),
    quantity: z.number(),
})