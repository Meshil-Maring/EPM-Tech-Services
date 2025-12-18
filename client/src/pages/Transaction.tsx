const Transaction = () => {
  return (
    <section className="flex bg-yellow m-8 flex-col ">
      <div>
        <h1 className="text-2xl font-bold">Transactions</h1>
        <label>Payment records and status overview</label>
      </div>

      <div className="min-w-96 overflow-x-auto w-full">
        <ul className="grid grid-cols-7">
          {[
            "Payment ID",
            "Order ID",
            "Date & Time",
            "Method",
            "Amount",
            "Status",
            "Action",
          ].map((items, key) => (
            <li key={key} className="text-sm py-4 text-start p-2">
              {items}
            </li>
          ))}

          {[
            "ds3431fdfa2",
            "23428342",
            "1/3/2024",
            "UPI",
            "2000",
            "Success",
            "id",
          ].map((items, key) => (
            <li key={key}>{items}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Transaction;
