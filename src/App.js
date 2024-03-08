import React, { useState } from "react";
import Header from "./components/Header";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ReviewsSection from "./components/ReviewsSection";
import BookingSection from "./components/BookingSection";
import "./App.css";
import mua from "./mua.jpeg";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="container mx-auto py-8 px-6">
        <AboutSection />
        <ServicesSection />
        <ReviewsSection />
        <BookingSection />
      </main>
    </div>
  );
}

export default App;
