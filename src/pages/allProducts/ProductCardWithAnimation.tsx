import { Card, Button } from "antd";
import { ShoppingCartOutlined, EyeOutlined  } from "@ant-design/icons";
import { useState } from "react";

const ProductCardWithAnimation = ({product}) => {
    const [isHovered, setIsHovered] = useState(false);
    const {name, price, inStock, image, _id} = product;
    const isInStock = inStock;
    return (
        <div
      className="relative w-full max-w-xs md:max-w-sm transition-all duration-500 rounded-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <Card
          hoverable
          className="w-full bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-500"
          cover={
            <div className="relative">
              <img
                alt="Product"
                src={image}
                className={`h-56 w-full object-cover rounded-t-2xl transition-all duration-500 ${
                  isHovered ? "blur-[2px] brightness-95" : "blur-0 brightness-100"
                }`}
              />
              {/* Dark overlay */}
              <div
                className={`absolute inset-0 bg-black transition-all duration-300 ${
                  isHovered ? "opacity-25" : "opacity-0"
                }`}
              ></div>
            </div>
          }
        >
          <div className="p-4 space-y-3">
            <h2 className="text-left text-2xl font-semibold text-gray-800">
              {name}
            </h2>

            {/* Price & Stock Row */}
            <div className="flex justify-between items-center text-lg font-bold">
              <p className="text-indigo-600">${price}</p>
              <span
                className={`px-3 py-1 text-xs font-semibold uppercase rounded-full shadow-md ${
                  isInStock ? "bg-green-500 text-white" : "bg-red-500 text-white"
                }`}
              >
                {isInStock ? "In Stock" : "Out of Stock"}
              </span>
            </div>
          </div>
        </Card>

        {/* Buttons - Hidden by Default, Shown on Hover */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center gap-3 transition-all duration-500 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Button
            type="primary"
            icon={<ShoppingCartOutlined />}
            className="w-3/4 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-medium shadow-md transition-all duration-300"
            disabled={!isInStock} // Disable if out of stock
          >
            Add to Cart
          </Button>

          <Button
            type="default"
            icon={<EyeOutlined />}
            className="w-3/4 border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white font-medium shadow-md transition-all duration-300"
          >
            View Details
          </Button>
        </div>
      </div>
    </div>
    );
};

export default ProductCardWithAnimation;