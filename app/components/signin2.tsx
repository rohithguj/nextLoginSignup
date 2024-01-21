import React from "react";
import { useAppStore } from "../useAppStore"; 

const Step2 = () => {
  const { formData, setFormData, submitForm } = useAppStore();

  const handleChange = (e) => {
    setFormData({ ...formData, password: e.target.value });
  };

  return (
    <div>
      <label className="block text-sm font-semibold text-gray-600">
        Password
      </label>
      <input
        type="password"
        value={formData.password}
        onChange={handleChange}
        className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
        placeholder="Enter your password"
      />
      <label className="block text-sm font-semibold text-gray-600">
        Confirm Password
      </label>
      <input
        type="password"
        value={formData.confirmPassword}
        onChange={(e) =>
          setFormData({ ...formData, confirmPassword: e.target.value })
        }
        className="w-full p-2 mb-2 border rounded-md focus:outline-none focus:border-blue-500"
        placeholder="Confirm your password"
      />
      <button
        onClick={submitForm}
        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
      >
        Create Account
      </button>
    </div>
  );
};

export default Step2;
