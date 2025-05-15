import { dataSite } from '@/data';
import { FiShoppingCart } from 'react-icons/fi';

export default function CenteredLogoNavbar() {
  return (
    <header className='sticky top-0 bg-white z-50 shadow-sm'>
      <nav className='max-w-7xl mx-auto flex items-center justify-between px-4 py-3'>
        {/* Left Links */}
        <div className='flex items-center gap-8'>
          <span className='text-xs text-gray-400'>01</span>{' '}
          <button>Demos</button>
          <span className='text-xs text-gray-400'>02</span>{' '}
          <button>Company</button>
          <span className='text-xs text-gray-400'>03</span>{' '}
          <button>Compare</button>
        </div>

        {/* Center Logo */}
        <div className='text-xl font-bold row'>
          <img src={dataSite.iconImage} className='h-24' />
        </div>

        {/* Right Links + Cart */}
        <div className='flex items-center gap-8'>
          <span className='text-xs text-gray-400'>04</span>{' '}
          <button>All Pages</button>
          <span className='text-xs text-gray-400'>05</span>{' '}
          <button>Services</button>
          <span className='text-xs text-gray-400'>06</span>{' '}
          <button>Get Started</button>
          <button aria-label='Cart' className='ml-4 text-xl'>
            <FiShoppingCart />
          </button>
        </div>
      </nav>
    </header>
  );
}
