import { Link } from "react-router-dom";
import { useGetAllProductQuery } from "../../../redux/features/products/product.api";
import { productItem } from "../../../types/product";
import { Skeleton } from "antd";

const FeaturedProducts = () => {
  const { data: allProducts, isFetching } = useGetAllProductQuery([
    { name: "page", value: 1 },
    { name: "limit", value: 6 },
  ]);

  const allProductsData = allProducts?.data?.result;

  return (
    <section className="py-16 container mx-auto">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Featured Products
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          Discover our top-selling bikes.
        </p>
      </div>

      
      
      
      
        <div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {isFetching? 
            
            Array.from({length:6}).map((_,idx) => (

              <div key={idx} className="rounded-xl overflow-hidden shadow-lg space-y-3">
                <div>
                  <Skeleton.Image active style={{width:'500px', height:'156px'}} />
                </div>
                <div className="">
                  <Skeleton active></Skeleton>
                </div>
              </div>
            ))
            :
            
            allProductsData?.map((product: productItem) => (
              <div
                key={product._id}
                className="relative group rounded-xl overflow-hidden shadow-lg"
              >
               
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />

                
                <div className="absolute top-3 left-3 bg-white px-3 py-1 text-xs font-semibold text-gray-700 rounded-full shadow">
                  {product.brand}
                </div>
                <div
                  className={`absolute top-3 right-3 px-3 py-1 text-xs font-semibold rounded-full ${
                    product.inStock
                      ? "bg-green-500 text-white"
                      : "bg-red-500 text-white"
                  } shadow`}
                >
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </div>

               
                <div className="absolute flex-col gap-3 inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center flex items-center gap-5">
                    
                    <h3 className="text-3xl font-semibold translate-x-[-20px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                      {product.name}
                    </h3>

                    
                    <p className="text-3xl font-bold translate-x-[20px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                      ${product.price}
                    </p>
                  </div>
                  <div>
                    <Link to={`/product/${product._id}`}><button className="text-white bg-indigo-600 px-5 py-2 rounded-full">View Details</button></Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <a
              href="/all-products"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition"
            >
              View All
            </a>
          </div>
        </div>
      
      
      
      

      {/* <div className="mt-8 flex justify-center">
        <a
          href="/all-products"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition"
        >
          View All
        </a>
      </div> */}
    </section>
  );
};

export default FeaturedProducts;
