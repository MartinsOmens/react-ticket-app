import { Link } from "react-router-dom";

export default function Login() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-900/90">
      <div className="w-full max-w-[1440px] flex flex-col items-center justify-center px-6 py-12 md:py-20">
        {/* Right side - Login Form */}
        <div className="md:w-1/2 max-w-md w-full bg-gray-800/80 backdrop-blur-md shadow-lg rounded-2xl border border-gray-700 p-8">
          <h3 className="text-xl font-semibold text-white mb-6 text-center">
            Sign in to your account
          </h3>

          <form className="space-y-5">
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

            <div className="flex items-center justify-between text-sm text-gray-300">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded border-gray-600" />
                Remember me
              </label>
              <a href="#" className="text-primary hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-lg bg-blue-600 text-white font-medium shadow-md hover:bg-blue-500 transition"
            >
              Log In
            </button>
          </form>

          <p className="text-gray-300 mt-4 text-center">
            Already have an account?{" "}
            <Link
              to="/signup"
              className="text-primary hover:underline font-medium"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
