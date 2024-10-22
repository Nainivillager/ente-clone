import { useState } from "react";

// PlanCard component
const PlanCard = ({
  type,
  data,
  monthlyCost,
  annualCost,
  description,
  btn,
  isMonthly,
}) => {
  const cost = isMonthly ? monthlyCost : annualCost;
  return (
    <div className="border-2 border-gray-300 rounded-lg p-4 flex flex-col items-center justify-between h-full">
      <div>
        <h2 className="text-xl font-bold">{type}</h2>
        <p className="text-lg">{data}</p>
        <div className="text-2xl font-bold mt-2">
          ₹{cost}
          <span className="text-sm">/{isMonthly ? "mo" : "yr"}</span>
        </div>
        <p className="mt-2 text-sm text-center">{description}</p>
      </div>
      <div className="mt-4 w-full">
        <button className="px-4 py-2 bg-black text-white text-base rounded w-full">
          {btn}
        </button>
      </div>
    </div>
  );
};

// PricingToggle component
const Toggle = () => {
  const plans = [
    {
      type: "Free",
      data: "5 GB",
      monthlyCost: "0",
      annualCost: "0",
      description: "Casual users with a small library of photos",
      btn: "Try it now →",
    },
    {
      type: "Starter",
      data: "50 GB",
      monthlyCost: "249",
      annualCost: "2490",
      description: "Customers who capture photos infrequently",
      btn: "Try it now →",
    },
    {
      type: "Popular",
      data: "200 GB",
      monthlyCost: "499",
      annualCost: "4990",
      description: "Enthusiasts who capture and share photos",
      btn: "Try it now →",
    },
    {
      type: "Pro",
      data: "1000 GB",
      monthlyCost: "999",
      annualCost: "9990",
      description: "Family members; offers a mix of storage and value",
      btn: "Try it now →",
    },
    {
      type: "Pro+",
      data: "2000 GB",
      monthlyCost: "1999",
      annualCost: "19990",
      description: "Professionals, heavy users, and creators",
      btn: "Try it now →",
    },
  ];

  const [isMonthly, setIsMonthly] = useState(true);

  const togglePricing = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <div className="flex flex-col items-center max-w-7xl mx-auto px-4">
      <div
        className="flex justify-center items-center p-2 rounded-full bg-gray-300 w-40 cursor-pointer mb-8"
        onClick={togglePricing}
      >
        <div
          className={`w-1/2 text-center ${
            isMonthly ? "bg-blue-500 text-white" : ""
          } rounded-full py-1`}
        >
          Monthly
        </div>
        <div
          className={`w-1/2 text-center ${
            !isMonthly ? "bg-blue-500 text-white" : ""
          } rounded-full py-1`}
        >
          Annual
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 w-full">
        {plans.map((plan, index) => (
          <PlanCard key={index} {...plan} isMonthly={isMonthly} />
        ))}
      </div>
    </div>
  );
};

export default Toggle;
