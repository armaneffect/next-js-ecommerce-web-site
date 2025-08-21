"use client";

import React, { useEffect, useState } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

interface CategoryItem {
    slug: string;
    name: string;
    url: string;
}

export default function Category() {
    const [categories, setCategories] = useState<CategoryItem[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>("");

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        async function fetchCategories() {
            const res = await fetch("https://dummyjson.com/products/categories");
            const data: CategoryItem[] = await res.json();
            console.log(data); // 👈 চেক করো কী আসছে
            setCategories(data);
        }
        fetchCategories();
    }, []);

    useEffect(() => {
        if (!selectedCategory) return;


        const params = new URLSearchParams(searchParams.toString());
        if (selectedCategory === "all") {
            params.delete("category");

        } else {
            params.set("category", selectedCategory || "all");

        }

        router.push(`${pathname}?${params.toString()}`);
    }, [selectedCategory, pathname, router, searchParams]);

    return (
        <div>
            <Select onValueChange={(value) => setSelectedCategory(value)}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="-- Select Category --" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    {categories.map((category) => (
                        <SelectItem key={category.slug} value={category.slug}>
                            {category.name}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
}
