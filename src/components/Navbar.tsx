"use client";

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Switch } from "@/components/ui/switch";
import { usePathname } from 'next/navigation';

const Navbar = () => {


  const pathname = usePathname();
  const [isDark, setIsDark] = useState(false);

  // পেজ লোড হলে localStorage থেকে থিম লোড করা
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const toggleDarkMode = () => {
    const newTheme = isDark ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);
  };

  const isActive = (path: string) =>
    pathname === path ? " text-orange-500 rounded-md" : "";

  return (
    <div className='py-2   shadow-md'>
      <nav className='max-w-7xl bg-white dark:bg-[#09090B] mx-auto flex justify-between'>
        {/* Navbar Start */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm bg-white dark:bg-slate-800 dropdown-content rounded-box mt-3 w-52 p-2 shadow">
              <li><Link className={isActive("/")} href="/">Home</Link></li>
              <li><Link className={isActive("/products")} href="/products">Products</Link></li>
           
              <li><Link className={isActive("/about")} href="/about">About</Link></li>
              <li><Link className={isActive("/contract")} href="/contract">Contract</Link></li>
              <div className='flex md:hidden items-center mx-4 space-x-2'>
                <h3 className='mr-2'>Dark Mode</h3>
                <Switch checked={isDark} onCheckedChange={toggleDarkMode} />
              </div>
            </ul>
          </div>
          <Link href="/" className=" text-2xl text-orange-500">Daraz</Link>
        </div>

        {/* Navbar Center (Desktop Menu) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-8">
            <li><Link className={isActive("/")} href="/">Home</Link></li>
            <li><Link className={isActive("/products")} href="/products">Products</Link></li>
            
     
            <li><Link className={isActive("/about")} href="/about">About</Link></li>
            <li><Link className={isActive("/contract")} href="/contract">Contract</Link></li>
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end">
          <div className='hidden md:flex items-center mx-4 space-x-2'>
            <h3 className='mr-2'>Dark Mode</h3>
            <Switch checked={isDark} onCheckedChange={toggleDarkMode} />
          </div>
          <a className="btn btn-info border-0 rounded-md text-white">Sign In</a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
