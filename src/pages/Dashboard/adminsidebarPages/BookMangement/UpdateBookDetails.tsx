import { Button, Col, Form, Input, Row } from "antd";
import { Controller, FieldValues } from "react-hook-form";
import FForm from "../../../../components/form/FForm";
import FInput from "../../../../components/form/FInput";
import FTextArea from "../../../../components/form/FTextArea";
import FInputNumber from "../../../../components/form/FInputNumber";
import FSelect from "../../../../components/form/FSelect";
import { BookCategoryOptions, inStockOptions } from "../../../constants/BookCategoryOptions";
import { useParams } from "react-router-dom";
import { useGetSingleBookQuery, useUpdateBookMutation } from "../../../../redux/features/books/bookManagementApi";
import { toast } from "sonner";
import { TBookstypes } from "../../../../redux/features/books/bookstypes";
import { zodResolver } from "@hookform/resolvers/zod";
import { booksSchema } from "../../../../schemas/booksSchema";



const UpdateBookDetails = () => {

  const { id } = useParams<{ id: string }>();

  const { data: bookData } = useGetSingleBookQuery(id ?? "") as { data: TBookstypes[] | undefined };

  const book = bookData?.[0];


  const [updateBook] = useUpdateBookMutation();


  const handleUpdateSubmit = async (data: FieldValues) => {
    const formData = new FormData();

    formData.append('product_id', data.product_id);
    formData.append('title', data.title);
    formData.append('author', data.author);
    formData.append('price', data.price);
    formData.append('category', data.category);
    formData.append('description', data.description);
    formData.append('quantity', data.quantity);
    formData.append('inStock', data.inStock);

    formData.append('booksImage', data.bookImage);

    formData.append('data', JSON.stringify(data));


    try {
      const res = await updateBook({id: book?._id, formData}).unwrap();
      console.log(res);
      toast.success('Book Data Stored Successfully')
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div>
      <Row justify={"center"}>
        <Col span={24}>
          <FForm onSubmit={handleUpdateSubmit} resolver={zodResolver(booksSchema)}>
            <p className="mb-10 sm:text-2xl font-semibold text-xs">Update Books</p>

            <Row gutter={8}>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <FInput type="text" name="product_id" label={"Product ID"} placeholder={book?.product_id} />
              </Col>

              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <FInput type="text" name="title" label={"Title"} placeholder={book?.title} />
              </Col>

              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <Controller name="bookImage" render={({field: {onChange, value, ...field}, fieldState: {error}}) => (
                    <Form.Item label={"Book Image"}>
                      <Input type="file" value={value?.filename} {...field} placeholder={book?.bookImage} onChange={(e) => onChange(e.target.files?.[0])} />
                      {error && <small style={{color: 'red'}}>{error.message}</small>}
                    </Form.Item>
                  )} />
              </Col>

              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <FInput type="text" name="author" label={"Author"} placeholder={book?.author} />
              </Col>

              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <FTextArea name="description" rows={4} label={"Description"} placeholder={book?.description} />
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <FInputNumber name="price" label={"Price"} placeholder={book?.price ? book.price.toString() : ''} />
              </Col>

              <Col span={12} md={{ span: 12 }} lg={{ span: 8 }}>
                <FInputNumber name="quantity" label={"Quantity"} placeholder={book?.price ? book.price.toString() : ''} />
              </Col>

              <Col span={12} md={{ span: 12 }} lg={{ span: 8 }}>
                <FSelect label={"In Stock"} name={"inStock"} options={inStockOptions} />
              </Col>

              <Col span={12} md={{ span: 12 }} lg={{ span: 8 }}>
                <FSelect label={"Category"} name={"category"} options={BookCategoryOptions} />
              </Col>
            </Row>
            
            
            <Button htmlType="submit" type="primary" style={{width: '50%'}}>Update</Button>
          </FForm>
        </Col>
      </Row>
    </div>
  )
}

export default UpdateBookDetails