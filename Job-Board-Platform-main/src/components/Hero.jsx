import { useLocation } from "react-router-dom";

const Hero = ({
  search,
  onInputChange,
  suggestions,
  onSuggestionClick,
  showDropdown,
  onInputBlur,
  dropdownRef,
  highlight,
}) => {
  const location = useLocation();

  // If the current path is not the home page, render nothing.
  if (location.pathname !== "/") {
    return null;
  }

  const imageUrl = "https://static.vecteezy.com/system/resources/previews/010/872/627/original/3d-job-interview-illustration-png.png";

  return (
    <section className="bg-blue-50 py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Column: Text and Search */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-4 leading-tight">
            Find Your Dream Job.
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Browse thousands of job listings or post your opportunity today!
          </p>
          <div className="relative max-w-md mx-auto md:mx-0" ref={dropdownRef}>
            <input
              type="text"
              placeholder="Search job titles or companies..."
              className="w-full px-4 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={search}
              onChange={onInputChange}
              onBlur={onInputBlur}
              autoComplete="off"
            />
            {showDropdown && suggestions.length > 0 && (
              <ul className="absolute left-0 right-0 mt-1 bg-white border border-gray-200 rounded shadow z-10 max-h-56 overflow-y-auto text-left">
                {suggestions.map((val, idx) => (
                  <li
                    key={val + idx}
                    className="px-4 py-2 cursor-pointer hover:bg-blue-100 transition font-medium"
                    onMouseDown={() => onSuggestionClick(val)}
                  >
                    {highlight(val)}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        {/* Right Column: Image */}
        <div className="flex justify-center md:justify-end">
          <img src={imageUrl} alt="Job Vacancies Illustration" className="w-full max-w-sm md:max-w-md" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
