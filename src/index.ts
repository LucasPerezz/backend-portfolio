import express from 'express'
import mongoose from 'mongoose';
import skillRouter from './routes/skills.routes';
import projectRouter from './routes/projects.routes';

const app = express();
const PORT = 3000;



//middlewares
app.use(express.json());
app.use('/api/skills', skillRouter);
app.use('/api/projects', projectRouter);


app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
    
})


//Conexion a la base de datos
const mongoURI = 'mongodb+srv://portfolio:portfolio@portfolio.kni0vs6.mongodb.net/test';

mongoose.connect(mongoURI);
