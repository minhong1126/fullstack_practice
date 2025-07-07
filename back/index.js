const express = require("express");
const connectDB = require("./config/connectDB");
const app = express();
const PORT = 5000;

connectDB();
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}`);
});

app.use("/user", require("./routes/userRoute"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
