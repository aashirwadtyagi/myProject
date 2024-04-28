import express from 'express';
import cors  from 'cors'
import cookieParser from 'cookie-parser';

app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials: true
}));

//configurations
app.use(express.json({ limit: '50kb'}))//for form data
app.use(express.urlencoded({ extended: false, limit :'10kb' }))//for url data
//extended is used for added to add nested objects
app.use(express.static('public')) //public  folder will be served as static files
app.use(cookieParser())  


const app = express();

export { app }
