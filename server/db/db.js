import mongoose from "mongoose";

const connectDB = () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("MongoDB Connection Successfully!"))
    .catch((err) => {
      console.log(err);
    });
};

export default connectDB;
