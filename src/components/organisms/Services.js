'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { dataSite } from '@/data';

const services = dataSite.services;

export default function CarouselWithDepthEffect() {
  const [activeIndex, setActiveIndex] = useState(1);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  const handleSelect = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className='flex flex-col items-center space-y-6'>
      <h2 className='text-3xl font-bold text-center mb-4'>Our Services</h2>
      <div className='relative flex items-center justify-center space-x-4'>
        <button onClick={handlePrev}>&lt;</button>
        <div className='flex space-x-4'>
          {services.map((service, index) => {
            const isActive = index === activeIndex;
            return (
              <motion.div
                key={service.title}
                onClick={() => handleSelect(index)}
                whileHover={{ scale: 1.05 }}
                className={`relative rounded-xl overflow-hidden cursor-pointer transition-all duration-500 ${
                  isActive
                    ? 'w-[300px] h-[450px] scale-100 shadow-xl'
                    : 'w-[200px] h-[350px] scale-90 opacity-50 blur-sm'
                }`}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className='w-full h-full object-cover'
                />
                {isActive && (
                  <div className='absolute bottom-0 bg-black/60 text-white p-4 w-full'>
                    <h3 className='font-bold'>{service.title}</h3>
                    <p className='text-sm'>{service.description}</p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
        <button onClick={handleNext}>&gt;</button>
      </div>
    </section>
  );
}
