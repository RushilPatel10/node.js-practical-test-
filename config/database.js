const mongoose = require("mongoose");

const database = async () => {
   try {
      await mongoose.connect("mongodb+srv://patelrushil1510:5y2BuVIuvIFtiltf@cluster0.oajgzuc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
      console.log("Database connected..!")
   } catch (error) {
      console.log(error);
   }
}
module.exports = database

// 5y2BuVIuvIFtiltf