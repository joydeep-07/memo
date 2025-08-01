import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";

const Propose = () => {
  const [answer, setAnswer] = useState(null);
  const [noButtonPosition, setNoButtonPosition] = useState({});
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  // Effect to update window size on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNoButtonHover = (e) => {
    const buttonRect = e.target.getBoundingClientRect();
    const containerRect = e.target.closest(".relative").getBoundingClientRect(); // Get the parent container's dimensions

    // Calculate maximum allowed X and Y to keep the button within the container
    // We subtract buttonRect.width/height to ensure the *entire* button stays in
    const maxX = containerRect.width - buttonRect.width;
    const maxY = containerRect.height - buttonRect.height;

    // Generate random positions within the container, ensuring it stays visible
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    setNoButtonPosition({
      position: "absolute",
      left: `${randomX}px`,
      top: `${randomY}px`,
      transition: "all 0.3s ease-out", // Smooth transition for movement
    });
  };

  const handleYesClick = () => {
    setAnswer("yes");
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 8000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[600px] bg-amber-50 p-4 relative overflow-hidden">
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={500}
          colors={["#ec4899", "#f43f5e", "#f59e0b", "#ffffff"]}
          gravity={0.2}
        />
      )}

      <div className="bg-white rounded-2xl shadow-2xl p-10 max-w-lg w-full text-center border border-opacity-10 border-pink-300 backdrop-blur-sm bg-opacity-80">
        {answer === "yes" ? (
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600">
              My Darling!
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-pink-200 to-rose-200 mx-auto my-4 rounded-full"></div>
            <p className="text-xl text-gray-700 font-light leading-relaxed">
              My heart overflows with joy! This is the beginning of our forever.
            </p>
            <div className="flex justify-center space-x-2 mt-6">
              <span className="text-4xl animate-bounce">💍</span>
              <span className="text-4xl animate-pulse">🥂</span>
              <span className="text-4xl animate-bounce delay-100">✨</span>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="space-y-2">
              <h1 className="text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600">
                My Dearest
              </h1>
              <div className="h-1 w-16 bg-gradient-to-r from-pink-200 to-rose-200 mx-auto my-2 rounded-full"></div>
            </div>

            <p className="text-xl text-gray-700 font-light italic leading-relaxed">
              "You are the finest, loveliest, tenderest, and most beautiful
              person I have ever known—and even that is an understatement."
            </p>

            <p className="text-2xl font-serif font-medium text-gray-800 mt-6">
              Will you do me the honor of becoming my wife?
            </p>

            <div className="flex justify-center gap-[50px] mt-10 relative">
              {" "}
              {/* Added gap-[50px] here */}
              <button
                onClick={handleYesClick}
                className="px-8 py-3 bg-gradient-to-r from-pink-600 to-rose-600 text-white rounded-full font-medium hover:from-pink-700 hover:to-rose-700 transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95"
              >
                Absolutely, Yes!
              </button>
              <button
                onMouseEnter={handleNoButtonHover}
                style={noButtonPosition}
                className="px-6 py-3 bg-gray-100 text-gray-600 rounded-full font-medium hover:bg-gray-200 transition-all duration-300 shadow hover:shadow-md absolute"
              >
                Not Now
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Propose;
