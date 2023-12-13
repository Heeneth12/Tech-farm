import React from "react";

const Footer = () => {
  return (
    <footer
      className=" py-4"
      style={{
        backgroundColor: "#34ad54",
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
