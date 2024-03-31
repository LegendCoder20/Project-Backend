const mongoose = require("mongoose");
const password = encodeURIComponent("aryan@2002");
let MONGO_URI = `mongodb+srv://aryan_m:${password}@cluster0.xd3d8lw.mongodb.net/mernapp?retryWrites=true&w=majority`;

const dbConnect = async () => {
  mongoose.set("strictQuery", true);
  try {
    const conn = await mongoose.connect(MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(error);
    process.exit(10);
  }
};

module.exports = dbConnect;
