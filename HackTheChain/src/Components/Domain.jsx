import React from "react";

const Domains = () => {
  const domains = [
    {
      id: "1",
      title: "WEB DEVELOPMENT",
      description:
        "Develop innovative solutions that use web technologies to solve problems efficiently and bring meaningful innovation to benefit users.",
    },
    {
      id: "2",
      title: "APP DEVELOPMENT",
      description:
        "Develop innovative solutions using app development technologies to solve problems and bring impactful innovation to users.",
    },
    {
      id: "3",
      title: "AI/ML",
      description:
        "Leverage Generative AI and Machine Learning to develop apps that enhance automation, analysis, and decision-making.",
    },
    {
      id: "4",
      title: "ETHEREUM & BLOCKCHAIN",
      description:
        "This track is for Ethereum ecosystem projects, including those on EVM-compatible chains like Arbitrum, Polygon, Optimism, etc.",
    },
    {
      id: "5",
      title: "BUSINESS INNOVATION",
      description:
        "Tackle real-world business challenges and develop innovative solutions that can be scaled into full-fledged startups.",
    },
    {
      id: "6",
      title: "OPEN",
      description:
        "This track welcomes diverse and boundary-pushing ideas, using emerging technologies.",
    },
  ];

  return (
    <div className="flex flex-col items-center p-10 min-h-screen text-white">
      <h1
        className="text-5xl sm:text-xl md:text-2xl lg:text-7xl m-3 font-bold text-white newfont"
        style={{
          textShadow:
            "0 0 5px  rgba(69, 248, 130, 0.66), 0 0 10px  rgba(69, 248, 130, 0.66), 0 0 20px  rgba(69, 248, 130, 0.66), 0 0 40px rgba(69, 248, 130, 0.66)",
        }}
      >
        DOMAIN
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {domains.map((domain) => (
          <div
            key={domain.id}
            className="relative bg-gray-800 p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:border-4 hover:border-[#45f882] hover:box-border"
          >
            {/* Top Left Icon */}
            <span className="absolute top-3 left-3">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="green"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2L2 14H9V22L19 10H12V2Z" fill="#808080" />
                <path
                  d="M12 2L2 14H9V22L19 10H12V2Z"
                  stroke="#000"
                  strokeWidth="3"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 2L2 14H9V22L19 10H12V2Z"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </svg>
            </span>

            {/* Card Content */}
            <h2 className="text-xl font-bold mb-2 ml-10">{domain.title}</h2>
            <p className="text-sm leading-relaxed">{domain.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Domains;
