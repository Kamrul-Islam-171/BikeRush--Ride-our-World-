import { JwtPayload } from "jwt-decode";
import Loading from "../../components/loading/Loading";
import { selectCurrenttoken } from "../../redux/features/auth/AuthSlice";
import { useAppSelector } from "../../redux/features/hook";
import { useGetAllOrdersByEmailQuery } from "../../redux/features/orders/order.api";
import { VerifyToken } from "../../utils/verifyToken";
import { useState } from "react";
import { Pagination, Space, Table, TableProps, Tag } from "antd";
import { TCustomerResponse, TOrderResponse, TOrdersProType, TOrderType, TUserDataType } from "../../types/user";

interface CustomJwtPayload extends JwtPayload {
  email?: string;
}

const MyOrders = () => {
  const [page, setPage] = useState(1);
  let user: CustomJwtPayload | null = null;
  const token = useAppSelector(selectCurrenttoken);
  if (token) {
    user = VerifyToken(token) as CustomJwtPayload;
  }
  const { data: myOrders, isFetching } = useGetAllOrdersByEmailQuery([
    {
      name: "email",
      value: user?.email,
    },
    { name: "page", value: page },
    {
      name: "limit",
      value: 6,
    },
  ]);
  const orderData = (myOrders as TOrderResponse)?.data?.result;
  const meta = myOrders?.data?.meta;
//   console.log(orderData, meta);

  if (isFetching) {
    return <Loading />;
  }

  const tableData = orderData?.map(
    ({ _id, name, email, product, amount,delivered }) => ({
      key: _id,
      name,
      email,
      productName:product?.name,
      productImage:product?.image,
      amount,
      delivered
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
        )
      }
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
        if (item.delivered ==='Pending') {
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
  // console.log(myOrders)

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

export default MyOrders;
