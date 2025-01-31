export type TBookstypes = {
    _id: string;
    key: string;
    product_id: string;
    title: string;
    bookImage: string;
    author: string;
    price: number;
    category: 'Fiction' | 'Science' | 'SoftwareDevelopment' | 'Poetry' | 'Story';
    description: string;
    quantity: number;
    inStock: boolean;
}