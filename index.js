const express = require('express');
const { connect } = require('mongoose');
const connectToDatabase = require('./Config/db');
const Student = require('./Model/model');

const app = express();
app.use(express.json());

// GET /students
app.get('/students', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// GET /students/:id
app.get('/students/:id', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      res.status(404).json({ error: 'Student not found' });
      return;
    }
    res.json(student);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// POST /students
app.post('/students', async (req, res) => {
  const { name, age, grade } = req.body;

  try {
    const student = new Student({ name, age, grade });
    await student.save();
    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({ error: 'Invalid data' });
  }
});

// PUT /students/:id
app.put('/students/:id', async (req, res) => {
  const { name, age, grade } = req.body;

  try {
    const student = await Student.findByIdAndUpdate(req.params.id, { name, age, grade }, { new: true });
    if (!student) {
      res.status(404).json({ error: 'Student not found' });
      return;
    }
    res.json(student);
  } catch (error) {
    res.status(400).json({ error: 'Invalid data' });
  }
});

// DELETE /students/:id
app.delete('/students/:id', async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) {
      res.status(404).json({ error: 'Student not found' });
      return;
    }
    res.json({ message: 'Student deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Connect to the database and start the server
connectToDatabase()
  .then(() => {
    app.listen(3000, () => {
      console.log('Server is running on http://localhost:3000');
    });
  })
  .catch((error) => {
    console.error('Error starting the server', error);
  });
