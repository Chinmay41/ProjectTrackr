const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  assignedTo: { type: String, required: true },
  status: { type: String, default: 'Pending' }, // Pending, In Progress, Completed
  score: { type: Number, default: 0 },
});

module.exports = mongoose.model('Project', ProjectSchema);
