export const getNews = async (searchTerm: string) => {
    try {
        if (!searchTerm) {
            const res = await fetch(`https://dummyjson.com/products`);
            const data = await res.json();
            return data.products;
        }
        const res = await fetch(`https://dummyjson.com/products/search?q=${searchTerm}`);
        const data = await res.json();
        return data.products;

    } catch (error) {
        console.error("Error fetching news:", error);
        return [];
    }
}

