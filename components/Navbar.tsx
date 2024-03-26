import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <p>Home</p>
          </Link>
        </li>

        <li>
          <Link href="/favorites">
            <p>Favorites</p>
          </Link>
        </li>
        <li>
          <Link href="/">
            <p> Search</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
