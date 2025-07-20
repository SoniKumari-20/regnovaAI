
const plans = [
  {
    title: "Essential",
    price: "$369",
    features: [
      "2 Audits",
      "50 AI Risk Reports",
      "Policy Check",
      "PDF output",
      "Free 30 days trial",
    ],
    button: "Registered",
    highlighted: false,
  },
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
    button: "Buy Plan",
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
    button: "Buy Plan",
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
      "Full Customisation",
    ],
    button: "Buy Plan",
    highlighted: true,
  },
];

export default function PricingPlans() {
  return (
    <div className="w-full py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pricing grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`flex flex-col rounded-xl p-6 ${plan.highlighted
                  ? "bg-white text-gray-900 shadow-lg border border-blue-400"
                  : "bg-[#06183C] text-white"
                }`}
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>◉</span> {plan.title}
              </h3>
              <p className="text-4xl font-bold mb-1">{plan.price}</p>
              <p className="text-sm mb-6 opacity-80">Valid for 12 months</p>
              <ul className="flex-1 mb-6 space-y-3 text-sm">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-blue-500">✔</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`mt-auto py-2 rounded-md font-medium text-white ${plan.highlighted
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-blue-600 hover:bg-blue-700"
                  }`}
              >
                {plan.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


