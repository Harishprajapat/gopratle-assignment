"use client";

import { useState } from "react";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
export default function MultiStepForm() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    eventName: "",
    eventType: "",
    date: "",
    location: "",
    venue: "",
    hiringFor: "",
    details: {},
  });

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-2xl">
        <div className="flex justify-between  mb-6">
          {["Step 1", "Step 2", "Review"].map((step, index) => (
            <div
              key={index}
              className={`flex-1 text-center py-2 mr-2 rounded 
        ${
          setStep === index + 1
            ? "bg-blue-600 text-white"
            : "bg-gray-200 text-gray-600"
        }`}
            >
              {step}
            </div>
          ))}
        </div>
        {step === 1 && (
          <Step1
            formData={formData}
            setFormData={setFormData}
            setStep={setStep}
          />
        )}
        {step === 2 && (
          <Step2
            formData={formData}
            setFormData={setFormData}
            setStep={setStep}
          />
        )}
        {step === 3 && <Step3 formData={formData} setStep={setStep} />}
      </div>
    </div>
  );
}
