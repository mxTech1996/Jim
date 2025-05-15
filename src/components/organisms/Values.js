import { dataSite } from '@/data';

export default function Values() {
  const info = dataSite.info;

  return (
    <section id='values' className='bg-[#354D57] py-12 px-6 text-white'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-3xl font-bold mb-2'>
          Supporting Your Journey: Assistance Every{' '}
          <span className='text-yellow-300'>Step of the Way</span>
        </h2>
        <div className='mt-8 divide-y divide-gray-500/50'>
          {info.map((item, index) => (
            <div
              key={index}
              className='py-8 grid md:grid-cols-12 gap-4 items-start'
            >
              <div className='flex items-center space-x-4 md:col-span-3'>
                <div className='bg-yellow-300 text-black font-bold rounded-full w-10 h-10 flex items-center justify-center'>
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className='uppercase font-semibold tracking-wide'>
                  {item.title}
                </h3>
              </div>
              <div className='md:col-span-9 whitespace-pre-line'>
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
