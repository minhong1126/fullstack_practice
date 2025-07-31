const express = require("express");
const connectDB = require("./config/connectDB");
const app = express();
const PORT = 5000;

connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}`);
});

app.use("/user", require("./routes/userRoute"));
app.use("/team", require("./routes/teamRoute"));
app.use("/member", require("./routes/memberRoute"));
