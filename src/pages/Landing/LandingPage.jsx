import { CheckCircle2, Zap, Lock, ArrowRight } from "lucide-react";
import NavBar from "../../components/layout/NavBar";
import Footer from "../../components/layout/Footer";
import { Link } from "react-router-dom";

export function LandingPage() {
  return (
    <div className="w-full bg-white text-gray-900">
      {/* Nav Section */}
      <NavBar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-20 pb-32 md:pt-32 md:pb-48">
        {/* Circle Background */}
        <div className="absolute -top-24 -right-24 w-96 h-96 opacity-40 pointer-events-none">
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full text-blue-500"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <radialGradient id="circleGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="currentColor" stopOpacity="0.2" />
                <stop offset="70%" stopColor="currentColor" stopOpacity="0.08" />
                <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="100" cy="100" r="100" fill="url(#circleGradient)" />
            <circle
              cx="100"
              cy="100"
              r="100"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.1"
            />
          </svg>
        </div>

        {/* Hero Content */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Manage your tickets effortlessly.
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Ticketly helps you organize, track, and resolve issues faster.
              Streamline your workflow with our intuitive ticket management system.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                to="/signup"
                className="px-6 py-3 rounded-full bg-blue-600 text-white text-lg font-medium flex items-center justify-center hover:bg-blue-700 transition"
              >
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>

              <Link
                to="/login"
                className="px-6 py-3 rounded-full border border-gray-300 text-gray-700 text-lg font-medium bg-white hover:bg-gray-100 transition flex items-center justify-center"
              >
                Login
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative bottom wave */}
        <svg
          className="absolute bottom-0 left-0 right-0 w-full h-24 text-blue-100"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0.3" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path
            fill="url(#waveGradient)"
            d="M0,40 Q180,20 360,40 T720,40 T1080,40 T1440,40 L1440,120 L0,120 Z"
          />
          <path
            fill="currentColor"
            opacity="0.15"
            d="M0,60 Q180,40 360,60 T720,60 T1080,60 T1440,60 L1440,120 L0,120 Z"
          />
        </svg>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful features for modern teams
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Everything you need to manage tickets efficiently and keep your team aligned.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-6 h-6 text-blue-600" />,
                title: "Fast Ticket Creation",
                desc: "Create and organize tickets in seconds with our intuitive form. Quick templates and smart categorization make it effortless.",
              },
              {
                icon: <CheckCircle2 className="w-6 h-6 text-blue-600" />,
                title: "Real-Time Tracking",
                desc: "See open, in-progress, and closed tickets instantly. Real-time updates keep your team synchronized and informed.",
              },
              {
                icon: <Lock className="w-6 h-6 text-blue-600" />,
                title: "Secure Access",
                desc: "Your data is protected with enterprise-grade security and encrypted connections.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="p-8 bg-white rounded-2xl hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
