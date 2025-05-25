import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

const ShopByCategory = () => {
  // const [_, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
       {
        breakpoint: 1296, 
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024, // tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const handleSetParam = (category:string) => {
    // console.log(category)
    // setSearchParams({category: category});

    const searchParams = new URLSearchParams();
    searchParams.append('category', category);
    // searchParams.append('page', 'page1');
    navigate({
      pathname:'/all-products',
      search: searchParams.toString()  
    })
  }

  const categories = [
    {
      title: "Mountain",
      subtitle: "Conquer the Trails",
      desc: "Explore our rugged and performance-driven mountain bikes, built for adventure and durability.",
      img: "https://res.cloudinary.com/dtp5fwvg9/image/upload/v1745163483/dt6yt0k7i8tepci03a8t.jpg",
    },
    {
      title: "Road",
      subtitle: "Speed Meets Style",
      desc: "Discover lightweight and aerodynamic road bikes designed for high-speed rides on smooth terrain.",
      img: "https://res.cloudinary.com/dtp5fwvg9/image/upload/v1745163434/ixky213b0qzbibva6e49.jpg",
    },
    {
      title: "Hybrid",
      subtitle: "Versatile Comfort",
      desc: "Perfect for city rides and weekend adventures, our hybrid bikes balance performance and comfort.",
      img: "https://res.cloudinary.com/dtp5fwvg9/image/upload/v1745062630/t0ofh6zgm7dg7uta3rva.png",
    },
    {
      title: "Electric",
      subtitle: "Ride Smarter",
      desc: "Experience effortless commuting with our range of stylish and powerful electric bikes.",
      img: "https://res.cloudinary.com/dtp5fwvg9/image/upload/v1748070834/electice_am8lms.jpg",
    },
  ];

  return (
    <section className="container mx-auto  py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
        Shop by Category
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10 text-base md:text-lg">
        Discover bikes tailored to your lifestyle. Whether you're chasing
        trails, commuting to work, or riding for fun — we've got a perfect match
        for you.
      </p>

      <Slider {...settings}>
        {categories.map((cat, index) => (
          <div key={index} className="px-3">
            <div className="relative group overflow-hidden rounded-2xl shadow-md border border-gray-200 bg-white">
              <img
                src={cat.img}
                alt={cat.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                {cat.title}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {cat.subtitle}
                </h3>
                <p className="text-gray-600 mb-4">{cat.desc.slice(0,70)}...</p>
                <button onClick={()=>handleSetParam(cat?.title)} className="inline-flex items-center gap-2 bg-indigo-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors">
                  Explore Now
                  <ArrowRightIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider> 
    </section>
  );
};

export default ShopByCategory;
