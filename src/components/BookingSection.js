import React, { useState } from "react";
import Form from "./Form";

const BookingSection = () => {
  return (
    <section id="booking" className="py-12">
      <div className="container mx-auto items-center flex flex-col">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Book Your Appointment
        </h2>
        <Form />
      </div>
    </section>
  );
};

export default BookingSection;
