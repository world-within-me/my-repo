import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

const connect= async()=>{
    await mongoose.connect(process.env.MONGO_URI)
    console.log("connected to db")
}

export default connect;
