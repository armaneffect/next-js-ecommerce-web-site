import React from 'react';
import ProductDetailPage from './ProductDetail';

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: PageProps) {
  // await করতে হবে কারণ params এখন Promise
  const { id } = await params;

  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await res.json();

  return (
    <div>
      <ProductDetailPage productdata={data} />
    </div>
  );
}
