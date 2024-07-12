import React from 'react';
import { vid } from '../../utils/Landing/Landing';
import { background2 } from '../../utils/Landing/Landing';

const Random: React.FC = () => {
  return (
    <div className="font-Convergence bg-yellow-100" style={{ backgroundImage:`url(${background2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="container mx-auto py-8 px-4">
        <div className="text-center md:text-left md:flex md:flex-col md:items-center md:justify-between mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-0">
            603 is changing the way people and companies work.
          </h1>
          <div className="w-full md:w-1/3 md:mt-6">
            <div className="relative">
              <iframe
                className="w-full h-48 md:h-64"
                src={vid}
                title="Video"
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        

        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-800 text-lg mb-4 md:mb-0">Be notified about new locations</p>
          <form className="w-full md:w-auto flex flex-col md:flex-row items-center">
            <input
              type="email"
              placeholder="Enter E-Mail Address"
              className="border border-gray-300 rounded px-4 py-2 mb-4 md:mb-0 md:mr-4 w-full md:w-64"
            />
            <button className="bg-red-500 text-white rounded px-4 py-2 w-full md:w-auto">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Random;
