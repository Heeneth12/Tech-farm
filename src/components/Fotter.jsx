import React from "react";

const Footer = () => {
  return (
    <footer
      className=" py-4 mb-0"
      style={{
        backgroundColor: "#34ad54",
        position: "fixed",
        width: "100%",
        bottom: 0,
        textAlign: "center",
      }}
    >
      <div className="container mx-auto">
        <p
          className="text-center text-white-600"
          style={{
            color: "#ffff",
          }}
        >
          &copy; 2023 Your Website
        </p>
      </div>
    </footer>
  );
};

export default Footer;
