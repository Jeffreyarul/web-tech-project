import { useState, useEffect, useRef } from "react";
import Hero from "../components/Hero";
import JobList from "../components/JobList";
import Footer from "../components/Footer";

const Home = () => {
  const [search, setSearch] = useState("");
  const [allJobs, setAllJobs] = useState([]); // for suggestions
  const [suggestions, setSuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Fetch all jobs once for suggestions/autocomplete
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("http://localhost:5000/jobs");
        const data = await res.json();
        setAllJobs(data);
      } catch (err) {
        setAllJobs([]);
      }
    };
    fetchJobs();
  }, []);

  // Update suggestions as user types (title or company, unique, case-insensitive)
  useEffect(() => {
    if (search.trim() === "") {
      setSuggestions([]);
      setShowDropdown(false);
      return;
    }
    const keyword = search.toLowerCase();
    const matches = allJobs
      .flatMap((job) => [job.title, job.company])
      .filter((val, idx, arr) =>
        val &&
        val.toLowerCase().includes(keyword) &&
        arr.findIndex((v) => v && v.toLowerCase() === val.toLowerCase()) === idx
      );
    setSuggestions(matches.slice(0, 8));
    setShowDropdown(matches.length > 0);
  }, [search, allJobs]);

  // Hide dropdown on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSuggestionClick = (val) => {
    setSearch(val);
    setShowDropdown(false);
  };

  const handleInputBlur = () => {
    setTimeout(() => setShowDropdown(false), 100); // allow click
  };

  // Helper for highlighting
  const highlight = (text) => {
    if (!search) return text;
    const idx = text.toLowerCase().indexOf(search.toLowerCase());
    if (idx === -1) return text;
    return (
      <>
        {text.slice(0, idx)}
        <span className="bg-yellow-200 font-semibold">{text.slice(idx, idx + search.length)}</span>
        {text.slice(idx + search.length)}
      </>
    );
  };

  // State for JobList category filtering
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Reset category when search is used
  useEffect(() => {
    if (search) {
      setSelectedCategory("All");
    }
  }, [search]);

  return (
    <main>
      <Hero
        search={search}
        onInputChange={handleInputChange}
        suggestions={suggestions}
        onSuggestionClick={handleSuggestionClick}
        showDropdown={showDropdown}
        onInputBlur={handleInputBlur}
        dropdownRef={dropdownRef}
        highlight={highlight}
      />
      <JobList search={search} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <Footer />
    </main>
  );
};

export default Home;
