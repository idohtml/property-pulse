import mongoose from "mongoose";

let connected = false;

const db = async () => {
  mongoose.set("strictQuery", true);

  if (connected) console.log("Database connected");

  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    connected = true;
  } catch (error) {
    console.log(error);
  }
};

export default db;
