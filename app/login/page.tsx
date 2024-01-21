import Link from "next/link";
import React from "react";

function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-white p-8 rounded-md shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-600">
              Username
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded-md focus:outline-none focus:border-gray-700"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-600">
              Password
            </label>
            <input
              type="password"
              className="w-full p-2 border rounded-md focus:outline-none focus:border-gray-700"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
          >
            Login
          </button>
        </form>
        <div className="pt-2 text-sm">
          Don't have an account?{" "}
          <Link href="/signup">
            <span className="text-blue-500 hover:underline">Sign Up</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
