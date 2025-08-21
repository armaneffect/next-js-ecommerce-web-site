import React from 'react'
import ProductDetailPage from './ProductDetail'

interface Props {
  params: { id: string };
}

export default async function page({params:{id}}: Props) {
    const res = await fetch(`https://dummyjson.com/products/${id}`)
    const data = await res.json()
  return (
   <div>
  <ProductDetailPage productdata={data}></ProductDetailPage>
   </div>
  )
}
