const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectToDb = require("./db/db");
const userRouter = require("./routes/user.routes");
const captainRoutes = require("./routes/captain.routes");
const cookieParser = require("cookie-parser");
const app = express();

dotenv.config();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser())


connectToDb();

app.use("/user",userRouter);
app.use("/captain",captainRoutes);
app.get('/',(req,res)=>{
    res.send("hello world");
})
module.exports = app;