const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String, required: true },
  date_posted: { type: Date, required: true },
  employment_type: { type: String, required: true },
  job_description: { type: String, required: true },
  job_requirements: { type: String, required: true },
  salary: { type: Number, required: true },
  industry: { type: String, required: true },
  experience_level: { type: String, required: true },
  job_link: { type: String, required: true },
});

module.exports = mongoose.model('Job', jobSchema);
