import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const portfolioAPI = {
  // Get profile information
  getProfile: async () => {
    const response = await api.get('/profile');
    return response.data;
  },

  // Get skills and technologies
  getSkills: async () => {
    const response = await api.get('/skills');
    return response.data;
  },

  // Get all projects
  getProjects: async () => {
    const response = await api.get('/projects');
    return response.data;
  },

  // Get single project by ID
  getProject: async (id) => {
    const response = await api.get(`/projects/${id}`);
    return response.data;
  },

  // Submit contact form
  submitContact: async (formData) => {
    const response = await axios.post('https://formsubmit.co/ajax/bual.rald@gmail.com', {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      _subject: 'New submission from my website portfolio',
    });
    return response.data;
  },
};

export default api;
