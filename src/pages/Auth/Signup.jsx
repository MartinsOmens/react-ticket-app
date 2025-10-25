import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-900/90">
      <div className="w-full max-w-[1440px] flex flex-col items-center justify-center px-6 py-12 md:py-20">
        {/* Right side - Signup Form */}
        <div className="md:w-1/2 max-w-md w-full bg-gray-800/80 backdrop-blur-md shadow-lg rounded-2xl border border-gray-700 p-8">
          <h3 className="text-xl font-semibold text-white mb-6 text-center">
            Sign up for Ticketly
          </h3>

          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-2 rounded-lg border border-gray-700 bg-gray-900/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Email address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 rounded-lg border border-gray-700 bg-gray-900/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2 rounded-lg border border-gray-700 bg-gray-900/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2 rounded-lg border border-gray-700 bg-gray-900/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-lg bg-blue-600 text-white font-medium shadow-md hover:bg-blue-500 transition-colors duration-200"
            >
              Sign Up
            </button>
          </form>

          <p className="text-gray-300 mt-4 text-center">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-primary hover:underline font-medium"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
