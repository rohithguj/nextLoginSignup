// app/signup/page.tsx
"use client";

// @ts-ignore
import { useAppStore } from "../useAppStore";
import Step1 from "../components/signin1";
import Step2 from "../components/signin2";
import Link from "next/link";

const SignUpForm = () => {
  const { step } = useAppStore();

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="signincard bg-white p-8 rounded-md shadow-md w-96">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Sign Up</h1>
        <div className="flex justify-end items-end mb-2 w-full">
          <span className="text-pink-700">*</span>
          <span className="text-xs ml-1"> Required fields</span>
        </div>
        {step === 1 && <Step1 />}
        {step === 2 && <Step2 />}
        <div className="mt-2 text-sm">
          Already have an account?{" "}
          <Link href="/login">
            <span className="text-blue-500 hover:underline">Log In</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
