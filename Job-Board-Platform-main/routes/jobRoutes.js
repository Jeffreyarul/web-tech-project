const express = require("express");
const router = express.Router();
const { getJobs, createJob, getJobById } = require("../controllers/jobController");

// Get all jobs
router.get("/", getJobs);

// Get a single job by ID
router.get("/:id", getJobById);

// Post a new job
router.post("/", createJob);

module.exports = router;
