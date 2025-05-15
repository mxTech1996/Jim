import { dataSite } from '@/data';

export default function TopSection() {
  return (
    <section className='container mx-auto px-4 py-12 text-center'>
      <h2 className='text-3xl font-serif text-gray-800'>
        Elevating Vehicle Performance:{' '}
        <span className='text-orange-500'>Our Mechanical Repair Expertise</span>
      </h2>
      <p className='mt-4 max-w-2xl mx-auto text-gray-600'>
        At AutoPro Mechanics, we are committed to revolutionizing the way you
        maintain and repair your vehicles. Our mission is to deliver reliable
        mechanical services for cars and trucks, helping you stay safe and on
        the road without interruptions.
      </p>

      <div className='mt-12 flex flex-col lg:flex-row gap-8'>
        {/* Video Placeholder */}
        <div className='flex-1 rounded-xl overflow-hidden relative'>
          <img
            src={dataSite.services[0].image}
            alt='Workshop'
            className='w-full h-full object-cover'
          />
        </div>

        {/* Testimonial Card */}
        <div className='flex-1 bg-orange-50 p-6 rounded-xl text-left'>
          <h3 className='font-serif text-xl mb-4'>
            {dataSite.services[0].title}
          </h3>
          <div className='relative rounded-xl overflow-hidden'>
            <img
              src={dataSite.image_hero2}
              alt='Testimonial'
              className='w-full h-full object-cover'
            />
            <div className='absolute inset-0 bg-black/50 flex items-center justify-center p-4 text-white text-sm'>
              {dataSite.services[0].description}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
