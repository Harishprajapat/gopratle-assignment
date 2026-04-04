export default function Step2({ formData, setFormData, setStep }) {

  const handleDetailsChange = (key, value) => {
    setFormData({
      ...formData,
      details: {
        ...(formData.details || {}),
        [key]: value,
      },
    });
  };

  return (
    <div>
      <h3 className="mb-3 font-medium">Step 2 (Dynamic Fields)</h3>

      {formData.hiringFor === "Planner" && (
        <>
          <input
            placeholder="Budget"
            className="w-full border p-2 rounded mb-2"
            onChange={(e) => handleDetailsChange("budget", e.target.value)}
          />
          <input
            placeholder="Guest Count"
            className="w-full border p-2 rounded"
            onChange={(e) => handleDetailsChange("guestCount", e.target.value)}
          />
        </>
      )}

      {formData.hiringFor === "Performer" && (
        <>
          <input
            placeholder="Singer / DJ"
            className="w-full border p-2 rounded mb-2"
            onChange={(e) =>
              handleDetailsChange("performerType", e.target.value)
            }
          />
          <input
            placeholder="Duration"
            className="w-full border p-2 rounded"
            onChange={(e) => handleDetailsChange("duration", e.target.value)}
          />
        </>
      )}

      {formData.hiringFor === "Crew" && (
        <>
          <input
            placeholder="Crew Type"
            className="w-full border p-2 rounded mb-2"
            onChange={(e) => handleDetailsChange("crewType", e.target.value)}
          />
          <input
            placeholder="Number of People"
            className="w-full border p-2 rounded"
            onChange={(e) => handleDetailsChange("people", e.target.value)}
          />
        </>
      )}

      <div className="flex mt-4">
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
  );
}