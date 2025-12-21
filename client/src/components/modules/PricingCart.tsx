import { DynamicIcon } from "lucide-react/dynamic";

type Plan = {
  title: string;
  description: string;
  amount: number;
  popular?: boolean;
  list: string[];
};

const PricingCart = ({
  plans,
  onSelect,
}: {
  plans: Plan[];
  onSelect: (index: number) => void;
}) => {
  return (
    <>
      {plans.map((plan, index) => (
        <div
          key={index}
          className={`relative flex flex-col rounded-2xl border 
          p-5 sm:p-6 
          bg-white/10 
          w-full 
          max-w-full 
          sm:max-w-96 
          mx-auto
          ${plan.popular ? "border-blue-500 border-4" : "border-white/20"}`}
        >
          {plan.popular && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 px-4 py-1 rounded-full text-sm flex gap-2 items-center whitespace-nowrap">
              <DynamicIcon name="zap" size={16} />
              Most Popular
            </div>
          )}

          <h4 className="text-2xl sm:text-3xl font-bold">{plan.title}</h4>

          <p className="text-white/50 mt-1 text-sm sm:text-base text">
            {plan.description}
          </p>

          <p className="mt-4 text-sm sm:text-base">
            ₹{" "}
            <span className="text-2xl font-bold text-blue-400">
              {plan.amount === 0 ? "Custom" : plan.amount}
            </span>
            /project
          </p>

          <ul className="mt-6 flex flex-col gap-3 text-sm sm:text-base">
            {plan.list.map((item, i) => (
              <li key={i} className="flex gap-2 items-center">
                <span className="bg-blue-600 p-1 rounded-full">
                  <DynamicIcon name="check" size={18} />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <button
            onClick={() => onSelect(index)}
            className="mt-6 bg-blue-500 hover:bg-blue-600 transition p-2 rounded-full w-full"
          >
            Get Started
          </button>
        </div>
      ))}
    </>
  );
};

export default PricingCart;
