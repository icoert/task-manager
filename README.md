# Real-Time Collaborative Task Manager

This project is a full-stack **real-time collaborative task manager** built with **Fastify, PostgreSQL, Socket.io, and React** using **Redux Toolkit, TailwindCSS, and Shadcn/ui**. It features authentication, task management, real-time updates, and a fully tested backend and frontend.

## 🚀 Tech Stack

### Backend:

- **Fastify** - High-performance backend framework
- **PostgreSQL** - Relational database
- **Prisma ORM** - Database interaction
- **Socket.io** - Real-time communication
- **Jest + Supertest** - Backend testing
- **Zod** - Input validation
- **Dotenv** - Environment variable management

### Frontend:

- **React (Vite)** - Fast frontend setup
- **Redux Toolkit** - State management
- **Shadcn/ui** - Modern UI components
- **TailwindCSS** - Styling framework
- **Jest + React Testing Library** - Frontend testing
- **React Query** - Efficient API data fetching

---

## 📌 Features

- **User Authentication**: Sign-up/Login with JWT authentication
- **Task Management**: CRUD operations on tasks
- **Real-Time Updates**: WebSocket (Socket.io) for instant task synchronization
- **Redux State Management**: Efficient state handling with Redux Toolkit
- **Optimized Database Queries**: Using Prisma ORM with PostgreSQL
- **Responsive UI**: Built with TailwindCSS and Shadcn/ui
- **Comprehensive Testing**: Backend and frontend covered with Jest

---

## 📂 Project Structure

```
/task-manager
│── backend/              # Fastify backend
│   ├── src/
│   │   ├── controllers/  # Route handlers
│   │   ├── services/     # Business logic
│   │   ├── models/       # Prisma models
│   │   ├── routes/       # API routes
│   │   ├── middleware/   # Auth and validation middleware
│   │   ├── tests/        # Jest tests
│── frontend/             # React frontend
│   ├── src/
│   │   ├── components/   # UI components
│   │   ├── pages/        # Application pages
│   │   ├── store/        # Redux store and slices
│   │   ├── services/     # API calls with React Query
│   │   ├── tests/        # Jest & RTL tests
```

---

## ⚡ API Endpoints

### **Auth Routes**

- `POST /api/auth/signup` - Register a new user
- `POST /api/auth/login` - Authenticate and get a JWT token

### **Task Routes**

- `GET /api/tasks` - Fetch all tasks
- `POST /api/tasks` - Create a new task
- `PUT /api/tasks/:id` - Update a task
- `DELETE /api/tasks/:id` - Delete a task

### **WebSocket Events (Socket.io)**

- `task:created`
- `task:updated`
- `task:deleted`

---

## 🧪 Testing

### **Backend Tests (Jest & Supertest)**

- Unit tests for authentication, task management, and Prisma models.
- Integration tests for API endpoints.

### **Frontend Tests (Jest & React Testing Library)**

- Component tests for UI components.
- Redux store tests for state management.

---

## 📌 Next Steps

- **Extend with role-based access control (RBAC)**
- **Improve WebSocket event handling for multiple users**
- **Add a notifications system for task updates**

---
