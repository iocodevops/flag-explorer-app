# Flag Explorer App

A full-stack web application that displays a grid of country flags and detailed country information. It features a backend API, React frontend, Swagger documentation, CI/CD pipeline, and unit tests.

---

## 🚀 Features
- RESTful API to fetch countries and country details.
- React UI with Home and Detail views.
- Swagger UI for interactive API documentation.
- GitHub Actions CI/CD pipeline.
- Jest-based unit testing for backend services.

---

## 🧱 Tech Stack
- Backend: Node.js, Express, Axios, Swagger
- Frontend: React, Axios, React Router DOM
- CI/CD: GitHub Actions
- Testing: Jest

---

## 🛠️ Setup Instructions

### Backend
```bash
cd backend
npm install
node app.js
```

### Frontend
```bash
cd frontend
npm install
npm start

This will open localhost url to access the UI
```

---

## ✅ API Documentation
Once the backend is running, access Swagger UI at:
```
http://localhost:5087/docs
```

---

## 🧪 Running Tests

### Backend Tests (Jest)
```bash
cd backend
npm test
```

> Ensure your backend has Jest installed:
```bash
npm install --save-dev jest
```

---

## 🧬 CI/CD with GitHub Actions

### Workflow Location:
`.github/workflows/ci-cd-pipeline.yaml`

### Pipeline Steps:
- Checkout repo
- Setup Node.js
- Install and test backend
- Install and build frontend

---

## 🌐 Access the App
- React frontend runs at: `http://localhost:3000`
- Backend API runs at: `http://localhost:5087`
- Swagger UI: `http://localhost:5087/docs`

---

## 📦 Deployment
This app is structured for containerization or simple cloud deploys. Add Dockerfiles or hosting setup as needed.

## Environment protection; you can use envirnment protection rules to avoid accidental deployments to the environmentss by keeping environment approval gates in github actions