import { Bookmark, Home, Search } from "lucide-react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className=" h-12 w-full bg-gray-800 py-3 lg:fixed lg:h-screen lg:w-24 ">
      <ul className="flex flex-row justify-center space-x-10 lg:flex-col lg:space-x-0 lg:space-y-10 lg:pl-8 lg:pt-5">
        <li>
          <Link href="/">
            <Home className="text-white" />
          </Link>
        </li>

        <li>
          <Link href="/favorites">
            <Bookmark className="text-lg font-bold text-white" />
          </Link>
        </li>
        <li>
          <Link href="/search">
            <Search className="text-lg font-bold text-white" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
