const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const app=express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;
connectDB();



app.use('/user',require('./routes/user'));
app.use('/auth',require('./routes/auth'));
app.use('/todo',require('./routes/todo'));

if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }

app.listen(PORT,()=>console.log(`Server started at port ${PORT}`));
