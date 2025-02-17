import { Button, Modal, Pagination, Space, Table, TableProps, Tag } from "antd";
import {
  useDeleteProductMutation,
  useGetAllProductQuery,
  useUpdateProductMutation,
} from "../../redux/features/products/product.api";
import { DataType, TProductResponse } from "../../types/product";
import { useState } from "react";

import BSForm from "../../components/form/BSForm";
import BSInput from "../../components/form/BSInput";
import { toast } from "sonner";
import Loading from "../../components/loading/Loading";
import {
  CheckOutlined,
  CloseOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";


const AllProducts = () => {
  
  const [page, setPage] = useState(1);
  const { data: productData, isFetching } = useGetAllProductQuery([
    { name: "page", value: page },
    {
      name: "limit",
      value: 6,
    },
  ]);
  const meta = productData?.data?.meta;

  const allProductsData = (productData as TProductResponse)?.data?.result;
  //   console.log(allProductsData)

  const tableData = allProductsData?.map(
    ({ _id, name, price, quantity, category }) => ({
      key: _id,
      name,
      price,
      quantity,
      category,
    })
  );
  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a className="hover:text-indigo-500">{text}</a>,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Action",
      key: "action",
      render: (item) => {
        // console.log(item);
        return (
          <Space>
            <UpdateProductModal product={item} />
            {/* <Button className="flex-1 border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white font-medium shadow-md">
              Delete
            </Button> */}
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
          Product Lists
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

const UpdateProductModal = ({ product }) => {
  const [productUpdate] = useUpdateProductMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const defaultValues = {
    price: product?.price,
    quantity: product?.quantity,
  };
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleSubmit = async (data) => {
    const toastId = toast.loading("Loading...");
    // console.log(data);
    try {
      
      const updatedData = {
        price: Number(data?.price),
        quantity: Number(data?.quantity),
        inStock: Number(data?.quantity) > 0 ? true : false,
      };
      const res = await productUpdate({ id: product.key, data: updatedData });
      // console.log(res);;
      if (res?.data) {
        toast.success("Product Updated Successfully!", {
          id: toastId,
          duration: 2000,
        });
      } else {
        toast.error("Something went wrong", { id: toastId, duration: 2000 });
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
    }
  };

  return (
    <div>
      <Button
        onClick={showModal}
        className="flex-1 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-medium shadow-md"
      >
        Update
      </Button>
      <Modal
        title="Update Product"
        open={isModalOpen}
        footer={null}
        onCancel={handleCancel}
      >
        <div className="max-w-xl w-full mx-auto flex flex-col justify-center  p-4">
          <div className="">
            <BSForm onSubmit={handleSubmit} defaultValues={defaultValues}>
              <BSInput
                name="price"
                label="Price"
                type="number"
                rules={{
                  required: "Product price is required",
                }}
              />
              <BSInput
                name="quantity"
                label="Quantity"
                type="number"
                rules={{
                  required: "Product quantity is required",
                }}
              />

              <div className="flex justify-end">
                <Button
                  htmlType="submit"
                  onClick={handleCancel}
                  className=" bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-medium shadow-md"
                >
                  Submit
                </Button>
              </div>
            </BSForm>
          </div>
        </div>
      </Modal>
    </div>
  );
};

const ConfirmDelete = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteProduct] = useDeleteProductMutation();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleDelete = async () => {
    const toastId = toast.loading("Loading...");
    try {
      const res = await deleteProduct(product.key);
      console.log("res = ", res);
      if (res?.data) {
        console.log("hell");
        toast.success(res?.data?.message, { id: toastId, duration: 2000 });
      } else {
        toast.error("Something went wrong", { id: toastId, duration: 2000 });
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
    }
  };

  return (
    <div>
      <Button
        onClick={showModal}
        className="flex items-center gap-2 border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white font-medium shadow-md"
      >
        <DeleteOutlined />
        Delete
      </Button>

      <Modal
        title={
          <div className="flex items-center gap-2 text-indigo-600">
            <ExclamationCircleOutlined />
            Confirm Deletion
          </div>
        }
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="flex flex-col items-center text-center p-4">
          <p className="text-gray-600 mb-4">
            Are you sure you want to delete{" "}
            <strong className="text-indigo-600">{product?.name}</strong>? This
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

export default AllProducts;
