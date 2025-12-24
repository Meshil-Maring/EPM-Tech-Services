import { DynamicIcon } from "lucide-react/dynamic";
import { useEffect, useState } from "react";
import { server_url } from "../utils/url";
import { Link } from "react-router-dom";

type TransactionType = {
  date: string;
  method: string;
  plan_name: string;
  amount: string;
  status: string;
};

const Transaction = () => {
  const [data, setData] = useState<TransactionType[]>([]);
  const [loading, setLoading] = useState(true);

  // Format date & time
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
        setLoading(true);

        const res = await fetch(`${server_url}/api/payment/get-transaction`, {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) {
          if (res.status === 401) {
            console.log("User not authenticated");
            return;
          }
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const result = await res.json();

        if (isMounted) {
          setData(result);
        }
      } catch (error) {
        console.error("Failed to fetch transaction:", error);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    getTransaction();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="m-6 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-6 shadow-xl">
      <Link to="/" className="bg-blue-400/20 rounded-full p-2 mb-2 block w-fit">
        <DynamicIcon name="arrow-left" />
      </Link>

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-white">Transactions</h1>
        <p className="text-sm text-white/60">
          Payment records and status overview
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto no-scrollbar scroll-smooth">
        <div className="min-w-[600px] rounded-2xl overflow-hidden">
          {/* Table Head */}
          <div className="grid grid-cols-5 bg-white/15 text-white/70 text-sm font-medium">
            {["Date & Time", "Plan", "Amount", "Status", "Action"].map(
              (item, key) => (
                <div key={key} className="px-4 py-3">
                  {item}
                </div>
              )
            )}
          </div>

          {/* Table Body */}
          {loading ? (
            <div className="grid grid-cols-6 bg-white/5">
              <div className="col-span-6 px-4 py-6 text-center text-sm text-white/60">
                Loading transactions...
              </div>
            </div>
          ) : data.length === 0 ? (
            <div className="grid grid-cols-5 bg-white/5">
              <div className="col-span-6 px-4 py-6 text-center text-sm text-white/60">
                No transactions found
              </div>
            </div>
          ) : (
            data.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-5 items-center bg-white/5 text-white hover:bg-white/10 transition"
              >
                {/* Date */}
                <div className="px-4 py-4 text-sm">{formatDate(item.date)}</div>

                {/* Plan */}
                <div className="px-4 py-4 font-semibold">{item.plan_name}</div>

                {/* Amount */}
                <div className="px-4 py-4 font-semibold">{item.amount}</div>

                {/* Status */}
                <div className="px-4 py-4">
                  <span className="px-3 py-1 rounded-full text-xs bg-green-500/20 text-green-400">
                    {item.status}
                  </span>
                </div>

                {/* Action */}
                <button className="px-4 py-4 flex gap-2 items-center cursor-pointer">
                  <p className="text-sm text-blue-400">View</p>
                  <DynamicIcon name="eye" size={18} color="#60A5FA" />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Transaction;
