'use client';

import { dataSite } from '@/data';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const services = dataSite.services;
export default function ServiceCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(1); // Center item by default

  const visibleItems = services.slice(activeIndex, activeIndex + 3);

  const goNext = () => {
    if (activeIndex + 3 < services.length) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const goPrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const handleSelect = (index) => {
    if (index < activeIndex) {
      setActiveIndex(index);
      setSelectedIndex(index);
    } else if (index > activeIndex + 2) {
      setActiveIndex(index - 2);
      setSelectedIndex(index);
    } else {
      setSelectedIndex(index);
    }
  };

  return (
    <>
      <div className='pt-32 bg-[#f0fdf4] px-6 l width-full text-center'>
        <h2 className='self-center text-3xl font-bold'>Our Services</h2>
      </div>

      <div
        id='services'
        className='bg-[#f0fdf4] relative flex items-center justify-center gap-4 py-20'
      >
        <button
          onClick={goPrev}
          disabled={activeIndex === 0}
          className='absolute left-48 top-1/2 -translate-y-1/2 bg-black text-white p-2 rounded-full disabled:opacity-50'
        >
          <FaChevronLeft />
        </button>

        <div className='flex gap-4 overflow-hidden'>
          {visibleItems.map((item, idx) => {
            const globalIndex = activeIndex + idx;
            const isActive = globalIndex === selectedIndex;
            return (
              <div
                key={item.title}
                onClick={() => handleSelect(globalIndex)}
                className={`relative rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                  isActive ? 'w-64 h-96' : 'w-48 h-80 opacity-60'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className='w-full h-full object-cover'
                />
                {isActive && (
                  <div className='absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 text-sm'>
                    <h3 className='font-bold'>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <button
          onClick={goNext}
          disabled={activeIndex + 3 >= services.length}
          className='absolute right-48 top-1/2 -translate-y-1/2 bg-black text-white p-2 rounded-full disabled:opacity-50'
        >
          <FaChevronRight />
        </button>
      </div>
    </>
  );
}
