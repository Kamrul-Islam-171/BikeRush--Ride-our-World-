import { LeftOutlined } from "@ant-design/icons";
import { Carousel } from "antd";

const testimonials = [
  {
    name: "Alex Rider",
    text: "Amazing bikes and fantastic service! Highly recommended.",
    role: "Verified Buyer",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Samantha Green",
    text: "Best bike shop experience! Quality products and friendly staff.",
    role: "Happy Customer",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Michael Smith",
    text: "I love my new bike! The ride is smooth and comfortable.",
    role: "Verified Buyer",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

const backgroundImageUrl =
  "https://res.cloudinary.com/dtp5fwvg9/image/upload/v1748084016/4K-Bike-Wallpaper-Free-Download_mzybom.jpg";

const Testimonial = () => {
  return (
    <div
      className="py-12 container mx-auto rounded-xl relative overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-60 rounded-xl pointer-events-none"></div>

      <section className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="text-4xl font-bold mb-8 text-white">What Our Riders Say</h2>
        <Carousel
          autoplay
          arrows
          speed={2000}
          dotPosition="left"
          prevArrow={<LeftOutlined className="bg-indigo-500 text-24px" />}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 bg-white bg-opacity-90 rounded-lg flex flex-col items-center justify-center mx-4"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mb-4 border-4 border-blue-500"
              />
              <p className="text-gray-700 italic text-lg">"{testimonial.text}"</p>
              <div className="mt-4">
                <h4 className="font-semibold text-gray-900 text-lg">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </section>
    </div>
  );
};

export default Testimonial;
