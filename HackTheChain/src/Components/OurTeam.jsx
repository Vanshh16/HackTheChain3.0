// import React, { useState, useEffect } from "react";
// import "../Styles/OurTeam.css";

// const teamData = [
//   { id: 1, name: "Dhruv Tiwari", imageUrl: "/pictures/dhruv.jpg", role: "Core Team" },
//   { id: 2, name: "Ashmit Singh", imageUrl: "/pictures/ashmit.jpg", role: "Core Team" },
//   { id: 3, name: "Ayush Kumar", imageUrl: "/pictures/ayushphto.jpg", role: "Core Team" },
//   { id: 4, name: "Yash Aggarwal", imageUrl: "/pictures/yash.jpg", role: "Core Team" },
//   { id: 5, name: "Vinay Kumar", imageUrl: "/pictures/vinay.jpg", role: "Lead Organiser" },
//   { id: 6, name: "Avinesh Rathore", imageUrl: "/pictures/avineshboss.jpg", role: "Lead Organiser" },
//   { id: 7, name: "Anany Srivastava", imageUrl: "/pictures/annay.jpg", role: "Lead Organiser" },
//   { id: 8, name: "Devansh Gupta", imageUrl: "/pictures/devanshboss.jpg", role: "Lead Organiser" },
//   { id: 9, name: "Prateek Singh", imageUrl: "/pictures/prateekboss.jpg", role: "Lead Organiser" },
//   { id: 10, name: "Vansh Nigam", imageUrl: "/pictures/vanshboss.jpg", role: "Lead Organiser" },
//   { id: 11, name: "Gopal Patidar", imageUrl: "/pictures/gopalboss.jpg", role: "Lead Organiser" },
//   { id: 12, name: "Jash Parmar", imageUrl: "/pictures/jashboss.jpg", role: "Lead Organiser" },
//   { id: 13, name: "Hari Om Meena", imageUrl: "/pictures/hariboss.jpg", role: "Lead Organiser" },
//   { id: 14, name: "Om", imageUrl: "/pictures/omboss.jpg", role: "Lead Organiser" }
// ];

// const CarouselSection = ({ title, members }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % members.length);
//     }, 3000); // Change slide every 3 seconds

//     return () => clearInterval(timer);
//   }, [members.length]);

//   return (
//     <div className="mb-12">
//       <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
//       <div className="relative w-64 h-64 mx-auto">
//         {members.map((member, index) => (
//           <div
//             key={member.id}
//             className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
//               index === currentIndex ? "opacity-100" : "opacity-0"
//             }`}
//           >
//             <div className="w-full h-full rounded-full overflow-hidden border-4 border-[rgb(72,255,148)] animate-spin-slow">
//               <img
//                 src={member.imageUrl}
//                 alt={member.name}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full border-4 border-[rgb(72,255,148)] animate-revolve">
//               <div className="w-full h-full rounded-full overflow-hidden">
//                 <img
//                   src={member.imageUrl}
//                   alt={member.name}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <p className="mt-4 text-sm font-semibold text-gray-700">{members[currentIndex].name}</p>
//     </div>
//   );
// };

// const OurTeam = () => {
//   const leadOrganisers = teamData.filter(member => member.role === "Lead Organiser");
//   const coreTeamMembers = teamData.filter(member => member.role === "Core Team");

//   return (
//     <div className="flex flex-col items-center bg-transparent px-4">
//            <h1
//   className="text-4xl sm:text-7xl md:text-8xl text-white font-bold mb-12"
//   style={{
//     textShadow:
//       "0 0 5px  rgba(69, 248, 130, 0.66), 0 0 10px  rgba(69, 248, 130, 0.66), 0 0 20px  rgba(69, 248, 130, 0.66), 0 0 40px rgba(69, 248, 130, 0.66)",
//   }}
// >
//   Our Team
// </h1>
//       <CarouselSection title="Lead Organisers" members={leadOrganisers} />
//       <CarouselSection title="Core Team Members" members={coreTeamMembers} />
//     </div>
//   );
// };

// export default OurTeam;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";
import "../Styles/OurTeam.css";

