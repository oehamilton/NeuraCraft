// src/DefaultPage.js
import React from "react";
import { FaBars } from "react-icons/fa"; // Import the hamburger icon

const slideImage = "/logo512.png"; // Logo image path

function DefaultPage() {
  return (
    <div className="bg-gray-900 p-6 text-gray-100 shadow-inner">
      <h2 className="text-2xl font-bold mb-4 text-gray-100">
        Welcome to NeuraCraft!
      </h2>
      <p className="text-lg">
        This is the default page. Use the{" "}
        <FaBars className="inline text-xl align-middle" /> menu to navigate.
      </p>
      <div className="relative max-w-full max-h-full">
        <img
          src={slideImage}
          className="w-full h-auto object-contain"
          alt="Company Logo"
        />
      </div>
    </div>
  );
}

export default DefaultPage;
