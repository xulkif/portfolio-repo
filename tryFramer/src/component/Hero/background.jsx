import React from 'react';
import { motion } from 'framer-motion';

const MovingBackground = () => {
  const stars = Array.from({ length: 80 }).map((_, index) => ({
    id: index,
    size: Math.random() * 5 + 1, // Random size between 1 and 4
    top: Math.random() * 100 // Random vertical position between 0 and 100%
  }));

  return (
    <div className="absolute inset-0 overflow-hidden h-screen z-0">
      {stars.map(star => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: `${star.top}vh`, // Use the random vertical position
          }}
          initial={{ x: '-10vw', opacity: 0 }}
          animate={{ x: '110vw', opacity: 1 }}
          transition={{
            duration: 5 + Math.random() * 5, 
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      ))}
    </div>
  );
};

export default MovingBackground;