import React from 'react';
import ProductDetailPage from './ProductDetail';
import { Product } from '@/types/productTypes';

type PageProps = {
  params: Promise<{ id: string }>;
};

// --- Fetch product data ---
async function getProductData(id: string): Promise<Product> {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await res.json();
  return data;
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const product = await getProductData(params.id);

  return {
    title: product.title,
    description: product.description,
    openGraph: {
      title: product.title,
      description: product.description,
      url: `https://armaneffect.vercel.app/products/${params.id}`,
      images: [
        {
          url: product.thumbnail || product.images[0],
          width: 800,
          height: 600,
        },
      ],
      locale: 'en_US',
      type: 'website', // ✅ product এর জায়গায় website ব্যবহার
    },
    twitter: {
      card: 'summary_large_image',
      title: product.title,
      description: product.description,
      images: [product.thumbnail || product.images[0]],
    },
  };
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
