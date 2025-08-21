
import React from 'react';
import NewsSearch from './NewsSearch';
import Category from '@/components/Category';
import ProductCard from '@/components/ProductCart';
import { Product } from '@/types/news';


const Newspage = async ({ searchParams }: { searchParams: { search: string, category: string } }) => {
    const query = await searchParams.search;
    const category = await searchParams.category;

    const searchTerm: string = query || '';



    const res = await fetch(`${category  ? `https://dummyjson.com/products/category/${category}` : `https://dummyjson.com/products/search?q=${searchTerm}`}`);
    const data = await res.json();


    return (
        <div>
            <div className='flex items-center'>
                <NewsSearch ></NewsSearch> <Category></Category>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-8 mx-2'>
                {
                    data.products.map((item: Product) => (
                        //<NewsCard key={item.id} item={item} />
                        <ProductCard key={item.id} product={item} />
                    ))
                }
            </div>

        </div>
    );
};

export default Newspage;