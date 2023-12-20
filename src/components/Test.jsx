import React, { useState, useEffect } from "react";
import PocketBase from "pocketbase";

function Test() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const pb = new PocketBase("http://127.0.0.1:8090");

    const fetchData = async () => {
      try {
        const records = await pb.collection("learn").getFullList({
          sort: "-created",
        });

        setItems(records);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle errors, such as displaying an error message
      }
    };

    fetchData();
  }, []);
  console.log(items);

  return (
    <div className="grid grid-cols-4 gap-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition duration-300"
        >
          <img
            src={item.Display} // Use TestImg's imageUrl here
            alt={`Image ${index}`}
            className="w-full object-cover h-64"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
            <div className="text-white text-center">
              <h1 className="text-2xl font-bold mb-2">{item.H1}</h1>
              <p className="text-sm mb-4">{item.details}</p>
              <p className="text-sm mb-2">{item.discription}</p>
              <p className="text-xs">Updated: {item.updated}</p>
              <button>add to cort</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Test;
