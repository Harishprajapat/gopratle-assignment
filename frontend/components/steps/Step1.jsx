export default function Step1({ formData, setFormData, setStep }) {

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
 

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Create Requirement</h2>

      <div className="space-y-3">
        <input
          name="eventName"
          value={formData.eventName}
          placeholder="Event Name"
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          onChange={handleChange}
        />
        

        <input
          name="eventType"
          value={formData.eventType}
          placeholder="Event Type (Wedding, Party...)"
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          onChange={handleChange}
        />

        <input
          type="date"

          name="date"
          value={formData.date}
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          onChange={handleChange}
        />

        <input
          name="location"
          value={formData.location}
          placeholder="Location"
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          onChange={handleChange}
        />

        <input
          name="venue"
          
          placeholder="Venue (optional)"
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          onChange={handleChange}
        />

        <select
          name="hiringFor"
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          onChange={handleChange}
        >
          <option value="">Select Hiring Type</option>
          <option value="Planner">Event Planner</option>
          <option value="Performer">Performer</option>
          <option value="Crew">Crew</option>
        </select>

        <button
          onClick={() => setStep(2)}
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        >
          Next
        </button>
        
      </div>
      
    </div>
    
  );
}