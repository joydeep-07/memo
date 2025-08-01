import React from "react";

const Navbar = () => {
  return (
    // The main navbar container with a matching background and a shadow for a slight lift.
    // The padding and positioning ensure it sits at the top of the page.
    <nav className="bg-amber-50 shadow-md p-4 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-center flex-wrap">
        {/* Personalized Message with a Heart Icon */}
        <div className="flex items-center text-amber-900 space-x-3">
          <span
            className="font-serif text-2xl md:text-3xl font-bold tracking-tight"
            style={{ fontFamily: '"Dancing Script", cursive' }}
          >
           Me
          </span>
          {/* Classic heart icon for a simple, elegant look */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-rose-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
          </svg>
          <span
            className="font-serif text-2xl md:text-3xl font-bold tracking-tight"
            style={{ fontFamily: '"Dancing Script", cursive' }}
          >
           My baby
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
