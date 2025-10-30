import { useState, useEffect, useRef } from "react";
import axios from "axios";
import JobCard from "./JobCard";

const categories = [
 
  "Creative & Art",
  "Programming & IT",
  "Corporate",
  "Finance & Accounting",
  "Medical",
  "Marketing",
];

const JobList = ({ search = "", selectedCategory, setSelectedCategory }) => {
  const [jobs, setJobs] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    fetchJobs();
  }, [selectedCategory]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await axios.get("http://localhost:5000/jobs", {
        params: selectedCategory !== "All" ? { category: selectedCategory } : {},
      });
      setJobs(res.data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  // Filter jobs by search (case-insensitive, by title OR company)
  const keyword = search.trim().toLowerCase();
  const filteredJobs = keyword
    ? jobs.filter((job) =>
        job.title.toLowerCase().includes(keyword) ||
        job.company.toLowerCase().includes(keyword)
      )
    : jobs;

  return (
    <section id="jobs" className="py-12 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Job Listings</h2>

        {/* Category Filter Bar */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-8 border-b pb-4">
          {/* All Categories Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="text-blue-600 font-semibold border-b-2 border-blue-600 pb-1 focus:outline-none"
            >
              All Categories
            </button>
            {isDropdownOpen && (
              <div className="absolute z-10 bg-white border rounded shadow-md mt-2 min-w-[200px]">
                <ul>
                  {categories.map((cat) => (
                    <li
                      key={cat}
                      onClick={() => {
                        setSelectedCategory(cat);
                        setIsDropdownOpen(false);
                      }}
                      className="px-4 py-2 cursor-pointer hover:bg-blue-50 text-sm"
                    >
                      {cat}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Horizontal Tab Buttons */}
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-sm font-medium px-3 py-1 rounded-full transition ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Job Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => <JobCard key={job._id} job={job} />)
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No jobs found for this category.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default JobList;
