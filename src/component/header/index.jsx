import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../../context/cartContext';
import CartModal from '../cartModal';

const Header = () => {
  const { state } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <header className="bg-amber-900 text-white py-4 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-wide">
            GondorChic
          </h1>
          
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-3 bg-amber-800 hover:bg-amber-700 rounded-xl transition-all duration-200 transform hover:scale-105 focus:ring-4 focus:ring-amber-300"
          >
            <ShoppingCart className="w-6 h-6" />
            {state.itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
                {state.itemCount}
              </span>
            )}
          </button>
        </div>
      </header>
      
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Header;