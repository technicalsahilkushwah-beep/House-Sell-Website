import React, { useState } from "react";

const Navbar2 = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky brightness-110 top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo / Title */}
        <h1 className="text-lg font-semibold text-gray-800">
          Housing Portal
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
          <a className="nav-link" href="#">Home</a>
          <a className="nav-link" href="#">About</a>
          <a className="nav-link" href="#">Allote Corner</a>
          <a className="nav-link" href="#">Employee Corner</a>
          <a className="nav-link" href="#">Citizen Corner</a>
          <a className="nav-link" href="#">Architect</a>
          <a className="nav-link" href="#">Careers</a>
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col gap-2 px-4 py-4 text-sm font-medium text-gray-700">
            <a className="mobile-link" href="#">Home</a>
            <a className="mobile-link" href="#">About</a>
            <a className="mobile-link" href="#">Allote Corner</a>
            <a className="mobile-link" href="#">Employee Corner</a>
            <a className="mobile-link" href="#">Citizen Corner</a>
            <a className="mobile-link" href="#">Architect</a>
            <a className="mobile-link" href="#">Careers</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar2;
