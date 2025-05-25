import { Link, useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../redux/features/products/product.api";
import Loading from "../../components/loading/Loading";
import { Button, Card, Divider, InputNumber, Tag } from "antd";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  MinusOutlined,
  PlusOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { useState } from "react";

const ProductDetails = () => {
  const { id } = useParams();
  const { data: productData, isFetching } = useGetSingleProductQuery(id);
  const [value, setValue] = useState<number>(1);
  const product = productData?.data;
  // console.log(product)

  const filteredField = {
    id: product?._id,
    name: product?.name,
    image: product?.image,
    price: product?.price,
  };
  // console.log(filteredField)
  const onIncrementDecrement = (value: number | null) => {
    setValue(value as number);
  };

  const decrement = () => {
    if (value !== 1) {
      setValue((prev) => prev - 1);
    }
  };
  const increment = () => {
    if (value !== product?.quantity) {
      setValue((prev) => prev + 1);
    }
  };
  console.log(value);

  if (isFetching) {
    return <Loading></Loading>;
  }

  return (
    <div className="max-w-7xl mx-auto  bg-white shadow-lg rounded-lg mt-24 mb-10 ">
      <Card className="p-1">
        <div className="grid md:grid-cols-2 gap-8 ">
          {/* Product Image */}
          <div className="flex justify-center  ">
            <img
              src={product?.image}
              alt={product?.name}
              className="w-full rounded-lg shadow-md border object-cover"
            />
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold text-gray-700">
              {product?.name}
            </h1>
            {/* <p className="text-lg text-gray-600 mt-2">
              Brand: <span className="font-semibold">{product?.brand}</span>
            </p>
            <p className="text-lg text-gray-600 mt-2">
              Category:{" "}
              <span className="font-semibold">{product?.category}</span>
            </p> */}
            {/* <p className="text-lg text-gray-800 font-semibold mt-4">Price: <span className="text-indigo-500 font-bold">${product?.price}</span></p> */}
            <p className="text-gray-700 mt-4">{product?.description}</p>
            <p className="text-lg text-gray-700 font-semibold mt-4">
              Quantity:{" "}
              <span className="font-semibold">{product?.quantity}</span>
            </p>
            <div className="flex gap-10 items-center">
              <p className="text-2xl text-gray-800 font-semibold mt-4">
                {" "}
                <span className="text-indigo-500 font-bold">
                  ${product?.price}
                </span>
              </p>
              <p className="text-lg mt-4">
                {product?.inStock ? (
                  <Tag icon={<CheckCircleOutlined />} color="green">
                    In Stock
                  </Tag>
                ) : (
                  <Tag icon={<CloseCircleOutlined />} color="red">
                    Out of Stock
                  </Tag>
                )}
              </p>
            </div>

            <div className="mt-6 flex justify-between flex-col lg:flex-row md:flex-row gap-5 md:items-center items-start lg:items-center space-x-4">
              <div>
                <Button size="large" icon={<MinusOutlined />} onClick={decrement} className=" rounded-none rounded-l-xl border-r-0"/>
                <InputNumber<number>
                  min={1 as number}
                  max={product?.quantity}
                  value={value}
                  size="large"
                  defaultValue={1}
                  onChange={onIncrementDecrement}
                  className=" rounded-none"
                />
                <Button size="large" icon={<PlusOutlined />} onClick={increment} className=" rounded-none border-l-0 rounded-r-xl"/>
              </div>
              <Button
                icon={<ShoppingCartOutlined />}
                size="large"
                className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-medium shadow-md"
                disabled={product?.quantity <= 0}
              >
                <Link
                  to={"/customer/checkout"}
                  state={{ product: filteredField }}
                >
                  Add to Cart
                </Link>
              </Button>
            </div>
            <Divider />
            <div className="flex gap-10 ">
              <div>
                <p className="text-lg font-semibold text-gray-700">Category</p>
                <p className="text-gray-700">{product?.category}</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-700">Brand</p>
                <p className="text-gray-700">{product?.brand}</p>
              </div>
            </div>
            <div className="mt-5 space-y-3">
              <p className="text-lg font-semibold text-gray-700">Tags</p>
              <div className="flex flex-wrap gap-2">
                <Tag bordered={false} color="purple" className="text-sm">
                  Bike
                </Tag>
                <Tag bordered={false} color="purple" className="text-sm">
                  {product?.category}
                </Tag>
                <Tag bordered={false} color="purple" className="text-sm">
                  {product?.brand}
                </Tag>
                <Tag bordered={false} color="purple" className="text-sm">
                  {product?.name}
                </Tag>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProductDetails;
