import React from 'react'
import { Product } from '@/types/productTypes';
import ProductCard from './ProductCart';

//=====

const Latest = async () => {
  const res = await fetch('https://dummyjson.com/products', {
    cache: "no-store"
  });
  const data = await res.json();

  return (
    <div className='mt-8 pb-8 mx-2'>
      <h1 className="text-2xl font-bold">Latest News</h1>

      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-3 mt-8 mx-2'>
        {data?.products?.slice(0, 12).map((item: Product) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  )
}

export default Latest;
