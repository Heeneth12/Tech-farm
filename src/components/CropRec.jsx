import React, { useState } from "react";

const CropRecommendation = () => {
  const [sowingMonth, setSowingMonth] = useState("");
  const [region, setRegion] = useState("");
  const [minTemp, setMinTemp] = useState("");
  const [maxTemp, setMaxTemp] = useState("");
  const [minRainfall, setMinRainfall] = useState("");
  const [maxRainfall, setMaxRainfall] = useState("");
  const [soilPh, setSoilPh] = useState("");
  const [soilType, setSoilType] = useState("");
  const [recommendedCrops, setRecommendedCrops] = useState([]);

  const recommendCrops = () => {
    let recommendations = [];

    // Implement your recommendation logic here based on the parameters.
    // You can use conditional statements or more advanced algorithms for accurate recommendations.

    // This is a simplified example based on temperature and rainfall.
    if (
      minTemp < 20 &&
      maxTemp < 30 &&
      minRainfall > 500 &&
      soilPh >= 6 &&
      soilType === "Sandy"
    ) {
      recommendations.push("Rice");
    }

    if (
      minTemp > 25 &&
      maxTemp < 40 &&
      minRainfall > 300 &&
      soilPh >= 5.5 &&
      soilType === "Clay"
    ) {
      recommendations.push("Maize");
    }

    // Update the state with recommended crops
    console.log("recommendedCrops:", recommendedCrops);
    setRecommendedCrops(recommendations);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Crop Recommendation</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Sowing Month:
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
              value={sowingMonth}
              onChange={(e) => setSowingMonth(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Region:</label>
            <input
              type="text"
              className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Minimum Temperature (°C):
              </label>
              <input
                type="number"
                className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
                value={minTemp}
                onChange={(e) => setMinTemp(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Maximum Temperature (°C):
              </label>
              <input
                type="number"
                className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
                value={maxTemp}
                onChange={(e) => setMaxTemp(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Minimum Rainfall (mm):
              </label>
              <input
                type="number"
                className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
                value={minRainfall}
                onChange={(e) => setMinRainfall(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Maximum Rainfall (mm):
              </label>
              <input
                type="number"
                className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
                value={maxRainfall}
                onChange={(e) => setMaxRainfall(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                pH value of the Soil:
              </label>
              <input
                type="number"
                step="0.1"
                className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
                value={soilPh}
                onChange={(e) => setSoilPh(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Soil Type:
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
                value={soilType}
                onChange={(e) => setSoilType(e.target.value)}
              />
            </div>
          </div>

          {/* Add input fields for other parameters here */}
        </div>
        <button
          className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          onClick={recommendCrops}
        >
          Recommend Crops
        </button>
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Recommended Crops:</h3>
          <ul>
            {recommendedCrops.map((crop, index) => (
              <li key={index}>{crop}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CropRecommendation;
