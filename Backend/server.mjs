import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import task from "./routes/taskRouter"
console.log(task);

const app = express();

app.use(express.json());

// Data Base connection
mongoose.connect(process.env.MONGO_URI)
    .then(()=> {
        app.listen(process.env.PORT, ()=> {
            console.log('Listening to Port 5801 is successful and DB connected');
        })
    })
    .catch((error)=> {
        console.log(error);
    })

app.use((req, res, next)=> {
    console.log("path "+ req.path +" method "+req.method);
    next();
})

// const taskRoutes = task;
// app.use("/api/tasks", taskRoutes);


// app.get('/', (req, res)=> {
//     res.send('Hello Ravi ')
// })