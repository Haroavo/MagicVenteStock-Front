import React from 'react';
import { Package } from 'lucide-react';

const ProductDisplay = () => {
  const product = {
    name: 'Sacoche en Cuir du Gondor',
    price: 89.99,
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl">
      <h2 className="text-2xl font-bold text-amber-800 mb-6 border-b border-amber-200 pb-3">
        Produit du Jour
      </h2>
      
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        <div className="flex-1 bg-gray-100 rounded-xl p-8 min-h-[300px] flex items-center justify-center">
          <div className="text-center">
            <Package className="w-32 h-32 text-amber-700 mx-auto mb-4" />
            <p className="text-gray-600 text-sm">Image du produit</p>
          </div>
        </div>
        
        <div className="flex-1 space-y-6">
          <h3 className="text-2xl font-bold text-gray-800">
            {product.name}
          </h3>
          
          <div className="text-4xl font-bold text-amber-700">
            {product.price.toFixed(2)} €
          </div>
          
          <div className="flex items-center gap-2 text-amber-600">
            <Package className="w-5 h-5" />
            <span className="font-medium">Stock disponible: 12 unités</span>
          </div>
          
          <div className="pt-4">
            <p className="text-gray-600 leading-relaxed">
              Une magnifique sacoche en cuir véritable inspirée des traditions artisanales du Gondor. 
              Finitions soignées et design intemporel pour un accessoire d'exception.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;