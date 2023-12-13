{
  /*import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MyMap = () => {
  const [position, setPosition] = useState([13.0827, 80.2707]);
  const [lat, setLat] = useState("48.8588443");
  const [lon, setLon] = useState("2.2943506");

  const handleMapClick = (e) => {
    const { lat, lng } = e.latlng;
    setLat(lat.toFixed(6));
    setLon(lng.toFixed(6));
    setPosition([lat, lng]);
  };

  const handleUpdateMap = () => {
    setPosition([parseFloat(lat), parseFloat(lon)]);
  };

  return (
    <div className="bg-gray-300 p-4 rounded shadow-md">
      <div className="mb-4 flex items-center">
        <label className="block mb-2 text-lg font-bold">Latitude:</label>
        <input
          type="text"
          value={lat}
          onChange={(e) => setLat(e.target.value)}
          className="w-1/2 p-2 rounded border"
        />
        <label className="ml-4 block mb-2 text-lg font-bold">Longitude:</label>
        <input
          type="text"
          value={lon}
          onChange={(e) => setLon(e.target.value)}
          className="w-1/2 p-2 rounded border"
        />
        <button
          onClick={handleUpdateMap}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 ml-4"
        >
          Update
        </button>
      </div>
      <div
        className="mt-4"
        style={{ height: "400px", backgroundColor: "#f2f2f2" }}
      >
        <MapContainer
          center={position}
          zoom={15}
          style={{ height: "100%" }}
          onClick={handleMapClick}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>Eiffel Tower</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default MyMap;*/
}
