const express = require('express');
const connectDB = require('./config/db');
const app=express();

app.use(express.json());

const PORT = process.env.PORT || 5000;
connectDB();

app.use('/user',require('./routes/user'));

app.listen(PORT,()=>console.log(`Server started at port ${PORT}`));
