import React from 'react';
import CountUp from 'react-countup';


function NumberCounter() {
  const Counter = ({ end, label }) => {
    return (
      <div className="text-center mx-8">
        <h2 className="text-red-600 text-4xl font-bold font-serif">
          <CountUp end={end} duration={2.5} />
          {label.includes('%') ? '%' : '+'}
        </h2>
        <p className="text-black text-lg mt-2">{label}</p>
      </div>
    );
  };

  return (
    <div className="bg-pink-100 py-20">
      <div className="flex justify-center">
        <Counter end={115} label="Branch Shop" />
        <span className="text-red-600 text-4xl mx-4">~~</span>
        <Counter end={85} label="Staffs" />
        <span className="text-red-600 text-4xl mx-4">~~</span>
        <Counter end={120} label="Flavor Variants " />
        <span className="text-red-600 text-4xl mx-4">~~</span>
        <Counter end={90} label="Positive Review (%)" />
      </div>
    </div>
  );
}

export default NumberCounter;