import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { path: "/features", label: "Features" },
    { path: "/pricing", label: "Pricing" },
    { path: "/about", label: "About" },
    { path: "/blog", label: "Blog" },
    { path: "/faq", label: "FAQ" },
    { path: "/community", label: "Community" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-filter backdrop-blur-lg bg-opacity-80 p-4 mx-1 border-2 border-gray-400 rounded-lg bg-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-3xl font-bold">ente</div>
          <div className="flex mx-2 border border-black font-lg rounded-lg">
            <div>Star</div>
            <div>15,327</div>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <ul className="flex gap-3 font-semibold">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink to={item.path} className="hover:text-green-700">
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:flex text-lg font-semibold">
          <button className="mx-2 px-2 text-white bg-green-700 rounded-lg">
            Download
          </button>
          <button className="bg-black border-green-700 text-white rounded-lg px-2">
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col items-center gap-3 font-semibold mt-4">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className="hover:text-green-700"
                  onClick={toggleMenu}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="flex flex-col items-center mt-4 text-lg font-semibold">
            <button className="mb-2 px-2 text-white bg-green-700 rounded-lg">
              Download
            </button>
            <button className="bg-black border-green-700 text-white rounded-lg px-2">
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
