import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/Maskgroup.svg"
import { Link } from "react-router-dom";


export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-[#00113A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 p-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center justify-center h-[80px] w-[80px]">
            <img
              src={logo}
              alt="RegnovaAI"
              className="h-full w-full object-contain"
            />
          </div>


          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 items-center font-medium">
            <Link to={"/"}>
              Home
            </Link>
            <Link to={"/about "}>About us </Link>
            <Link to={"/pricing"} >
              Pricing
            </Link>
            <a href="#" className="hover:text-blue-400 transition-colors">
              Careers
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              Contact us
            </a>
            <button className="ml-4 bg-blue-600 hover:bg-blue-700 transition-colors px-4 py-2 rounded-md text-white font-medium">
              Log in
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)}>
              {open ? <X className="h-6 w-6 text-black" /> : <Menu className="h-6 w-6 text-black" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#00113A] px-4 pb-4 space-y-2 text-center">
          <a href="#" className="block py-2 hover:text-blue-400">
            Home
          </a>
          <a href="#" className="block py-2 hover:text-blue-400">
            About us
          </a>
          <a href="#" className="block py-2 hover:text-blue-400">
            Pricing
          </a>
          <a href="#" className="block py-2 hover:text-blue-400">
            Careers
          </a>
          <a href="#" className="block py-2 hover:text-blue-400">
            Contact us
          </a>
          <button className="w-full mt-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-white font-medium">
            Log in
          </button>
        </div>
      )}
    </nav>
  );
}

