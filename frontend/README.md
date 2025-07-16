🍽️ Restaurant Management System – MERN Stack

This is a full-stack Restaurant Management System built with the MERN stack (MongoDB, Express.js, React, Node.js). This project was developed as part of the **PLP Bootcamp Week 7 – Deployment & DevOps Assignment**.

---

## 🚀 Live Demo

- **Frontend (Vercel)**: [https://your-frontend.vercel.app]
- **Backend (Render)**: [https://restaurant-backend-ty82.onrender.com/]

---

## 📦 Tech Stack

| Layer       | Technology            |
|-------------|------------------------|
| Frontend    | React + Vite           |
| Backend     | Node.js + Express.js   |
| Database    | MongoDB Atlas          |
| CI/CD       | GitHub Actions         |
| Hosting     | Vercel (frontend), Render (backend) |
| Monitoring  | Health Check + Logs    |

---

## 📁 Project Structure

```bash
.
├── frontend/         # React (Vite) client
├── backend/          # Express.js API
├── .github/workflows # GitHub Actions (CI/CD)
├── .env.example      # Environment variable template
├── README.md
🌐 API Endpoints
Method	Route	Description
GET	/api/menu	Get all menu items
POST	/api/menu	Add a menu item
DELETE	/api/menu/:id	Delete a menu item
GET	/health	Server health check

⚙️ Environment Variables
backend/.env.example
env
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
frontend/.env
env
Copy
Edit
VITE_API_URL=https://restaurant-backend-ty82.onrender.com/
🔄 CI/CD with GitHub Actions
Workflows Setup:

frontend-ci.yml: Installs, builds the React frontend

backend-ci.yml: Installs, lints backend API

Automatic builds on every push to main

🟢 Status: All workflows passing

📈 Monitoring
Feature	Tool/Method
Health Check	/health endpoint
Backend Logs	Render Dashboard
Frontend Logs	Vercel Deployments

Optional Tools:

UptimeRobot

Better Uptime

📸 Screenshots
Replace below with actual images or use Markdown image tags:

✅ GitHub Actions running (CI/CD)

✅ Backend dashboard on Render

✅ Frontend live on Vercel

✅ API tested via Postman

🧪 Local Setup
1. Clone the repo
bash
Copy
Edit
git clone https://github.com/YOUR_USERNAME/week-7-devops-deployment-assignment.git
cd week-7-devops-deployment-assignment
2. Run Backend
bash
Copy
Edit
cd backend
npm install
npm run dev
3. Run Frontend
bash
Copy
Edit
cd frontend
npm install
npm run dev
📅 Maintenance Plan
Weekly backend log reviews (Render)

Uptime checks via /health

Monthly dependency updates

Database backups from MongoDB Atlas

🙋 Author
Jerome Kapkor Kimosop


