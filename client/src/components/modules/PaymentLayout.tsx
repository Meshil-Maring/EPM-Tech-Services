import { DynamicIcon } from "lucide-react/dynamic";
import { useEffect } from "react";

const PaymentLayout = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-xl z-100 flex items-center justify-center p-4 sm:p-8">
      {/* Card */}
      <div className="w-full max-w-md bg-black/80 border border-white/30 rounded-2xl p-5 sm:p-8 max-h-[90vh] no-scrollbar relative">
        {/* Close button */}
        <button className="absolute top-2 right-2 bg-white/20 p-2 rounded-full">
          <DynamicIcon name="x" size={18} />
        </button>

        {/* Header */}
        <div className="mt-6 mb-4 text-center">
          <h1 className="text-xl sm:text-2xl font-bold">Secure Payment</h1>
          <p className="text-white/70 text-sm sm:text-base">
            Complete your purchase for Professional Plan
          </p>
        </div>

        <div className="overflow-y-auto max-h-[60vh] no-scrollbar">
          {/* Plan info */}
          <div className="grid grid-cols-2 gap-y-2 bg-white/10 px-4 py-3 rounded-xl text-sm sm:text-base">
            <span>Plan</span>
            <span className="text-right">Professional</span>

            <span>Amount</span>
            <span className="text-right">₹5,999</span>

            <hr className="col-span-2 border-white/20 my-1" />
            <p className="col-span-2 text-white/70 text-sm">
              Ideal for growing businesses
            </p>
          </div>

          {/* Form */}
          <form className="flex flex-col gap-3 mt-5">
            <label className="text-sm">Full name</label>
            <input
              className="bg-white/10 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="John Dash"
              type="text"
            />

            <label className="text-sm">Email Address</label>
            <input
              className="bg-white/10 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="johndash@gmail.com"
              type="email"
            />

            <label className="text-sm">Phone Number</label>
            <input
              className="bg-white/10 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="93724 31234"
              type="tel"
            />

            {/* Pay button */}
            <button
              type="submit"
              className="mt-6 bg-blue-600 hover:bg-blue-700 transition p-3 rounded-full flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <DynamicIcon name="credit-card" size={18} />
              <span>Pay ₹8,000</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentLayout;
