import { Bookmark, Home, Search } from "lucide-react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 py-2">
      <ul className="flex justify-center space-x-16">
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
          <Link href="/">
            <Search className="text-white text-lg font-bold" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
