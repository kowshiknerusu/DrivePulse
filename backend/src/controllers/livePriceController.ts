import type {Request,Response} from 'express';
import {Car} from '../models/Car';
export async function liveStatus(_req:Request,res:Response){res.json({mode:'simulated',intervalSeconds:45,connected:Car.db.readyState===1,notice:'Live price movements are simulated for this portfolio demo.'});}
