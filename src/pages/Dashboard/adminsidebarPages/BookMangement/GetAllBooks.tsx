import { useState } from "react";
import { useGetAllBooksQuery } from "../../../../redux/features/books/bookManagementApi";
import { TQueryParams } from "../../../../types";
import { TBookstypes } from "../../../../redux/features/books/bookstypes";
import { Table, TableColumnsType, TableProps } from "antd";


const GetAllBooks = () => {

  const [params, setParams] = useState<TQueryParams[] | undefined>(undefined);

    const {data: semesterData, isLoading, isFetching } = useGetAllBooksQuery(params);

    console.log({ isLoading, isFetching});

    const tableData = semesterData?.data?.map(
      ({product_id, title, bookImage, author, price, category, description, quantity, inStock}) => ({
      key: product_id,
      product_id,
      title,
      bookImage,
      author,
      price,
      category,
      description,
      quantity,
      inStock,
    })
  );

  const columns: TableColumnsType<TBookstypes> = [
    {
      title: "Book Image",
      dataIndex: "bookImage",
      responsive: ["xs", "sm", "md", "lg", "xl"],
      render: (imageUrl) => (
        <img
          src={imageUrl}
          alt="Book Cover"
          style={{ width: 50, height: 50, objectFit: "cover", borderRadius: 4 }}
        />
      ),
    },
    {
      title: "Title",
      dataIndex: "title",
      responsive: ["xs", "sm", "md", "lg", "xl"],
    },
    {
      title: "Author",
      dataIndex: "author",
      responsive: ["sm", "md", "lg", "xl"],
    },
    {
      title: "Price",
      dataIndex: "price",
      responsive: ["sm", "md", "lg", "xl"],
    },
    {
      title: "Category",
      dataIndex: "category",
      responsive: ["md", "lg", "xl"],
    },
    {
      title: "Description",
      dataIndex: "description",
      responsive: ["lg", "xl"],
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      responsive: ["sm", "md", "lg", "xl"],
    },
    {
      title: "In Stock",
      dataIndex: "inStock",
      responsive: ["xs", "sm", "md", "lg", "xl"],
      render: (value) => (value ? "Yes" : "No"),
    },
  ];

  const onchange: TableProps<TBookstypes>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
    if (extra.action === 'filter') {
      const queryParams: TQueryParams[] = [];

      filters.name?.forEach(item => {
        queryParams.push({ name: "name", value: item});
      });

      filters.year?.forEach(item => {
        queryParams.push({ name: "year", value: item});
      });

      setParams(queryParams);
    }
  };

  if(isLoading) {
    return <p>Loading</p>
  }

  return (
    <Table loading={isLoading} columns={columns} dataSource={tableData} onChange={onchange} scroll={{ x: "max-content"}} />
  )
}

export default GetAllBooks