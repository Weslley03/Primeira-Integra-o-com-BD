import mongoose from "mongoose";

async function connectDatabase() {
  await mongoose
    .connect(
      "mongodb+srv://oweslley03:BancoMongo03Weslley@cluster0.b3uma5z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    )
}

export default connectDatabase
