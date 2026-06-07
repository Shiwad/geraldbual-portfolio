# Personal Portfolio Website

A modern, full-stack personal portfolio website built with React.js, Express.js, Node.js, and Tailwind CSS. Features a beautiful, responsive design with smooth animations and a REST API backend.

## 🚀 Features

- **Modern Design**: Premium UI with gradient effects, glassmorphism, and smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **REST API**: Backend API for dynamic content management
- **Smooth Animations**: Framer Motion animations throughout
- **Contact Form**: Functional contact form with backend integration
- **Project Showcase**: Display your projects with images and links
- **Skills Display**: Animated skill bars showing your proficiency levels

## 🛠️ Tech Stack

### Frontend
- React.js (via Vite)
- Tailwind CSS
- Framer Motion
- Axios

### Backend
- Node.js
- Express.js
- CORS middleware

## 📦 Installation

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The backend server will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:5173`

## 🎯 Usage

1. Start both the backend and frontend servers (in separate terminals)
2. Open your browser to `http://localhost:5173`
3. The portfolio will load with data from the backend API

## 📝 Customization

### Update Portfolio Content

Edit the file `backend/data/portfolio.json` to customize:
- Personal information (name, title, bio)
- Skills and technologies
- Projects
- Contact information
- Social media links

### Modify Styling

- Edit `frontend/tailwind.config.js` for color schemes and design tokens
- Modify `frontend/src/index.css` for global styles
- Update individual components in `frontend/src/components/` for specific sections

## 📁 Project Structure

```
personal_portfolio/
├── backend/
│   ├── data/
│   │   └── portfolio.json
│   ├── routes/
│   │   └── portfolio.js
│   ├── .env
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
└── README.md
```

## 🌐 API Endpoints

- `GET /api/profile` - Get profile information
- `GET /api/skills` - Get skills and technologies
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get single project by ID
- `POST /api/contact` - Submit contact form

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Gerald Bual**
- Portfolio: [Your Portfolio URL]
- GitHub: [@geraldbual](https://github.com/geraldbual)
- LinkedIn: [Gerald Bual](https://linkedin.com/in/geraldbual)

---

Built with ❤️ using React, Node.js, and Tailwind CSS
