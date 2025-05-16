import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf, Utensils, Users, BarChart4 } from "lucide-react";
import CounterUp from "@/components/common/CounterUp";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div
        className="relative bg-cover bg-center py-24 sm:py-32"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(https://images.pexels.com/photos/6647119/pexels-photo-6647119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
          backgroundPosition: "center 35%",
        }}
      >
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            <span className="block capitalize">reducing food waste</span>
            <span className="block capitalize">feeding communities.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8">
            FoodShare connects restaurants, grocery stores, and farms with local
            food banks to charities to redistribute surplus food to those in
            need.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              href=""
              className="px-8 py-3 bg-green-600 text-white font-medium  rounded-md hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0 active:shadow-lg"
            >
              Get Started
            </Link>
            <Link
              href=""
              className="px-8 py-3 bg-white text-green-600 font-medium rounded-md hover:bg-gray-200 transition-colors flex items-center"
            >
              Log In <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* How it works section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A simple three-step process to connect surplus food with those who
              need it
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Utensils size={24} className="text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                1. List Surplus Food
              </h3>
              <p className="text-gray-600">
                Restaurants, grocery stores, and farms list their surplus food,
                including type, quantity, and pickup details.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Users className="text-orange-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                2. NGOs Claim Food
              </h3>
              <p className="text-gray-600">
                Registered NGOs browse available food items and claim what they
                need for their communities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Leaf className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                3. Pickup & Distribute
              </h3>
              <p className="text-gray-600">
                NGOs arrange for pickup and distribute the food to those in
                need, reducing waste and feeding communities.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Impact section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"></div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
            Our Impact
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join us in making a difference. Together, we can reduce food waste
            and feed those in need and reduce food waste
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
          <div className="text-center">
            <CounterUp
              to={5000}
              suffix="+"
              className="text-5xl font-bold text-green-600 mb-2"
            />
            <p className="text-xl text-gray-700">Meals Saved</p>
          </div>

          <div className="text-center">
            <CounterUp
              to={50}
              suffix="+"
              className="text-5xl font-bold text-green-600 mb-2"
            />
            <p className="text-xl text-gray-700">Businesses Participating</p>
          </div>

          <div className="text-center">
            <CounterUp
              to={20}
              suffix="+"
              className="text-5xl font-bold text-green-600 mb-2"
            />
            <p className="text-xl text-gray-700">NGOs Participating</p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/register"
            className="inline-flex items-center px-8 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition-colors shadow-md"
          >
            Join the Movement <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>

      {/* CTA section */}
      <div
        className="py-16 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.pexels.com/photos/6647029/pexels-photo-6647029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Join our community of food donors and NGOs working together to
            reduce waste and fight hunger.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              href="/register"
              className="px-8 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition-colors shadow-lg"
            >
              Get Started Now
            </Link>
            <Link
              href="#"
              className="px-8 py-3 bg-transparent text-white border border-white font-medium rounded-md hover:bg-white hover:text-green-800 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
