import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Letter = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="flex justify-center items-center md:min-h-[700px] pb-20 bg-amber-50 py-0 px-2 pt-10 sm:p-4">
      <div
        className="relative max-w-3xl w-full mx-2 sm:mx-4"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {/* Vintage paper */}
        <div className="relative bg-amber-50 border-2 border-amber-800 p-4 sm:p-6 md:p-8 lg:p-12 shadow-lg">
          {/* Paper texture and aging effects */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/rice-paper.png')] opacity-20"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] opacity-10"></div>

          {/* Rose decoration - with animation */}
          <div
            className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 md:-top-8 md:-right-8 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
            data-aos="zoom-in"
            data-aos-delay="600"
            data-aos-anchor=".letter-container"
          >
            <svg viewBox="0 0 100 100" className="text-rose-600">
              <path
                d="M50 20C40 10 20 15 20 30C20 45 40 60 50 70C60 60 80 45 80 30C80 15 60 10 50 20Z"
                fill="currentColor"
                className="opacity-80"
              />
              <path
                d="M50 20C45 15 40 15 40 20C40 25 45 30 50 35C55 30 60 25 60 20C60 15 55 15 50 20Z"
                fill="currentColor"
                className="opacity-90"
              />
              <path
                d="M50 25C48 23 46 23 45 25C44 27 46 29 48 31C50 29 52 27 51 25C51 24 50 25 50 25Z"
                fill="currentColor"
              />
            </svg>
          </div>

          {/* Fold lines */}
        

          {/* Handwritten content */}
          <div className="relative z-10 letter-container">
            <h1
              className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-amber-900 mb-4 sm:mb-6"
              style={{ fontFamily: '"Dancing Script", cursive' }}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              To my Girlfriend,
            </h1>

            <p
              className="text-base sm:text-lg font-serif text-amber-900 mb-3 sm:mb-4 leading-relaxed"
              style={{ fontFamily: '"Nanum Pen Script", cursive' }}
              data-aos="fade-up"
              data-aos-delay="250"
            >
              Hey Baby,
            </p>
            <p
              className="text-base sm:text-lg font-serif text-amber-900 mb-3 sm:mb-4 leading-relaxed"
              style={{ fontFamily: '"Nanum Pen Script", cursive' }}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Ami jani ami toke Girlfriend's Day er dine time e wish korte
              parini, and honestly, amar nijer e kharap lagchhe. Sorry for being
              late,. Pata hai tui amar jonne shudhu girlfriend na tui amar
              comfort zone, amar inspiration, amar shanti, amar sob kichu.
            </p>
            <p
              className="text-base sm:text-lg font-serif text-amber-900 mb-3 sm:mb-4 leading-relaxed"
              style={{ fontFamily: '"Nanum Pen Script", cursive' }}
              data-aos="fade-up"
              data-aos-delay="350"
            >
              Tai ekhon dil se bolchi,
              <br />
              Happy Girlfriend's Day, Baby.
              <br />
              Tui amar ekta part na, tui amar pura story.
              <br />
              Toke niye chinta korle mon santo hoye jai, aar sob kichu
              manageable mone hoy.
              <br />
              Aar ektu ektu kore amra ja build korechi seta amar jiboner best
              feeling.
            </p>
            <p
              className="text-base sm:text-lg font-serif text-amber-900 mb-3 sm:mb-4 leading-relaxed"
              style={{ fontFamily: '"Nanum Pen Script", cursive' }}
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Abar sorry je ei wish ta deri te ashchhe.
              <br />
              But next time, calendar set kore rakbo, so that tor haat dhore
              first message ami e di.
            </p>
            <p
              className="text-base sm:text-lg font-serif text-amber-900 mb-3 sm:mb-4 leading-relaxed"
              style={{ fontFamily: '"Nanum Pen Script", cursive' }}
              data-aos="fade-up"
              data-aos-delay="450"
            >
              Love you, always.
              <br />
              Khub valobasi re toke ❤️
            </p>

            <div
              className="mt-6 sm:mt-8"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <p
                className="text-xl sm:text-2xl font-serif text-amber-900"
                style={{ fontFamily: '"Dancing Script", cursive' }}
              >
                With all my love,
              </p>
            </div>

            {/* Ink blot */}
            
          </div>
        </div>

        {/* Wax seal - with animation */}
        <div
          className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-12 h-12 sm:w-16 sm:h-16 bg-red-700 rounded-full flex items-center justify-center shadow-md"
          data-aos="zoom-in"
          data-aos-delay="800"
          data-aos-anchor=".letter-container"
        >
          <div className="w-8 h-8 sm:w-12 sm:h-12 border-2 border-red-300 rounded-full flex items-center justify-center">
            <span className="text-white font-serif text-lg sm:text-xl font-bold">
              🤍
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Letter;
