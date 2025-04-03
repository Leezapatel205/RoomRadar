import express from "express"
import mongoose from "mongoose";
import cors from "cors";  
import userRouter from "./routes/user.router.js"
import authRoutes from "./routes/auth.router.js"
import listingRouter from "./routes/listing.router.js" 
import cookieParser from "cookie-parser";
import dotenv from "dotenv"
import path from 'path';
dotenv.config();

mongoose.connect(process.env.MONGO)
.then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.log(err);
  });

  const __dirname = path.resolve();
const app =express();
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.use(express.json());
app.use(cookieParser());


app.listen(5000, ()=>{
    console.log("server is running on port 5000");
}
);

app.use('/api/user', userRouter);
app.use('/api/auth',authRoutes);
app.use('/api/listing', listingRouter);



app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
})

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});