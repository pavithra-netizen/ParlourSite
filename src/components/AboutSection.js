import React from "react";
import mua from "../mua.jpeg";

const AboutSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between">
      <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h2 className="text-3xl font-bold mb-4">
          Welcome to Rajime27 Bridal Makeover!
        </h2>
        <p className="text-gray-700 leading-relaxed">
          At Rajime27 Bridal Makeover, we specialize in bringing out the
          timeless beauty of brides through the art of mehndi and expert
          bridal makeovers. Our studio is dedicated to providing unparalleled
          bridal services, ensuring that every bride feels radiant and confident
          on her special day.
        </p>
      </div>
      <div className="lg:w-1/2">
        <img
          src={mua}
          alt="Makeup Artist"
          className="w-full rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default AboutSection;
