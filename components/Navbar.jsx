"use client";

import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Leaf,
  BarChart2,
  Users,
  BookOpen,
  Settings,
  HelpCircle,
} from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const solutions = [
    {
      title: "Crop Management",
      description: "Monitor and optimize your crop lifecycle",
      icon: <Leaf className="w-5 h-5" />,
    },
    {
      title: "Analytics",
      description: "Data-driven farming insights",
      icon: <BarChart2 className="w-5 h-5" />,
    },
    {
      title: "Community",
      description: "Connect with other farmers",
      icon: <Users className="w-5 h-5" />,
    },
  ];

  const resources = [
    {
      title: "Knowledge Base",
      description: "Guides and documentation",
      icon: <BookOpen className="w-5 h-5" />,
    },
    {
      title: "Support",
      description: "24/7 customer assistance",
      icon: <HelpCircle className="w-5 h-5" />,
    },
    {
      title: "Tools",
      description: "Farming calculators and tools",
      icon: <Settings className="w-5 h-5" />,
    },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div
              className={`flex items-center space-x-2 ${
                isScrolled ? "text-green-600" : "text-white"
              }`}
            >
              <Leaf className="w-8 h-8" />
              <span className="text-2xl font-bold">CropsWise</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Solutions Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setActiveDropdown("solutions")}
                className={`flex items-center space-x-1 ${
                  isScrolled ? "text-gray-600" : "text-white"
                } hover:text-green-500 transition-colors duration-200`}
              >
                <span>Solutions</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === "solutions" && (
                <div
                  onMouseLeave={() => setActiveDropdown(null)}
                  className="absolute top-full left-0 w-80 mt-2 bg-white rounded-xl shadow-xl p-4 grid gap-4"
                >
                  {solutions.map((item, index) => (
                    <button
                      key={index}
                      className="flex items-start p-3 rounded-lg hover:bg-green-50 transition-colors duration-200"
                    >
                      <div className="text-green-600">{item.icon}</div>
                      <div className="ml-4 text-left">
                        <div className="font-medium text-gray-900">
                          {item.title}
                        </div>
                        <div className="text-sm text-gray-500">
                          {item.description}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setActiveDropdown("resources")}
                className={`flex items-center space-x-1 ${
                  isScrolled ? "text-gray-600" : "text-white"
                } hover:text-green-500 transition-colors duration-200`}
              >
                <span>Resources</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === "resources" && (
                <div
                  onMouseLeave={() => setActiveDropdown(null)}
                  className="absolute top-full left-0 w-80 mt-2 bg-white rounded-xl shadow-xl p-4 grid gap-4"
                >
                  {resources.map((item, index) => (
                    <button
                      key={index}
                      className="flex items-start p-3 rounded-lg hover:bg-green-50 transition-colors duration-200"
                    >
                      <div className="text-green-600">{item.icon}</div>
                      <div className="ml-4 text-left">
                        <div className="font-medium text-gray-900">
                          {item.title}
                        </div>
                        <div className="text-sm text-gray-500">
                          {item.description}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              className={`${
                isScrolled ? "text-gray-600" : "text-white"
              } hover:text-green-500 transition-colors duration-200`}
            >
              Pricing
            </button>

            <button
              className={`${
                isScrolled ? "text-gray-600" : "text-white"
              } hover:text-green-500 transition-colors duration-200`}
            >
              About
            </button>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href={"/login"}>
              <button
                className={`${
                  isScrolled ? "text-gray-600" : "text-white"
                } hover:text-green-500 transition-colors duration-200`}
              >
                Sign In
              </button>
            </Link>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${
                isScrolled ? "text-gray-600" : "text-white"
              } hover:text-green-500 transition-colors duration-200`}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg mt-2">
              {solutions.map((item, index) => (
                <button
                  key={index}
                  className="block w-full text-left px-3 py-2 rounded-md text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-200"
                >
                  <div className="flex items-center">
                    {item.icon}
                    <span className="ml-3">{item.title}</span>
                  </div>
                </button>
              ))}
              {resources.map((item, index) => (
                <button
                  key={index}
                  className="block w-full text-left px-3 py-2 rounded-md text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-200"
                >
                  <div className="flex items-center">
                    {item.icon}
                    <span className="ml-3">{item.title}</span>
                  </div>
                </button>
              ))}
              <div className="pt-4 space-y-2">
                <button className="w-full px-3 py-2 text-center text-gray-600 hover:text-green-600 transition-colors duration-200">
                  Sign In
                </button>
                <button className="w-full px-3 py-2 text-center bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
