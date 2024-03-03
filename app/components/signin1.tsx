// app/components/signin1.tsx
import React, { useState } from "react";
import { useSignUpStore } from "../useSignUpStore";

const Step1 = () => {
  const { formData, setFormData, nextStep, formValid, validateForm } =
    useSignUpStore();

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateForm(); // Call the function to check form validity on each change
  };

  const handleNextClick = () => {
    if (formValid) {
      nextStep();
    } else {
      alert("Please fill in all required fields and provide a valid email");
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-semibold text-gray-600">
          Username<span className="text-pink-700">*</span>
        </label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter your username"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-600">
          Email<span className="text-pink-700">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter your email"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-600">
          Phone Number
        </label>
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          className="w-full p-2 mb-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter your phone number"
        />
      </div>
      <button
        onClick={handleNextClick}
        disabled={!formValid}
        className={`w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue ${
          !formValid && "cursor-not-allowed opacity-50"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Step1;
