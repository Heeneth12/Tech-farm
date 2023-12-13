import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Fotter";
import BlogSection from "../components/BlogSection";
import BlogPostWriter from "../components/BlogPostWriter";

export default function CommunityPage() {
  return (
    <>
      <NavBar />
      <div className="flex">
        <div className="w-1/4 h-screen bg-gray-300">
          <div className="p-4">
            <h1
              style={{
                fontWeight: "bold",
              }}
            >
              Community
            </h1>
            <ul className="space-y-4 mt-6">
              <li>
                <button className="w-full font-bold hover:bg-gray-400 hover:text-gray-800 bg-gray-300 text-white p-2 rounded-md">
                  Latest
                </button>
              </li>
              <li>
                <button className=" w-full font-bold hover:bg-gray-400 hover:text-gray-800 bg-gray-300 text-white p-2 rounded-md">
                  Tech
                </button>
              </li>
              <li>
                <button className="w-full font-bold hover:bg-gray-400 hover:text-gray-800 bg-gray-300 text-white p-2 rounded-md">
                  AI Tools
                </button>
              </li>
              <li>
                <button className="w-full font-bold hover:bg-gray-400 hover:text-gray-800 bg-gray-300 text-white p-2 rounded-md">
                  Settings
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-3/4 h-screen bg-gray-100">
          <BlogSection />
          <BlogPostWriter />
        </div>
      </div>

      <Footer />
    </>
  );
}
