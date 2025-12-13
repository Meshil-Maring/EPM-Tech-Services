const PaymentLayout = () => {
  return (
    <div className="bg-black w-screen h-screen z-100 fixed top-0 p-8">
      <form className="flex flex-col">
        <h1>Secure Payment</h1>
        <label>Complete your purchase for Professional Plan</label>

        <label>Plan</label>

        <label>Full name</label>
        <input placeholder="John Dash"></input>

        <label>Email Address</label>
        <input placeholder="Johndash32@gmail.com"></input>

        <label>Phone Number</label>
        <input placeholder="97833431231"></input>

        <button>Pay</button>
      </form>
    </div>
  );
};

export default PaymentLayout;
