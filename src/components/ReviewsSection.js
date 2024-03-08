import React from "react";

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-12 bg-gray-200">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Customer Reviews
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 bg-white rounded-lg shadow-md">
            <p className="text-gray-800">
              "Rajime27 Bridal Makeover made me feel like a princess on my
              wedding day. Their attention to detail and professionalism were
              outstanding."
            </p>
            <p className="text-gray-600">- Emily Smith</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md">
            <p className="text-gray-800">
              "I couldn't have been happier with my bridal makeup. It was
              flawless and lasted all day!"
            </p>
            <p className="text-gray-600">- Sarah Johnson</p>
          </div>
          {/* Add more reviews here */}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
