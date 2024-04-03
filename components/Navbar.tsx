"use client";
import { Bookmark, Home, Search } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const path = usePathname();

  return (
    <nav className="flex size-full justify-between bg-gray-800">
      <ul className="flex w-full justify-center gap-6 p-4">
        <li>
          <Link href="/">
            <Home
              className={
                path === "/" ? `size-9 text-yellow-300` : `size-9 text-white`
              }
            />
          </Link>
        </li>
        <li>
          <Link href="/favorites">
            <Bookmark
              className={
                path === "/favorites"
                  ? `size-9 text-yellow-300`
                  : `size-9 text-white`
              }
            />
          </Link>
        </li>
        <li>
          <Link href="/search">
            <Search
              className={
                path === "/search"
                  ? `size-9 text-yellow-300`
                  : `size-9 text-white`
              }
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
