import React from "react";

const Header = () => {
  return (
    <header className="bg-white py-4">
      <div className="container mx-auto flex items-center justify-between px-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Rajime27 Bridal Makeover
        </h1>
        <nav className="text-gray-800">
          <ul className="flex">
            <li className="ml-6">
              <a href="#services">Services</a>
            </li>
            <li className="ml-6">
              <a href="#reviews">Reviews</a>
            </li>
            <li className="ml-6">
              <a href="#booking">Booking</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
