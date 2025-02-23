const blogs = [
  {
    title: "Top Tips for Choosing Your Next Bike",
    desc: "Find the perfect ride with our expert advice.",
    img: "https://res.cloudinary.com/dtp5fwvg9/image/upload/v1739850985/next_bike_qahx4v.webp",
    link: "#",
  },
  {
    title: "How to Maintain Your Bike for Longevity",
    desc: "Keep your bike in top shape with these simple tips.",
    img: "https://res.cloudinary.com/dtp5fwvg9/image/upload/v1739850985/logng_dqs4qq.webp",
    link: "#",
  },
  {
    title: "Best Cycling Routes for Beginners",
    desc: "Explore the best paths for your cycling journey.",
    img: "https://res.cloudinary.com/dtp5fwvg9/image/upload/v1739850985/road_zxw3mp.jpg",
    link: "#",
  },
];

const Blogs = () => {
  return (
    <div className="mt-14">
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">
          Latest from Our Bike Blog
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow"
            >
              <img
                src={blog.img}
                alt={blog.title}
                className="h-40 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{blog.title}</h3>
                <p className="text-gray-500 text-sm mt-2">{blog.desc}</p>
                <a
                  href={blog.link}
                  className="text-blue-500 text-sm font-semibold mt-3 inline-block"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blogs;
