import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { requestOTP, verifyAndSignIn } from "../services/api";

export default function Signin() {
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [step, setStep] = useState<"email" | "otp">("email");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();
  
    const handleSendOTP = async (e: React.FormEvent) => {
      e.preventDefault();
      setLoading(true);
      setError("");
      
      try {
        await requestOTP(email);
        setStep("otp");
      } catch (err) {
        setError("Failed to send OTP. Please try again.");
      } finally {
        setLoading(false);
      }
    };
  
    const handleVerifyOTP = async (e: React.FormEvent) => {
      e.preventDefault();
      setLoading(true);
      setError("");
      
      try {
        const result = await verifyAndSignIn(email, otp);
        localStorage.setItem("user", JSON.stringify(result.user));
        navigate("/dashboard");
      } catch (err) {
        setError("Failed to verify OTP. Please try again.");
      } finally {
        setLoading(false);
      }
    };
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="flex min-h-[80vh] items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-800 mb-2">
              {step === "email" ? "Welcome back" : "Verify OTP"}
            </h2>
            <p className="text-slate-600">
              {step === "email" 
                ? "Sign in to access your Proxidesk dashboard" 
                : "We've sent a 6-digit code to your email"}
            </p>
          </div>
          
          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
              {error}
            </div>
          )}

          {step === "email" ? (
            <form onSubmit={handleSendOTP} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Email address
                </label>
                <input
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Enter your email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              
              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg shadow-md transition-all duration-300 ${loading ? 'opacity-70' : 'hover:scale-[1.02]'}`}
              >
                {loading ? 'Sending...' : 'Send OTP'}
              </button>
            </form>
          ) : (
            <form onSubmit={handleVerifyOTP} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <div className="mb-4">
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  OTP Code
                </label>
                <input
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Enter 6-digit OTP"
                  type="text"
                  required
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </div>
                          
              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg shadow-md transition-all duration-300 ${loading ? 'opacity-70' : 'hover:scale-[1.02]'}`}
              >
                {loading ? 'Verifying...' : 'Sign In'}
              </button>
            </form>
          )}

          <div className="mt-4 text-center text-sm text-slate-600">
            {step === "email" ? (
              <>
                Any Issues?{' '}
                <Link to="/support" className="text-blue-600 hover:text-blue-800 font-medium">
                  Let us know here
                </Link>
              </>
            ) : (
              <button
                onClick={() => setStep("email")}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Back to email entry
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}