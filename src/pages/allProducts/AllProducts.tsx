import { useEffect, useState } from "react";
import { useGetAllProductQuery } from "../../redux/features/products/product.api";
import ProductCardWithAnimation from "./ProductCardWithAnimation";

import { Button, Input, Pagination, Spin } from "antd";
import type { GetProps } from "antd";
import { TQueryParams } from "../../types/global";
import { ShoppingCartOutlined } from "@ant-design/icons";
type SearchProps = GetProps<typeof Input.Search>;
const { Search } = Input;

const AllProducts = () => {
  const [params, setParams] = useState<TQueryParams[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [values, setValues] = useState("");
  const [page, setPage] = useState(1);
  const { data: allProducts, isFetching } = useGetAllProductQuery([
    {
      name: "sort",
      value: "price",
    },
    { name: "sortOrder", value: "asc" },
    { name: "page", value: page },
    {
      name: "limit",
      value: 3,
    },
    ...params,
  ]);

  const meta = allProducts?.data?.meta;
  const allProductsData = allProducts?.data?.result;

  useEffect(() => {
    if (!isFetching) {
      setLoading(false);
    }
  }, [isFetching, values]);

  const onSearch: SearchProps["onSearch"] = (value) => {
    if (value !== values) {
      setLoading(true);
    }
    setValues(value);
    setParams([{ name: "search", value: value }]);
  };
  return (
    <div>
      <div className=" mt-[100px] text-center">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 drop-shadow-lg">
          All Products
        </h1>
        <div className="w-20 h-1 bg-indigo-500 mx-auto mt-3 rounded-full"></div>
      </div>

      <div className="m-auto max-w-[1200px] w-full mt-14">
        <Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={onSearch}
        />
      </div>

      {loading && (
        <div className="flex justify-center mt-10">
          <Spin size="large" />
        </div>
      )}

      {!loading && (
        <div>
          <div className="mt-16 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 m-auto max-w-[1200px] w-full">
            {allProductsData?.map((item, index) => (
              <ProductCardWithAnimation product={item} key={index} />
            ))}
          </div>
          <div className=" mt-9 flex justify-center">
            <Pagination
              current={page}
              onChange={(value) => setPage(value)}
              pageSize={meta?.limit}
              total={meta?.total}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AllProducts;
