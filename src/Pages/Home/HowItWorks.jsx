import React from "react";
import { motion } from "framer-motion";
import { FaChartLine, FaLeaf, FaShareAlt } from "react-icons/fa";

const steps = [
  {
    icon: <FaLeaf className="text-green-600 text-5xl mb-4" />,
    title: "Join a Challenge",
    desc: "Pick an eco-friendly challenge that matches your lifestyle — from saving energy to reducing plastic.",
  },
  {
    icon: <FaChartLine className="text-green-600 text-5xl mb-4" />,
    title: "Track Progress",
    desc: "Keep track of your daily actions, monitor your CO₂ savings, and stay motivated with real stats.",
  },
  {
    icon: <FaShareAlt className="text-green-600 text-5xl mb-4" />,
    title: "Share Tips",
    desc: "Share your green habits with the community and inspire others to live sustainably 🌍",
  },
];

const HowItWorks = () => {
  return (
    <motion.section
      className="py-16 bg-green-50 text-center rounded-2xl"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold text-green-700 mb-10">How It Works</h2>

      <div className="grid md:grid-cols-3 gap-10 container mx-auto px-6">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition-shadow duration-300"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 150 }}
            >
              {step.icon}
            </motion.div>
            <h3 className="text-2xl font-semibold mb-2 text-gray-800">
              {step.title}
            </h3>
            <p className="text-gray-600 text-sm">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default HowItWorks;
