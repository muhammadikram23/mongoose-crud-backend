# Todo App Backend 🚀

![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?style=flat-square\&logo=node.js\&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-REST_API-000000?style=flat-square\&logo=express\&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=flat-square\&logo=mongodb\&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-ODM-880000?style=flat-square\&logo=mongoose\&logoColor=white)
![Vercel Deployment](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=flat-square\&logo=vercel)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)

A lightweight, scalable, and production-ready RESTful backend for a Todo Web Application built with **Node.js, Express.js, MongoDB Atlas, and Mongoose**.

The API provides complete CRUD functionality for managing todo items and is deployed as a serverless application on **Vercel**. It serves as the backend infrastructure for the Todo App frontend and communicates with MongoDB Atlas for persistent cloud data storage.

---

## 🌐 Live Backend & Repository

* **Production Backend API:** https://mongoose-crud-backend.vercel.app
* **Todo Resource Endpoint:** `https://mongoose-crud-backend.vercel.app/api/todos`
* **Frontend Application:** https://mongoose-crud-frontend.vercel.app
* **GitHub Repository:** [mongoose-crud-backend](https://github.com/muhammadikram23/mongoose-crud-backend)

---

## ✨ Features & Functionality

* **RESTful API:** Provides clean REST endpoints for complete Todo CRUD operations.
* **Create Todos:** Accepts `POST` requests to create and persist new todo records.
* **Retrieve Todos:** Provides `GET` endpoints for retrieving all stored todos from MongoDB Atlas.
* **Update Todos:** Supports `PATCH` requests for modifying existing todo information.
* **Delete Todos:** Supports `DELETE` requests for permanently removing todo records.
* **MongoDB Atlas Integration:** Uses MongoDB Atlas as the cloud-based persistent database.
* **Mongoose ODM:** Uses Mongoose for MongoDB schema definition, validation, and database operations.
* **JSON-Based Communication:** Uses JSON request and response bodies for frontend-backend communication.
* **Serverless Deployment:** Deployed on Vercel for scalable serverless API hosting.
* **Frontend Integration:** Designed to communicate directly with the deployed Todo frontend through HTTP requests.

---

## 🛠️ Tech Stack

* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** MongoDB Atlas
* **ODM:** Mongoose
* **API Architecture:** RESTful API
* **Data Format:** JSON
* **Deployment Platform:** Vercel
* **Version Control:** Git & GitHub

---

## 🏗️ System Architecture

The backend follows a simple REST-based architecture:

```text
                    ┌────────────────────────────┐
                    │      Todo Frontend         │
                    │                            │
                    │ HTML + Tailwind + JS       │
                    └─────────────┬──────────────┘
                                  │
                                  │ HTTP Requests
                                  │ GET / POST
                                  │ PATCH / DELETE
                                  ▼
                    ┌────────────────────────────┐
                    │       Express.js API       │
                    │                            │
                    │      Node.js Runtime       │
                    └─────────────┬──────────────┘
                                  │
                                  │ Mongoose
                                  ▼
                    ┌────────────────────────────┐
                    │       MongoDB Atlas        │
                    │                            │
                    │      Todo Collection       │
                    └────────────────────────────┘
```

### Request Flow

```text
Frontend
   │
   ▼
HTTP Request
   │
   ▼
Express Route
   │
   ▼
Mongoose Model
   │
   ▼
MongoDB Atlas
   │
   ▼
Database Response
   │
   ▼
JSON Response
   │
   ▼
Frontend UI
```

---

## 📁 Project Structure

```text
mongoose-crud-backend/
├── models/
│   └── Todo.js          # Mongoose Todo schema/model
│
├── routes/
│   └── todos.js         # Todo REST API routes
│
├── index.js             # Express application entry point
├── package.json         # Dependencies and project scripts
├── package-lock.json    # Locked dependency versions
├── vercel.json          # Vercel deployment configuration
└── README.md            # Backend documentation
```

> **Note:** The exact folder and file structure may vary depending on the current implementation of the backend repository.

---

# ⚙️ Local Development Setup

## Prerequisites

Make sure the following software is installed on your machine:

* [Node.js](https://nodejs.org/) — Version 18 or higher recommended
* [Git](https://git-scm.com/)
* [VS Code](https://code.visualstudio.com/) — Recommended editor
* A MongoDB Atlas account
* A modern web browser
* Postman, Thunder Client, or another API testing tool — Recommended

---

## 📥 Installation

### 1. Clone the Repository

Open a terminal and run:

```bash
git clone https://github.com/muhammadikram23/mongoose-crud-backend.git
```

### 2. Navigate to the Project Directory

```bash
cd mongoose-crud-backend
```

### 3. Install Dependencies

Install the required Node.js packages:

```bash
npm install
```

---

## 🔐 Environment Variables

The backend requires a MongoDB connection string to communicate with MongoDB Atlas.

Create a `.env` file in the root directory of the project:

```text
.env
```

Add your MongoDB connection string:

```env
MONGODB_URI=your_mongodb_connection_string
```

Example:

```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/todos
```

> **Important:** Never commit your `.env` file to GitHub. Add `.env` to your `.gitignore` file.

Example `.gitignore`:

```text
node_modules/
.env
```

---

# ▶️ Running the Backend Locally

After installing dependencies and configuring the environment variables, start the development server.

If your project uses a standard Node.js start script:

```bash
npm start
```

For a development script using Node's watch mode:

```bash
npm run dev
```

The local API will typically be available at:

```text
http://localhost:5000
```

> The actual port depends on the `PORT` configuration used by the backend.

---

# 📡 REST API Reference

The backend exposes a RESTful API for managing Todo resources.

### Base URL

Production:

```text
https://mongoose-crud-backend.vercel.app
```

Todo resource:

```text
https://mongoose-crud-backend.vercel.app/api/todos
```

---

## 📋 API Endpoints

| **Action**      | **HTTP Method** | **API Endpoint** | **Description**         |
| :-------------- | :-------------: | :--------------- | :---------------------- |
| **Fetch Tasks** |      `GET`      | `/api/todos`     | Retrieve all todos      |
| **Create Task** |      `POST`     | `/api/todos`     | Create a new todo       |
| **Update Task** |     `PATCH`     | `/api/todos/:id` | Update an existing todo |
| **Delete Task** |     `DELETE`    | `/api/todos/:id` | Delete an existing todo |

---

# 🔎 API Usage Examples

## 1. Fetch All Todos

### Request

```http
GET /api/todos
```

### Example

```bash
curl https://mongoose-crud-backend.vercel.app/api/todos
```

### Example Response

```json
[
  {
    "_id": "64f123456789",
    "title": "Learn JavaScript",
    "description": "Practice JavaScript fundamentals"
  },
  {
    "_id": "64f987654321",
    "title": "Build Todo App",
    "description": "Create a full-stack CRUD application"
  }
]
```

---

## 2. Create a Todo

### Request

```http
POST /api/todos
Content-Type: application/json
```

### Request Body

```json
{
  "title": "Learn Node.js",
  "description": "Build a REST API using Express"
}
```

### Example cURL Request

```bash
curl -X POST https://mongoose-crud-backend.vercel.app/api/todos \
-H "Content-Type: application/json" \
-d "{\"title\":\"Learn Node.js\",\"description\":\"Build a REST API using Express\"}"
```

A successful request returns a `201 Created` response.

---

## 3. Update a Todo

### Request

```http
PATCH /api/todos/:id
Content-Type: application/json
```

### Request Body

```json
{
  "title": "Learn Advanced Node.js"
}
```

Example:

```text
PATCH /api/todos/64f123456789
```

A successful request returns a `200 OK` response.

---

## 4. Delete a Todo

### Request

```http
DELETE /api/todos/:id
```

Example:

```text
DELETE /api/todos/64f123456789
```

A successful request removes the selected Todo from MongoDB.

---

# 🔄 CRUD Architecture

The backend implements the four fundamental CRUD operations.

```text
CREATE
   │
   ▼
POST /api/todos
   │
   ▼
Express Route
   │
   ▼
Mongoose Model
   │
   ▼
MongoDB Atlas
```

```text
READ
   │
   ▼
GET /api/todos
   │
   ▼
Express Route
   │
   ▼
Mongoose Query
   │
   ▼
MongoDB Atlas
   │
   ▼
JSON Response
```

```text
UPDATE
   │
   ▼
PATCH /api/todos/:id
   │
   ▼
Express Route
   │
   ▼
Mongoose Update
   │
   ▼
MongoDB Atlas
```

```text
DELETE
   │
   ▼
DELETE /api/todos/:id
   │
   ▼
Express Route
   │
   ▼
Mongoose Delete
   │
   ▼
MongoDB Atlas
```

---

# 🗄️ Database

The backend uses **MongoDB Atlas** as its cloud database.

MongoDB stores Todo documents in a collection.

A Todo document can contain fields such as:

```json
{
  "_id": "ObjectId",
  "title": "Learn MongoDB",
  "description": "Practice MongoDB CRUD operations"
}
```

Mongoose provides the application with a structured schema and simplifies database interaction.

---

# 🔗 Frontend Integration

This backend is designed to work with the Todo frontend application.

### Frontend

```text
https://mongoose-crud-frontend.vercel.app
```

### Backend

```text
https://mongoose-crud-backend.vercel.app
```

The frontend communicates with the backend through HTTP requests:

```text
Frontend
    │
    ├── GET ────────► /api/todos
    │
    ├── POST ───────► /api/todos
    │
    ├── PATCH ──────► /api/todos/:id
    │
    └── DELETE ─────► /api/todos/:id
```

The backend processes these requests and communicates with MongoDB Atlas.

---

# 🌐 CORS Configuration

Because the frontend and backend are deployed separately, they operate on different origins.

```text
Frontend:
https://mongoose-crud-frontend.vercel.app

Backend:
https://mongoose-crud-backend.vercel.app
```

The backend must therefore allow requests from the frontend origin through appropriate CORS configuration.

A typical Express configuration is:

```javascript
import cors from "cors";

app.use(cors());
```

For production applications, CORS should ideally be restricted to trusted frontend origins.

For example:

```javascript
app.use(
  cors({
    origin: "https://mongoose-crud-frontend.vercel.app"
  })
);
```

---

# 🚀 Deployment

The backend is deployed on **Vercel** as a serverless application.

Production API:

```text
https://mongoose-crud-backend.vercel.app
```

Todo endpoint:

```text
https://mongoose-crud-backend.vercel.app/api/todos
```

The deployment workflow can be connected directly to GitHub so that updates pushed to the repository can trigger new deployments.

---

## 📦 Deploying Your Own Backend

### 1. Push the Repository to GitHub

```bash
git add .
git commit -m "Update backend API"
git push origin main
```

### 2. Import the Repository into Vercel

Log in to [Vercel](https://vercel.com/) and import the GitHub repository.

### 3. Configure Environment Variables

Add your MongoDB connection string in the Vercel project settings:

```text
MONGODB_URI
```

Set its value to your MongoDB Atlas connection string.

### 4. Deploy

Vercel will build and deploy the backend and provide a production URL.

---

# 🧪 API Testing

You can test the REST API using:

* [Postman](https://www.postman.com/)
* [Thunder Client](https://www.thunderclient.com/)
* Insomnia
* cURL
* Browser Developer Tools

For example, to retrieve all todos:

```bash
curl https://mongoose-crud-backend.vercel.app/api/todos
```

---

# 🐛 Troubleshooting

## MongoDB Connection Error

If the backend cannot connect to MongoDB Atlas, verify:

1. `MONGODB_URI` is correctly configured.
2. Your MongoDB Atlas cluster is running.
3. The database user credentials are correct.
4. Your MongoDB Atlas network access configuration allows the connection.
5. The connection string is properly formatted.

---

## 404 API Error

If you receive:

```text
404 Not Found
```

verify that the requested endpoint is correct:

```text
/api/todos
```

For example:

```text
https://mongoose-crud-backend.vercel.app/api/todos
```

---

## CORS Error

If the frontend reports:

```text
Access to fetch at ... has been blocked by CORS policy
```

verify that the backend's CORS configuration allows requests from:

```text
https://mongoose-crud-frontend.vercel.app
```

For local development, also make sure your local frontend origin is allowed.

---

## 500 Internal Server Error

A `500 Internal Server Error` generally indicates a server-side problem.

Check:

* Vercel deployment logs
* MongoDB connection
* Environment variables
* Request body
* Mongoose validation
* Express route configuration

---

# 🔒 Security Considerations

For production applications, the following security practices are recommended:

* Never commit `.env` files.
* Never expose MongoDB credentials.
* Use environment variables for secrets.
* Restrict MongoDB Atlas network access appropriately.
* Configure CORS for trusted origins.
* Validate incoming request data.
* Sanitize user input.
* Implement authentication and authorization.
* Add rate limiting.
* Use centralized error handling.
* Monitor production logs.
* Keep dependencies updated.

---

# 📈 Future Improvements

Potential backend improvements include:

* [ ] User authentication
* [ ] JWT-based authorization
* [ ] User-specific todos
* [ ] Todo completion status
* [ ] Due dates
* [ ] Todo categories
* [ ] Search and filtering
* [ ] Pagination
* [ ] Request validation
* [ ] Centralized error handling
* [ ] Rate limiting
* [ ] API documentation with Swagger/OpenAPI
* [ ] Automated unit and integration testing
* [ ] CI/CD pipeline
* [ ] API versioning
* [ ] Improved logging and monitoring

---

# 📄 License

This project is open-source and available under the [MIT License](https://opensource.org/license/mit).

You are free to use, modify, distribute, and build upon this project according to the terms of the MIT License.

---

# 👨‍💻 Author

**Muhammad Ikram**

GitHub: [muhammadikram23](https://github.com/muhammadikram23)

---

## ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.

---

**Built with Node.js, Express.js, MongoDB Atlas, Mongoose, and Vercel.**
