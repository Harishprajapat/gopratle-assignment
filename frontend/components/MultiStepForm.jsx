"use client";

import { useState } from "react";

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
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded-2xl shadow">
      <h2 className="text-xl font-semibold mb-4">Create Requirement</h2>
      {step === 1 && (
        <div className="space-y-3">
          <input
            name="eventName"
            placeholder="Event Name"
            className="w-full border p-2 rounded"
            onChange={handleChange}
          />

          <input
            name="eventType"
            placeholder="Event Type (Wedding, Party...)"
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
      )}

      {step === 2 && (
        <div>
          <h3 className="mb-3 font-medium">Step 2 (Dynamic Fields)</h3>
          {formData.hiringFor === "Planner" && (
            <>
              <input
                name="budget"
                placeholder="Budget"
                className="w-full border p-2 rounded mb-2"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    details: { ...formData.details, budget: e.target.value },
                  })
                }
              />
              <input
                name="guestCount"
                placeholder="Guest Count"
                className="w-full border p-2 rounded"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    details: {
                      ...formData.details,
                      guestCount: e.target.value,
                    },
                  })
                }
              />
            </>
          )}

          {formData.hiringFor === "Performer" && (
            <>
              <input
                placeholder="Singer / DJ"
                className="w-full border p-2 rounded mb-2"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    details: {
                      ...formData.details,
                      performerType: e.target.value,
                    },
                  })
                }
              />
              <input
                placeholder="Duration"
                className="w-full border p-2 rounded"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    details: { ...formData.details, duration: e.target.value },
                  })
                }
              />
            </>
          )}
          {formData.hiringFor === "Crew" && (
            <>
              <input
                placeholder="Crew Type"
                className="w-full border p-2 rounded mb-2"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    details: { ...formData.details, crewType: e.target.value },
                  })
                }
              />
              <input
                placeholder="Number of People"
                className="w-full border p-2 rounded"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    details: { ...formData.details, people: e.target.value },
                  })
                }
              />
            </>
          )}
          <div className="flex mt-4 pt-4  border-gray-200">
            <button
              onClick={() => setStep(1)}
              className="bg-gray-300 px-4 py-2 rounded mr-2"
            >
              Back
            </button>
            <button
              onClick={() => setStep(3)}
              className="bg-black text-white px-4 py-2 rounded"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
