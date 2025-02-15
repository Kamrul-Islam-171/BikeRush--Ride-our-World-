import { Card, Button } from "antd";
import { ShoppingCartOutlined, EyeOutlined } from "@ant-design/icons";
import { productItem } from "../../types/product";
import { NavLink } from "react-router-dom";



interface TproductItemProps {
    product: productItem;
}

const ProductsCard = ({ product} : TproductItemProps) => {
  const { name, price, inStock, image, category, _id } = product;
  const isInStock = inStock;

  return (
    <div className="relative w-full max-w-xs md:max-w-sm rounded-2xl">
      <Card
        hoverable
        className="w-full bg-white rounded-2xl overflow-hidden shadow-lg"
        cover={
          <div className="relative">
            <img
              alt="Product"
              src={image}
              className="h-56 w-full object-cover rounded-t-2xl"
            />
          </div>
        }
      >
        <div className="p-4 space-y-3">
          <h2 className="text-left text-2xl font-semibold text-gray-800">
            {name}
          </h2>
          <p className="text-sm text-gray-500">Category: {category}</p>

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

          {/* Buttons Row - Adjust for Small Devices */}
          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <Button
              type="primary"
              icon={<ShoppingCartOutlined />}
              className="flex-1 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-medium shadow-md"
              disabled={!isInStock} // Disable if out of stock
            >
              Buy Now
            </Button>

            <Button
              type="default"
              icon={<EyeOutlined />}
              className="flex-1 border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white font-medium shadow-md"
            >
              <NavLink to={`/product/${_id}`}>View Details</NavLink>
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProductsCard;