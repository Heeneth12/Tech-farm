import React, { useState, useEffect } from "react";
import Axios from "axios";
import "tailwindcss/tailwind.css"; // Import Tailwind CSS globally

const SoilType = () => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [soilData, setSoilData] = useState(null);

  const fetchData = () => {
    const apiUrl = `https://rest.isric.org/soilgrids/v2.0/classification/query?lon=${longitude}&lat=${latitude}&number_classes=0`;

    Axios.get(apiUrl)
      .then((response) => {
        setSoilData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching soil data:", error);
      });
  };

  useEffect(() => {
    if (latitude && longitude) {
      fetchData();
    }
  }, [latitude, longitude]);
  return (
    <div className="p-4 bg-gray-200 rounded-md">
      <h1 className="text-2xl font-semibold">Soil Information</h1>
      <div>
        <label className="block text-lg">Latitude:</label>
        <input
          type="text"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <br />
        <label className="block text-lg">Longitude:</label>
        <input
          type="text"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <br />
        <button
          onClick={fetchData}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Get Soil Information
        </button>
      </div>
      {soilData ? (
        <div>
          <h2 className="text-xl font-semibold">
            Soil Type: {soilData.wrb_class_name}
          </h2>
          <h3 className="text-lg">Properties:</h3>
          <ul>
            {soilData.wrb_class_probability.map((property, index) => (
              <li key={index} className="list-disc list-inside">
                {property}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="mt-2">
          Enter latitude and longitude, then click "Get Soil Information" to
          retrieve data.
        </p>
      )}
    </div>
  );
};

export default SoilType;
