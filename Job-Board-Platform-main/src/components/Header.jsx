import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollTo = (id) => {
    // If we are on a different page, navigate to home first, then scroll.
    if (location.pathname !== "/") {
      navigate("/");
      // Use timeout to allow the page to navigate and render before scrolling
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      // If already on the home page, just scroll.
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(false); // Close mobile menu if open
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img src="https://tse2.mm.bing.net/th?id=OIP.BsdDSAUWLzSMctuZxcytSwFhCw&pid=Api&P=0&h=180" alt="JobBoard Logo" className="h-10 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className={`text-gray-700 hover:text-blue-600 ${isActive("/") ? "font-bold text-blue-600" : ""}`}
          >
            Home
          </Link>
          <button
            onClick={() => handleScrollTo("jobs")}
            className="text-gray-700 hover:text-blue-600 focus:outline-none"
          >
            Jobs
          </button>
          <Link
            to="/contact"
            className={`text-gray-700 hover:text-blue-600 ${isActive("/contact") ? "font-bold text-blue-600" : ""}`}
          >
            Contact
          </Link>
          <Link
            to="/post-job"
            className={`ml-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition ${isActive("/post-job") ? "ring-2 ring-blue-400" : ""}`}
          >
            Post a Job
          </Link>
        </nav>

        {/* Hamburger for mobile */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2}>
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link onClick={() => setOpen(false)} to="/" className="block text-gray-700">Home</Link>
          <button onClick={() => handleScrollTo('jobs')} className="block text-gray-700 w-full text-left">Jobs</button>
          <Link
            onClick={() => setOpen(false)}
            to="/contact"
            className="block text-gray-700"
          >
            Contact
          </Link>
          <Link
            onClick={() => setOpen(false)}
            to="/post-job"
            className="inline-block bg-blue-900 text-white px-4 py-2 rounded mt-2"
          >
            Post a Job
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
