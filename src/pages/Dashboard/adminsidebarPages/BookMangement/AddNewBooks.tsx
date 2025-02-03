import { Controller, FieldValues, SubmitHandler } from "react-hook-form"
import FForm from "../../../../components/form/FForm";
import FInput from "../../../../components/form/FInput";
import { Button, Col, Form, Input, Row } from "antd";
import FSelect from "../../../../components/form/FSelect";
import { BookCategoryOptions, inStockOptions } from "../../../constants/BookCategoryOptions";
import { useAddBooksMutation, useGetAllBooksQuery } from "../../../../redux/features/books/bookManagementApi";
import { toast } from "sonner";
import { zodResolver } from '@hookform/resolvers/zod';
import { booksSchema } from "../../../../schemas/booksSchema";
import FTextArea from "../../../../components/form/FTextArea";
import FInputNumber from "../../../../components/form/FInputNumber";
import { useNavigate } from "react-router-dom";



const AddNewBooks = () => {

  const [addBooks] = useAddBooksMutation();

  const {refetch} = useGetAllBooksQuery(undefined);

  const navigate = useNavigate();

  const handleSubmit: SubmitHandler<FieldValues> = async (data) => {

    const formData = new FormData();

    formData.append('data', JSON.stringify({
      product_id: data.product_id,
      title: data.title,
      author: data.author,
      description: data.description,
      price: data.price,
      quantity: data.quantity,
      inStock: data.inStock,
      category: data.category,
    }));
    
    if (data.bookImage) {
      formData.append('booksImage', data.bookImage);
    }
 

    try {
      const res = await addBooks(formData);
      console.log(res);
      toast.success('Book Data Stored Successfully')
      navigate('/admin/get-products');
      refetch();
    } catch (error) {
      toast.error("Something went wrong");
    }
  }

  return (
    <div>
      <Row justify={"center"}>
        <Col span={24}>
          <FForm onSubmit={handleSubmit} resolver={zodResolver(booksSchema)}>
            <p className="mb-10 sm:text-2xl font-semibold text-xs">Add A New Book</p>

            <Row gutter={8}>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <FInput type="text" name="product_id" label={"Product ID"} placeholder={"Enter your product id"} />
              </Col>

              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <FInput type="text" name="title" label={"Title"} placeholder={"Enter your title"} />
              </Col>

              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <Controller name="bookImage" render={({field: {onChange, value, ...field}, fieldState: {error}}) => (
                    <Form.Item label={"Book Image"}>
                      <Input type="file" value={value?.filename} {...field} placeholder={""} onChange={(e) => onChange(e.target.files?.[0])} />
                      {error && <small style={{color: 'red'}}>{error.message}</small>}
                    </Form.Item>
                  )} />
              </Col>

              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <FInput type="text" name="author" label={"Author"} placeholder={"Enter your author"} />
              </Col>

              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <FTextArea name="description" rows={4} label={"Description"} placeholder={"Enter your description"} />
              </Col>

              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <FInputNumber name="price" label={"Price"} placeholder={"Enter your Price"} />
              </Col>

              <Col span={12} md={{ span: 12 }} lg={{ span: 8 }}>
                <FInputNumber name="quantity" label={"Quantity"} placeholder={"Enter your quantity"} />
              </Col>

              <Col span={12} md={{ span: 12 }} lg={{ span: 8 }}>
                <FSelect label={"In Stock"} name={"inStock"} options={inStockOptions} />
              </Col>

              <Col span={12} md={{ span: 12 }} lg={{ span: 8 }}>
                <FSelect label={"Category"} name={"category"} options={BookCategoryOptions} />
              </Col>
            </Row>
            
            
            <Button htmlType="submit" type="primary" style={{width: '50%'}}>Submit</Button>
          </FForm>
        </Col>
      </Row>
    </div>
  )
}

export default AddNewBooks