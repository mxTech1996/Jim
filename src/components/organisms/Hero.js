import { dataSite } from '@/data';

export default function HeroIntegrationRevolution() {
  return (
    <section className='relative  h-[600px] overflow-hidden rounded-2xl mx-20'>
      <img
        src={dataSite.image_hero}
        alt='Integration Revolution'
        className='absolute inset-0 w-full h-full object-cover'
      />
      <div className='absolute bottom-10 left-10 max-w-xl bg-[#02414C] text-white p-6 rounded-lg'>
        <h1 className='text-3xl font-serif mb-4 leading-snug'>
          <span className='text-yellow-400'>{dataSite.subtitle}</span>
        </h1>
        <p className='text-sm leading-relaxed'>{dataSite.description}</p>
      </div>
    </section>
  );
}
