"use client";

import { useState } from "react";

export default function MultiStepForm(){
    const [step , setStep]= useState(1);

    const [fromData, setFormData]=useState({
    eventNames: "",
    eventType: "",
    date: "",
    location:"",
    venue: "",
    hiringFor : "",
    details :{},
});
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
return(
    <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded-2xl shadow">
      <h2 className="text-xl font-semibold mb-4">Create Requirement</h2>

       {step === 1 && (
        <div className="space-y-3">
        <input name="eventName"
        placeholder="Event Name"
        className="w-full border p-2 rounded"
        onChange={handleChange}
        />

       <input
            type="date"
            name="date"
            className="w-full border p-2 rounded"
            onChange={handleChange}
          />

          <input
            name="location"
            placeholder="Location"
            className="w-full border p-2 rounded"
            onChange={handleChange}
          />

          <input
            name="venue"
            placeholder="Venue (optional)"
            className="w-full border p-2 rounded"
            onChange={handleChange}
          />

          <select
            name="hiringFor"
            className="w-full border p-2 rounded"
            onChange={handleChange}
          >
            <option value="">Select Hiring Type</option>
            <option value="Planner">Event Planner</option>
            <option value="Performer">Performer</option>
            <option value="Crew">Crew</option>
          </select>

          <button
            onClick={() => setStep(2)}
            className="w-full bg-black text-white py-2 rounded"
          >
            Next
          </button>
        </div>
       )};
       
    </div>

);
}