import React from 'react';
import NewsSearch from './NewsSearch';
import Category from '@/components/Category';
import ProductCard from '@/components/ProductCart';
import { Product } from '@/types/productTypes';

type PageProps = {
  searchParams: Promise<{ search?: string; category?: string }>;
};

export const metadata = {
  title: 'Products',
  description: 'Browse our collection of products.',
  openGraph: {
    title: 'Products',
    description: 'Browse our collection of products.',
    url: 'https://armaneffect.vercel.app/products',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Products',
    description: 'Browse our collection of products.',
  },
};

const Newspage = async ({ searchParams }: PageProps) => {
  // 🔥 এখানে একবার await করতে হবে
  const { search, category } = await searchParams;

  const searchTerm: string = search || "";

  const res = await fetch(
    category
      ? `https://dummyjson.com/products/category/${category}`
      : `https://dummyjson.com/products/search?q=${searchTerm}`
  );

  const data = await res.json();

  return (
    <div>
      <div className="flex items-center">
        <NewsSearch />
        <Category />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8 mx-2">
        {data.products.map((item: Product) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Newspage;
