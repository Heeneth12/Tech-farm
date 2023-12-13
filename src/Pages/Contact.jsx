import React from "react";
import NavBar from "../components/NavBar";
import ContactCard from "../components/ContactCard";
import About from "../components/About";
import Notification from "../components/Notification";

function Contact() {
  return (
    <>
      <NavBar />
      <ContactCard />
      <Notification />
      <About />
    </>
  );
}

export default Contact;
