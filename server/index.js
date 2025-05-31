import express from 'express';
import cors from 'cors';
import 'dotenv/config'

const app = express();

app.use(cors({origin:"http://localhost:5173", Credential:true}));
app.use(express.json());

const port = process.env.PORT

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})