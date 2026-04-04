"use client";

import { useState } from "react";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
export default function MultiStepForm() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    eventNames: "",
    eventType: "",
    date: "",
    location: "",
    venue: "",
    hiringFor: "",
    details: {},
  });
  
  return (
    <div className="p-6 bg-white rounded-xl shadow-md w-[400px] mx-auto mt-20">
      {step === 1 && (
        <Step1 formData={formData} setFormData={setFormData} setStep={setStep} />
      )}
      {step === 2 && (
        <Step2 formData={formData} setFormData={setFormData} setStep={setStep} />
      )}
      {step === 3 && (
        <Step3 formData={formData} setStep={setStep} />
      )}
    </div>
  );
}
