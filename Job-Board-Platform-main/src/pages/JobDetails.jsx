import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/jobs/${id}`);
        setJob(res.data);
      } catch (err) {
        console.error("Failed to fetch job:", err);
      }
    };
    fetchJob();
  }, [id]);

  if (!job) return <p className="text-center py-10">Loading...</p>;

  return (
    <section className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">{job.title}</h1>
      <p className="text-gray-700 text-lg font-semibold">{job.company}</p>
      <div className="text-sm text-gray-500 my-2">
        📂 {job.category} &nbsp;&nbsp; 📍 {job.location}
      </div>
      <hr className="my-4" />
      <p className="text-gray-600 whitespace-pre-line">{job.description}</p>
    </section>
  );
};

export default JobDetails;
