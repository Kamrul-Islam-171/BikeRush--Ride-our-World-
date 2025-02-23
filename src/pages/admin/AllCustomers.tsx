import { Button, Modal, Pagination, Space, Table, TableProps, Tag } from "antd";

import { useState } from "react";

import { toast } from "sonner";
import Loading from "../../components/loading/Loading";
import {
  CheckOutlined,
  CloseOutlined,

  ExclamationCircleOutlined,
  LockOutlined,
  UnlockOutlined,
} from "@ant-design/icons";
import { TCustomerResponse, TUserDataType } from "../../types/user";
import { useBlockUnblockCustomerMutation, useGetAllCustomersQuery } from "../../redux/features/customers/customer.api";
import { TCustomerModal} from "../../types/product";



const AllCustomers = () => {
  const [page, setPage] = useState(1);
  const { data: customerData, isFetching } = useGetAllCustomersQuery([
    { name: "page", value: page },
    {
      name: "limit",
      value: 6,
    },
    {
      name: "role",
      value: "customer",
    },
  ]);

  const meta = customerData?.data?.meta;
  const allCustomersData = (customerData as TCustomerResponse)?.data?.result;
  // console.log(allCustomersData)

  const tableData = allCustomersData?.map(
    ({ _id, name, email, isBlocked }) => ({
      key: _id,
      name,
      email,
      isBlocked,
    })
  );
  const columns: TableProps<TUserDataType>["columns"] = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a className="hover:text-indigo-500">{text}</a>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Status",
      //   dataIndex: "isBlocked",
      key: "isBlocked",
      render: (item) => {
        let tagColor;
        if (!item.isBlocked) {
          tagColor = "green";
        } else {
          tagColor = "red";
        }
        return (
          <Space>
            {item.isBlocked ? (
              <Tag color={tagColor}>Blocked</Tag>
            ) : (
              <Tag color={tagColor}>Active</Tag>
            )}
          </Space>
        );
      },
    },

    {
      title: "Action",
      key: "action",
      render: (item) => {
        // console.log(item);
        return (
          <Space>
            <ConfirmDelete product={item}></ConfirmDelete>
          </Space>
        );
      },
    },
  ];

  return (
    <div>
      <div className=" mt-[100px] text-center">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 drop-shadow-lg">
          Customer Lists
        </h1>
        <div className="w-20 h-1 bg-indigo-500 mx-auto mt-3 rounded-full"></div>
      </div>

      {isFetching && <Loading></Loading>}
      {!isFetching && (
        <div className="mt-14">
          <Table
            dataSource={tableData}
            //    loading={}
            loading={isFetching}
            columns={columns}
            pagination={false}
          ></Table>
        </div>
      )}
      <div className="mt-5 flex justify-end">
        <Pagination
          current={page}
          onChange={(value) => setPage(value)}
          total={meta?.total}
          pageSize={meta?.limit}
        ></Pagination>
      </div>
    </div>
  );
};

const ConfirmDelete = ({ product}: TCustomerModal) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  

  const [blockUnblockCustomer] = useBlockUnblockCustomerMutation();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleDelete = async () => {
    const toastId = toast.loading("Loading...");
    try {
        const statusValue: boolean = !product?.isBlocked ? true : false;
        const res = await blockUnblockCustomer({id: product?.key, queryParams: [{name: "isBlock", value: statusValue}]});
        // console.log("res = ", res);
        if (res?.data) {
          toast.success(res?.data?.message, { id: toastId, duration: 2000 });
        } else {
          toast.error("Something went wrong", { id: toastId, duration: 2000 });
        }
        setIsModalOpen(false);
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
      setIsModalOpen(false);
    }
  };

  return (
    <div>
      {product?.isBlocked ? (
        <Button
          onClick={showModal}
          className="flex items-center gap-2 border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white font-medium shadow-md"
        >
          <UnlockOutlined />
          Unblock
        </Button>
      ) : (
        <Button
          onClick={showModal}
          className="flex items-center gap-2 border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white font-medium shadow-md"
        >
            <LockOutlined />
          Block
        </Button>
      )}

      <Modal
        title={
          <div className="flex items-center gap-2 text-indigo-600">
            <ExclamationCircleOutlined />
            Confirm Action
          </div>
        }
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="flex flex-col items-center text-center p-4">
          <p className="text-gray-600 mb-4">
            Are you sure you want to {!product.isBlocked ? 'Block' : 'UnBlock'}{" "}
            <strong className="text-indigo-600">{product?.name}</strong> ? This
            action cannot be undone.
          </p>
          <div className="flex gap-4">
            <Button
              onClick={handleCancel}
              className="flex items-center gap-2 border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white font-medium shadow-md"
            >
              <CloseOutlined />
              No
            </Button>
            <Button
              onClick={handleDelete}
              className="flex-1 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-medium shadow-md"
            >
              <CheckOutlined />
              Yes
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AllCustomers;
