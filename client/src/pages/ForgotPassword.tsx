import { useRef, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { DynamicIcon } from "lucide-react/dynamic";
import { server_url } from "../utils/url";

type Errors = {
  email?: string;
};

// Spinner component
const Spinner = () => (
  <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
);

const FogotPassword = () => {
  const emailRef = useRef<HTMLInputElement>(null);

  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const formHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;

    const form = e.currentTarget;
    const email = form.email.value.trim();

    const newErrors: Errors = {};

    // Validation
    if (!emailRegex.test(email)) {
      newErrors.email = "Enter a valid email address";
    }

    setErrors(newErrors);

    // Focus first error
    if (newErrors.email) {
      emailRef.current?.focus();
      return;
    }

    // Submit
    try {
      setLoading(true);

      const response = await fetch(`${server_url}/auth/log-in`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error(data?.error || "Login failed");
        return;
      }

      toast.success(data.message || "Logged in successfully");
      form.reset();
      navigate("/");
    } catch (error) {
      toast.error("Server error. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex justify-center items-center h-screen">
      <form
        onSubmit={formHandler}
        className="flex flex-col p-8 bg-black/20 text-white w-[450px] border border-white/20 rounded-2xl gap-4 shadow-2xl"
      >
        <Link className="bg-blue-500/20 w-fit p-2 rounded-full absolute" to="/">
          <DynamicIcon name="arrow-left" />
        </Link>

        <div>
          <h2 className="text-2xl font-bold text-center mt-8">
            Forgot Password
          </h2>
          <p className="text-center text-white/80">
            Enter your email to receive a reset link
          </p>
        </div>

        <div>
          <p className="text-white/80 border p-2 px-4 rounded-xl border-white/20 bg-white/5">
            Enter the email address associated with your account and we'll send
            you a link to reset your password.
          </p>
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <label>Email</label>
          <input
            ref={emailRef}
            name="email"
            type="email"
            required
            className="border px-2 rounded-sm py-1"
          />
          {errors.email && (
            <span className="text-red-600 text-sm">{errors.email}</span>
          )}
        </div>

        {/* Submit */}
        <button
          disabled={loading}
          className={`mt-10 flex items-center justify-center gap-2 rounded p-2 text-white transition
            ${
              loading
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-700 hover:bg-blue-800"
            }
          `}
        >
          {loading ? (
            <>
              <Spinner />
              <span>Send OTP</span>
            </>
          ) : (
            "Send OTP"
          )}
        </button>

        <p className="text-center text-sm">
          Remember your password?{" "}
          <Link to="/auth/sign-up" className="text-blue-500 underline">
            Log In
          </Link>
        </p>
      </form>

      <Toaster position="bottom-center" />
    </section>
  );
};

export default FogotPassword;
