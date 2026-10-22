import type {Server as HttpServer} from 'http';
import {Server} from 'socket.io';
import {Car} from '../models/Car';

export function attachSockets(server:HttpServer,origin:string) {
  const io=new Server(server,{cors:{origin,methods:['GET','POST']}});
  const timer=setInterval(async()=>{
    try {
      const cars=await Car.find().select('_id make model basePrice topPrice').lean();
      if(!cars.length)return;
      const car=cars[Math.floor(Math.random()*cars.length)];
      const shift=(Math.random()*2-1)*0.006;
      await Car.updateOne({_id:car._id},{$inc:{basePrice:Math.round(car.basePrice*shift),topPrice:Math.round(car.topPrice*shift)}});
      io.emit('price_update',{carId:String(car._id),make:car.make,model:car.model,changePct:Number((shift*100).toFixed(2)),occurredAt:new Date().toISOString()});
    } catch(error) { console.error('Simulated price update failed',error); }
  },45000);
  io.on('connection',socket=>{socket.emit('live_status',{connected:true,at:new Date().toISOString()});});
  server.on('close',()=>clearInterval(timer));
  return io;
}
