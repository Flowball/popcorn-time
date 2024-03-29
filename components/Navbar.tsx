import { Bookmark, Home, Search } from "lucide-react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className=" bg-gray-800 py-3 lg:w-24 lg:h-screen w-full h-12 lg:fixed ">
      <ul className="flex justify-center space-x-10 flex-row lg:flex-col lg:space-y-10 lg:space-x-0 lg:pl-8 lg:pt-5">
        <li>
          <Link href="/">
            <Home className="text-white" />
          </Link>
        </li>

        <li>
          <Link href="/favorites">
            <Bookmark className="text-white text-lg font-bold" />
          </Link>
        </li>
        <li>
          <Link href="/search">
            <Search className="text-white text-lg font-bold" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
