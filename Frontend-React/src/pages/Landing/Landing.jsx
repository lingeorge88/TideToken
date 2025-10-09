import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Bitcoin,
  Shield,
  Smartphone,
  DollarSign,
  BarChart3,
  Lock,
  Zap,
  Check,
  Menu,
  X,
  Coins,
  Percent,
  BookOpen,
    CircleDollarSign,
  FileText,
  TrendingDown,
} from "lucide-react";
import seahorseLogo from "@/assets/seahorselogo.png";

const Landing = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features = [
    {
      icon: <Percent className="w-7 h-7 text-celestial-blue" />,
      title: "Zero Transaction Fees",
      description:
        "Buy and sell crypto without worrying about transaction or monthly fees eating into your profits",
    },
    {
      icon: <Coins className="w-7 h-7 text-celestial-blue" />,
      title: "Fractional Buying",
      description:
        "Invest any amount you want, even if it's just $1. Own a piece of any cryptocurrency",
    },
    {
      icon: <TrendingDown className="w-7 h-7 text-celestial-blue" />,
      title: "No Minimum Investment",
      description:
        "Start small and grow at your own pace. Perfect for new investors testing the waters",
    },
    {
      icon: <Smartphone className="w-7 h-7 text-celestial-blue" />,
      title: "Simple & Accessible",
      description:
        "Built for everyday investors. Trade seamlessly on any device with our intuitive platform",
    },
    {
      icon: <BarChart3 className="w-7 h-7 text-celestial-blue" />,
      title: "Real-Time Tracking",
      description:
        "Monitor your portfolio performance with live market data and easy-to-read charts",
    },
    {
      icon: <Shield className="w-7 h-7 text-celestial-blue" />,
      title: "Secure & Protected",
      description: "Bank-level security with 256-bit encryption and 2FA to keep your assets safe",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Create Account",
      description: "Sign up in minutes with just your email and phone number",
    },
    {
      number: "02",
      title: "Verify Identity",
      description: "Quick and secure verification to protect your account",
    },
    {
      number: "03",
      title: "Fund Wallet",
      description: "Add funds easily via bank transfer or card payment",
    },
    {
      number: "04",
      title: "Start Trading",
      description: "Buy, sell, and track crypto assets with confidence",
    },
  ];

  const stats = [
    { value: "$2.5B+", label: "Assets Under Management" },
    { value: "500K+", label: "Active Investors" },
    { value: "150+", label: "Crypto Assets" },
    { value: "99.9%", label: "Uptime" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 shadow-sm">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo and Nav Links */}
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <img src={seahorseLogo} alt="BlueCurrent" className="w-12 h-12" />
                <span className="text-2xl font-semibold text-celestial-blue">
                  BlueCurrent
                </span>
              </div>

              {/* Desktop Navigation Links */}
              <div className="hidden lg:flex items-center space-x-6">
                <a
                  href="#features"
                  className="text-gray-700 hover:text-celestial-blue transition font-medium"
                >
                  Features
                </a>
                <a
                  href="#how-it-works"
                  className="text-gray-700 hover:text-celestial-blue transition font-medium"
                >
                  How It Works
                </a>
                <a
                  href="#learn"
                  className="text-gray-700 hover:text-celestial-blue transition font-medium"
                >
                  Learn
                </a>
              </div>
            </div>

            {/* Right Side - Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                variant="ghost"
                onClick={() => navigate("/signin")}
                className="text-gray-700 hover:text-celestial-blue hover:bg-sky-blue/10"
              >
                Sign In
              </Button>
              <Button
                onClick={() => navigate("/signup")}
                className="bg-celestial-blue hover:bg-persian-blue text-white shadow-sm rounded-full"
              >
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-4 border-t border-gray-200">
              <a
                href="#features"
                className="block text-gray-700 hover:text-celestial-blue transition font-medium"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="block text-gray-700 hover:text-celestial-blue transition font-medium"
              >
                How It Works
              </a>
              <a
                href="#learn"
                className="block text-gray-700 hover:text-celestial-blue transition font-medium"
              >
                Learn
              </a>
              <Button
                variant="ghost"
                onClick={() => navigate("/signin")}
                className="w-full text-gray-700 hover:text-celestial-blue rounded-full"
              >
                Sign In
              </Button>
              <Button
                onClick={() => navigate("/signup")}
                className="w-full bg-celestial-blue hover:bg-persian-blue text-white rounded-full"
              >
                Get Started
              </Button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-sky-blue/10 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-white border border-sky-blue/30 rounded-full px-4 py-2 mb-8 shadow-sm">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            <span className="text-sm text-gray-700 font-medium">
              Join 500K+ active investors
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Invest in Your Future
            <span className="block text-celestial-blue mt-2">
              One Small Investment at a Time
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
            Start building wealth with as little as $1. Trade cryptocurrencies,
            track your portfolio, and grow your investments with confidence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <Button
              size="lg"
              onClick={() => navigate("/signup")}
              className="bg-celestial-blue hover:bg-persian-blue text-white text-lg px-10 py-6 shadow-md hover:shadow-lg transition-all rounded-full"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto pt-12 border-t border-gray-200">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-celestial-blue mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Built for Small Investors
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
              No hidden fees, no minimums. Just straightforward crypto investing designed for everyday people
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-sky-blue hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 bg-sky-blue/20 rounded-xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-sky-blue/10 to-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Get Started in Minutes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
              Four simple steps to begin your investment journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 h-full hover:shadow-lg transition-all">
                  <div className="text-6xl font-bold text-sky-blue/40 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-sky-blue/50"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learn Section */}
      <section id="learn" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              New to Crypto? Start Here
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
              Learn the basics of cryptocurrency and trading at your own pace
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-sky-blue/10 to-white border-2 border-gray-200 rounded-2xl p-8 hover:border-sky-blue hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-sky-blue/20 rounded-xl flex items-center justify-center mb-6">
                <Bitcoin className="w-7 h-7 text-celestial-blue" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What is Cryptocurrency?
              </h3>
              <p className="text-gray-600 leading-relaxed font-light mb-4">
                Digital currencies that use blockchain technology for secure, decentralized transactions without banks or governments.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <Check className="w-5 h-5 text-celestial-blue flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm font-light">Decentralized & transparent</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="w-5 h-5 text-celestial-blue flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm font-light">24/7 global trading</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="w-5 h-5 text-celestial-blue flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm font-light">No middlemen or banks</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-sky-blue/10 to-white border-2 border-gray-200 rounded-2xl p-8 hover:border-sky-blue hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-sky-blue/20 rounded-xl flex items-center justify-center mb-6">
                <CircleDollarSign className="w-7 h-7 text-celestial-blue" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How Does Trading Work?
              </h3>
              <p className="text-gray-600 leading-relaxed font-light mb-4">
                Buy low, sell high. Trade crypto pairs just like foreign currency exchange, but with more opportunity.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <Check className="w-5 h-5 text-celestial-blue flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm font-light">Real-time market prices</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="w-5 h-5 text-celestial-blue flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm font-light">Instant buy & sell orders</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="w-5 h-5 text-celestial-blue flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm font-light">Track your portfolio growth</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-sky-blue/10 to-white border-2 border-gray-200 rounded-2xl p-8 hover:border-sky-blue hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-sky-blue/20 rounded-xl flex items-center justify-center mb-6">
                <FileText className="w-7 h-7 text-celestial-blue" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Getting Started Guide
              </h3>
              <p className="text-gray-600 leading-relaxed font-light mb-4">
                Simple steps to make your first crypto investment with confidence, even with just $1.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <Check className="w-5 h-5 text-celestial-blue flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm font-light">Choose your first crypto</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="w-5 h-5 text-celestial-blue flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm font-light">Set your investment amount</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="w-5 h-5 text-celestial-blue flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm font-light">Watch your investment grow</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-sky-blue/10 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-celestial-blue to-persian-blue rounded-3xl p-12 shadow-xl">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Start Growing Your Wealth?
            </h2>
            <p className="text-xl text-sky-blue/90 mb-8 font-light">
              Join thousands of investors already building their financial future
            </p>
            <Button
              size="lg"
              onClick={() => navigate("/signup")}
              className="bg-white text-celestial-blue hover:bg-gray-50 text-lg px-12 py-6 shadow-lg hover:shadow-xl transition-all rounded-full"
            >
              Create Free Account
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <p className="text-sm text-sky-blue/80 mt-4">
              No credit card required • Start with as little as $1
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src={seahorseLogo} alt="BlueCurrent" className="w-10 h-10" />
                <span className="text-xl font-semibold text-celestial-blue">
                  BlueCurrent
                </span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Empowering investors to build wealth through smart, accessible
                crypto trading.
              </p>
            </div>

            <div>
              <h4 className="text-gray-900 font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>
                  <a
                    href="#features"
                    className="hover:text-celestial-blue transition"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#security"
                    className="hover:text-celestial-blue transition"
                  >
                    Security
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-celestial-blue transition">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-gray-900 font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>
                  <a href="#" className="hover:text-celestial-blue transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-celestial-blue transition">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-celestial-blue transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-gray-900 font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>
                  <a href="#" className="hover:text-celestial-blue transition">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-celestial-blue transition">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-celestial-blue transition">
                    Compliance
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © 2025 BlueCurrent. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-600 hover:text-celestial-blue transition">
                Twitter
              </a>
              <a href="#" className="text-gray-600 hover:text-celestial-blue transition">
                Discord
              </a>
              <a href="#" className="text-gray-600 hover:text-celestial-blue transition">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
