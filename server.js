import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';

dotenv.config();

connectDB();

const app=express();

app.use(express.json());
app.use(morgan('dev'));

app.use('/api/auth',authRoutes);

app.get('/',(req,res)=>{
    res.send("<h1>Welcome to ecommerce-app</h1>")
});

const PORT= process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log(`Server is running on ${process.env.DEV_MODE} mode port ${PORT}`.bgCyan.
    white.bold
    );
});