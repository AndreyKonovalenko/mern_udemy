const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const http = require("http");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

const app = express();
// using express as a router provider

const server = http.createServer(app);

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB Connected !"))
  .catch(err => console.log(err));


// Enable CORS for develompent

app.use(cors());
// Passport middleware

app.use(passport.initialize());

// Passport Config

require("./config/passport")(passport);


// // Enable CORS for develompent

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
//   next();
// });


// Use Routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

let port = process.env.PORT || 5000;
if (port === '8080') {
  port = 8081;
}
const ip = process.env.IP || "0.0.0.0";

server.listen(port, ip, () => {
  const addr = server.address();
  console.log(`Server running on ${addr.address}:${port}`);
});
