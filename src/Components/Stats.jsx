import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import "../Styles/Stats.css";
function Number({ n, startAnimation }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: startAnimation ? n : 0,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });

  return <animated.span>{number.to((n) => n.toFixed(0))}</animated.span>;
}

Number.propTypes = {
  n: PropTypes.number.isRequired,
  startAnimation: PropTypes.bool.isRequired,
};

const First = () => {
  const stats = [
    {
      title: 'Registrations',
      value: 200,
      description: '200+ registrations from across the country.',
    },
    {
      title: 'Offline Participants',
      value: 100,
      description: '100+ participants joined the offline hackathon!',
    },
    {
      title: 'Volunteers',
      value: 20,
      description: 'To help you, get the best out of HackTheChain3.O.',
    },
    {
      title: 'Projects',
      value: 50,
      description: 'Innovative submissions from various domains.',
    },
  ];

  return (
    <div className="bg-black font-sans text-white py-40">
      <div className="container bg-black mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <StatCard key={index} title={stat.title} value={stat.value} description={stat.description} />
        ))}
      </div>
    </div>
  );
};

function StatCard({ title, value, description }) {
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
    onChange: (inView) => {
      if (inView) setHasAnimated(true);
    },
  });

  return (
    <div ref={ref} className="text-center">
      <h2 className="text-4xl font-medium mb-2">
        <span className='number text-4xl bg-clip-text text-transparent leading-normal font-semibold'>
          <Number n={value} startAnimation={hasAnimated} />+
        </span>
      </h2>
      <p className="text-xl font-medium font-sans mb-1">{title}</p>
      <p className="text-gray-400 font-sans">{description}</p>
    </div>
  );
}

StatCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default First;
