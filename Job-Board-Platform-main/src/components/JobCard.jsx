import { useState } from "react";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  const descriptionPreview = job.description.substring(0, 100);

  return (
    <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition">
      <h2 className="text-xl font-bold text-blue-600 mb-2">
        <Link to={`/job/${job._id}`} className="hover:underline">
          {job.title}
        </Link>
      </h2>
      <p className="text-gray-700 font-medium">
        <Link to={`/job/${job._id}`} className="hover:underline">
          {job.company}
        </Link>
      </p>
      <div className="text-sm text-gray-500 mt-1 mb-2">
        <span className="mr-4">📍 {job.location}</span>
        <span>📂 {job.category}</span>
      </div>
      <p className="text-gray-600">
        {expanded ? job.description : descriptionPreview}
        {!expanded && job.description.length > 100 && (
          <button onClick={toggleDescription} className="text-blue-500 hover:underline ml-1">
            ...more
          </button>
        )}
        {expanded && (
           <button onClick={toggleDescription} className="text-blue-500 hover:underline ml-1">
            less
          </button>
        )}
      </p>
    </div>
  );
};

export default JobCard;
