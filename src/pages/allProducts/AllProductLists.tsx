import { useEffect, useState } from "react";
import { useGetAllProductQuery } from "../../redux/features/products/product.api";

import { Input, Pagination, Select, Slider, Drawer, Button } from "antd";
import type { GetProps } from "antd";
import type { SliderSingleProps } from 'antd';
import { TQueryParams } from "../../types/global";
import { productItem } from "../../types/product";
import Loading from "../../components/loading/Loading";
import NotFound from "../NotFoundPage/NotFound";
import ProductsCard from "./ProductsCard";
import { useSearchParams } from "react-router-dom";

const { Option } = Select;
const { Search } = Input;
type SearchProps = GetProps<typeof Input.Search>;

const AllProducts = () => {
  const [params, setParams] = useState<TQueryParams[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [values, setValues] = useState("");
  const [maxPrice, setMaxPrice] = useState(0);
  const [page, setPage] = useState(1);
  const [price, setPrice] = useState<[number, number] | undefined>(undefined);

  const [category, setCategory] = useState<string | undefined>(undefined);
  const [availability, setAvailability] = useState<boolean | undefined>(undefined);

  const [openFilterDrawer, setOpenFilterDrawer] = useState(false);
  const [_, setSearchParamsForCategory] = useSearchParams();
  const [searchParams] = useSearchParams();
  const [searchCategory, setSearchCategory] = useState<string | null>(searchParams.get('category'));

  console.log(searchCategory)

  const marks: SliderSingleProps['marks'] = {
    0: '$0',
    50000: {
      style: {
        color: 'black'
      },
      label: <strong>$50000</strong>,
    },
  };

  const { data: allProducts, isFetching } = useGetAllProductQuery([
    { name: "sort", value: "price" },
    { name: "sortOrder", value: "asc" },
    { name: "page", value: page },
    { name: "limit", value: 6 },
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
    setCategory(searchCategory as string)
  }, [isFetching, values, page, category, availability, price, searchCategory]);

  const handleCancelFilter = () => {
    setCategory(undefined);
    setAvailability(undefined);
    setMaxPrice(0);
    setPrice([0, 50000]);
    setSearchParamsForCategory({'category': ''});
    setSearchCategory(null)
  };

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
    setSearchCategory(value);
    setSearchParamsForCategory({'category': value})
    
  };

  const onSelectAvailable = (value: boolean) => {
    if (value !== availability) {
      setLoading(true);
    }
    setPage(1);
    setAvailability(value);
  };

  const handlePrice = (value: number[]) => {
    setPrice([0, value[1]]);
    setMaxPrice(value[1]);
  };

  const FilterSidebar = () => (
    <div className="p-2 w-full">
      <Search
        placeholder="Search products"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
      />

      <div className="flex mt-7 gap-5 flex-col">
        <Select
          placeholder="Select Category"
          value={category}
          onChange={onSelectCategory}
          className="w-full"
          size="large"
        >
          <Option value="Mountain">Mountain</Option>
          <Option value="Road">Road</Option>
          <Option value="Hybrid">Hybrid</Option>
          <Option value="Electric">Electric</Option>
        </Select>

        <Select
          placeholder="Availability"
          value={availability}
          onChange={onSelectAvailable}
          className="w-full"
          size="large"
        >
          <Option value="true">In Stock</Option>
          <Option value="false">Out of Stock</Option>
        </Select>

        <div>
          <p>Price Range</p>
          <Slider
            marks={marks}
            value={[0, maxPrice]}
            range
            max={50000}
            onChange={handlePrice}
          />
        </div>

        <button
          onClick={handleCancelFilter}
          className="border border-indigo-300 rounded-md text-indigo-400 hover:bg-slate-300 p-3 w-full"
        >
          Clear Filter
        </button>
      </div>
    </div>
  );

  // console.log(isFetching)

  return (
    <div className="container mx-auto mt-24">
      {/* Filter button visible only on mobile & tablet */}
      <div className="lg:hidden flex justify-end px-4">
        <Button className="bg-indigo-600 text-white border-0 px-8 hover:border" onClick={() => setOpenFilterDrawer(true)}>
          Filter
        </Button>
      </div>

      <div className="text-center mt-14">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 drop-shadow-lg">
          All Products
        </h1>
        <div className="w-20 h-1 bg-indigo-500 mx-auto mt-3 rounded-full"></div>
      </div>

      <div className="flex flex-row-reverse mt-10 gap-5">
        {/* Product content */}
        <div className="w-full">
          {(loading || isFetching) && <Loading />}

          {!loading && !isFetching && (
            <div className="flex justify-center">
              {allProductsData && allProductsData.length > 0 ? (
                <div>
                  <div className="mt-16 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 m-auto max-w-[1200px] w-full">
                    {allProductsData?.map((item: productItem, index: number) => (
                      <ProductsCard product={item} key={index} />
                    ))}
                  </div>
                  <div className="mt-9 flex justify-center mb-14">
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
                    <NotFound />
                  </div>
                )
              )}
            </div>
          )}
        </div>

        {/* Sidebar filter only on lg and above */}
        <div className="hidden lg:block w-80 bg-slate-200 p-6 h-fit mt-16">
          <FilterSidebar />
        </div>
      </div>

      {/* Drawer for mobile & tablet */}
      <Drawer
        title="Filters"
        placement="left"
        onClose={() => setOpenFilterDrawer(false)}
        open={openFilterDrawer}
        width={300}
      >
        <FilterSidebar />
      </Drawer>
    </div>
  );
};

export default AllProducts;
