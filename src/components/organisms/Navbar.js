import { dataSite } from '@/data';
import { useCart } from 'ecommerce-mxtech';
import { FiShoppingCart } from 'react-icons/fi';

export default function CenteredLogoNavbar() {
  const { products } = useCart();
  return (
    <header className='sticky top-0 bg-white z-50 shadow-sm'>
      <nav className='max-w-7xl mx-auto flex items-center justify-between px-4 py-3'>
        {/* Left Links */}
        <div className='flex items-center gap-8'>
          <span className='text-xs text-gray-400'>01</span>{' '}
          <button
            onClick={() => {
              window.location.href = '/#products';
            }}
          >
            Products
          </button>
          <span className='text-xs text-gray-400'>02</span>{' '}
          <button onClick={() => (window.location.href = '/#info')}>
            Company
          </button>
          <span className='text-xs text-gray-400'>03</span>{' '}
          <button onClick={() => (window.location.href = '/#services')}>
            Services
          </button>
        </div>

        {/* Center Logo */}
        <div className='text-xl font-bold row'>
          <img src={dataSite.iconImage} className='h-24' />
        </div>

        {/* Right Links + Cart */}
        <div className='flex items-center gap-8'>
          <span className='text-xs text-gray-400'>04</span>{' '}
          <button onClick={() => (window.location.href = '/#values')}>
            Why Us
          </button>
          <span className='text-xs text-gray-400'>05</span>{' '}
          <button onClick={() => (window.location.href = '/more-information')}>
            Contact Us
          </button>
          <button
            onClick={() => (window.location.href = '/my-cart')}
            aria-label='Cart'
            className='ml-4 text-xl relative'
          >
            <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1'>
              {products.length}
            </span>
            <FiShoppingCart />
          </button>
        </div>
      </nav>
    </header>
  );
}
