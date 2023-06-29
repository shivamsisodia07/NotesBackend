const express = require('express');
const dotenv = require('dotenv');
var cors=require('cors');
var favicon = require('serve-favicon')
var path = require('path')
const app = express();
const connectDB = require("./config/db");
dotenv.config();
connectDB();
app.use(cors());
app.use(express.json());

const userRoutes = require("./routes/userRoutes");
const noteRoutes = require("./routes/noteRoutes");




// const notes = require('./data/notes');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');

const PORT =  process.env.PORT||5000;


app.get("/",(req,res)=>{
    res.status(200).json({
        uptime: process.uptime(),
        message:"Welcome to NotesApp API",
        timestamp: Date.now(),
    });
})

// app.get('/api/notes', (req, res) => {
//     res.json(notes);
// })

// app.get("/api/notes/:id", (req, res) => {
//     const note = notes.find((no) => no._id === req.params.id)
//     res.send(note);
// });

app.use('/api/users', userRoutes);
app.use("/api/notes", noteRoutes);
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, (err)=>{
    if(err) throw err;
    console.log(`Server running on port ${PORT}`);
});