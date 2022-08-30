require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const get = require("./routers/Get/get");
const post = require("./routers/Post/post");
const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use("/api", post);

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
