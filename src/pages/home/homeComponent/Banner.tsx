export default function Banner() {
    return (
      <div className="relative container  mx-auto mt-24 mb-10 rounded-xl h-[400px] md:h-[500px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('https://res.cloudinary.com/dtp5fwvg9/image/upload/v1739809309/bikeBanner_hhxsxt.jpg')" }}>
        <div className="rounded-xl absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white px-6 md:px-12">
          <h1 className="text-3xl md:text-5xl font-extrabold drop-shadow-lg">
            Ride in Style with <span className="text-indigo-400">Forter Bikes</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl">Exclusive discounts on premium bikes – Limited Time Offer!</p>
          <a href="/all-products" className="mt-6 inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition">
            Shop Now
          </a>
        </div>
      </div>
    );
  }
  