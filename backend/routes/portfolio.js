const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// Load portfolio data
const getPortfolioData = () => {
  const dataPath = path.join(__dirname, '../data/portfolio.json');
  const rawData = fs.readFileSync(dataPath);
  return JSON.parse(rawData);
};

// GET /api/profile - Get profile information
router.get('/profile', (req, res) => {
  try {
    const data = getPortfolioData();
    res.json(data.profile);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch profile data' });
  }
});

// GET /api/skills - Get skills and technologies
router.get('/skills', (req, res) => {
  try {
    const data = getPortfolioData();
    res.json(data.skills);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch skills data' });
  }
});

// GET /api/projects - Get all projects
router.get('/projects', (req, res) => {
  try {
    const data = getPortfolioData();
    res.json(data.projects);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch projects data' });
  }
});

// GET /api/projects/:id - Get single project by ID
router.get('/projects/:id', (req, res) => {
  try {
    const data = getPortfolioData();
    const project = data.projects.find(p => p.id === parseInt(req.params.id));
    
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }
    
    res.json(project);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch project data' });
  }
});

// POST /api/contact - Handle contact form submission
router.post('/contact', (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    
    // In a real application, you would send an email or save to database
    console.log('Contact form submission:', { name, email, message });
    
    res.json({ 
      success: true, 
      message: 'Thank you for your message! I will get back to you soon.' 
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to process contact form' });
  }
});

module.exports = router;
