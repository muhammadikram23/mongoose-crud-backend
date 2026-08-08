# Mongoose CRUD Backend API

![Node.js](https://img.shields.io/badge/Node.js-v18+-green?style=flat-square&logo=node.js)
![Express.js](https://img.shields.io/badge/Express.js-v4.x-black?style=flat-square&logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=flat-square&logo=mongodb)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=flat-square&logo=vercel)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)

A clean, scalable Node.js and Express RESTful API built with Mongoose to perform full CRUD operations on MongoDB Atlas. Designed with modular architecture and optimized for deployment as serverless functions on Vercel.

---

## 🚀 Live Demo & Base URL

* **Base URL:** `https://mongoose-crud-backend.vercel.app`
* **Resource Endpoint:** `https://mongoose-crud-backend.vercel.app/api/todos`

---

## ✨ Features

* **Full CRUD Functionality:** Create, read, update, and delete todo items seamlessly.
* **Database Integration:** Asynchronous database connections using Mongoose ODM connected to MongoDB Atlas.
* **CORS Enabled:** Configured middleware to allow seamless requests from cross-origin frontend clients.
* **Environment Security:** Sensitive cluster credentials isolated using `dotenv`.
* **Serverless Optimized:** Tailored entry point and routing config (`vercel.json`) for serverless function deployment on Vercel.

---

## 🛠️ Tech Stack

* **Runtime Environment:** Node.js
* **Web Framework:** Express.js
* **Database:** MongoDB Atlas (Cloud)
* **Object Data Modeling (ODM):** Mongoose
* **Deployment Platform:** Vercel

---

## 📁 Project Structure

```text
mongoose-crud-backend/
├── src/
│   ├── db/
│   │   └── index.js          # MongoDB connection logic
│   ├── controllers/
│   │   └── todo.controller.js # Request handler logic
│   └── routes/
│       └── todo.route.js      # Express API routes
├── .env                       # Local environment variables (Git ignored)
├── .gitignore                 # Tracked files exclusion configuration
├── index.js                   # Application entry point & Vercel handler
├── package.json               # Dependencies and scripts
└── vercel.json                # Vercel serverless routing configuration
