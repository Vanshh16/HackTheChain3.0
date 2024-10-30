import React from 'react';

const Sponsors = () => {
  return (
    <section id="sponsors" className="bg-gray-100 py-12 text-center min-h-screen mt-16">
      <h1 className="text-4xl mb-5">Our Sponsors</h1>
      <p className="text-lg text-gray-600 mb-10">
        We are grateful to our sponsors for their generous support.
      </p>
      <div className="flex justify-center gap-5 flex-wrap">
        <div className="bg-gray-300 p-5 rounded-lg w-36 text-center shadow-lg hover:bg-gray-400 transition-colors duration-300">
          Sponsor 1
        </div>
        <div className="bg-gray-300 p-5 rounded-lg w-36 text-center shadow-lg hover:bg-gray-400 transition-colors duration-300">
          Sponsor 2
        </div>
        <div className="bg-gray-300 p-5 rounded-lg w-36 text-center shadow-lg hover:bg-gray-400 transition-colors duration-300">
          Sponsor 3
        </div>
        <div className="bg-gray-300 p-5 rounded-lg w-36 text-center shadow-lg hover:bg-gray-400 transition-colors duration-300">
          Sponsor 4
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
