require("dotenv").config();

const express = require("express");

const PORT = process.env.PORT || 8080;

const app = express();

const start = () => {
  try {
    app.listen(PORT, () =>
      console.log(`App successfully started on port: ${PORT}`)
    );
  } catch (e) {
    console.log(e);
  }
};

start();
