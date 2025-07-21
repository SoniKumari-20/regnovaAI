import React from "react";
import { CheckCircle } from "lucide-react";

interface Plan {
  title: string;
  price: string;
  features: string[];
  buttonText: string;
  highlighted?: boolean;
}
const features = [
  "2 Audits",
  "50 AI Risk Reports",
  "Policy Check",
  "PDF output",
  "Free 30 days trial",
]

const plans: Plan[] = [
  {
    title: "Team",
    price: "$2499",
    features: [
      "4 Audits",
      "250 AI Risk Reports",
      "Policy Check",
      "Validation check",
      "PDF/CSV output",
      "Free 7 days trial",
    ],
    buttonText: "Buy Plan",
    highlighted: true,
  },
  {
    title: "Team",
    price: "$5499",
    features: [
      "8 Audits",
      "750 AI Risk Reports",
      "Policy Check",
      "Validation check",
      "RegnovaPilot™",
      "PDF/CSV/JSON output",
      "Alert Scheduler",
    ],
    buttonText: "Buy Plan",
    highlighted: true,
  },
  {
    title: "Team",
    price: "$9999",
    features: [
      "10+ Audits",
      "2000+ AI Risk Reports",
      "Policy Check",
      "Validation check",
      "RegnovaPilot™",
      "PDF/CSV/JSON output",
      "Alert Scheduler",
      "API",
      "Account Manager",
      "Full customisation",
    ],
    buttonText: "Buy Plan",
    highlighted: true,
  },
];

const PricingPlans: React.FC = () => {
  return (
    <section className="w-full md:py-18 sm:py-10 px-4">
      <div className="max-w-7xl w-full mx-auto  bg-[#000A25] flex flex-col md:flex-row justify-center gap-6 py-[32px] rounded-[20px]">
        <div
          className={`flex flex-col justify-between rounded-xl p-6 w-full md:w-1/3 lg:w-1/4
              "bg-[#031133] text-white"}`}
        >
          {/* Title */}
          <h3 className="text-xl font-semibold mb-2">Essential</h3>
          {/* Price */}
          <p className="text-5xl font-bold mb-1 text-white">$369</p>
          <p className="text-sm opacity-80 mb-4 text-white">Valid for 12 months</p>

          {/* Features */}
          <ul className="flex-1 space-y-2 mb-6 text-white">
            {features.map((feature, fIdx) => (
              <li key={fIdx} className="flex items-start gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* Button */}
          <button
            className={`mt-auto py-2 rounded-md font-medium transition-colors duration-300 
                bg-blue-600 text-white hover:bg-blue-700`
            }
          >
            Registered
          </button>
        </div>
        <div
          className={`flex justify-between flex-wrap rounded-xl p-6 max-w-3xl w-full
             bg-white text-black shadow-lg p-[32px]`}
        >
          {plans.map((plan, idx) => (
            <div key={idx} className="flex flex-col">
              {/* Title */}
              <h3 className="text-xl font-semibold mb-2 text-black">{plan.title}</h3>
              {/* Price */}
              <p className="text-4xl font-bold mb-1">{plan.price}</p>
              <p className="text-sm opacity-80 mb-4">Valid for 12 months</p>

              {/* Features */}
              <ul className="flex-1 space-y-2 mb-6">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button
                className={`mb-auto py-2 rounded-md font-medium transition-colors duration-300  mt-auto 
                  bg-blue-600 text-white hover:bg-blue-700`}
              >
                {plan.buttonText}
              </button>
            </ div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
