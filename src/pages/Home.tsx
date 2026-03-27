import { Link } from "react-router";
import {
  Scissors,
  Clock,
  MapPin,
  CheckCircle,
  Shield,
  Star,
  TrendingUp,
  Users,
  ArrowRight,
  Phone,
  Mail,
  MessageCircle,
  // Facebook,
  // Instagram,
  // Twitter,
  Sparkles,
  Heart,
  Zap,
} from "lucide-react";

export function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Scissors className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-2xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                StitchHome
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#how-it-works" className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors">
                How It Works
              </a>
              <a href="#services" className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors">
                Services
              </a>
              <a href="#pricing" className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors">
                Pricing
              </a>
              <a href="#testimonials" className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors">
                Reviews
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Link
                to="/login"
                className="text-sm font-semibold text-gray-700 hover:text-indigo-600 transition-colors"
              >
                Sign In
              </Link>
              <Link
                to="/book"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:shadow-lg hover:scale-105 transition-all"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 -z-10" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-40 left-0 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-5 py-2.5 rounded-full mb-8 shadow-lg border border-indigo-100">
                <Sparkles className="w-4 h-4 text-indigo-600" />
                <span className="text-sm font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Now Serving Dallas/DFW Area
                </span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Expert Tailoring,{" "}
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Right at Home
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Professional tailors visit your home, perfect your clothing, and deliver flawless results. No more trips to the tailor shop.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  to="/book"
                  className="group bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2"
                >
                  Book Your Service
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/help"
                  className="bg-white text-gray-900 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-50 border-2 border-gray-200 transition-all flex items-center justify-center shadow-sm"
                >
                  How It Works
                </Link>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-1">
                    500+
                  </div>
                  <div className="text-sm text-gray-600 font-medium">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-1 flex items-center justify-center gap-1">
                    4.9
                    <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  </div>
                  <div className="text-sm text-gray-600 font-medium">Average Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-1">
                    24h
                  </div>
                  <div className="text-sm text-gray-600 font-medium">Rush Available</div>
                </div>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1753162658653-d33c53910d9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0YWlsb3IlMjBtZWFzdXJpbmclMjBjbG90aGVzfGVufDF8fHx8MTc3NDI2NjcwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Professional tailor at work"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              
              {/* Floating Card */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100 max-w-xs">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">Perfect Fit Guaranteed</div>
                    <div className="text-sm text-gray-600">Or your money back</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block bg-indigo-100 text-indigo-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              SIMPLE PROCESS
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Four easy steps to perfectly fitted clothes
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200" />
            
            {[
              {
                icon: MapPin,
                number: "01",
                title: "Book Online",
                description: "Choose your service and schedule a convenient time slot",
                gradient: "from-indigo-500 to-indigo-600",
              },
              {
                icon: Users,
                number: "02",
                title: "Tailor Visits",
                description: "Expert tailor comes to your home and takes measurements",
                gradient: "from-purple-500 to-purple-600",
              },
              {
                icon: Scissors,
                number: "03",
                title: "We Alter",
                description: "Professional alterations completed with precision care",
                gradient: "from-pink-500 to-pink-600",
              },
              {
                icon: Zap,
                number: "04",
                title: "Delivered",
                description: "Finished items delivered right to your door",
                gradient: "from-orange-500 to-orange-600",
              },
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 h-full">
                  <div className={`w-20 h-20 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg relative z-10`}>
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-sm font-bold text-gray-400 mb-3 text-center">
                    STEP {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4 bg-gradient-to-br from-gray-50 to-indigo-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              OUR SERVICES
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Professional Alterations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Expert tailoring for all your clothing needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Hem Pants & Skirts",
                description: "Perfect length for any style or occasion",
                image: "https://images.unsplash.com/photo-1515736076039-a3ca66043b27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWlsb3JlZCUyMHN1aXQlMjBmYWJyaWMlMjB0ZXh0dXJlfGVufDF8fHx8MTc3NDI2NjcxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                popular: false,
              },
              {
                title: "Sleeve Alterations",
                description: "Shorten or lengthen for the ideal fit",
                image: "https://images.unsplash.com/photo-1765604548351-cdc788f36853?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG90aGluZyUyMGFsdGVyYXRpb25zJTIwc2V3aW5nJTIwbWFjaGluZXxlbnwxfHx8fDE3NzQyNjY3MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                popular: true,
              },
              {
                title: "Waist Adjustments",
                description: "Take in or let out for perfect comfort",
                image: "https://images.unsplash.com/photo-1625479142928-c2f2914318f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWFtc3RyZXNzJTIwd29ya2luZyUyMG5lZWRsZSUyMHRocmVhZHxlbnwxfHx8fDE3NzQyNjY3MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                popular: false,
              },
              {
                title: "Zipper Replacement",
                description: "Fix broken zippers on any garment",
                image: "https://images.unsplash.com/photo-1773260447043-ce61f54ccd51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwY2xvdGhpbmclMjByYWNrfGVufDF8fHx8MTc3NDI2NjcxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                popular: false,
              },
              {
                title: "Tapering",
                description: "Modern slim fit for shirts and pants",
                image: "https://images.unsplash.com/photo-1515736076039-a3ca66043b27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWlsb3JlZCUyMHN1aXQlMjBmYWJyaWMlMjB0ZXh0dXJlfGVufDF8fHx8MTc3NDI2NjcxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                popular: true,
              },
              {
                title: "Repairs & Patches",
                description: "Extend the life of favorite pieces",
                image: "https://images.unsplash.com/photo-1625479142928-c2f2914318f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWFtc3RyZXNzJTIwd29ya2luZyUyMG5lZWRsZSUyMHRocmVhZHxlbnwxfHx8fDE3NzQyNjY3MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                popular: false,
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  {service.popular && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                      ⭐ Popular
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    to="/book"
                    className="inline-flex items-center gap-2 text-indigo-600 font-semibold text-sm group-hover:gap-3 transition-all"
                  >
                    Book Now
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1648147870253-c45f6f430528?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob21lJTIwaW50ZXJpb3IlMjBsaXZpbmclMjByb29tfGVufDF8fHx8MTc3NDI2MDEyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern home interior"
                className="w-full h-[600px] object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-2">
                  <Heart className="w-8 h-8 text-red-500 fill-red-500" />
                  <div className="text-3xl font-bold text-gray-900">98%</div>
                </div>
                <div className="text-sm text-gray-600 font-medium">Customer Satisfaction</div>
              </div>
            </div>
            
            <div>
              <div className="inline-block bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                WHY CHOOSE US
              </div>
              <h2 className="text-5xl font-bold text-gray-900 mb-8">
                Convenience Meets Quality
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: Shield,
                    title: "Vetted Professionals",
                    description: "All tailors are thoroughly screened and background-checked",
                    gradient: "from-indigo-500 to-indigo-600",
                  },
                  {
                    icon: Clock,
                    title: "Fast Turnaround",
                    description: "Most alterations completed within 3-5 business days",
                    gradient: "from-purple-500 to-purple-600",
                  },
                  {
                    icon: CheckCircle,
                    title: "Satisfaction Guaranteed",
                    description: "Not happy? We'll make it right or refund your money",
                    gradient: "from-green-500 to-green-600",
                  },
                  {
                    icon: TrendingUp,
                    title: "Transparent Pricing",
                    description: "No hidden fees. Know exactly what you'll pay upfront",
                    gradient: "from-pink-500 to-pink-600",
                  },
                ].map((benefit, index) => (
                  <div key={index} className="flex gap-5 group">
                    <div className={`w-14 h-14 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                      <benefit.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2 text-lg">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-4 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              PRICING
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Pay 50% deposit now, the rest after completion
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Basic",
                price: "$25",
                icon: "📏",
                features: [
                  "Hem pants/skirts",
                  "Shorten sleeves",
                  "Button replacement",
                  "3-5 day turnaround",
                ],
                popular: false,
              },
              {
                name: "Standard",
                price: "$45",
                icon: "✂️",
                features: [
                  "All Basic services",
                  "Waist adjustments",
                  "Zipper replacement",
                  "2-3 day turnaround",
                ],
                popular: true,
              },
              {
                name: "Premium",
                price: "$75",
                icon: "👔",
                features: [
                  "All Standard services",
                  "Complex alterations",
                  "Suit tailoring",
                  "24-48 hour rush",
                ],
                popular: false,
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-3xl p-8 shadow-xl border-2 transition-all hover:scale-105 ${
                  plan.popular
                    ? "border-indigo-600 lg:scale-110"
                    : "border-gray-200"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-8">
                  <div className="text-6xl mb-4">{plan.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                    <span className="text-gray-600">per item</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/book"
                  className={`block w-full text-center py-4 rounded-2xl font-semibold transition-all ${
                    plan.popular
                      ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-xl"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block bg-yellow-100 text-yellow-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              TESTIMONIALS
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Loved by Customers
            </h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-xl text-gray-600">4.9 out of 5 stars from 500+ reviews</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Marketing Manager",
                image: "https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGJ1c2luZXNzJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzc0MjI1NzQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                text: "Absolutely love this service! The tailor came right to my apartment, took my measurements, and delivered perfectly hemmed pants in 3 days. So convenient!",
              },
              {
                name: "Michael Chen",
                role: "Software Engineer",
                image: "https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBidXNpbmVzcyUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NDI2MjMyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                text: "Game changer for someone with a busy schedule. No more driving to the tailor and waiting. Everything is done at home. Quality work and great communication.",
              },
              {
                name: "Emily Rodriguez",
                role: "Teacher",
                image: "https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhc2lhbiUyMHdvbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzc0MjM5MDg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                text: "I was skeptical at first, but wow! The tailor was professional, the alterations were perfect, and the price was fair. I've already booked my second appointment.",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all"
              >
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-indigo-100"
                  />
                  <div>
                    <div className="font-bold text-gray-900 text-lg">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1621904878414-d4ca4756bd7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYWxsYXMlMjBjaXR5JTIwc2t5bGluZXxlbnwxfHx8fDE3NzQyNjY3MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Dallas skyline"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center text-white">
            <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              SERVICE AREA
            </div>
            <MapPin className="w-20 h-20 mx-auto mb-8 text-indigo-300" />
            <h2 className="text-5xl font-bold mb-6">Currently Serving Dallas/DFW</h2>
            <p className="text-xl text-indigo-100 mb-12 max-w-2xl mx-auto">
              Professional alteration services delivered to homes across the Dallas-Fort Worth metroplex
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
              {[
                "Downtown Dallas",
                "Uptown",
                "Highland Park",
                "University Park",
                "Oak Lawn",
                "Lakewood",
                "Preston Hollow",
                "North Dallas",
              ].map((area, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl py-4 px-6 text-sm font-semibold border border-white/20 hover:bg-white/20 transition-all"
                >
                  {area}
                </div>
              ))}
            </div>
            <p className="text-indigo-200 mb-8 text-lg">
              Don't see your area? We're expanding soon!
            </p>
            <Link
              to="/book"
              className="inline-block bg-white text-indigo-900 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-indigo-50 transition-all shadow-2xl hover:scale-105"
            >
              Check Availability
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000" />
        </div>
        <div className="max-w-4xl mx-auto text-center text-white relative z-10">
          <Sparkles className="w-16 h-16 mx-auto mb-8 text-yellow-300" />
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Ready for the Perfect Fit?
          </h2>
          <p className="text-2xl text-indigo-100 mb-12 leading-relaxed">
            Book your first in-home alteration today. Fast, convenient, and professional.
          </p>
          <Link
            to="/book"
            className="inline-block bg-white text-indigo-600 px-12 py-5 rounded-2xl font-bold text-xl hover:bg-indigo-50 transition-all shadow-2xl hover:scale-105"
          >
            Book Your Service Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center">
                  <Scissors className="w-6 h-6 text-white" />
                </div>
                <span className="font-bold text-2xl">StitchHome</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Professional alterations delivered to your door across Dallas/DFW.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">Services</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#services" className="hover:text-white transition-colors">
                    Hem Alterations
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition-colors">
                    Sleeve Adjustments
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition-colors">
                    Waist Tailoring
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition-colors">
                    Zipper Replacement
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#how-it-works" className="hover:text-white transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <Link to="/help" className="hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <a href="#testimonials" className="hover:text-white transition-colors">
                    Reviews
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">Contact</h4>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <a href="tel:+12145550123" className="hover:text-white transition-colors">
                    (214) 555-0123
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <a href="mailto:hello@stitchhome.com" className="hover:text-white transition-colors">
                    hello@stitchhome.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <a href="https://wa.me/12145550123" className="hover:text-white transition-colors">
                    WhatsApp
                  </a>
                </li>
              </ul>
              {/* <div className="flex gap-3 mt-6">
                <a
                  href="#"
                  className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-indigo-600 transition-all"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-pink-600 transition-all"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-all"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div> */}
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2026 StitchHome. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
