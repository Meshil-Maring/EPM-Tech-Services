import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <section className="flex justify-center items-center h-screen">
      <form className="flex flex-col p-8 bg-white w-96 text-black rounded-2xl gap-4 shadow-2xl shadow-white/20">
        <div className="flex flex-col gap-2">
          <label>User Name</label>
          <input
            className="border-2 rounded-sm border-black/40 px-2 py-1"
            type="text"
            name="name"
            placeholder="Enter your name"
          ></input>
        </div>

        <div className="flex flex-col gap-2">
          <label>Email</label>
          <input
            className="border-2 rounded-sm border-black/40 px-2 py-1"
            type="email"
            name="email"
            placeholder="Enter your email"
          ></input>
        </div>

        <div className="flex flex-col gap-2">
          <label>Password</label>
          <input
            className="border-2 rounded-sm border-black/40 px-2 py-1"
            type="text"
            name="password"
            placeholder="Enter your password"
          ></input>
        </div>

        <div className="flex flex-col gap-2">
          <label>Confirm Password</label>
          <input
            className="border-2 rounded-sm border-black/40 px-2 py-1"
            type="text"
            name="confirm-password"
            placeholder="Renter your password"
          ></input>
        </div>

        <button
          className="bg-blue-700 text-white p-2 rounded-sm cursor-pointer mt-8"
          type="submit"
        >
          Create account
        </button>

        <label className="text-center">
          Already have an account ?{" "}
          <Link className="text-blue-700 underline" to={"/log-in"}>
            Log in
          </Link>{" "}
          here
        </label>
      </form>
    </section>
  );
};

export default Signup;
