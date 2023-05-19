import { useState } from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router
import logo from "../../../../public/assets/logo.png"

const Navbar = ({ isLoggedIn, username }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex flex-wrap items-center justify-between bg-white text-black p-4 rounded mt-1 h-28">
      <div className="flex items-center">
        <Link to="/" className="flex flex-col items-center text-black font-bold text-lg">
          <img
            src={logo}
            alt="Website Logo"
            style={{width:'100px', height:'70px'}}
            className=" mr-2 rounded-3xl shadow-2xl "
          />
          <p>BrainBox Toys</p>
        </Link>
        <button
          className="text-black ml-4 block sm:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } w-full sm:flex sm:items-center sm:w-auto`}
      >
        <div className="sm:flex sm:items-center">
          <Link
            to="/"
            className="text-black ml-4 block mt-4 sm:inline-block sm:mt-0"
          >
            Home
          </Link>
          <Link
            to="/toys"
            className="text-black ml-4 block mt-4 sm:inline-block sm:mt-0"
          >
            All Toys
          </Link>
          {isLoggedIn && (
            <Link
              to="/mytoys"
              className="text-black ml-4 block mt-4 sm:inline-block sm:mt-0"
            >
              My Toys
            </Link>
          )}
          {isLoggedIn && (
            <Link
              to="/addtoy"
              className="text-black ml-4 block mt-4 sm:inline-block sm:mt-0"
            >
              Add A Toy
            </Link>
          )}
          <Link
            to="/blogs"
            className="text-black ml-4 block mt-4 sm:inline-block sm:mt-0"
          >
            Blogs
          </Link>
        </div>
        <div className="flex items-center mt-4 sm:mt-0">
          {isLoggedIn ? (
            <div className="group relative">
              <button className="flex items-center text-black focus:outline-none">
                <span className="mr-2">Hello, {username}</span>
                <img
                  src="/path/to/profile-picture.png"
                  alt="User Profile"
                  className="h-8 w-8 rounded-full"
                />
              </button>
              <div className="hidden group-hover:block absolute right-0 mt-2 py-2 bg-white shadow-lg rounded">
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  My Profile
                </Link>
                <Link
                  to="/logout"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Logout
                </Link>
              </div>
            </div>
          ) : (
            <Link to="/login" className="text-black ml-4 btn btn-outline btn-primary  text-lg ">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
