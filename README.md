# NestJS Task Management Backend

A robust task management backend built with NestJS, featuring JWT authentication, MySQL database integration, and comprehensive validation.

## Features

- **User Authentication**: Register and login with JWT tokens
- **Task Management**: Full CRUD operations for tasks
- **Security**: Protected routes with JWT authentication
- **Database**: MySQL with TypeORM
- **Validation**: Request validation using class-validator
- **Error Handling**: Proper error responses and status codes

## API Endpoints

### Authentication
- `POST /auth/register` - Register a new user
- `POST /auth/login` - Login and get JWT token

### Tasks (Protected Routes)
- `GET /tasks` - Get all tasks for authenticated user
- `POST /tasks` - Create a new task
- `PUT /tasks/:id` - Update a task by ID
- `DELETE /tasks/:id` - Delete a task by ID

## Database Schema

### Users Table
- `id` - Primary key
- `email` - Unique email address
- `password` - Hashed password
- `createdAt` - Timestamp
- `updatedAt` - Timestamp

### Tasks Table
- `id` - Primary key
- `title` - Task title
- `description` - Task description (optional)
- `status` - Task status (pending, in_progress, completed)
- `dueDate` - Due date (optional)
- `userId` - Foreign key to users table
- `createdAt` - Timestamp
- `updatedAt` - Timestamp

## Setup Instructions

1. **Database Setup**:
   - Install MySQL
   - Create a database named `task_management`
   - Update database credentials in `.env` file

2. **Environment Variables**:
   - Copy `.env` file and update values as needed
   - Change `JWT_SECRET` for production

3. **Install Dependencies**:
   ```bash
   npm install
   ```

4. **Run the Application**:
   ```bash
   # Development
   npm run start:dev
   
   # Production
   npm run build
   npm run start:prod
   ```

## API Usage Examples

### Register User
```bash
curl -X POST http://localhost:3001/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","password":"password123"}'
```

### Login
```bash
curl -X POST http://localhost:3001/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","password":"password123"}'
```

### Get All Tasks
```bash
curl -X GET http://localhost:3001/tasks \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json"
```

### Create Task
```bash
curl -X POST http://localhost:3001/tasks \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{"title":"Complete project","description":"Finish the NestJS backend","status":"in_progress","dueDate":"2025-12-31T23:59:59.000Z"}'
```

### Update Task
```bash
curl -X PUT http://localhost:3001/tasks/1 \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{"title":"Updated task title","status":"completed"}'
```

### Delete Task
```bash
curl -X DELETE http://localhost:3001/tasks/1 \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json"
```

## Technology Stack

- **Framework**: NestJS
- **Database**: MySQL with TypeORM
- **Authentication**: JWT with Passport
- **Validation**: class-validator
- **Password Hashing**: bcryptjs
- **Language**: TypeScript

## Security Features

- Password hashing with bcrypt
- JWT token authentication
- Protected routes with guards
- Input validation and sanitization
- CORS enabled for frontend integration

The application is now ready to run on `http://localhost:3001`