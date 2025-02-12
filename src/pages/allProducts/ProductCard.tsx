import { Card, Button } from "antd";
import { ShoppingCartOutlined, EyeOutlined } from "@ant-design/icons";
import { useState } from "react";

const ProductCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  const isInStock = true;
  return (
    <div>
      <Card
        hoverable
        className="w-full max-w-xs md:max-w-sm bg-white rounded-2xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105"
        cover={
          <img
            alt="Product"
            src="https://res.cloudinary.com/dtp5fwvg9/image/upload/v1739268257/y2yrbvqoeswss48zctb9.webp"
            className="h-56 w-full object-cover rounded-t-2xl"
          />
        }
      >
        <div className="p-4 text-center space-y-4">
          <h2 className="text-lg font-semibold text-gray-800">
            Premium Sneakers
          </h2>
          <p className="text-xl font-bold text-indigo-600">$129.99</p>

          <div className="flex flex-col md:flex-row gap-3">
            <Button
              type="primary"
              icon={<ShoppingCartOutlined />}
              className="w-full md:w-1/2 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-medium shadow-md"
            >
              Add to Cart
            </Button>

            <Button
              type="default"
              icon={<EyeOutlined />}
              className="w-full md:w-1/2 border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white font-medium shadow-md"
            >
              View Details
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProductCard;
