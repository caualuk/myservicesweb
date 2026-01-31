"use client";

import { useState } from "react";
import {
  FaCreditCard,
  FaReceipt,
  FaFileInvoiceDollar,
} from "react-icons/fa";

const cards = [
  {
    title: "Corporate Cards",
    description: "Issue cards with fully adaptable spending controls",
    icon: FaCreditCard,
  },
  {
    title: "Employee Reimbursements",
    description: "Approve and reimburse expenses faster",
    icon: FaReceipt,
  },
  {
    title: "Accounts Payable",
    description: "End-to-end accounts payable flow",
    icon: FaFileInvoiceDollar,
  },
];

export default function FunctionalityCards() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full flex justify-center px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
        {cards.map((card, index) => {
          const Icon = card.icon;
          const isActive = activeIndex === index;

          return (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`bg-white rounded-2xl p-6 text-center border shadow-sm
                transition-all duration-300 focus:outline-none
                hover:shadow-md hover:cursor-pointer
                ${isActive ? "border-gray-300" : "border-gray-100"}`}
            >
              <div
                className={`mx-auto mb-4 flex items-center justify-center w-12 h-12 rounded-xl
                  transition-colors duration-300
                  ${isActive
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-600"}`}
              >
                <Icon size={18} />
              </div>

              <h3
                className={`font-semibold text-sm mb-1 transition-colors
                  ${isActive ? "text-gray-900" : "text-gray-800"}`}
              >
                {card.title}
              </h3>

              <p className="text-xs text-gray-500">
                {card.description}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
