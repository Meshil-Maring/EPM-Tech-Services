import { DynamicIcon } from "lucide-react/dynamic";

const PricingCart = ({ plans }: { plans: Array<any> }) => {
  {
    return plans.map((items, key) => (
      <div
        key={key}
        className={`${
          items.popular ? "border-blue-500 border-4" : "border-white/20"
        } flex w-fit flex-col bg-white/10 p-4 rounded-2xl border md:p-8 } relative w-full`}
      >
        {items.popular && (
          <div
            className="absolute -top-[22px] self-center flex gap-2 p-2 rounded-full justify-center items-center"
            style={{
              backgroundImage: "var(--gradient)",
            }}
          >
            <DynamicIcon name="zap" size={18} />
            <p>Most Popular</p>
          </div>
        )}

        <h4 className="font-bold text-4xl text-(--color-grandient)">
          {items.title}
        </h4>
        <p className="text-white/40">{items.description}</p>

        <p>
          ₹{" "}
          <span
            className="text-2xl font-extrabold"
            style={{
              backgroundImage: "var(--gradient)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            {items.price}{" "}
          </span>
          /project
        </p>

        <ul className="flex flex-col gap-1 mt-8">
          {items.list.map((list: string, key: number) => (
            <li key={key} className="flex gap-4">
              <span className="bg-blue-800 inline-block rounded-full p-1 self-start">
                <DynamicIcon name="check" size={18} />
              </span>
              {list}
            </li>
          ))}
        </ul>

        <button
          className={`${
            items.popular ? "bg-blue-500" : "bg-blue-500/10"
          } p-2 mt-8 rounded-full cursor-pointer`}
        >
          Get Started
        </button>
      </div>
    ));
  }
};

export default PricingCart;
