import React from 'react';

const Sponsors = () => {
  return (
    <section className="w-full min-h-[100vh] bg-black overflow-x-hidden ">
    <div className="text-white">
      <div className="container mx-auto py-20 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold">Sponsors</h1>
        <p className="text-gray-400 mt-5 text-2xl md:text-xl">
          Today, we bring you the opportunity to collaborate with us on our
          next endeavor.
          <a href="#" className="underline ml-1 text-white
">
            Sponsor Us
          </a>
        </p>

        {/* Platinum Sponsor */}
        <div className="relative w-[90%] mx-auto mt-10 md:mt-16 px-6 md:px-[60px] py-3 md:py-[23px] rounded-2xl bg-[linear-gradient(182deg,_rgb(70,70,70)_-65%,_rgba(70,70,70,0.15)_98.55%)] hover:bg-[linear-gradient(rgba(53,225,255,0.4)_-50%,_rgba(58,58,58,0.15)_50%)] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-lg before:bg-[linear-gradient(rgba(53,225,255,0.4)_-6.4%,_rgba(58,58,58,0.15)_99.89%)] before:transition-opacity before:duration-500 before:ease-linear before:opacity-0 hover:before:opacity-100 backdrop-blur-0 before:bg-opacity-30">
          <div className="flex flex-col items-center text-center gap-4 md:gap-6">
            <h3 className="text-3xl md:text-4xl font-extrabold hover:text-black pt-6 md:pt-8">Platinum Sponsor</h3>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center justify-center my-2">
                <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://res.cloudinary.com/dkpdi1wek/image/upload/v1708786569/download__3_-removebg-preview_otfa7p.png"
                    alt="MongoDB"
                    className="h-32 md:h-40 lg:h-48 object-contain"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Diamond Sponsors */}
        <div className="relative w-[90%] mx-auto mt-10 md:mt-16 px-6 md:px-[60px] py-4 md:py-[26px] rounded-2xl bg-[linear-gradient(182deg,_rgb(70,70,70)_-65%,_rgba(70,70,70,0.15)_98.55%)] hover:bg-[linear-gradient(rgba(53,225,255,0.4)_-50%,_rgba(58,58,58,0.15)_50%)] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-lg before:bg-[linear-gradient(rgba(20,241,149,0.4)_0%,_rgba(58,58,58,0.15)_100%)] before:transition-opacity before:duration-500 before:ease-linear before:opacity-0 hover:before:opacity-100 backdrop-blur-0 before:bg-opacity-30">
          <div className="flex flex-col items-center text-center gap-4 md:gap-6">
            <h3 className="text-3xl md:text-4xl font-extrabold hover:text-green-400 pt-6 md:pt-8">Diamond Sponsors</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <a href="https://quine.sh/" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://res.cloudinary.com/dzxgf75bh/image/upload/v1702202813/HackNitr/Sponsor%20Section/jsvurmvvk3nrr4lmncy9.png"
                  alt="Quine"
                  className="w-32 md:w-40 h-8 md:h-10"
                />
              </a>
              <a href="https://www.taipy.io/" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://res.cloudinary.com/dhnkuonev/image/upload/v1708441978/Square_White_u3qnii.png"
                  alt="Taipy"
                  className="w-32 md:w-40 h-32"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Gold Sponsor */}
        <div className="relative w-[90%] mx-auto mt-10 md:mt-16 px-6 md:px-[60px] py-4 md:py-[26px] rounded-2xl bg-[linear-gradient(182deg,_rgb(70,70,70)_-65%,_rgba(70,70,70,0.15)_98.55%)] hover:bg-[linear-gradient(rgba(255,63,192,0.6)_-50%,_rgba(58,58,58,0.15)_50%)] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-lg before:bg-[linear-gradient(rgba(255,63,192,0.6)_0%,_rgba(58,58,58,0.15)_100%)] before:transition-opacity before:duration-500 before:ease-linear before:opacity-0 hover:before:opacity-100 backdrop-blur-0 before:bg-opacity-30">
          <div className="flex flex-col items-center text-center gap-4 md:gap-6">
            <h3 className="text-3xl md:text-4xl font-extrabold hover:text-pink-400 pt-6 md:pt-8">Gold Sponsor</h3>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center justify-center my-2">
                <a href="https://polygon.technology/" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://res.cloudinary.com/dzxgf75bh/image/upload/v1702202903/HackNitr/Sponsor%20Section/xpipftsfivsn4l1rhxot.png"
                    alt="Polygon"
                    className="h-32 md:h-40 lg:h-48 object-contain"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Other and Campus Sponsors */}
        <div className="flex flex-col md:flex-row mx-auto text-center gap-y-6 md:gap-6 w-[90%] pt-10 md:pt-14">
          <div className="p-4 w-full md:w-1/2 mx-auto h-72 md:h-72 lg:h-80 rounded-lg bg-[linear-gradient(182deg,_rgb(70,70,70)_-65%,_rgba(70,70,70,0.15)_98.55%)] hover:bg-[linear-gradient(rgba(176,103,255,0.6)_-50%,rgba(58,58,58,0.15)_50%)] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-lg before:bg-[linear-gradient(rgba(176,103,255,0.6)_0%,rgba(58,58,58,0.15)_100%)] before:transition-opacity before:duration-500 before:ease-linear before:opacity-0 hover:before:opacity-100 backdrop-blur-0 before:bg-opacity-30">
            <h4 className="text-2xl md:text-3xl font-extrabold hover:text-purple-400 pt-20 md:pt-24">Other Sponsors</h4>
            <div className="flex items-center justify-center my-2">
              <a href="https://replit.com" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://res.cloudinary.com/dhnkuonev/image/upload/v1707708337/replit-light_mhki6f.png"
                  alt="Replit"
                  className="h-8 md:h-10"
                />
              </a>
            </div>
          </div>
          <div className="p-4 w-full md:w-1/2 mx-auto h-72 md:h-72 lg:h-80 rounded-lg bg-[linear-gradient(182deg,rgb(70,70,70)-65%,rgba(70,70,70,0.15)98.55%)] hover:bg-[linear-gradient(rgba(255,63,192,0.6)_-50%,rgba(58,58,58,0.15)_50%)] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-lg before:bg-[linear-gradient(rgba(255,63,192,0.6)_0%,rgba(58,58,58,0.15)_100%)] before:transition-opacity before:duration-500 before:ease-linear before:opacity-0 hover:before:opacity-100 backdrop-blur-0 before:bg-opacity-30">
            <h4 className="text-2xl md:text-3xl font-extrabold hover:text-pink-400 pt-20 md:pt-24">Campus Sponsors</h4>
            <div className="flex items-center justify-center my-2">
              <a href="https://solidityscan.com/" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://res.cloudinary.com/dhnkuonev/image/upload/v1702277604/qoug3sk1aze8uikcseow.png"
                  alt="Solidity Scan"
                  className="h-8 md:h-10"
                />
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
  );
};

export default Sponsors;
