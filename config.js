const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    const connection = await mongoose.connect(
      "mongodb+srv://eskndrytbarek323:XE9cDjAYQ5xhPQlM@bookstore.argat.mongodb.net/?retryWrites=true&w=majority&appName=bookstore"
    );
    console.log("Database Connected");
  } catch (error) {
    console.error(error);
  }
};
module.exports = connectDatabase;



