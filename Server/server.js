const express = require('express')
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://ethenbiju:RxHQocXs8btd0m3F@clustere.kukjt.mongodb.net/')
.then(()=>console.log('MongoDB connected'))
.catch((error)=>console.log(error));

const cookieParser = require('cookie-parser')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 5000 ;

app.use(
    cors({
        origin: 'https://localhost:5173',
        methods:['GET','POST','DELETE','PUT'],
        allowedHeaders :[
            "Content-Type",
            "Authorization",
            'Cache-Control',
            'Expires',
            'Pragma'
        ],
        credentials:true
    })
);

app.use(cookieParser);
app.use(express.json);

app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`))