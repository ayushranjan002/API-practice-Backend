require("dotenv").config(); // load env vars
const express = require("express");
const connectDB = require("./db");
const helmet = require("helmet");
const cors = require("cors");
const app = express();
const rateLimit = require("express-rate-limit");
app.use(helmet());
// middleware
app.use(express.json());


// Allow only your frontend (React/Next.js)
app.use(cors({
  origin: "http://localhost:3000", // change when deploying
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
// connect DB
connectDB(process.env.MONGO_URI);


const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 min
  max: 100, // limit each IP
  message: { error: "Too many requests, try again later." }
});

app.use(limiter);
// routes
app.use("/auth", require("./routes/auth"));
app.use("/products", require("./routes/products"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
