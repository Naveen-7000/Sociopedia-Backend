import mongoose from "mongoose";
export const connectWithDb = async () => {
  try {
    await mongoose.connect(`${process.env.DB}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    // User.insertOne(users);
    // Post.insertMany(posts);
    console.log('Connected to MongoDB!');
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};


