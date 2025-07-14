// Portfolio.js
import React from 'react';
import MovingBackground from './background';

const Portfolio = () => {
  return (
    <div className="relative h-screen bg-slate-900 overflow-hidden">
    
      <div className="relative z-10 text-white p-8">
        <h1 className="text-5xl font-bold">My Portfolio</h1>
        <p className="mt-4">Here are some of my projects...</p>
        {/* Add your content here */}
      </div>
    </div>
  );
};

export default Portfolio;