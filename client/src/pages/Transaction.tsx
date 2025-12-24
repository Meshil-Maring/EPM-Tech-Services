import { DynamicIcon } from "lucide-react/dynamic";
import { useEffect } from "react";
import { server_url } from "../utils/url";
import { useState } from "react";

const Transaction = () => {
  const [data, setData] = useState<TransactionType[]>([]);

  // Transaction
  type TransactionType = {
    date: string;
    method: string;
    plan_name: string;
    amount: string;
    status: string;
  };

  // Formated time and date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);

    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");

    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");

    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;

    return `${day}/${month} ${hours}:${minutes} ${ampm}`;
  };

  useEffect(() => {
    let isMounted = true;

    const getTransaction = async () => {
      try {
        const res = await fetch(`${server_url}/api/payment/get-transaction`, {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });

        // handle non-200 responses
        if (!res.ok) {
          if (res.status === 401) {
            console.log("User not authenticated");
            return;
          }
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();

        if (isMounted) {
          console.log("Transaction data:", data);
          setData(data);
        }
      } catch (error) {
        console.error("Failed to fetch transaction:", error);
      }
    };

    getTransaction();

    return () => {
      isMounted = false; // prevent memory leak
    };
  }, []);

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
          {data.map((item: TransactionType) => {
            return (
              <div className="grid grid-cols-6 gap-2 items-center bg-white/5 text-white hover:bg-white/10 transition">
                {/* Date */}
                <div className="px-2 py-2 sm:px-4 sm:py-4 text-sm">
                  {formatDate(item.date)}
                </div>

                {/* Method */}
                <div className="px-2 py-2 sm:px-4 sm:py-4">
                  <span className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs bg-blue-500/20 text-blue-400">
                    {item.method}
                  </span>
                </div>

                {/* Plan */}
                <div className="px-2 py-2 sm:px-4 sm:py-4 font-semibold">
                  {item.plan_name}
                </div>

                {/* Amount */}
                <div className="px-2 py-2 sm:px-4 sm:py-4 font-semibold">
                  {item.amount}
                </div>

                {/* Status */}
                <div className="px-2 py-2 sm:px-4 sm:py-4">
                  <span className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs bg-green-500/20 text-green-400">
                    {item.status}
                  </span>
                </div>

                {/* Action */}
                <button className="px-2 py-2 sm:px-4 sm:py-4 flex sm:gap-2 items-center cursor-pointer gap-2 ">
                  <p className="text-sm text-blue-400">View</p>
                  <DynamicIcon name="eye" size={18} color="#60A5FA" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Transaction;
