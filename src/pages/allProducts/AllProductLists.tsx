import { useEffect, useState } from "react";
import { useGetAllProductQuery } from "../../redux/features/products/product.api";


import { Input, Pagination, Select } from "antd";
import type { GetProps } from "antd";
import { TQueryParams } from "../../types/global";
import { productItem } from "../../types/product";
import Loading from "../../components/loading/Loading";
import NotFound from "../NotFoundPage/NotFound";
import ProductsCard from "./ProductsCard";
const { Option } = Select;
type SearchProps = GetProps<typeof Input.Search>;
const { Search } = Input;

const AllProducts = () => {
  const [params, setParams] = useState<TQueryParams[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [values, setValues] = useState("");
  const [page, setPage] = useState(1);
  const [price, setPrice] = useState<[number, number] | undefined>(undefined);

  const [category, setCategory] = useState<string | undefined>(undefined);
  const [priceValue, setPriceValue] = useState<string | undefined>(undefined);
  const [availability, setAvailability] = useState<boolean | undefined>(
    undefined
  );
  const { data: allProducts, isFetching } = useGetAllProductQuery([
    {
      name: "sort",
      value: "price",
    },
    { name: "sortOrder", value: "asc" },
    { name: "page", value: page },
    {
      name: "limit",
      value: 6,
    },
    ...(category ? [{ name: "category", value: category }] : []),
    ...(availability ? [{ name: "inStock", value: availability }] : []),
    ...(price
      ? [
          { name: "minPrice", value: price[0] },
          { name: "maxPrice", value: price[1] },
        ]
      : []),
    ...params,
  ]);

  const meta = allProducts?.data?.meta;
  const allProductsData = allProducts?.data?.result;

  useEffect(() => {
    if (!isFetching) {
      setLoading(false);
    }
  }, [isFetching, values, page, category, availability, price]);

  const onSearch: SearchProps["onSearch"] = (value) => {
    if (value !== values) {
      setLoading(true);
    }
    setPage(1);
    setValues(value);
    setParams([{ name: "search", value: value }]);
  };

  const onSelectCategory = (value: string) => {
    if (value !== category) {
      setLoading(true);
    }
    setPage(1);
    setCategory(value);
  };
  const onSelectAvailable = (value: boolean) => {
    if (value !== availability) {
      setLoading(true);
    }
    setPage(1);
    setAvailability(value);
  };

  const onSelectPrict = (value: string) => {
    if (value !== priceValue) {
      setLoading(true);
    }
    setPage(1);
    const parseValue = value.split("-").map(Number);
    // console.log(parseValue);
    setPrice(parseValue as [number, number]);
    setPriceValue(value);
  };

  // console.log(price)

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
        <div className=" flex  justify-center gap-5 mt-7 flex-wrap">
          <div>
            <Select
              placeholder="Select Category"
              value={category}
              onChange={onSelectCategory}
              className="w-48"
            >
              <Option value="Mountain">Mountain</Option>
              <Option value="Road">Road</Option>
              <Option value="Hybrid">Hybrid</Option>
              <Option value="Electric">Electric</Option>
            </Select>
          </div>

          <div>
            <Select
              placeholder="Availability"
              value={availability}
              onChange={onSelectAvailable}
              className="w-48"
            >
              <Option value="true">In Stock</Option>
              <Option value="false">Out of Stock</Option>
            </Select>
          </div>

          <div>
            <Select
              placeholder="Price"
              value={priceValue}
              className="w-48"
              onChange={onSelectPrict}
            >
              <Option value="0-5000">Less than 5000</Option>
              <Option value="5000-10000">5000 - 10000</Option>
              <Option value="10000-100000">Greater than 10000</Option>
            </Select>
          </div>
        </div>
      </div>

      {(loading || isFetching) && <Loading></Loading>}

      {!loading && (
        <div className="flex justify-center">
          {allProductsData && allProductsData.length > 0 ? (
            <div className="">
              <div className="mt-16 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 m-auto max-w-[1200px] w-full">
                {allProductsData?.map((item: productItem, index: number) => (
                  
                  <ProductsCard product={item} key={index} />
                ))}
              </div>
              <div className=" mt-9 flex justify-center mb-14">
                <Pagination
                  current={page}
                  onChange={(value) => setPage(value)}
                  pageSize={meta?.limit}
                  total={meta?.total}
                />
              </div>
            </div>
          ) : (
            !isFetching && (
              <div className="flex justify-center mt-16">
                <NotFound></NotFound>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default AllProducts;
