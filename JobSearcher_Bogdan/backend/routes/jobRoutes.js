const express = require('express');
const router = express.Router();
const Job = require('../models/job');
const {
  getJobs,
  createJob,
  updateJob,
  deleteJob,
  applyForJob,
  getSavedJobs,
} = require('../controllers/jobController');
const authMiddleware = require('../middleware/authMiddleware');

// Get all job postings
router.get('/', async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

router.get('/', getJobs);
router.post('/apply', applyForJob);
router.get('/saved', authMiddleware, getSavedJobs);

router.route('/')
  .post(authMiddleware, createJob);

  router.post('/', authMiddleware, createJob);
  router.put('/:id', authMiddleware, updateJob);
  router.delete('/:id', authMiddleware, deleteJob);

module.exports = router;
