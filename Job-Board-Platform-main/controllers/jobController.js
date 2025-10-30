const Job = require("../models/job");

// @desc    Get all jobs (optional filter by category)
// @route   GET /jobs
exports.getJobs = async (req, res) => {
  try {
    const category = req.query.category;
    const filter = category ? { category } : {};
    const jobs = await Job.find(filter).sort({ createdAt: -1 });
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch jobs" });
  }
};

// @desc    Get a single job by ID
// @route   GET /jobs/:id
exports.getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(404).json({ error: "Job not found" });
    }
    res.json(job);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch job", details: err.message });
  }
};

// @desc    Create a new job
// @route   POST /jobs
exports.createJob = async (req, res) => {
  try {
    const job = new Job(req.body);
    await job.save();
    res.status(201).json(job);
  } catch (err) {
    res.status(400).json({ error: "Failed to create job", details: err.message });
  }
};
