import { Link } from "react-router-dom"; // Assuming you're using React Router

const Navbar = ({ isLoggedIn, username }) => {
  return (
    <nav className="flex items-center justify-between bg-gray-800 p-4">
      <div className="flex items-center">
        <Link to="/" className="flex items-center text-white font-bold text-lg">
          <img
            src="/path/to/logo.png"
            alt="Website Logo"
            className="h-8 w-8 mr-2"
          />
          Website Name
        </Link>
        <Link to="/" className="text-white ml-4">
          Home
        </Link>
        <Link to="/toys" className="text-white ml-4">
          All Toys
        </Link>
        {isLoggedIn && (
          <Link to="/mytoys" className="text-white ml-4">
            My Toys
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/addtoy" className="text-white ml-4">
            Add A Toy
          </Link>
        )}
        <Link to="/blogs" className="text-white ml-4">
          Blogs
        </Link>
      </div>
      <div className="flex items-center">
        {isLoggedIn ? (
          <div className="group relative">
            <button className="flex items-center text-white focus:outline-none">
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
          <Link to="/login" className="text-white ml-4">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
