import Image from 'next/image';
import React from 'react';
import { Product } from '@/types/productTypes';
import Link from 'next/link';


// Star icon component for ratings
const StarIcon = ({ filled }: { filled: boolean }) => (
    <svg
        className={`w-5 h-5 ${filled ? 'text-yellow-400' : 'text-gray-300'}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
    >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

// The main product card component
const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
    const { id, price, reviews, description, thumbnail, rating } = product;

    return (
        <div className="">
            <Link href={`/products/${id}`}>

                {/* Card Container */}
                <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden max-w-xs w-full">
                    {/* Product Image */}
                    <div className="relative">
                        <Image
                            className="w-full h-auto object-cover"
                            src={thumbnail}
                            alt="Digital Watch"
                            // onError={(e) => {
                            //   const target = e.target as HTMLImageElement;
                            //   target.onerror = null; // prevent infinite loop
                            //   target.src = 'https://placehold.co/300x300/cccccc/000000?text=Image+Not+Found';
                            // }}

                            width={300}
                            height={300}
                        />
                    </div>

                    {/* Product Details */}
                    <div className="p-4">
                        <h3 className="  text-lg font-medium mb-2 line-clamp-2 leading-tight">
                            {description}
                        </h3>

                        {/* Price Section */}
                        <div className="flex items-baseline space-x-2 mb-2">
                            <p className="text-2xl font-bold text-orange-500">৳{price}</p>

                        </div>

                        {/* Rating Section */}
                        <div className="flex items-center">
                            <div className="flex items-center">
                                {[...Array(5)].map((_, index) => (
                                    <StarIcon key={index} filled={index < rating} />
                                ))}
                            </div>
                            <span className="text-gray-600 text-sm ml-2">({reviews.length})</span>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;