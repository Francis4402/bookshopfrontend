export type TBookstypes = {
    product_id: number;
    title: string;
    bookImage: string;
    author: string;
    price: number;
    category: 'Fiction' | 'Science' | 'SoftwareDevelopment' | 'Poetry' | 'Story';
    description: string;
    quantity: number;
    inStock: boolean;
}