import React, { useState } from "react";
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";
import WhyChooseUs from "./components/WhyChooseUs";
import ContactUs from "./components/ContactUs";

export default function Home() {
  

  return (
    <>
    <Navbar/>
    <MainContent/>
    <WhyChooseUs/>
    <ContactUs/>


    </>
  );
}
