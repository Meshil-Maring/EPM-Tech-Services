import { forwardRef } from "react";
import PricingCart from "../modules/PricingCart";
import PaymentLayout from "../modules/PaymentLayout";

const pricingPlans = [
  {
    title: "Starter",
    description: "Perfect for small businesses and startups",
    price: "10,000",
    list: [
      "Responsive Website (5 pages)",
      "Mobile Optimized",
      "Basic SEO Setup",
      "Contact Form",
      "30 Days Support",
      "SSL Certificate",
    ],
  },

  {
    title: "Professional",
    description: "Deal for growing businesses",
    price: "25,000",
    popular: true,
    list: [
      "Custom Web Application",
      "Advanced UI/UX Design",
      "CMS Integration",
      "E-commerce Ready",
      "90 Days Support",
      "Performance Optimization",
      "Analytics Integration",
      "API Development",
    ],
  },

  {
    title: "Enterprise",
    description: "For large-scale applications",
    price: "Custom",
    list: [
      "Full-Stack Development",
      "Custom Sotware Solution",
      "Cloud Infrastructure",
      "Advanced Security",
      "Regular Maintenance",
      "Priority Updates",
      "Consultation & Training",
      "API Development",
    ],
  },
];

const Pricing = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className="py-40">
      <h3 className="text-4xl font-bold text-center">
        Simple{" "}
        <span
          style={{
            backgroundImage: "var(--gradient)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Pricing
        </span>
      </h3>

      <p className="text-white/50 text-center p-4 max-w-3/4 self-center justify-self-center">
        Choose the perfect plan for your project. All plans include our
        commitment to quality and excellence.
      </p>

      <div className="mt-4 p-8 grid items-center justify-center gap-12 lg:grid-cols-3 max-w-[1200px] self-center justify-self-center">
        <PricingCart plans={pricingPlans} />
      </div>

      <PaymentLayout />
    </div>
  );
});

export default Pricing;
