import Link from "next/link";

const Nav = () => {
  return (
    <nav className="bg-gray-900 p-5 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-3xl font-extrabold">
          <p className="hover:text-red-500 transition-colors duration-300">MyWebsite</p>
        </div>
        <ul className="flex space-x-6">
          <li className="text-white hover:text-red-500 transition-colors duration-300">
            <Link href="/">
              Home
            </Link>
          </li>
          <li className="text-white hover:text-red-500 transition-colors duration-300">
            <Link href="/admin">
              Admin
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
