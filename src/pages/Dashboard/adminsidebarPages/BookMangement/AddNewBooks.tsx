import { Controller, FieldValues } from "react-hook-form"
import FForm from "../../../../components/form/FForm";
import FInput from "../../../../components/form/FInput";
import { Button, Form, Input } from "antd";
import FSelect from "../../../../components/form/FSelect";
import { BookCategoryOptions, inStockOptions } from "../../../constants/BookCategoryOptions";
import { useAddBooksMutation } from "../../../../redux/features/books/bookManagementApi";
import { toast } from "sonner";


const AddNewBooks = () => {

  const [addBooks] = useAddBooksMutation();

  const handleSubmit = async (data: FieldValues) => {
    console.log(data);

    const bookdata = {
      product_id: data.product_id,
      title: data.title,
      bookImage: data.bookImage,
      author: data.author,
      price: data.price,
      category: data.category,
      description: data.description,
      quantity: data.quantity,
      inStock: data.inStock,
    };
    


    try {
      const res = await addBooks(bookdata);
      console.log(res);
      
    } catch (error) {
      toast.error("Something went wrong");
    }
  }

  return (
    <div>
      <FForm onSubmit={handleSubmit}>
      <FInput type="text" name="product_id" label={"Product ID"} placeholder={"Enter your product id"} />
        <FInput type="text" name="title" label={"Title"} placeholder={"Enter your title"} />
        <Controller name="bookImage" render={({field: {onChange, value, ...field}}) => (
          <Form.Item label={"Book Image"}>
            <Input type="file" value={value?.fileName} {...field} placeholder={"Enter your bookimage"} onChange={(e) => onChange(e.target.files?.[0])} />
          </Form.Item>
        )} />
        <FInput type="text" name="author" label={"Author"} placeholder={"Enter your author"} />
        <FInput type="number" name="price" label={"Price"} placeholder={"Enter your Price"} />
        <FInput type="number" name="quantity" label={"Quantity"} placeholder={"Enter your quantity"} />
        <FSelect label={"In Stock"} name={"inStock"} options={inStockOptions} />
        <FSelect label={"Category"} name={"category"} options={BookCategoryOptions} />
        <Button htmlType="submit">Submit</Button>
      </FForm>
    </div>
  )
}

export default AddNewBooks