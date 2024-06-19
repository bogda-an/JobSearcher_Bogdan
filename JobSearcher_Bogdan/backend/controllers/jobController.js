const Joi = require('joi');
const Job = require('../models/job');
const User = require('../models/user'); // Assuming you have a User model for user data

const jobSchema = Joi.object({
  title: Joi.string().min(3).required(),
  company: Joi.string().min(3).required(),
  location: Joi.string().min(3).required(),
  date_posted: Joi.date().required(),
  employment_type: Joi.string().min(3).required(),
  job_description: Joi.string().min(10).required(),
  job_requirements: Joi.string().min(10).required(),
  salary: Joi.number().required(),
  industry: Joi.string().min(3).required(),
  experience_level: Joi.string().min(3).required(),
  job_link: Joi.string().uri().required(),
});

const getJobs = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const jobs = await Job.find().skip(skip).limit(limit);
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createJob = async (req, res) => {
  const { error } = jobSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  try {
    const job = new Job(req.body);
    await job.save();
    res.status(201).json(job);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateJob = async (req, res) => {
  const { error } = jobSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  try {
    const job = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!job) return res.status(404).json({ message: 'Job not found' });
    res.json(job);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndDelete(req.params.id);
    if (!job) return res.status(404).json({ message: 'Job not found' });
    res.json({ message: 'Job deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const applyForJob = async (req, res) => {
  const { jobId, userId, resume, additionalDetails } = req.body;

  try {
    const job = await Job.findById(jobId);
    if (!job) return res.status(404).json({ message: 'Job not found' });

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    // Assuming you have an application model or you want to save applications within the job or user model
    job.applications = job.applications || [];
    job.applications.push({ user: userId, resume, additionalDetails });
    await job.save();

    res.status(201).json({ message: 'Application submitted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSavedJobs = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate('savedJobs');
    res.json(user.savedJobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getJobs,
  createJob,
  updateJob,
  deleteJob,
  applyForJob,
  getSavedJobs,
};
