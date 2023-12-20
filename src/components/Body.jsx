import React, { useState, useEffect } from "react";
import homeImage from "./images/home1.jpg";

const Body = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Tech Farm";

  const [paragraphs, setParagraphs] = useState([
    "Integrate Tech Into Your Farm To Improve Crop Life",
    "Create a dynamic and collaborative community for farmers and buyers",
    "That unites farmers and buyers, creating a virtual marketplace where both parties can engage directly",
  ]);
  const [currentParagraph, setCurrentParagraph] = useState(0);

  useEffect(() => {
    let currentText = "";
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex === fullText.length) {
        clearInterval(interval);
      } else {
        currentText += fullText[currentIndex];
        setDisplayText(currentText);
        currentIndex++;
      }
    }, 200); // Adjust the speed of the typing effect (in milliseconds)

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const paragraphInterval = setInterval(() => {
      setCurrentParagraph((prev) => (prev + 1) % paragraphs.length);
    }, 7000); // Change paragraph every 5 seconds

    return () => clearInterval(paragraphInterval);
  }, [paragraphs]);

  const paragraphStyle = {
    paddingLeft: "20px", // Adjust the padding as needed
  };

  const divStyle = {
    fontSize: "clamp(2rem, 15vw, 8rem)", // Adjust the font size as needed
    padding: "20px",
  };

  const [currentDisplayParagraph, setCurrentDisplayParagraph] = useState("");

  useEffect(() => {
    let currentParaText = "";
    let currentParaIndex = 0;

    const interval = setInterval(() => {
      if (currentParaIndex === paragraphs[currentParagraph].length) {
        clearInterval(interval);
      } else {
        currentParaText += paragraphs[currentParagraph][currentParaIndex];
        setCurrentDisplayParagraph(currentParaText);
        currentParaIndex++;
      }
    }, 100); // Adjust the speed of the typing effect (in milliseconds)

    return () => clearInterval(interval);
  }, [currentParagraph, paragraphs]);

  return (
    <div
      className="relative bg-gray-100 overflow-hidden"
      style={{ height: "70vh", position: "relative" }}
    >
      <img
        src={homeImage}
        className="w-full h-full object-cover"
        alt="Home Image"
      />
      <div
        className="absolute inset-0 flex flex-col items-center justify-center text-left"
        style={{
          padding: "20px",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }} // Adjust the overall padding as needed
      >
        <p
          className="text-white text-4xl font-bold"
          style={{
            padding: "25px",
            fontSize: "clamp(2rem, 10vw, 4rem)",
          }}
        >
          <span style={divStyle}>{displayText}</span>
        </p>

        <div className="text-white text-2xl font-bold">
          <p style={paragraphStyle}>{currentDisplayParagraph}</p>
        </div>

        <button className="mt-4 px-6 py-3 bg-green-500 text-white">
          Explore
        </button>
      </div>
    </div>
  );
};

export default Body;
