export default function Step3({ formData, setStep }) {

  const handleSubmit = async()=>{
    try{
      const res = await fetch ("http://localhost:5000/api/requirement/create", {
        method : "POST",
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log("Response:", data);
      alert ("Form submitted & saved in DB");
    } 
    catch(error){
      console.error(error);
      alert("Error submitted form");
    }
  };
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

      <button 
      onClick={handleSubmit}
       className="bg-green-600 text-white px-4 py-2 rounded mt-2 ml-2">
        Submit
      </button>
    </div>
  );
}