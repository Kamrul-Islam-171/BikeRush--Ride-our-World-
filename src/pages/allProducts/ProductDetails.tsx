import { Link, useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../redux/features/products/product.api";
import Loading from "../../components/loading/Loading";
import { Button, Card, Tag } from "antd";
import { CheckCircleOutlined, CloseCircleOutlined, ShoppingCartOutlined } from "@ant-design/icons";



const ProductDetails = () => {
    const {id} = useParams();
    const {data:productData, isFetching} = useGetSingleProductQuery(id);
    const product = productData?.data;
    console.log(product)
    
    const filteredField = {id: product?._id, name:product?.name, image: product?.image, price:product?.price};
    // console.log(filteredField)
  

    if(isFetching) {
        return <Loading></Loading>
    }

    return (
        <div className="max-w-5xl mx-auto lg:p-6 md:p-6 bg-white shadow-lg rounded-lg mt-10 mb-10">
            <Card className="p-1 lg:p-3 md:p-3">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Product Image */}
                    <div className="flex justify-center">
                        <img 
                            src={product?.image} 
                            alt={product?.name} 
                            className="w-full md:w-96 rounded-lg shadow-md border"
                        />
                    </div>

                    {/* Product Details */}
                    <div>
                        <h1 className="text-3xl font-bold text-indigo-500">{product?.name}</h1>
                        <p className="text-lg text-gray-600 mt-2">Brand: <span className="font-semibold">{product?.brand}</span></p>
                        <p className="text-lg text-gray-600 mt-2">Category: <span className="font-semibold">{product?.category}</span></p>
                        <p className="text-lg text-gray-800 font-semibold mt-4">Price: <span className="text-indigo-500 font-bold">${product?.price}</span></p>
                        <p className="text-gray-700 mt-4">{product?.description}</p>
                        <p className="text-lg text-gray-600 mt-4">Quantity: <span className="font-semibold">{product?.quantity}</span></p>
                        <p className="text-lg mt-4">Status: {product?.inStock ? (
                            <Tag icon={<CheckCircleOutlined />} color="green">In Stock</Tag>
                        ) : (
                            <Tag icon={<CloseCircleOutlined />} color="red">Out of Stock</Tag>
                        )}</p>
                        <p className="text-gray-500 text-sm mt-4">Created At: {new Date(product?.createdAt).toLocaleDateString()}</p>
                        <p className="text-gray-500 text-sm">Last Updated: {new Date(product?.updatedAt).toLocaleDateString()}</p>
                        
                        <div className="mt-6 flex items-center space-x-4">
                            <Button 
                                 
                                icon={<ShoppingCartOutlined />} 
                                size="large"
                                className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-medium shadow-md"
                                disabled={product?.quantity <= 0}
                            >
                                <Link to={'/customer/checkout'} state={{product: filteredField}}>Buy Now</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default ProductDetails;