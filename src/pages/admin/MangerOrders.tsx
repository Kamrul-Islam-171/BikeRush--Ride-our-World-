import { useState } from "react";
import { useGetAllSuccessfullOrdersQuery } from "../../redux/features/orders/order.api";
import { TOrderResponse, TOrdersProType } from "../../types/user";
import Loading from "../../components/loading/Loading";
import { Pagination, Space, Table, TableProps, Tag } from "antd";

const MangerOrders = () => {
  const [page, setPage] = useState(1);
  const { data: allOrders, isFetching } = useGetAllSuccessfullOrdersQuery([
    { name: "page", value: page },
    {
      name: "limit",
      value: 6,
    },
  ]);
  //   console.log(allOrders);

  const orderData = (allOrders as TOrderResponse)?.data?.result;
  const meta = allOrders?.data?.meta;
  console.log(orderData)

  const tableData = orderData?.map(
    ({ _id, name, email, product, amount, delivered }) => ({
      key: _id,
      name,
      email,
      productName: product?.name,
      productImage: product?.image,
      amount,
      delivered,
    })
  );
  const columns: TableProps<TOrdersProType>["columns"] = [
    {
      title: "Product Name",
      dataIndex: "productName",
      key: "nproductName",
      render: (text) => <a className="hover:text-indigo-500">{text}</a>,
    },
    {
      title: "Image",
      dataIndex: "productImage",
      key: "productImage",
      render: (item) => {
        // console.log({item})
        return (
          <Space className="h-[50px] w-[50px] ">
            <img src={item} className="object-cover rounded-md"></img>
          </Space>
        );
      },
    },
    {
      title: "Price",
      dataIndex: "amount",
      key: "amount",
      render: (text) => <a className="hover:text-indigo-500">${text}</a>,
    },
    {
      title: "Status",
      //   dataIndex: "isBlocked",
      key: "delivered",
      render: (item) => {
        // console.log(item.delivered)
        let tagColor;
        if (item.delivered === "Pending") {
          tagColor = "blue";
        } else {
          tagColor = "green";
        }
        return (
          <Space>
            {item.isBlocked ? (
              <Tag color={tagColor}>Delivered</Tag>
            ) : (
              <Tag color={tagColor}>Pending</Tag>
            )}
          </Space>
        );
      },
    },
  ];

  if (isFetching) {
    return <Loading />;
  }
  return (
    <div>
      <div className=" mt-[100px] text-center">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 drop-shadow-lg">
          My Orders
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

export default MangerOrders;
