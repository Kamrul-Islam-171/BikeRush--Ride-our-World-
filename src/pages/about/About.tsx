
import { motion } from "framer-motion";

import { Card, Typography } from "antd";

const { Title, Paragraph } = Typography;

const About = () => {
    return (
        <div className="p-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Title level={2} className="text-blue-600">Welcome to Bike Rush</Title>
          <Paragraph className="text-gray-700 text-lg">
            Your one-stop destination for high-quality bikes, designed for every terrain and rider.
          </Paragraph>
        </motion.div>
  
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6"
        >
          <Card className="shadow-lg rounded-2xl p-6">
            <Title level={3} className="text-green-600">Our Mission</Title>
            <Paragraph className="text-gray-600">
              At Bike Rush, we believe in promoting a healthier lifestyle and an eco-friendly way of commuting.
              Our mission is to provide top-notch bikes for every rider, whether you're an urban commuter or an
              off-road adventurer.
            </Paragraph>
          </Card>
        </motion.div>
  
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-6"
        >
          <Card className="shadow-lg rounded-2xl p-6">
            <Title level={3} className="text-purple-600">Why Choose Us?</Title>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Wide variety of bikes for different needs</li>
              <li>High-quality, durable, and stylish designs</li>
              <li>Affordable pricing with great value</li>
              <li>Excellent customer support and warranty</li>
            </ul>
          </Card>
        </motion.div>
  
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-6"
        >
          <Card className="shadow-lg rounded-2xl p-6">
            <Title level={3} className="text-red-600">Our Commitment to Quality</Title>
            <Paragraph className="text-gray-600">
              We carefully source our materials and ensure rigorous quality checks for every bike. Whether you are
              looking for speed, durability, or comfort, we have the perfect bike for you.
            </Paragraph>
          </Card>
        </motion.div>
  
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-6"
        >
          <Card className="shadow-lg rounded-2xl p-6">
            <Title level={3} className="text-orange-600">Join the Bike Rush Community</Title>
            <Paragraph className="text-gray-600">
              Become a part of our vibrant cycling community. Stay updated with the latest biking trends, tips,
              and exclusive offers. Let's ride towards a healthier and greener future together!
            </Paragraph>
          </Card>
        </motion.div>
      </div>
    );
};

export default About;