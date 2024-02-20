const express = require("express");
const app = express();
// const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

// mongoose
//   .connect(process.env.MONGO_DB_URI)
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((err) => console.error("Could not connect to MongoDB", err));

// // Middleware
// app.use(express.json());

app.get("/", (req, res) => {
  const str = "heelo " + process.env.HELLO;
  res.send(str);
});

// const router = express.Router();
// const Professor = require("./models/Professor");
// const College = require("./models/College");
// const University = require("./models/University");
// const Count = require("./models/Count");
// // Get all professors
// app.get("/professors/", async (req, res) => {
//   try {
//     const professors = await Professor.find().populate({
//       path: "college",
//       populate: {
//         path: "university",
//       },
//     });

//     // Increment the count by 1
//     await Count.findOneAndUpdate(
//       {},
//       { $inc: { count: 1 } },
//       { new: true, upsert: true }
//     );

//     res.json(professors);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
