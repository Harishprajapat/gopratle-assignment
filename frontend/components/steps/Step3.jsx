import { useState } from "react";

export default function Step3({ formData, setStep }) {
  const [loading, setLoading] = useState(false);
  const handleSubmit = async () => {
    if (!formData.eventName) {
      return alert("Event Name is required");
    }

    if (!formData.date) {
      return alert("Date is required");
    }

    if (formData.hiringFor === "Planner") {
      if (!formData.details.budget) {
        errors.budget = "Budget is required";
      }
      if (!formData.details.guestCount) {
        errors.guestCount = "Guest count is required";
      }
    }

    if (formData.hiringFor === "Performer") {
      if (!formData.details.performerType) {
        errors.performerType = "Performer type is required";
      }
      if (!formData.details.duration) {
        errors.duration = "Duration is required";
      }
    }

    if (formData.hiringFor === "Crew") {
      if (!formData.details.crewType) {
        errors.crewType = "Crew type is required";
      }
      if (!formData.details.people) {
        errors.people = "Number of people is required";
      }
    }
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/requirement/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log("Response:", data);
      alert("Form submitted & saved in DB");
    } catch (error) {
      console.error(error);
      alert("Error submitted form");
    }
    setLoading(false);
  };
  return (
    <div>
      <h3 className="mb-2 font-medium flex center">Review Data:</h3>
      <div className="space-y-3 p-6">
        <p>
          <strong>Event Name:</strong> {formData.eventName}
        </p>
        <p>
          <strong>Event Type:</strong> {formData.eventType}
        </p>
        <p>
          <strong>Date:</strong> {formData.date}
        </p>
        <p>
          <strong>Location:</strong> {formData.location}
        </p>
        <p>
          <strong>Venue:</strong> {formData.venue}
        </p>
        <p>
          <strong>Hiring For:</strong> {formData.hiringFor}
        </p>

        <h3 className="font-semibold mt-4"> Extra Details:</h3>
        {formData.details.budget && (
          <p>
            <strong>Budget:</strong> {formData.details.budget}
          </p>
        )}

        {formData.details.guestCount && (
          <p>
            <strong>Guests:</strong> {formData.details.guestCount}
          </p>
        )}
        {formData.details.performerType && (
          <p>
            <strong> Performer Type:</strong> {formData.details.performerType}
          </p>
        )}

        {formData.details.duration && (
          <p>
            <strong>Duration:</strong> {formData.details.duration}
          </p>
        )}

        {formData.details.crewType && (
          <p>
            <strong>Crew Type:</strong> {formData.details.crewType}
          </p>
        )}
        {formData.details.people && (
          <p>
            <strong> Number of people:</strong> {formData.details.people}
          </p>
        )}
      </div>

      <button
        onClick={() => setStep(2)}
        className="bg-gray-300 px-4 py-2 rounded mt-2"
      >
        Back
      </button>

      <button
        disabled={loading}
        onClick={handleSubmit}
        className="bg-green-600 text-white px-4 py-2 rounded mt-2 ml-2"
      >
        {loading ? "Submitting..." : "Submit"}
      </button>
    </div>
  );
}
