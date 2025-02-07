import { useEffect, useState } from "react";
import { useDeleteBooksMutation, useGetAllBooksQuery } from "../../../../redux/features/books/bookManagementApi";
import { TBookstypes, TQueryParams } from "../../../../types";
import { Button, Collapse, Spin, Table, TableColumnsType, TableProps } from "antd";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";


const GetAllBooks = () => {

  const [params, setParams] = useState<TQueryParams[] | undefined>(undefined);

    const {data: bookData, isLoading, isFetching, refetch } = useGetAllBooksQuery(params);

    const [deleteBooks] = useDeleteBooksMutation();

    const navigate = useNavigate();


    useEffect(() => {
      if(params) {
        refetch();
      }
    }, [params, refetch]);


    const handleDelete = async (id: string) => {
      try {
        await deleteBooks({ id }).unwrap();
        toast.success("Book deleted successfully");
        refetch();
      } catch (error) {
        toast.error("Failed to delete book");
      }
    };

    const handleNavigate = (id: string) => {
      navigate(`/admin/update-products/${id}`);
    };


    const tableData = bookData?.data?.map((book) => ({
      ...book,
      key: book._id,
    }))

  const columns: TableColumnsType<TBookstypes> = [
    {
      title: "Book Image",
      dataIndex: "bookImage",
      responsive: ["xs", "sm", "md", "lg", "xl"],
      render: (imageUrl) => (
        <LazyLoadImage
          effect="blur"
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
      responsive: ["sm", "md", "lg", "xl"],
    },
    {
      title: "Description",
      dataIndex: "description",
      responsive: ["xs", "sm", "md", "lg", "xl"],
      render: (text) => (
        <Collapse
          ghost
          style={{ width: "200px" }}
          items={[
            {
              key: "1",
              label: text.length > 10 ? `${text.slice(0, 10)}...` : text,
              children: <p>{text}</p>,
            },
          ]}
        />
      ),
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
    {
      title: "Action",
      render: (_, data) => (
        <div className="flex gap-2">
          <Button onClick={() => handleNavigate(data._id)}>Update</Button>
          <Button danger onClick={() => handleDelete(data._id)}>Delete</Button>
        </div>
      ),
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
    return <p>Loading...</p>
  }

  return (
    <div>
      <div style={{ marginBottom: 16, display: "flex", justifyContent: "space-between" }}>
        <h2>Book List</h2>
        <Button onClick={refetch} loading={isFetching} type="primary">
          Refresh
        </Button>
      </div>
      {isFetching && <Spin style={{ display: "block", marginBottom: 16 }} />}
      <Table
        loading={isLoading}
        columns={columns}
        dataSource={tableData as readonly TBookstypes[] | undefined}
        onChange={onchange}
        scroll={{ x: "max-content" }}
      />
    </div>
  )
}

export default GetAllBooks