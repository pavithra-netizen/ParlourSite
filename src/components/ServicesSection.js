import React from "react";

const ServicesSection = () => {
  return (
    <section id="services" className="py-12">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Our Makeup Services
        </h2>
        <p className="text-gray-700">
          We offer a range of makeup services tailored to enhance your natural
          beauty, including:
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-4">
          <li>Bridal Makeup</li>
          <li>Hair Styling</li>
          <li>Mehndi Designs</li>
          <li>Makeup Consultation</li>
        </ul>
      </div>
    </section>
  );
};

export default ServicesSection;
