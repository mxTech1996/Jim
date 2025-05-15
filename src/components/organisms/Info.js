'use client';
import { dataSite } from '@/data';
import { FaTools, FaCarCrash, FaCogs, FaTruckMoving } from 'react-icons/fa';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function InfoSection() {
  return (
    <section className='bg-[#f0fdf4] py-12 px-6 rounded-xl'>
      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
        >
          <h2 className='text-3xl font-bold mb-4'>
            Complete Automotive & Truck Repair Solutions
          </h2>
          <p className='mb-6'>
            We provide specialized mechanical services for all types of vehicles
            — from passenger cars to heavy-duty trucks. Our expert team ensures
            your vehicle runs safely and efficiently with personalized repair
            and maintenance solutions.
          </p>
          <div className='flex gap-4'>
            <button className='bg-black text-white px-4 py-2 rounded-lg'>
              Our Services
            </button>
            <button className='border border-black px-4 py-2 rounded-lg'>
              Why Choose Us
            </button>
          </div>
        </motion.div>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          variants={fadeInUp}
          className='bg-white p-4 rounded-xl'
        >
          <img
            src={dataSite.services[2].image}
            alt='Team of Mechanics'
            className='rounded-lg'
          />
        </motion.div>
      </div>

      <div className='max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-4 gap-6'>
        {[
          {
            icon: <FaTools />,
            title: 'Diagnostics & Consultation',
            description:
              'We start with a full mechanical assessment to detect issues and recommend the best solutions.',
          },
          {
            icon: <FaCarCrash />,
            title: 'Accident Repairs',
            description:
              "From minor dents to major collision repairs, we restore your vehicle's safety and appearance.",
          },
          {
            icon: <FaCogs />,
            title: 'Engine & Transmission',
            description:
              'Comprehensive repairs for engines, transmissions, and powertrain systems to keep you moving.',
          },
          {
            icon: <FaTruckMoving />,
            title: 'Truck Maintenance',
            description:
              'Heavy-duty services for commercial trucks, including suspension, brakes, and driveline repairs.',
          },
        ].map((service, index) => (
          <motion.div
            key={index}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            variants={fadeInUp}
            className='bg-transparent p-4 rounded-xl shadow border-2 border-[#02414C]'
          >
            <div className='text-3xl mb-2'>{service.icon}</div>
            <h3 className='font-bold text-lg mb-1'>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
