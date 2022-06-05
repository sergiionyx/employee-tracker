const express = require("express");
const db = require("./db/connection");
const apiRoutes = require("./routes/apiRoutes/index");
const { MainMenu } = require("./lib/MainMenu");

const PORT = process.env.PORT || 3001;
const app = express();

// Middleware for Express
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api", apiRoutes);

// Start prompt
new MainMenu().start();

db.connect((err) => {
  if (err) throw err;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
