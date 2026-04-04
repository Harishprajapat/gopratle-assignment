export default function Step3({ formData, setStep }) {
  return (
    <div>
      <h3 className="mb-2 font-medium">Review Data</h3>

      <pre className="bg-gray-100 p-2 text-xs rounded">
        {JSON.stringify(formData, null, 2)}
      </pre>

      <button
        onClick={() => setStep(2)}
        className="bg-gray-300 px-4 py-2 rounded mt-2"
      >
        Back
      </button>

      <button className="bg-green-600 text-white px-4 py-2 rounded mt-2 ml-2">
        Submit
      </button>
    </div>
  );
}