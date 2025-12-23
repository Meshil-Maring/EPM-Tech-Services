import { DynamicIcon } from "lucide-react/dynamic";

const Transaction = () => {
  return (
    <section className="m-6 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-6 shadow-xl">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-white">Transactions</h1>
        <p className="text-sm text-white/60">
          Payment records and status overview
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto no-scrollbar scroll-smooth">
        <div className="min-w-[600px] sm:min-w-[600px] rounded-2xl overflow-hidden gap-2">
          {/* Table Head */}
          <div className="grid grid-cols-6 bg-white/15 text-white/70 text-sm font-medium">
            {[
              "Date & Time",
              "Method",
              "Plan",
              "Amount",
              "Status",
              "Action",
            ].map((item, key) => (
              <div key={key} className="px-2 py-2 sm:px-4 sm:py-3">
                {item}
              </div>
            ))}
          </div>

          {/* Table Row */}
          <div className="grid grid-cols-6 gap-2 items-center bg-white/5 text-white hover:bg-white/10 transition">
            {/* Date */}
            <div className="px-2 py-2 sm:px-4 sm:py-4 text-sm">
              01 Mar 2024 • 10:45 AM
            </div>

            {/* Method */}
            <div className="px-2 py-2 sm:px-4 sm:py-4">
              <span className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs bg-blue-500/20 text-blue-400">
                UPI
              </span>
            </div>

            {/* Plan */}
            <div className="px-2 py-2 sm:px-4 sm:py-4 font-semibold">
              Professional
            </div>

            {/* Amount */}
            <div className="px-2 py-2 sm:px-4 sm:py-4 font-semibold">
              ₹2,000
            </div>

            {/* Status */}
            <div className="px-2 py-2 sm:px-4 sm:py-4">
              <span className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs bg-green-500/20 text-green-400">
                Success
              </span>
            </div>

            {/* Action */}
            <div className="px-2 py-2 sm:px-4 sm:py-4 flex sm:gap-2 items-center cursor-pointer gap-2 ">
              <button className="text-sm text-blue-400">View</button>
              <DynamicIcon name="eye" size={18} color="#60A5FA" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transaction;
