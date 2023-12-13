import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Fotter";
import CropRec from "../components/CropRec";
import ServicesSideBar from "../components/ServicesSideBar";
import SoilType from "../components/SoilType";

function Services() {
  return (
    <>
      <NavBar />
      <ServicesSideBar />
      <CropRec />
      <SoilType />
      <Footer />
    </>
  );
}

export default Services;
