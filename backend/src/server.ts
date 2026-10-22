import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import {createServer} from 'http';
import {connectDatabase} from './config/db';
import {attachSockets} from './services/socketService';
import {apiRoutes} from './routes/api';
const app=express(),server=createServer(app),port=Number(process.env.PORT)||4000,origin=process.env.CLIENT_ORIGIN||'http://localhost:5173';
app.use(helmet());app.use(cors({origin}));app.use(express.json({limit:'32kb'}));
const io=attachSockets(server,origin);app.get('/health',(_req,res)=>res.json({ok:true,service:'drivepulse-api'}));app.use('/api/v1',apiRoutes(io));
app.use((err:unknown,_req:express.Request,res:express.Response,_next:express.NextFunction)=>{console.error(err);res.status(500).json({error:'Unexpected server error'});});
async function start(){const uri=process.env.MONGODB_URI;if(uri){try{await connectDatabase(uri);}catch(error){console.error('MongoDB connection failed; API will remain available but catalog requests need MongoDB.',error);}}else console.warn('MONGODB_URI not set; add it to backend/.env to enable the catalog.');server.listen(port,()=>console.log(`DrivePulse API listening on http://localhost:${port}`));}
void start();
