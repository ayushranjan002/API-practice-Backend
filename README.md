REST API Authentication Project

This project is a simple Node.js + Express REST API with user authentication using JWT (JSON Web Token).
It demonstrates how to register, login, and access protected routes in a backend system.

🚀 Features

User registration with hashed passwords (bcrypt)

User login with JWT token generation

Protected routes that require valid JWT

Error handling & validation

Environment variable support (dotenv)

🛠️ Tech Stack

Node.js

Express.js

MongoDB with Mongoose

JWT (jsonwebtoken)

bcrypt for password hashing

dotenv

📦 Installation
# Clone the repository
git clone https://github.com/ayushranjan002/API-practice-Backend.git

# Navigate into project
cd API-practice-Backend

# Install dependencies
npm install

# Create .env file
touch .env


Add this inside .env file:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

▶️ Running the Server
# Start server in development mode
npm run dev

# OR start normally
npm start


Server runs at:

http://localhost:5000

📌 API Endpoints
1️⃣ Register User

POST /api/auth/register
Request body (JSON):

{
  "username": "testuser",
  "email": "test@example.com",
  "password": "mypassword"
}


Response:

{
  "message": "User registered successfully"
}

2️⃣ Login User

POST /api/auth/login
Request body (JSON):

{
  "email": "test@example.com",
  "password": "mypassword"
}


Response:

{
  "token": "your_jwt_token"
}

3️⃣ Protected Route

GET /api/auth/protected

Headers:

Authorization: Bearer <your_jwt_token>


Response:

{
  "message": "Welcome to protected route!",
  "user": {
    "id": "mongodb_user_id",
    "email": "test@example.com"
  }
}

🧪 Testing the API

You can test using:

Postman

Thunder Client (VS Code extension)

curl

Example (using curl for login):

curl -X POST http://localhost:5000/api/auth/login \
-H "Content-Type: application/json" \
-d '{"email":"test@example.com","password":"mypassword"}'

👨‍💻 Author

Ayush Ranjan
