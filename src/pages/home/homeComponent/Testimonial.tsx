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

const Testimonial = () => {
  return (
    <div className="py-12 bg-gray-100">
      
      <section className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-gray-800">
          What Our Riders Say
        </h2>
        <Carousel autoplay arrows dotPosition="left" 
        prevArrow={<LeftOutlined className="bg-indigo-500 text-24px"></LeftOutlined>}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 bg-white  flex flex-col items-center justify-center mx-4"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mb-4 border-4 border-blue-500"
              />
              <p className="text-gray-700 italic text-lg">"{testimonial.text}"</p>
              <div className="mt-4">
                <h4 className="font-semibold text-gray-900 text-lg">
                  {testimonial.name}
                </h4>
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