import React from "react";
import NavBar from "../components/NavBar";
import Body from "../components/Body";

import ContentSection from "../components/ContentSection";
import About from "../components/About";

export default function Home() {
  return (
    <>
      <NavBar />
      <Body />
      <ContentSection />
      <About />
    </>
  );
}
