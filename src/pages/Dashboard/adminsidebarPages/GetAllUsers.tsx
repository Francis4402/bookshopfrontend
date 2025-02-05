import { useEffect } from "react";
import { useBlockUserMutation, useGetAllUsersQuery } from "../../../redux/features/auth/authApi";
import { TUser } from "../../../redux/features/auth/authSlice";
import { Button, Spin, Table, TableColumnsType, TableProps } from "antd";
import { TQueryParams } from "../../../types";
import { toast } from "sonner";

const GetAllUsers = () => {

    const [blockUser] = useBlockUserMutation();

    const {data: userData, isLoading, isFetching, refetch } = useGetAllUsersQuery(undefined);

    useEffect(() => {
      refetch();
    }, [refetch]);


    const handleBlock = async (id: string) => {
      try {
        await blockUser({id}).unwrap();
        toast.success("User blocked successfully");
        refetch();
      } catch (error) {
        toast.error("Failed to block user");
      }
    };


    const tableData = userData?.map((user) => ({
      ...user,
      key: user._id,
    }));


  const columns: TableColumnsType<TUser> = [
    {
      title: "Profile Image",
      dataIndex: "profileImage",
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
      title: "Name",
      dataIndex: "name",
      responsive: ["xs", "sm", "md", "lg", "xl"],
    },
    {
      title: "Email",
      dataIndex: "email",
      responsive: ["sm", "md", "lg", "xl"],
    },
    {
      title: "Phone",
      dataIndex: "phone",
      responsive: ["sm", "md", "lg", "xl"],
    },
    {
      title: "Address",
      dataIndex: "address",
      responsive: ["sm", "md", "lg", "xl"],
    },
    {
      title: "Gender",
      dataIndex: "gender",
      responsive: ["sm", "md", "lg", "xl"],
    },
    {
      title: "Date Of Birth",
      dataIndex: "dateofbirth",
      responsive: ["sm", "md", "lg", "xl"],
    },
    {
      title: "Role",
      dataIndex: "role",
      responsive: ["xs", "sm", "md", "lg", "xl"],
    },
    {
      title: "Is Blocked",
      dataIndex: "isBlocked",
      responsive: ["xs", "sm", "md", "lg", "xl"],
      render: (value) => (value ? "Yes" : "No"),
    },
    {
      title: "Action",
      render: (_, data) => (
        <Button
            type="primary"
            danger={data.isBlocked}
            onClick={() => handleBlock(data.key)}
            disabled={data.isBlocked}
        >
            {data.isBlocked ? "Blocked" : "Block User"}
        </Button>
      ),
    },
  ];

  const onchange: TableProps<TUser>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
    if (extra.action === 'filter') {
      const queryParams: TQueryParams[] = [];

      filters.name?.forEach(item => {
        queryParams.push({ name: "name", value: item});
      });

      filters.year?.forEach(item => {
        queryParams.push({ name: "year", value: item});
      });
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
        dataSource={tableData as readonly TUser[] | undefined}
        onChange={onchange}
        scroll={{ x: "max-content" }}
      />
    </div>
  )
}

export default GetAllUsers