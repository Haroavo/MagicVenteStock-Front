import React from 'react';
import Header from '../header';
import { CartProvider } from '../../context/cartContext';
import ProductCard from '../productOfTheDay'
import Footer from '../footer';

const MainPage = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
        <Header />
        
        <main className="max-w-6xl mx-auto px-4 py-12">
          <ProductCard />
        </main>
        
        <Footer />
      </div>
    </CartProvider>
  );
};

export default MainPage;