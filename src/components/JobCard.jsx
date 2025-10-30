const JobCard = ({ job }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
      <p className="text-gray-600 mb-4">{job.company}</p>
      <div className="mb-4">
        <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
          {job.location}
        </span>
      </div>
      <p className="text-gray-700 mb-4 line-clamp-3">{job.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-green-600 font-semibold">${job.salary}</span>
        <a
          href={`/jobs/${job._id}`}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors"
        >
          View Details
        </a>
      </div>
    </div>
  );
};

export default JobCard;