const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
f
const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

//  Connection to MongoDB
// ******note* Update URL as  mongodb database name and password
mongoose.connect(
    "mongodb+srv://Javlaba:z%23m6n4gP.XPUBq@cluster0.up3qtp3.mongodb.net/?retryWrites=true&w=majority",
  //"mongodb+srv://Javlaba:dm4K7rehXMn3eQvt@cluster0.jh6lsci.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => console.log("Connected to MongoDB"));

// Define the User model
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

// Middleware
app.use(bodyParser.json());

// Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/register", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  try {
    const newUser = new User({ firstName, lastName, email, password });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (user) {
      // Check if the provided password matches the user's actual password
      if (user.password === password) {
        res.status(200).json({ success: true, message: "Login successful" });
        // Allow login with default password "ECE4880/2023FallLab3!"
      } else if (password === "ECE4880/2023FallLab3!") {
        res.status(200).json({
          success: true,
          message: "Login successful with default password",
        });
      } else {
        res.status(401).json({ success: false, message: "Invalid password" });
      }
    } else {
      res.status(401).json({ success: false, message: "Invalid email" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

//console.log(mongoose.connection.readyState);
