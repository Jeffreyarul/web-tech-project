import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const JobForm = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: "",
        company: "",
        category: "",
        location: "",
        description: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Simple validation
        const isFilled = Object.values(formData).every((field) => field.trim() !== "");
        if (!isFilled) {
            alert("Please fill in all fields.");
            return;
        }

        try {

            await axios.post("http://localhost:5000/jobs", formData);
            alert("Job posted successfully!");
            navigate("/");
        } catch (err) {
            console.error("Error posting job", err);
            alert("Failed to post job");
        }
    };

    return (
        <section className="py-12 px-4 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Post a New Job</h2>
            <form
                onSubmit={handleSubmit}
                className="space-y-4 bg-white shadow-md p-6 rounded"
            >
                <input
                    type="text"
                    name="title"
                    placeholder="Job Title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded"
                />
                <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded"
                />
                <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                >
                    <option value="">Select Category</option>
                    <option value="Programming & IT">Programming & IT</option>
                    <option value="Marketing & Communications">Marketing & Communications</option>
                    <option value="Finance & Accounting">Finance & Accounting</option>
                    <option value="Human Resources (HR)">Human Resources (HR)</option>
                    <option value="Design & Creative">Design & Creative</option>
                    <option value="Sales & Business Development">Sales & Business Development</option>
                    <option value="Healthcare & Medical">Healthcare & Medical</option>
                    <option value="Education & Training">Education & Training</option>
                    <option value="Customer Service">Customer Service</option>
                    <option value="Corporate">Corporate</option>
                    <option value="Medical">Medical</option>
                    <option value="Creative & Art">Creative & Art</option>
                    


                </select>

                <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded"
                />
                <textarea
                    name="description"
                    placeholder="Job Description"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded h-32"
                ></textarea>
                <div className="flex gap-4">
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                    >
                        Submit
                    </button>
                    <button
                        type="button"
                        onClick={() => navigate("/")}
                        className="border border-gray-400 px-6 py-2 rounded hover:bg-gray-100"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </section>
    );
};

export default JobForm;
