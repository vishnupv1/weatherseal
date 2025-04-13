import React from "react";
import { FaShieldAlt, FaLeaf, FaTools } from "react-icons/fa";

const cards = [
  {
    icon: <FaShieldAlt className="text-purple-600 text-3xl" />,
    title: "Durability and Weather Resistance",
    points: [
      "UPVC is highly resistant to weather conditions, corrosion, and chemicals",
      "Ensures long-term performance with minimal maintenance",
    ],
  },
  {
    icon: <FaLeaf className="text-purple-600 text-3xl" />,
    title: "Energy Efficiency and Sustainability",
    points: [
      "Excellent insulation helps reduce energy bills",
      "Environmentally friendly and recyclable material",
    ],
  },
  {
    icon: <FaTools className="text-purple-600 text-3xl" />,
    title: "Low Maintenance and Versatility",
    points: [
      "No need for frequent painting or sealing",
      "Can be used in a variety of applications including windows, doors, and plumbing",
    ],
  },
];

const EmployeeEngagement: React.FC = () => {
  return (
    <div className="p-4 sm:p-8">
      <h2 className="text-4xl font-bold text-[#00838f] mb-12 drop-shadow-lg">
        Why Choose <span className="text-secondary">UPVC?</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-purple-100 rounded-full p-3">{card.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">
                {card.title}
              </h3>
            </div>
            <ul className="mt-4 space-y-4 text-gray-700">
              {card.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeEngagement;
