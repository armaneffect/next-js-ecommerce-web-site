"use client"
import { Product } from '@/types/productTypes';
import Image from 'next/image';
import React, { useState } from 'react';

const StarIcon = ({ color = 'text-yellow-400' }: { color?: string }) => (
    <svg className={`w-5 h-5 ${color}`} fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

// Star Rating Component to display average rating
const StarRating = ({ rating }: { rating: number }) => {
    return (
        <div className="flex items-center">
            {[...Array(5)].map((_, index) => {
                const starRating = index + 1;
                return (
                    <div key={starRating} className="relative">
                        <StarIcon color={starRating <= rating ? 'text-yellow-400' : 'text-gray-300'} />
                    </div>
                );
            })}
            <span className="ml-2 text-sm text-gray-600">{rating.toFixed(2)} out of 5</span>
        </div>
    );
};


// --- MAIN PRODUCT DETAIL PAGE COMPONENT ---

const ProductDetailPage = ({ productdata }: { productdata: Product }) => {
    console.log(productdata);
    const [selectedImage, setSelectedImage] = useState(productdata.images[0] || productdata.thumbnail);
    const [quantity, setQuantity] = useState(1);

    const finalPrice = productdata.price - (productdata.price * productdata.discountPercentage / 100);

    return (
        <div className="bg-gray-100 min-h-screen font-sans">
            <div className="container mx-auto p-4 md:p-8">
                <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">

                        {/* Image Gallery */}
                        <div className="p-6">
                            <div className="mb-4">
                                <Image
                                    src={selectedImage}
                                    alt="Selected product view"
                                    className="w-full h-auto max-h-[450px] object-contain rounded-lg shadow-md"
                                    width={450}
                                    height={450}
                                />
                            </div>
                            <div className="flex space-x-2 overflow-x-auto pb-2">
                                {productdata.images.map((img, index) => (
                                    <Image
                                        key={index}
                                        src={img}
                                        alt={`Product thumbnail ${index + 1}`}
                                        className={`w-20 h-20 object-cover rounded-md cursor-pointer border-2 ${selectedImage === img ? 'border-blue-500' : 'border-transparent'}`}
                                        onClick={() => setSelectedImage(img)}
                                        width={80}
                                        height={80}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Product Information */}
                        <div className="p-6 flex flex-col justify-between">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-800 mb-2">{productdata.title}</h1>
                                <p className="text-gray-500 text-sm mb-4">By <span className="font-semibold text-blue-600">{productdata.brand}</span></p>

                                <div className="mb-4">
                                    <StarRating rating={productdata.rating} />
                                </div>

                                <div className="flex items-baseline space-x-2 mb-4">
                                    <span className="text-3xl font-bold text-blue-600">${finalPrice.toFixed(2)}</span>
                                    <span className="text-xl text-gray-500 line-through">${productdata.price.toFixed(2)}</span>
                                    <span className="text-sm font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full">{productdata.discountPercentage}% OFF</span>
                                </div>

                                <p className="text-gray-700 mb-6">{productdata.description}</p>

                                <div className="flex items-center mb-6">
                                    <label htmlFor="quantity" className="font-semibold text-gray-700 mr-4">Quantity:</label>
                                    <div className="flex items-center border border-gray-300 rounded-md">
                                        <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="px-3 py-1 text-lg font-bold text-gray-600 hover:bg-gray-100 rounded-l-md">-</button>
                                        <input type="number" id="quantity" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value) || 1)} className="w-16 text-center border-l border-r focus:outline-none" />
                                        <button onClick={() => setQuantity(q => Math.min(productdata.stock, q + 1))} className="px-3 py-1 text-lg font-bold text-gray-600 hover:bg-gray-100 rounded-r-md">+</button>
                                    </div>
                                    <span className={`ml-4 text-sm font-medium ${productdata.availabilityStatus === 'In Stock' ? 'text-green-600' : 'text-red-500'}`}>{productdata.availabilityStatus} ({productdata.stock} left)</span>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                                <button className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300">Add to Cart</button>
                                <button className="w-full bg-gray-800 text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-900 transition duration-300">Buy Now</button>
                            </div>
                        </div>
                    </div>

                    {/* Additional Details & Reviews */}
                    <div className="p-6 border-t border-gray-200">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Details Section */}
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">Product Details</h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li><strong>SKU:</strong> {productdata.sku}</li>
                                    <li><strong>Weight:</strong> {productdata.weight}g</li>
                                    <li><strong>Dimensions:</strong> {productdata.dimensions.width} x {productdata.dimensions.height} x {productdata.dimensions.depth} cm</li>
                                    <li><strong>Warranty:</strong> {productdata.warrantyInformation}</li>
                                    <li><strong>Shipping:</strong> {productdata.shippingInformation}</li>
                                    <li><strong>Return Policy:</strong> {productdata.returnPolicy}</li>
                                </ul>
                            </div>
                            {/* Reviews Section */}
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">Customer Reviews ({productdata.reviews.length})</h3>
                                <div className="space-y-4 max-h-64 overflow-y-auto pr-2">
                                    {productdata.reviews.map((review, index) => (
                                        <div key={index} className="border-b pb-4">
                                            <div className="flex items-center mb-1">
                                                <StarRating rating={review.rating} />
                                                <span className="ml-auto text-xs text-gray-500">{new Date(review.date).toLocaleDateString()}</span>
                                            </div>
                                            <p className="font-semibold text-gray-800">{review.reviewerName}</p>
                                            <p className="text-gray-600 text-sm">{review.comment}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;
