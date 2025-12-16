# MEAN To-Do List Application

A full-stack To-Do List web application built using the **MEAN stack** —  
**MongoDB, Express.js, Angular, and Node.js**.

This project demonstrates basic CRUD operations, REST API integration, and a modern Angular frontend using standalone components.

---

## 🚀 Tech Stack

- **MongoDB** – NoSQL database for storing tasks
- **Express.js** – Backend REST API
- **Angular** – Frontend (Angular 17, standalone architecture)
- **Node.js** – Server environment
- **Mongoose** – MongoDB object modeling
- **Git & GitHub** – Version control

---

## ✨ Features

- Add new tasks
- View all tasks from MongoDB
- Delete tasks
- RESTful API using Express
- Angular frontend with HttpClient
- Clean and responsive UI
- Modular MEAN project structure

---

## 📁 Project Structure

    MEAN-To-Do-List
    │
    ├── backend/
    │ ├── server.js
    │ ├── package.json
    │ └── models/
    │ └── Todo.js
    │
    ├── frontend/
    │ ├── src/
    │ │ └── app/
    │ │ ├── app.ts
    │ │ ├── app.html
    │ │ ├── app.css
    │ │ └── app.config.ts
    │ └── angular.json
    │
    └── README.md

---

## 🛠️ Installation & Setup

### 1️ Prerequisites
Make sure you have installed:
- Node.js
- MongoDB (local or MongoDB Atlas)
- Angular CLI

---

### 2 Start Backend (Node + Express)
bash
Copy code
cd backend
npm install
node server.js
Backend runs on:

arduino
Copy code
http://localhost:5000

### 3 Start Frontend (Angular)
Open a new terminal:

bash
Copy code
cd frontend
npm install
ng serve
Frontend runs on:

arduino
Copy code
http://localhost:4200

### 🔄 API Endpoints
Method	Endpoint	Description
GET	/todos	Fetch all tasks
POST	/todos	Add new task
DELETE	/todos/:id	Delete a task

### 🧠 Key Learning Outcomes
MEAN stack project architecture

Angular standalone components (no NgModule)

REST API development using Express

MongoDB CRUD operations using Mongoose

Frontend-backend communication using HttpClient

Git and GitHub workflow

