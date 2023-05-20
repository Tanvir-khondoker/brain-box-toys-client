import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../../public/assets/logo.png";
import { AuthContext } from "../../../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNameVisible, setIsNameVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleMouseEnter = () => {
    setIsNameVisible(true);
  };

  const handleMouseLeave = () => {
    setIsNameVisible(false);
  };

  return (
    <nav className="flex flex-wrap items-center justify-between bg-white text-black p-4 rounded mt-1 h-28">
      <div className="flex items-center">
        <Link
          to="/"
          className="flex flex-col items-center text-black font-bold text-lg"
        >
          <img
            src={logo}
            alt="Website Logo"
            style={{ width: "100px", height: "70px" }}
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
          {user && (
            <Link
              to="/mytoys"
              className="text-black ml-4 block mt-4 sm:inline-block sm:mt-0"
            >
              My Toys
            </Link>
          )}
          {user && (
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
          {user ? (
            <div
              className="flex items-center"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center text-black focus:outline-none">
                {isNameVisible && (
                  <span className="mr-2 ml-2">{user?.displayName}</span>
                )}
                <img
                  src={user?.photoURL}
                  alt="User Profile"
                  className="h-11  ml-4 rounded-full"
                />
              </button>

              <button
                onClick={handleLogout}
                className=" ml-16 btn btn-outline btn-accent"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="text-black ml-4 btn btn-outline btn-primary  text-lg "
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
