"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function NewsSearch() {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  

  // Debounce state
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500); // 500ms delay

    return () => clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    const searchParams = new URLSearchParams();
    if (debouncedQuery) searchParams.set("search", debouncedQuery);

    router.push(`${pathname}?${searchParams.toString()}`);
    
  }, [debouncedQuery, pathname, router,setQuery]);

  return (
    <div className="p-4 flex-1">
      <input
        type="text"
        placeholder="Search news..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
      />
    </div>
  );
}

export default NewsSearch;

