import express, { json } from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes";



const app = express();



// MiddleWare
app.use(express.json());
app.use("/api", router);

mongoose.connect("mongodb+srv://Uttaminaround:u6JnNI3Vqglf832L@socialmedia.bgdojvw.mongodb.net/?retryWrites=true&w=majority").then(() => {
    app.listen(5000, () => {
        console.log("Connected to DataBase and Listening to the PORT");
    });

}).catch((err) => {
    console.log(err);
});




