// components/SignInPage.js

import React from "react";
import Link from "next/link";

const SignInPage = () => {
  return (
    <div className="w-full flex items-center justify-center h-screen bg-gray-100 ">
      <div className="signincard bg-white p-8 rounded-md shadow-md w-96">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Sign In</h1>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-600">
              Username
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-600">
              Password
            </label>
            <input
              type="password"
              className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-600">
              Email
            </label>
            <input
              type="email"
              className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-600">
              Phone Number
            </label>
            <input
              type="tel"
              className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your phone number"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
          >
            Sign In
          </button>
        </form>
        <div className="mt-4 text-sm">
          Already have an account?{" "}
          <Link href="/login">
            <span className="text-blue-500 hover:underline">Log In</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
