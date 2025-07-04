const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.DB_URL);
    console.error("DB 연결 완료");
  } catch (err) {
    console.error(err);
  }
};

module.exports = connectDB;
