import Image from 'next/image'
import React from 'react'

function Banner() {
    return (
        <div className='flex justify-center'>

      
        <div className="m-4 bg-slate-100 dark:bg-slate-800 banner rounded-lg shadow-md flex flex-col md:flex-row gap-4 md:m-8">

            {/* Left Image Section */}
            <div className="flex-1 flex items-center justify-center md:p-4 p-2">
                <Image
                    src="https://plus.unsplash.com/premium_photo-1661727547850-3d7c020a64a8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0"
                    width={500}
                    height={300}
                    alt="Technology News Banner"
                    className="rounded-lg shadow-lg object-cover"
                />
            </div>

            {/* Right Content Section */}
            <div className="flex-1 flex flex-col justify-center md:p-4 p-2">
                <p className="text-sm uppercase text-blue-600 dark:text-blue-400 font-semibold">
                    Technology
                </p>
                <h2 className="text-2xl font-bold mt-2">
                    Apple Unveils iPhone 16 with AI-Powered Features
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">
                    Apple has officially launched the iPhone 16, introducing next-generation 
                    AI tools that redefine user experience. The device features an improved 
                    A18 Bionic chip, enhanced battery life, and groundbreaking camera 
                    capabilities designed for creators. With deeper iOS integration and 
                    futuristic design, the iPhone 16 sets a new standard for smartphones.
                </p>
                <button className="mt-4 w-fit bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md text-sm font-medium transition-all">
                    Read More
                </button>
            </div>
        </div>
          </div>
    )
}

export default Banner
