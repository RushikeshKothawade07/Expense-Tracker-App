const mongoose = require("mongoose");
const db = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGOURL);
    console.log("DB Connected!!");
  } catch (err) {
    console.log("DB connection error");
    console.log(err);
  }
};
module.exports={db};