const teamData = [
  {
    id: 1,
    name: "Dhruv Tiwari",
    imageUrl: "/pictures/dhruv.jpg",
    role: "Core Team",
  },
  {
    id: 2,
    name: "Ashmit Singh",
    imageUrl: "/pictures/ashmit.jpg",
    role: "Core Team",
  },
  {
    id: 3,
    name: "Ayush Kumar",
    imageUrl: "/pictures/ayushphto.jpg",
    role: "Core Team",
  },
  {
    id: 4,
    name: "Yash Aggarwal",
    imageUrl: "/pictures/yash.jpg",
    role: "Core Team",
  },
  {
    id: 5,
    name: "Vinay Kumar",
    imageUrl: "/pictures/vinay.jpg",
    role: "Core Team",
  },
  {
    id: 6,
    name: "Avinesh Rathore",
    imageUrl: "/pictures/avineshboss.jpg",
    role: "Lead Organiser",
  },
  {
    id: 7,
    name: "Anany Srivastava",
    imageUrl: "/pictures/annay.jpg",
    role: "Lead Organiser",
  },
  {
    id: 8,
    name: "Devansh Gupta",
    imageUrl: "/pictures/devanshboss.jpg",
    role: "Lead Organiser",
  },
  {
    id: 9,
    name: "Prateek Singh",
    imageUrl: "/pictures/prateekboss.jpg",
    role: "Lead Organiser",
  },
  {
    id: 10,
    name: "Vansh Nigam",
    imageUrl: "/pictures/vanshboss.jpg",
    role: "Lead Organiser",
  },
  {
    id: 11,
    name: "Gopal Patidar",
    imageUrl: "/pictures/gopalboss.jpg",
    role: "Lead Organiser",
  },
  {
    id: 12,
    name: "Jash Parmar",
    imageUrl: "/pictures/jashboss.jpg",
    role: "Lead Organiser",
  },
  {
    id: 13,
    name: "Hari Om Meena",
    imageUrl: "/pictures/hariboss.jpg",
    role: "Lead Organiser",
  },
  {
    id: 14,
    name: "Om",
    imageUrl: "/pictures/omboss.jpg",
    role: "Lead Organiser",
  },
];

const TeamCarousel = ({ title, members, perview }) => {
  return (
    <div className="team-carousel mb-12 w-full max-w-4xl">
      <h2
        className="text-3xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-white text-center mb-6"
        style={{
          textShadow:
            "0 0 5px  rgba(69, 248, 130, 0.66), 0 0 10px  rgba(69, 248, 130, 0.66), 0 0 20px  rgba(69, 248, 130, 0.66), 0 0 40px rgba(69, 248, 130, 0.66)",
        }}
      >
        {title}
      </h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={perview}
        navigation={false}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        {members.map((member) => (
          <SwiperSlide key={member.id} className="text-center">
            <div className="image-container">
              <img src={member.imageUrl} alt={member.name} />
            </div>
            <p className="name">{member.name}</p>
            <p className="role">{member.role}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const OurTeam = () => {
  const leadOrganisers = teamData.filter(
    (member) => member.role === "Lead Organiser"
  );
  console.log(leadOrganisers);
  const coreTeamMembers = teamData.filter(
    (member) => member.role === "Core Team"
  );
  console.log(coreTeamMembers);
  return (
    <div className="flex flex-col items-center bg-transparent px-4 py-10">
      <h1
        className="text-4xl sm:text-7xl md:text-8xl text-white font-bold mb-12"
        style={{
          textShadow:
            "0 0 5px rgba(69, 248, 130, 0.66), 0 0 10px rgba(69, 248, 130, 0.66), 0 0 20px rgba(69, 248, 130, 0.66), 0 0 40px rgba(69, 248, 130, 0.66)",
        }}
      >
        Our Team
      </h1>
      <TeamCarousel
        title="Lead Organisers"
        members={leadOrganisers}
        perview={4}
      />
      <TeamCarousel
        title="Core Team Members"
        members={coreTeamMembers}
        perview={4}
      />
    </div>
  );
};

export default OurTeam;
