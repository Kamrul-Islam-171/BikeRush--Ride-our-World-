import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const offeredProducts = [
  {
    offer: "50% OFF",
    text: "Engineered for speed.\nDesigned for control.",
    img: "https://res.cloudinary.com/dtp5fwvg9/image/upload/v1745163434/ixky213b0qzbibva6e49.jpg",
  },
  {
    offer: "30% OFF",
    text: "Effortless power.\nModern commuting redefined.",
    img: "https://res.cloudinary.com/dtp5fwvg9/image/upload/v1748070834/electice_am8lms.jpg",
  },
  {
    offer: "40% OFF",
    text: "Unleash your ride.\nTame any terrain.",
    img: "https://res.cloudinary.com/dtp5fwvg9/image/upload/v1745163483/dt6yt0k7i8tepci03a8t.jpg",
  },
];

const OfferedProducts = () => {
  return (
    <section className="container mx-auto py-24 px-4">
      <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">
        🔥 Limited Time Offers
      </h2>
      <p className="text-center text-gray-500 max-w-2xl mx-auto mb-12 text-base md:text-lg">
        Shop exclusive seasonal deals on our best-selling bikes — built for performance, powered by design.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {offeredProducts.map((product, idx) => (
          <div
            key={idx}
            className="relative group overflow-hidden rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl"
          >
            {/* Image */}
            <img
              src={product.img}
              alt={`Offer ${product.offer}`}
              className="w-full h-[360px] object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent rounded-2xl" />

            {/* Offer badge */}
            <div className="absolute top-4 left-4 backdrop-blur-md bg-red-600 border border-white/30 text-white px-4 py-1 rounded-full text-xs font-semibold shadow-md z-10">
              {product.offer}
            </div>

            {/* Center overlay text */}
            <div className="absolute inset-0 flex items-center justify-center px-6 text-center z-10">
              <p className="text-white text-lg md:text-xl font-semibold leading-snug drop-shadow-md whitespace-pre-line">
                {product.text}
              </p>
            </div>

            {/* Shop Now button */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
              <Link to={'/all-products'}>
              <button className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-all shadow-lg">
                Shop Now
                <ArrowRightIcon className="w-4 h-4" />
              </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OfferedProducts;
