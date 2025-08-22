import React from 'react';
import ProductDetailPage from './ProductDetail';
import { Product } from '@/types/productTypes';

type PageProps = {
  params: Promise<{ id: string }>;
};

// --- Fetch product data ---
async function getProductData(id: string) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await res.json();
  return data;
}




// --- Page Component ---
export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const productdata = await getProductData(id);

  return (
    <div>
      <ProductDetailPage productdata={productdata} />
    </div>
  );
}
