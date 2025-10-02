const express = require("express");
const app = express();
const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:8100"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Testing get" });
});

const db = require("./models");

db.sequelize.sync().then(() => {
  console.log("Database synchronized");
}).catch(err => {
  console.error("Failed to sync database:", err);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

require("./routes/song.routes")(app);
