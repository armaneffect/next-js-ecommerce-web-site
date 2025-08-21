import { NewsItem } from '@/types/news';
import Image from 'next/image';
import Link from 'next/link';

const NewsCard = ({ item }: { item: NewsItem }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden">
      <Link href={`/blog/${item.id}`} className="block">
        {/* Image */}
        <div className="relative w-full h-48 md:h-64">
          <Image
            src={item.thumbnail || "https://via.placeholder.com/600x400"} 
            alt={item.title}
            width={600}
            height={400}
            className="object-cover rounded-t-lg"
          />

        </div>

        {/* Content */}
        <div className="p-4">
          <p className="text-sm text-blue-600 dark:text-blue-400 font-medium uppercase tracking-wide">
            {item.category || "Technology"}
          </p>
          <h2 className="text-lg md:text-xl font-bold mt-2 line-clamp-1">
            {item.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 line-clamp-2">
            {item.description}
          </p>
          <span className="mt-3 inline-block text-sm font-semibold text-blue-600 hover:text-blue-800 dark:hover:text-blue-400">
            Read More →
          </span>
        </div>
      </Link>
    </div>
  );
};

export default NewsCard;
