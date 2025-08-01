import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const images = [
    {
      src: "https://i.ibb.co/twvGWG9j/pic5.jpg",
      caption: "Tui ar ami just ekta perfect moment ❤️",
    },
    {
      src: "https://i.ibb.co/dw4CPJD6/pic1.jpg",
      caption: "Eivabei takiye thak, just you and me 😭",
    },
    {
      src: "https://i.ibb.co/rKxBQyHL/pic3.jpg",
      caption:
        "Jekhanei jai ice cream is important, but you are the cherry on top 🍒",
    },
    {
      src: "https://i.ibb.co/Nn39WvMn/pic7.jpg",
      caption: "Biryani date ?? ❤️",
    },
    {
      src: "https://i.ibb.co/9kbdPKvH/pic6.jpg",
      caption: "Take me back to that day ❤️",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    }, 3000); // 3-second slide interval
    return () => clearInterval(interval);
  }, [images.length, isHovered]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      goToNext();
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right
      goToPrev();
    }
  };

  return (
    <div className="flex justify-center bg-amber-50 py-8 md:py-16">
      <div className="relative w-full max-w-4xl mx-4">
        {/* Added Memories heading */}
        <h2
          className="flex items-center justify-center text-lg md:text-4xl font-serif font-bold text-amber-800 mb-6 md:mb-8 relative"
          data-aos="fade-down"
        >
          {/* Left decorative element - simplified for mobile */}
          <span className="mx-2 md:mx-4">
            <svg
              className="w-6 h-6 md:w-12 md:h-12 text-red-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </span>

          {/* Text with responsive sizing */}
          <span className="relative px-2 md:px-4">
            Memories
            {/* Underline decoration - thinner on mobile */}
           
          </span>

          {/* Right decorative element - simplified for mobile */}
          <span className="mx-2 md:mx-4">
            <svg
              className="w-6 h-6 md:w-12 md:h-12 text-red-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </span>
        </h2>

        <div
          className="relative overflow-hidden rounded-xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="absolute inset-0 bg-amber-50 opacity-90 z-0"></div>
          <div
            ref={carouselRef}
            className="relative z-10 h-[60vh] md:h-[70vh] overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            {/* Navigation arrows - hidden on mobile */}
            {!isMobile && (
              <>
                <button
                  onClick={goToPrev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-10 md:h-10 bg-black bg-opacity-30 hover:bg-opacity-50 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
                  aria-label="Previous slide"
                  data-aos="fade-right"
                  data-aos-delay="400"
                >
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-10 md:h-10 bg-black bg-opacity-30 hover:bg-opacity-50 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
                  aria-label="Next slide"
                  data-aos="fade-left"
                  data-aos-delay="400"
                >
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </>
            )}

            {/* Slides */}
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] h-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 h-full relative"
                >
                  <div
                    className="absolute inset-0 overflow-hidden"
                    data-aos="fade-in"
                    data-aos-delay={500 + index * 100}
                  >
                    <img
                      src={image.src}
                      alt={`Premium Slide ${index + 1}`}
                      className="w-full h-full object-contain transition-transform duration-1000 ease-out"
                      style={{
                        transform:
                          currentIndex === index ? "scale(1.03)" : "scale(1)",
                      }}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                          "https://placehold.co/1000x600/000000/ffffff?text=Image+Error";
                      }}
                    />
                  </div>
                  <div className="absolute inset-0 "></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Caption displayed outside the carousel, centered on all screens */}
        {images[currentIndex] && (
          <div className="mt-6 text-center text-gray-800">
            <h3 className="text-md md:text-2xl font-serif font-light leading-tight">
              {images[currentIndex].caption}
            </h3>
          </div>
        )}

        {/* Indicator dots for all screen sizes */}
        <div className="flex justify-center mt-6 space-x-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-amber-400"
                  : "bg-gray-500 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
