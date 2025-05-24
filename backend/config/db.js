import mongoose from "mongoose";


export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://project2nct:0862317600@cluster0.sasqxhr.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}