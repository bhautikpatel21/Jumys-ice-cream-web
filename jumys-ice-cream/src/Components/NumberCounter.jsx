import React from 'react';
import CountUp from 'react-countup';

function NumberCounter({ startCounting }) {
  const Counter = ({ end, label }) => {
    return (
      <div className="text-center mx-4 sm:mx-6 md:mx-8 lg:mx-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-red-600">
          {startCounting ? <CountUp end={end} duration={2.5} /> : 0}
          {label.includes('%') ? '%' : '+'}
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-black mt-2">{label}</p>
      </div>
    );
  };

  return (
    <div className="bg-pink-100 py-10 sm:py-14 md:py-16 lg:py-20">
      <div className="flex flex-wrap justify-center items-center">
        <Counter end={115} label="Branch Shop" />
        <span className="text-red-600 text-3xl sm:text-4xl md:text-5xl lg:text-6xl mx-2 sm:mx-4 md:mx-6 lg:mx-8">~~</span>
        <Counter end={85} label="Staffs" />
        <span className="text-red-600 text-3xl sm:text-4xl md:text-5xl lg:text-6xl mx-2 sm:mx-4 md:mx-6 lg:mx-8">~~</span>
        <Counter end={120} label="Flavor Variants" />
        <span className="text-red-600 text-3xl sm:text-4xl md:text-5xl lg:text-6xl mx-2 sm:mx-4 md:mx-6 lg:mx-8">~~</span>
        <Counter end={90} label="Positive Review (%)" />
      </div>
    </div>
  );
}

export default NumberCounter;
