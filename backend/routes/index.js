const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// Assign a project
router.post('/projects/assign', async (req, res) => {
  const project = new Project(req.body);
  await project.save();
  res.status(201).send(project);
});

// Get all projects for a candidate
router.get('/projects', async (req, res) => {
  const projects = await Project.find();
  res.send(projects);
});

// Update project status
router.put('/projects/:id/status', async (req, res) => {
    const { status, score } = req.body;
    const project = await Project.findByIdAndUpdate(
      req.params.id,
      { status, score },
      { new: true }
    );
    res.send(project);
  });

// Get leaderboard
router.get('/leaderboard', async (req, res) => {
  const leaderboard = await Project.find().sort({ score: -1 }).limit(10);
  res.send(leaderboard);
});

module.exports = router;
