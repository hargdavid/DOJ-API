import mongoose from "mongoose";

export default function connectDB() {
  const url = process.env.DB_CONNECTION_STRING || "";

  try {
    mongoose.connect(url, {
      /* @ts-ignore next-row */
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  const dbConnection = mongoose.connection;
  dbConnection.once("open", (_) => {
    console.log(`Database connected: ${url}`);
  });

  dbConnection.on("error", (err) => {
    console.error(`connection error: ${err}`);
  });
  return;
}
