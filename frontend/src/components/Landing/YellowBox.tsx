import React, { useState } from 'react';

const YellowBox: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-yellow-400 p-8 h-full">
      <h2 className="text-3xl font-extrabold mb-4 text-center">Benefits of our coworking spaces.</h2>
      <div className="space-y-2">
        {[
          { title: 'Solopreneurs', content: 'No Lock-in’s, Negligible deposit, 60 Seconds to sign up.' },
          { title: 'Teams', content: 'For small businesses or teams of any size, we are a coworking space that can customize and built to suit any requirement for teams. Our coworking spaces are a great way to stay productive.' },
          { title: 'Large Businesses', content: 'Doesn’t matter the size, we can accommodate multiple teams with varying needs, requiring increased functionality. Do ask for our customized solutions or exclusive managed offices.' },
        ].map((item, index) => (
          <div key={index} className="border-b bg-white p-3 border-gray-300 xl:mt-20">
            <button
              className="flex justify-between items-center w-full py-4 text-left"
              onClick={() => toggleAccordion(index)}
            >
              <span className="font-semibold">{item.title}</span>
              <span>{activeIndex === index ? '-' : '+'}</span>
            </button>
            {activeIndex === index && (
              <div className="py-2">
                <p className='text-slate-400'>{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default YellowBox;
