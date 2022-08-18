require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());

const connectDB = async () => {
  await mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

const start = async () => {
  try {
    await connectDB();
    app.listen(PORT, () =>
      console.log(`App successfully started on port: ${PORT}`)
    );
  } catch (e) {
    console.log(e);
  }
};

start();
