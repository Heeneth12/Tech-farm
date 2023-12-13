import React from "react";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <nav className="bg-gray-800 text-white h-screen w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 xl:w-1/7">
      <h1
        style={{
          fontWeight: "bold",
          fontSize: 20,
          padding: "18px",
        }}
      >
        Services
      </h1>
      <ul className="mt-8 space-y-2">
        <li>
          <Link to="#" className="block py-2 px-4 hover:bg-gray-600">
            Home
          </Link>
        </li>
        <li>
          <Link to="#" className="block py-2 px-4 hover:bg-gray-600">
            Contact
          </Link>
        </li>
        <li>
          <Link to="#" className="block py-2 px-4 hover:bg-gray-600">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default SideBar;
